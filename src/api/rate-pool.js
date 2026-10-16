import { reportError } from "../core/errors.js";

// ═══ Cross-page request gate (leader-elected) ═══
// Stage 3 of the cross-page API work. Stages 1-2 moved the response cache
// and the 429 backoff into GM storage, but the pacing queue itself stayed
// per-page (a promise chain cannot outlive its document): N open tabs still
// dispatched N independent ~1 req/s streams against the one OAuth token the
// whole browser shares. This module collapses those queues into ONE:
//
//   * navigator.locks (Web Locks API) elects exactly one leader page for the
//     whole origin. The lock is held for the realm's lifetime and is
//     released by the browser itself on navigation/close - no heartbeats,
//     no split-brain election timers.
//   * Followers send their requests to the leader over a dedicated
//     BroadcastChannel; the leader executes them through its own
//     _osuApiGate (1.05s spacing, Retry-After, exponential backoff) and
//     posts the response back.
//   * Every failure mode degrades to today's behavior: no Web Locks (older
//     Safari/Firefox), no BroadcastChannel, leader death mid-request, or an
//     RPC timeout all fall through to dispatching locally. Worst case is a
//     brief double dispatch - never a lost or stuck request.
//
// Deliberately NOT covered here: token refresh. The leader's gate serializes
// whatever it executes, and the cross-tab token races that concurrent
// refresh could cause are unchanged by queueing; the refresh grant is
// deduplicated per-page already (osu-api.js _osuApiRefreshInFlight).

const POOL_CHANNEL_NAME = "osu-local-favorites-api-pool";
const POOL_LOCK_NAME = "osu-lof-api-leader";
// A leader that navigated away mid-request never replies; the follower
// re-dispatches locally after this. Generous on purpose: the leader's gate
// may legitimately be waiting out a Retry-After of many seconds.
const RPC_TIMEOUT_MS = 30000;
const RPC_TIMEOUT_RECENT_429_MS = 65000;
// Short fuse for a follower that has not yet heard any leader. It must
// exceed one full gate slot (the pacing gap plus fetch latency, ~1.5-2s),
// or a live-but-busy leader - exactly the case under load - would be
// wrongly declared dead and the follower would re-dispatch locally,
// duplicating the request the leader is already pacing.
const RPC_PROBE_MS = 3000;

let _channel = null;
let _isLeader = false;
// request id -> { resolve, reject, timer } for follower-side calls in flight.
const _pending = new Map();
// Only one leader-side executor is needed; see registerLeaderExecutor().
let _leaderExecute = null;
let _electionStarted = false;

function channel() {
  if (_channel) return _channel;
  if (typeof BroadcastChannel !== "function") return null;
  try {
    _channel = new BroadcastChannel(POOL_CHANNEL_NAME);
    if (typeof _channel.unref === "function") _channel.unref(); // Node: don't hold the process open
  } catch (e) {
    _channel = null;
  }
  return _channel;
}

function _onPoolMessage(e) {
  const msg = e && e.data;
  if (!msg || typeof msg !== "object") return;
  if (msg.kind === "req") {
    // Follower request: only the leader answers. A stale page that lost the
    // lock but hasn't noticed simply forwards to the leader-side executor,
    // which is only registered while actually holding the lock.
    if (!_isLeader || !_leaderExecute) return;
    const reply = (payload) => {
      try {
        _channel.postMessage({
          kind: "res",
          id: msg.id,
          to: msg.from,
          payload,
        });
      } catch (e2) { /* channel died - follower times out and retries locally */ }
    };
    Promise.resolve()
      .then(() => _leaderExecute(msg.path))
      .then(
        (data) => reply({ ok: true, data }),
        (err) => reply({
          ok: false,
          error: String((err && err.message) || err),
          rateLimited: !!(err && err.rateLimited),
        }),
      );
    return;
  }
  if (msg.kind === "res") {
    const entry = _pending.get(msg.id);
    if (!entry || msg.to !== _pageId) return; // not ours
    clearTimeout(entry.timer);
    _pending.delete(msg.id);
    if (msg.payload && msg.payload.ok) entry.resolve(msg.payload.data);
    else {
      const err = new Error((msg.payload && msg.payload.error) || "api pool rpc failed");
      if (msg.payload && msg.payload.rateLimited) err.rateLimited = true;
      entry.reject(err);
    }
    return;
  }
  if (msg.kind === "hello") {
    // A leader announced itself. Followers stop dispatching locally and
    // start routing through it. This is a routing hint only - correctness
    // comes from the Web Lock - so a forged or stale hello costs at most
    // one RPC timeout before this page falls back to local dispatch.
    if (!_isLeader && msg.from !== _pageId) _leaderSeenId = msg.from;
  }
}

// Stable per-page id so replies are routed to exactly the page that asked
// and hello announcements can be attributed.
const _pageId = Math.random().toString(36).slice(2) + Date.now().toString(36);
let _leaderSeenId = "";

// ── Election ────────────────────────────────────────────────────────
// Web Locks queues blocked requests: when the current leader navigates
// away, the browser hands the lock to the next waiter, which becomes the
// new leader. If the lock request is granted with ifAvailable and it is
// already held, this page stays a follower and never retries the election
// until it itself hears the channel is leaderless again - but simpler and
// just as correct: try once per page load, and again whenever an RPC
// timeout suggests the leader vanished.
function tryBecomeLeader(execute) {
  if (_electionStarted) return;
  _electionStarted = true;
  const ch = channel();
  if (!ch) return;
  if (typeof navigator === "undefined" || !navigator.locks || typeof navigator.locks.request !== "function") return;
  ch.addEventListener("message", _onPoolMessage);
  ch._lofListens = true; // requestViaPool() must not attach a second copy
  try {
    navigator.locks.request(
      POOL_LOCK_NAME,
      { ifAvailable: true },
      (lock) => {
        if (!lock) return; // someone else leads; stay a follower
        _isLeader = true;
        _leaderSeenId = _pageId;
        _leaderExecute = execute;
        // The callback's returned promise is what actually holds the lock;
        // never resolving keeps it until the realm dies (navigation, tab
        // close), at which point the browser auto-releases it.
        return new Promise(() => { });
      },
    ).catch(() => { /* lock manager hiccup: stay a follower, local dispatch still works */ });
  } catch (e) { /* same */ }
}

// A follower that gave up on the leader may retry the election: the old
// leader's lock might have been released by now (its page navigated away).
function retryElection(execute) {
  if (_isLeader || !channel()) return;
  const ch = channel();
  const previousLeader = _leaderSeenId;
  // Re-arm the once-per-page election guard.
  _electionStarted = false;
  // If some other page already took over, its reply wins; ours is harmless
  // because ifAvailable makes us a no-op follower when the lock is held.
  _leaderSeenId = "";
  tryBecomeLeader(execute);
  _leaderSeenId = _leaderSeenId || previousLeader;
}

// ── Follower-side call ─────────────────────────────────────────────
// Resolves with the response data when another page handled the request,
// or null when the caller must dispatch locally. Never rejects: every
// failure is "do it yourself" so osuApiGet() can fall through without
// nested catch games. A rateLimited RPC error is re-thrown to the caller
// as { rateLimited: true } so the existing retry path can wait it out
// instead of double-dispatching into a window the server just rejected.
export function requestViaPool(path, execute, hint) {
  if (_isLeader) return Promise.resolve(null); // leaders serve themselves
  const ch = channel();
  if (!ch) return Promise.resolve(null);
  if (typeof _channel.addEventListener === "function" && !_channel._lofListens) {
    _channel._lofListens = true;
    _channel.addEventListener("message", _onPoolMessage);
  }
  // A page that just loaded has not heard the leader's last
  // announceLeadership() yet. Rather than dispatch locally until whenever
  // the leader next completes a request (idle leaders announce nothing),
  // probe: post the request anyway with a short fuse. A live leader
  // answers within a few ms; if nothing comes back, this page pays the
  // sub-second probe cost once and dispatches locally - and learns the
  // leader from the first announce that does arrive.
  const probing = !_leaderSeenId;
  const timeoutMs = probing
    ? RPC_PROBE_MS
    : ((hint && hint.rateLimited) ? RPC_TIMEOUT_RECENT_429_MS : RPC_TIMEOUT_MS);
  const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      if (_pending.has(id)) {
        _pending.delete(id);
        // Leader died or hung: let this page dispatch locally, and try to
        // take the now-vacant leadership.
        retryElection(execute);
        resolve(null);
      }
    }, timeoutMs);
    _pending.set(id, {
      resolve: (data) => resolve(data),
      reject: (err) => resolve(err && err.rateLimited ? err : null),
      timer,
    });
    try {
      ch.postMessage({ kind: "req", id, from: _pageId, path });
    } catch (e) {
      clearTimeout(timer);
      _pending.delete(id);
      resolve(null);
    }
  });
}

// Called by osu-api.js on every gate completion: tells followers who the
// leader is. (Web Locks has no "who holds it" API, so the leader announces
// itself; the announcement is not trusted for correctness - only the lock
// is - it just decides whether a follower tries RPC or dispatches locally.)
export function announceLeadership() {
  const ch = channel();
  if (!_isLeader || !ch) return;
  try {
    ch.postMessage({ kind: "hello", from: _pageId });
  } catch (e) { /* followers will dispatch locally until the next hello */ }
}

// ── osu-api.js integration seam ─────────────────────────────────────
// execute(path) must run the gated, cached, token-managed request in THIS
// page and return its data / throw its errors. registerPool(execute)
// wires the whole election; it is safe to call on every osu! page load.
export function registerPool(execute) {
  tryBecomeLeader(execute);
  // Followers learn the current leader from its next announceLeadership()
  // (there is deliberately no discovery handshake). Until then they
  // dispatch locally - correct, just uncoordinated for a few seconds.
}
