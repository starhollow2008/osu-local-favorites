// ═══ GM storage compatibility shim ═══
// Some userscript-manager environments (seen on certain mobile browsers)
// only partially implement the GM_ API: GM_getValue/GM_setValue exist as
// callable no-op stubs that log "GM_getValue is not supported" to the
// console instead of throwing - so a plain `typeof GM_getValue ===
// "function"` check passes even though nothing is actually being
// persisted, and every read comes back undefined regardless of the
// default value passed in. That alone was enough to make favoriting
// crash outright (toggleFavorite indexing into an undefined favorites
// object). We do a real write-then-read round trip once at startup and,
// if it doesn't survive, silently redirect all GM_getValue/GM_setValue
// calls to localStorage instead. Every one of this script's ~60 existing
// call sites keeps calling GM_getValue/GM_setValue exactly as before -
// shadowing the names here at the top of the IIFE is enough to redirect
// all of them, no need to touch each call site individually.
// Capture the manager's natives through globalThis, explicitly. In the
// bundled userscript every module shares one function scope, and this
// module declares its own GM_getValue/GM_setValue fallbacks - a plain
// `typeof GM_getValue` inside that shared scope resolves to THOSE
// (function declarations hoist to the top), so the probe below used to
// capture the shim's own GM_setValue and call it while `_gmStorageWorks`
// was still being initialized: TDZ ReferenceError, caught, probe returns
// false - every install silently ran on the localStorage fallback and
// native GM storage never actually worked. Going through globalThis only
// ever sees the real manager-injected API (or undefined), never the shim's
// own declarations, and stays correct in Node ESM too, where the named
// exports shadow a bare lookup the same way.
const _nativeGM_getValue = typeof globalThis.GM_getValue === "function" ? globalThis.GM_getValue : null;
const _nativeGM_setValue = typeof globalThis.GM_setValue === "function" ? globalThis.GM_setValue : null;
export const _GM_FALLBACK_LS_KEY = "__osu_local_favorites_gm_fallback__";
// Cross-tab notification channel used when native GM storage works but the
// userscript manager does not expose a working GM_addValueChangeListener.
// Only the changed key is written here; the authoritative value remains in
// native GM storage. In fallback mode, GM_setValue already writes the shared
// localStorage object, so this extra signal is unnecessary.
export const _GM_CROSS_TAB_SYNC_KEY = "__osu_local_favorites_cross_tab_sync__";
export const _GM_CROSS_TAB_CHANNEL = "osu-local-favorites-cross-tab";

let _crossTabChannel = null;
try {
  if (typeof BroadcastChannel === "function") {
    _crossTabChannel = new BroadcastChannel(_GM_CROSS_TAB_CHANNEL);
    // Node exposes BroadcastChannel too; unref keeps the build checker from
    // waiting forever for this browser-only communication channel.
    if (typeof _crossTabChannel.unref === "function") _crossTabChannel.unref();
  }
} catch (e) {
  _crossTabChannel = null;
}

function _lsReadAll() {
  try {
    const raw = localStorage.getItem(_GM_FALLBACK_LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function _lsWriteAll(all) {
  try {
    localStorage.setItem(_GM_FALLBACK_LS_KEY, JSON.stringify(all));
  } catch (e) {
    // Nothing more we can do if localStorage is also unavailable/full.
  }
}

// In-memory write-through cache over the localStorage fallback.
// Without this, EVERY GM_getValue call re-serialized the entire store -
// with a large favorites library (500+) that meant multi-megabyte
// JSON.parse calls hundreds of times per panel render, causing the
// exponential slowdown / "Forced reflow" violations. Reads hit the cache;
// writes update the cache and persist asynchronously-ish (sync write,
// but only one stringify per mutation instead of read+parse+stringify).
let _lsCache = null; // null = not loaded yet

// A fallback-store write in another tab updates localStorage, but this tab's
// in-memory compatibility cache would otherwise keep returning the old object
// forever. In that mode the storage event is the authoritative invalidation
// signal; the data layer will separately notify the UI to re-render.
if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("storage", (e) => {
    if (e.key === _GM_FALLBACK_LS_KEY) _lsCache = null;
  });
}

function _lsCacheGet() {
  if (_lsCache === null) _lsCache = _lsReadAll();
  return _lsCache;
}

const _gmStorageWorks = (() => {
  if (!_nativeGM_getValue || !_nativeGM_setValue) return false;
  try {
    const probeKey = "__osu_local_favorites_probe__";
    const probeValue = "ok-" + Date.now();
    _nativeGM_setValue(probeKey, probeValue);
    return _nativeGM_getValue(probeKey, null) === probeValue;
  } catch (e) {
    return false;
  }
})();

// True when GM storage is the real userscript-manager store: asynchronous,
// chunked, and cheap to write. False in the localStorage fallback, where
// every write re-serializes the entire store synchronously - callers use
// this to skip high-frequency shared writes there (the favorites payload
// already dominates that budget).
export function gmStorageIsNative() {
  return _gmStorageWorks;
}

export function GM_getValue(key, defaultValue) {
  if (_gmStorageWorks) {
    const v = _nativeGM_getValue(key, defaultValue);
    return v === undefined ? defaultValue : v;
  }
  const all = _lsCacheGet();
  return key in all ? all[key] : defaultValue;
}

export function GM_setValue(key, value) {
  if (_gmStorageWorks) {
    _nativeGM_setValue(key, value);
    signalGMChange(key);
    return;
  }
  const all = _lsCacheGet();
  all[key] = value;
  // Persist the mutated object directly - no re-parse needed.
  _lsWriteAll(all);
}

// Broadcast a scalar storage-event notification without duplicating the
// potentially large favorites/collections payload into localStorage. The
// timestamp + random suffix guarantees that repeated writes always produce a
// distinct storage event.
export function signalGMChange(key) {
  if (!_gmStorageWorks) return;
  const message = { key: String(key), ts: Date.now(), nonce: Math.random().toString(36).slice(2) };
  // BroadcastChannel is the primary notification path because it is not
  // dependent on storage-event delivery from the userscript sandbox.
  try {
    if (_crossTabChannel) _crossTabChannel.postMessage(message);
  } catch (e) {
    // localStorage notification below is the compatibility fallback.
  }
  try {
    localStorage.setItem(
      _GM_CROSS_TAB_SYNC_KEY,
      message.key + "|" + message.ts + "|" + message.nonce,
    );
  } catch (e) {
    // Native GM storage remains authoritative; a localStorage failure only
    // removes this supplementary notification path.
  }
}

if (!_gmStorageWorks) {
  console.warn(
    "[osu-local-favorites] this userscript manager's GM storage isn't working - falling back to localStorage",
  );
}

