import { GH_AUTO_BACKUP_KEY, GH_GIST_ID_KEY, GH_GIST_URL_KEY, GH_LAST_SYNC_KEY, GH_PRIVACY_KEY, GH_TOKEN_KEY, OSU_API_CLIENT_ID_KEY, OSU_API_CLIENT_SECRET_KEY, OSU_API_REDIRECT_URI, OSU_API_STATE_KEY, OSU_API_TOKEN_KEY, OSU_API_USERNAME_KEY, ghAdoptGist, ghCreateGist, ghGistVisibility, ghUpdateGist } from "./gist-backup.js";
import { reportError } from "../core/errors.js";
import { GM_getValue, GM_setValue, gmStorageIsNative } from "../core/gm-shim.js";
import { showOsuFavToast } from "../core/toast.js";
import { getFavorites } from "../data/storage.js";
import { normalizeBeatmapset } from "../data/beatmap-extraction.js";

// ═══ osu! API v2 - OAuth2 authorization-code flow ═══
// Same mechanism standard osu! extensions use: the user creates an OAuth
// application on their osu! account settings (new OAuth app), enters its
// Client ID + Client Secret in LOF's settings, and registers exactly
// https://osu.ppy.sh/home as the callback URL. The script
// then drives the full flow itself:
//   1. osuApiStartAuth()      → navigates to /oauth/authorize with a random state
//   2. osu! redirects back to /home?code=…&state=…
//   3. osuApiHandleOAuthCallback() (runs at document-start) exchanges the
//      code at /oauth/token, stores access+refresh tokens and wipes the
//      query string so the user never sees osu!'s 404 page.
//   4. osuApiGetToken() transparently refreshes via refresh_token grant.
//
// All token traffic is same-origin (https://osu.ppy.sh → itself), so plain
// fetch() works - no GM_xmlhttpRequest / CORS involved.

export function osuApiIsConfigured() {
  return !!(GM_getValue(OSU_API_CLIENT_ID_KEY, "") && GM_getValue(OSU_API_CLIENT_SECRET_KEY, ""));
}

export function osuApiIsConnected() {
  return !!GM_getValue(OSU_API_TOKEN_KEY, null);
}

export function osuApiStartAuth() {
  if (!osuApiIsConfigured()) {
    showOsuFavToast("Enter your Client ID and Secret first");
    return;
  }
  // Random state guards against CSRF on the callback.
  const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
  GM_setValue(OSU_API_STATE_KEY, state);
  const params = new URLSearchParams({
    client_id: GM_getValue(OSU_API_CLIENT_ID_KEY, ""),
    redirect_uri: OSU_API_REDIRECT_URI,
    response_type: "code",
    scope: "public identify",
    state,
  });
  // osu! answers /oauth/authorize with 401 (rendered as a plain browser
  // error, no osu! page) when the Application Callback URL registered for
  // this Client ID does not exactly match our redirect_uri. Probe the exact
  // authorize URL first and route the user back with an explanation instead
  // of leaving them on an opaque error page.
  const authorizeUrl = "https://osu.ppy.sh/oauth/authorize?" + params.toString();
  fetch(authorizeUrl, { method: "GET", credentials: "include" })
    .then((r) => {
      if (r.ok || r.redirected || r.status === 302) {
        location.href = authorizeUrl;
        return;
      }
      reportError(
        "osu! API connect",
        new Error(
          "Authorization failed (HTTP " + r.status + "). The Application Callback URL on your " +
          "osu! OAuth application must be exactly " + OSU_API_REDIRECT_URI +
          " - check it at https://osu.ppy.sh/home/account/edit#oauth (OAuth applications)",
        ),
        { status: r.status },
      );
    })
    .catch(() => {
      // Pre-flight itself failed (offline etc.) - still attempt the redirect,
      // the browser will surface its own error.
      location.href = authorizeUrl;
    });
}

function osuApiTokenRequest(body) {
  // osu! documents this endpoint as application/x-www-form-urlencoded. A
  // JSON body can make the authorization-code exchange fail even after the
  // user successfully approves the app.
  const form = new URLSearchParams();
  const credentials = Object.assign(
    {
      client_id: Number(GM_getValue(OSU_API_CLIENT_ID_KEY, "")) || GM_getValue(OSU_API_CLIENT_ID_KEY, ""),
      client_secret: GM_getValue(OSU_API_CLIENT_SECRET_KEY, ""),
    },
    body,
  );
  Object.entries(credentials).forEach(([key, value]) => form.set(key, String(value)));
  return fetch("https://osu.ppy.sh/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: form.toString(),
  }).then(async (r) => {
    const data = await r.json().catch(() => ({}));
    if (!r.ok || !data.access_token) {
      throw Object.assign(
        new Error(data.error_description || data.error || "token request failed (HTTP " + r.status + ")"),
        { status: r.status, statusText: r.statusText },
      );
    }
    return data;
  });
}

function osuApiSaveToken(data) {
  GM_setValue(OSU_API_TOKEN_KEY, {
    access: data.access_token,
    refresh: data.refresh_token || "",
    expires_at: Date.now() + (data.expires_in || 86400) * 1000 - 60000, // refresh 1 min early
  });
}

// Returns a Promise<string> with a valid access token. Refreshes (and
// retries once after a refresh) automatically. Rejects when not configured
// or when both access and refresh tokens are dead.
let _osuApiRefreshInFlight = null;
function osuApiGetToken() {
  if (!osuApiIsConfigured()) return Promise.reject(new Error("osu! API not configured"));
  const tok = GM_getValue(OSU_API_TOKEN_KEY, null);
  if (!tok) return Promise.reject(new Error("osu! API not connected"));
  if (tok.access && Date.now() < tok.expires_at) return Promise.resolve(tok.access);
  if (!tok.refresh) return Promise.reject(new Error("osu! API session expired - reconnect in settings"));
  // Deduplicate concurrent refreshes
  if (!_osuApiRefreshInFlight) {
    // Per osu! docs: the refresh grant is also form-urlencoded and re-states
    // the original scope; omitting scope would also be accepted (existing
    // scopes are reused), but being explicit avoids any manager-side
    // normalization surprises.
    _osuApiRefreshInFlight = osuApiTokenRequest({
      grant_type: "refresh_token",
      refresh_token: tok.refresh,
      scope: "public identify",
    })
      .then((data) => {
        osuApiSaveToken(data);
        return data.access_token;
      })
      .catch((err) => {
        // Refresh dead → force a clean reconnect
        GM_setValue(OSU_API_TOKEN_KEY, null);
        throw err;
      })
      .finally(() => { _osuApiRefreshInFlight = null; });
  }
  return _osuApiRefreshInFlight;
}

// ── Rate limiting / queuing (per https://osu.ppy.sh/docs/index.html) ──
// osu! asks clients to stay under ~60 requests/minute (≈1/sec), honor
// Retry-After on HTTP 429, use exponential backoff, and cache responses.
// All of that is enforced centrally here so every osuApiGet() caller is
// compliant regardless of where the call originates.
//
// Cross-page state (Stage 1 of the cross-page API work): the response
// cache and the 429 backoff now live in GM storage, which every osu.ppy.sh
// page shares, so tab B hits tab A's cached responses and tab A's 429s
// immediately throttle tab B. The queue itself (_osuApiQueueTail) stays
// per-realm - a JS promise chain cannot outlive its document - until the
// leader-election stage; multi-tab pacing is therefore additive, but the
// shared cache removes the duplicate *requests* the duplicate queues used
// to issue. The localStorage GM fallback is deliberately excluded from
// shared-cache writes: it re-serializes the whole store per write, the
// favorites payload already dominates that budget, and those environments
// are rare.
const OSU_API_MIN_GAP_MS = 1050;        // ≥1s between requests
let _osuApiQueueTail = Promise.resolve(); // serializes request pacing (per page)
let _osuApiRetryAfterUntil = 0;         // absolute ts while server says wait (this page)
let _osuApiBackoffMs = 0;               // grows exponentially on repeat 429s (this page)
const OSU_API_CACHE_KEY = "osu_api_response_cache"; // { v:1, entries:{ path:{d,c} } }
const OSU_API_BACKOFF_KEY = "osu_api_rate_limit_state"; // { until, backoff }
const OSU_API_CACHE_SHARED_MAX = 400;   // entries persisted in GM storage
const OSU_API_CACHE_PERSIST_MAX_BYTES = 1.5 * 1024 * 1024; // manager storage safety valve

// In-memory mirror of the shared cache (read-through; no per-request GM read).
// One entry per path: { d: data, c: cachedAt }. Capacity bound stays in
// memory only; the store carries the newest shared entries up to its cap.
const _osuApiCache = new Map();         // path → { d, c }
const OSU_API_CACHE_MAX = 500;
// Pre-encoded copies of the entries destined for GM storage (path →
// { j: "<json string>", c: ts }). Written once per response, not once per
// flush, so the throttled flush never re-serializes payloads.
const _osuApiEncoded = new Map();
// Throttle for persisting the shared cache: entries land in GM storage at
// most once per second (flush coalesces everything since the last write).
let _osuApiCacheFlushTimer = null;

// ── Shared 429 backoff state (read/write helpers) ──
function _osuApiLoadBackoffState() {
  try {
    const s = GM_getValue(OSU_API_BACKOFF_KEY, null);
    if (!s || typeof s !== "object") return { until: 0, backoff: 0 };
    return { until: Number(s.until) || 0, backoff: Number(s.backoff) || 0 };
  } catch (e) {
    return { until: 0, backoff: 0 };
  }
}

// Writes are timestamp-compared so a late write from a tab that saw an
// OLDER rate-limit state cannot roll a newer one back (GM storage has no
// CAS). A clear (until=0) always passes: callers only issue clears after
// observing that the shared window has already expired, and a clear that
// races a fresh 429 from another page costs at most one extra 429 there.
function _osuApiSaveBackoffState(until, backoff) {
  try {
    const prev = _osuApiLoadBackoffState();
    if (until > 0 && prev.until > until) return; // stale writer - keep the newer state
    GM_setValue(OSU_API_BACKOFF_KEY, { until, backoff, ts: Date.now() });
  } catch (e) { /* pacing degrades to local-only, which is fine */ }
}

// Flush anything still pending when the page goes away - the 1s throttle
// would otherwise lose the last second's worth of responses on navigation
// or tab close, which is exactly the moment before the next page starts
// asking for them. Function/const declarations above are hoisted enough
// for this handler: it only runs after the module has fully evaluated.
if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("pagehide", () => {
    if (_osuApiCacheFlushTimer) _osuApiFlushSharedCache();
  });
}

function _osuApiDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// Serializes every API call through one queue with ≥OSU_API_MIN_GAP_MS
// spacing, plus any server-mandated or backoff wait before dispatching.
// The wait is computed from BOTH this page's own backoff vars and the
// shared GM state, so another page's 429 throttles this one immediately
// (see the Stage 1 note above).
function _osuApiGate(fn) {
  const run = () => {
    const now = Date.now();
    const shared = _osuApiLoadBackoffState();
    const wait = Math.max(
      _osuApiRetryAfterUntil - now,
      shared.until - now,
      _osuApiBackoffMs ? (_osuApiRetryAfterUntil || now) + _osuApiBackoffMs - now : 0,
    );
    return (wait > 0 ? _osuApiDelay(wait) : Promise.resolve()).then(fn);
  };
  const result = _osuApiQueueTail.then(run, run);
  _osuApiQueueTail = result.catch(() => { }).then(() => _osuApiDelay(OSU_API_MIN_GAP_MS));
  return result;
}

// Exported for the cross-page smoke test; production callers go through
// osuApiFetchBeatmapset and the enrichment paths.
export function osuApiGet(path) {
  const cleanPath = path.replace(/^\//, "");
  // Docs good-practice #4: cache retrieved data and reuse it. Memory first,
  // then the shared GM store (see _osuApiCacheGet) - so a response another
  // page already fetched is served locally with no request at all.
  const cached = _osuApiCacheGet(cleanPath);
  if (cached !== undefined) return Promise.resolve(cached);

  const attempt = (isRetry) =>
    osuApiGetToken().then((token) =>
      fetch("https://osu.ppy.sh/api/v2/" + cleanPath, {
        headers: { Authorization: "Bearer " + token, Accept: "application/json" },
      }).then(async (r) => {
        if (r.status === 429) {
          // Honor the server's Retry-After, then apply exponential backoff
          // for any further 429s (docs good-practice #3). Persisted to GM
          // storage so every other osu.ppy.sh page throttles too.
          const raHeader = parseFloat(r.headers.get("Retry-After") || "0");
          if (!isRetry && _osuApiBackoffMs === 0) _osuApiBackoffMs = 2000;
          else _osuApiBackoffMs = Math.min(_osuApiBackoffMs * 2 || 2000, 60000);
          _osuApiRetryAfterUntil = Date.now() + (Number.isFinite(raHeader) && raHeader > 0 ? raHeader * 1000 : _osuApiBackoffMs);
          _osuApiSaveBackoffState(_osuApiRetryAfterUntil, _osuApiBackoffMs);
          throw Object.assign(new Error("rate limited by osu! API"), { rateLimited: true });
        }
        _osuApiBackoffMs = 0; // successful window - reset backoff
        // A success after the shared backoff window has expired also clears
        // it for every other page. The until>0 guard means we only clear a
        // window that has already lapsed - an ACTIVE Retry-After from
        // another page is never erased by this page's success.
        const sharedNow = _osuApiLoadBackoffState();
        if (sharedNow.until > 0 && sharedNow.until <= Date.now()) {
          _osuApiSaveBackoffState(0, 0);
        }
        if (r.status === 401 && !isRetry) {
          // Access token died early (revoked/password change): drop cached
          // token so the next osuApiGetToken() refreshes, then retry once.
          GM_setValue(OSU_API_TOKEN_KEY, null);
          return attempt(true);
        }
        if (!r.ok) throw Object.assign(
          new Error("osu! API HTTP " + r.status + " for " + cleanPath),
          { status: r.status, statusText: r.statusText },
        );
        return r.json();
      }),
    );

  return _osuApiGate(() => attempt(false)).catch((err) => {
    // One transparent retry after a rate-limit wait has elapsed.
    if (err && err.rateLimited) {
      return _osuApiGate(() => attempt(true)).then((data) => {
        _osuApiCacheSet(cleanPath, data);
        return data;
      });
    }
    throw err;
  }).then((data) => {
    _osuApiCacheSet(cleanPath, data);
    return data;
  }).catch((err) => {
    // Last-resort: a network failure after a cache miss may still find a
    // STALE copy in the shared store - a previous page fetched this path in
    // an earlier session and the entry outlived its in-memory caches. For
    // read-only lookups (beatmapset metadata, user profiles) stale data
    // beats a hard error; the next successful pass overwrites it.
    const stale = _osuApiStaleStoreEntry(cleanPath);
    if (stale !== undefined) {
      _osuApiCacheSet(cleanPath, stale);
      return stale;
    }
    throw err;
  });
}

// A past-TTL copy straight from the shared store, bypassing freshness
// entirely. Used only by the osuApiGet failure path: stale-but-plausible
// data beats an error for read-only lookups.
function _osuApiStaleStoreEntry(path) {
  const store = _osuApiReadStore();
  const entry = store ? store[path] : null;
  if (!entry || typeof entry.j !== "string") return undefined;
  try {
    return JSON.parse(entry.j);
  } catch (e) {
    return undefined;
  }
}

function _osuApiCacheSet(path, data) {
  if (!data || typeof data !== "object") return;
  const cachedAt = Date.now();
  if (_osuApiCache.size >= OSU_API_CACHE_MAX) {
    // Evict oldest inserted entry
    _osuApiCache.delete(_osuApiCache.keys().next().value);
  }
  _osuApiCache.set(path, { d: data, c: cachedAt });

  // Shared-cache side: encode once (the stringified payload is what GM
  // storage actually persists), then flush on a 1s throttle so a bulk run
  // costs one write per second instead of one per response. Encoded strings
  // are stored as strings, so flushes never re-serialize the whole store.
  if (!gmStorageIsNative()) return;
  try {
    _osuApiEncoded.set(path, { j: JSON.stringify(data), c: cachedAt });
    while (_osuApiEncoded.size > OSU_API_CACHE_SHARED_MAX) {
      // Drop the oldest-encoded entry; it remains in the in-memory cache.
      _osuApiEncoded.delete(_osuApiEncoded.keys().next().value);
    }
    if (!_osuApiCacheFlushTimer) {
      _osuApiCacheFlushTimer = setTimeout(_osuApiFlushSharedCache, 1000);
    }
  } catch (e) { /* unencodable response - memory-only caching for it */ }
}

// ── Shared response cache storage ──
// Store shape: { v:1, entries:{ path:{ j:"<json string>", c:ts } } }. Values
// are pre-encoded JSON strings on purpose: writes stay cheap (no whole-store
// re-serialization) and reads parse only the entry actually requested.
// Cross-tab coherence is intentionally best-effort: each page flushes its
// own view (last writer wins), so a concurrent page's brand-new entries can
// be dropped from the store until its next flush re-adds them. Losing cache
// entries is always benign - the worst case is one duplicate request.
let _osuApiStoreSnapshot = null; // { raw, at } - parsed store, short TTL
const OSU_API_STORE_SNAPSHOT_TTL_MS = 2000;

function _osuApiReadStore() {
  const now = Date.now();
  if (_osuApiStoreSnapshot && now - _osuApiStoreSnapshot.at < OSU_API_STORE_SNAPSHOT_TTL_MS) {
    return _osuApiStoreSnapshot.raw;
  }
  let raw = null;
  try {
    const v = GM_getValue(OSU_API_CACHE_KEY, null);
    if (v && typeof v === "object" && v.v === 1 && v.entries && typeof v.entries === "object") {
      raw = v.entries;
    }
  } catch (e) { raw = null; }
  _osuApiStoreSnapshot = { raw, at: now };
  return raw;
}

function _osuApiFlushSharedCache() {
  _osuApiCacheFlushTimer = null;
  if (!gmStorageIsNative()) return;
  try {
    // Merge with what this page last knew from the store so entries written
    // by another page (and not superseded locally) survive the rewrite.
    const entries = Object.assign({}, _osuApiReadStore() || {});
    let bytes = 2;
    for (const [p, e] of _osuApiEncoded) {
      const cost = e.j.length + p.length + 16;
      if (bytes + cost > OSU_API_CACHE_PERSIST_MAX_BYTES) break;
      entries[p] = e;
      bytes += cost;
    }
    GM_setValue(OSU_API_CACHE_KEY, { v: 1, entries });
    _osuApiStoreSnapshot = { raw: entries, at: Date.now() };
  } catch (e) { /* a failed shared write only costs cross-tab hits */ }
}

// Synchronous read path for osuApiGet: memory first, then one hydrate from
// the shared store (bounded by the snapshot TTL above, so a run of cache
// misses costs at most one GM read per 2s, not one per miss).
function _osuApiCacheGet(path) {
  const hit = _osuApiCache.get(path);
  if (hit) return hit.d;
  const store = _osuApiReadStore();
  const entry = store ? store[path] : null;
  if (!entry || typeof entry.j !== "string") return undefined;
  try {
    const d = JSON.parse(entry.j);
    if (_osuApiCache.size >= OSU_API_CACHE_MAX) {
      _osuApiCache.delete(_osuApiCache.keys().next().value);
    }
    _osuApiCache.set(path, { d, c: Number(entry.c) || 0 });
    return d;
  } catch (e) {
    return undefined; // corrupt entry - treat as a miss, network refetches
  }
}

export function osuApiDisconnect() {
  GM_setValue(OSU_API_TOKEN_KEY, null);
  GM_setValue(OSU_API_USERNAME_KEY, "");
  GM_setValue(OSU_API_STATE_KEY, "");
}

// Runs once at document-start. If we're back on osu.ppy.sh with ?code= &
// ?state= from our own authorize redirect, exchange the code before osu!
// renders its 404 page, then rewrite the URL clean.
export function osuApiHandleOAuthCallback() {
  try {
    const q = new URLSearchParams(location.search);
    const code = q.get("code");
    const state = q.get("state");
    const expected = GM_getValue(OSU_API_STATE_KEY, "");
    if (!code || !state || !expected || state !== expected) return;
    GM_setValue(OSU_API_STATE_KEY, "");
    history.replaceState(null, "", location.pathname); // hide ?code=… immediately
    osuApiTokenRequest({ grant_type: "authorization_code", code, redirect_uri: OSU_API_REDIRECT_URI })
      .then((data) => {
        osuApiSaveToken(data);
        GM_setValue(OSU_API_USERNAME_KEY, "");
        const notify = () => showOsuFavToast("osu! API connected");
        if (document.body) notify(); else document.addEventListener("DOMContentLoaded", notify);
      })
      .catch((err) => {
        const notify = () => reportError("osu! API connect", err);
        if (document.body) notify(); else document.addEventListener("DOMContentLoaded", notify);
      });
  } catch (e) { /* never break page load over this */ }
}

// Fetches a beatmapset through the API v2 and normalizes it into LOF's
// stored-favorite shape (identical fields to getBeatmapDataFromJSON - the
// website's embedded JSON is basically the same object as the API payload).
export function osuApiFetchBeatmapset(beatmapId) {
  return osuApiGet("/beatmapsets/" + beatmapId).then((bm) => {
    if (!bm || !bm.id) throw new Error("beatmapset not found");
    // The API does not always include the featured-artist marker. `null`
    // means "not supplied" so enrichment can preserve a known value from
    // the existing favorite instead of turning it off during re-enrichment.
    return normalizeBeatmapset(bm, null);
  });
}

// Creates the backup gist on first run, otherwise updates the linked one.
// Note: GitHub does not allow flipping a gist's public/private flag after
// creation, so a genuine privacy change (confirmed against the linked gist's
// real visibility in Settings) clears GH_GIST_ID_KEY and this naturally
// creates a fresh gist with the new visibility on the next call. Every
// create/update response is also used to keep the stored visibility setting
// equal to what the linked gist actually is.
export function performGistBackup() {
  const token = GM_getValue(GH_TOKEN_KEY, "");
  if (!token) return Promise.reject(new Error("Not connected to GitHub"));
  const favs = getFavorites();
  const gistId = GM_getValue(GH_GIST_ID_KEY, "");
  const isPublic = GM_getValue(GH_PRIVACY_KEY, "private") === "public";

  const createAndLink = () => ghCreateGist(token, favs, isPublic).then((gist) => {
      ghAdoptGist(gist);
      return gist;
    });

  const p = gistId
    ? ghUpdateGist(token, gistId, favs).then((gist) => {
      const visibility = ghGistVisibility(gist);
      if (visibility) GM_setValue(GH_PRIVACY_KEY, visibility);
      return gist;
    }).catch((err) => {
      // A user can delete the linked gist directly on GitHub. Treat its 404
      // as a stale local link, create a replacement, and relink it so both
      // manual and automatic backups recover on the same attempt.
      if (!err || err.status !== 404) throw err;
      GM_setValue(GH_GIST_ID_KEY, "");
      GM_setValue(GH_GIST_URL_KEY, "");
      return createAndLink();
    })
    : createAndLink();

  return p.then((gist) => {
    GM_setValue(GH_LAST_SYNC_KEY, Date.now());
    return gist;
  });
}

// Debounced auto-backup - call this after every favorites mutation.
// No-ops unless the user has connected GitHub and switched auto-update on.
// Debouncing avoids hammering the API when several maps are favorited in
// a row (e.g. the "Favorite all" bulk button).
let _autoBackupTimer = null;
export function scheduleAutoBackup() {
  const token = GM_getValue(GH_TOKEN_KEY, "");
  const auto = GM_getValue(GH_AUTO_BACKUP_KEY, false);
  if (!token || !auto) return;
  if (_autoBackupTimer) clearTimeout(_autoBackupTimer);
  _autoBackupTimer = setTimeout(() => {
    _autoBackupTimer = null;
    performGistBackup()
      .then(() => {
        showOsuFavToast("Gist backup updated");
        const statusEl = document.getElementById("osu-fav-footer-status");
        if (statusEl && typeof statusEl._refresh === "function") statusEl._refresh();
      })
      .catch((err) => reportError("Gist auto-backup", err));
  }, 4000);
}

