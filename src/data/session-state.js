import { GM_getValue, GM_setValue } from "../core/gm-shim.js";

// ═══ Session state: what survives an osu.ppy.sh navigation ═══
// The site is a classic multi-page app - every internal link is a full
// document load, which tears down the panel (scroll position, sort,
// filters, search, open view) and the audio element (track + position).
// GM storage is shared by every osu! page of the browser profile, so it
// carries exactly the pieces that made navigation feel like a reset:
//
//   * Panel view state - restored when the panel is (re-)opened on the
//     next page, so the list comes back with the same filters, sort,
//     search, collection, view and scroll offset it had.
//   * Playback state - the last track and its position, saved throttled
//     while playing and on pagehide. Restoring playback needs a user
//     gesture (autoplay policy), so the next page surfaces the Now
//     Playing bar in a paused "was playing at 1:23" state; one tap on
//     its play control resumes from there, from cache when possible.
//
// Both blobs are small and written at human interaction rate (one scroll
// save per second at most, one playback save per 5s), so unlike the
// favorites payload they cost nothing to persist through the shim.

const PANEL_STATE_KEY = "osu_lof_panel_state_v1";
const PLAYBACK_STATE_KEY = "osu_lof_playback_state_v1";

// Anything older than this is a different browsing session - reopening a
// tab hours later should not resurrect stale UI state.
export const PANEL_STATE_MAX_AGE_MS = 30 * 60 * 1000;
export const PLAYBACK_STATE_MAX_AGE_MS = 30 * 60 * 1000;

// ── Panel view state ────────────────────────────────────────────────
// Shape: {
//   v: 1, at: savedAt,
//   sort: "date", sortAsc: false, search: "",
//   filters: { [categoryId]: { [termKey]: "include" | "exclude" } },
//   collectionId: "", settingsOpen: false, scrollTop: 0,
//   panelOpen: true,
// }
// panelOpen is read once per hard page load by core/init.js to reopen the
// panel automatically; the panel itself maintains every other field.

export function loadPanelState() {
  try {
    const s = GM_getValue(PANEL_STATE_KEY, null);
    if (!s || typeof s !== "object" || s.v !== 1) return null;
    if (Date.now() - (Number(s.at) || 0) > PANEL_STATE_MAX_AGE_MS) return null;
    return s;
  } catch (e) {
    return null;
  }
}

export function savePanelState(state) {
  try {
    GM_setValue(PANEL_STATE_KEY, Object.assign({ v: 1, at: Date.now() }, state));
  } catch (e) { /* session restore is a nicety, never a requirement */ }
}

// Whether the panel was open when the last osu! page went away. Kept in
// the same blob (same freshness window) rather than its own key, so a
// stale "open" from hours ago expires together with the rest of the view.
export function wasPanelOpen() {
  const s = loadPanelState();
  return !!(s && s.panelOpen);
}

// ── Playback state ──────────────────────────────────────────────────
// Shape: { v: 1, at: savedAt, id: "12345", position: 83.2, playing: true }

export function loadPlaybackState() {
  try {
    const s = GM_getValue(PLAYBACK_STATE_KEY, null);
    if (!s || typeof s !== "object" || s.v !== 1) return null;
    if (Date.now() - (Number(s.at) || 0) > PLAYBACK_STATE_MAX_AGE_MS) return null;
    if (!s.id) return null;
    return {
      id: String(s.id),
      position: Number(s.position) > 0 ? Number(s.position) : 0,
      playing: !!s.playing,
    };
  } catch (e) {
    return null;
  }
}

export function savePlaybackState(id, position, playing) {
  try {
    GM_setValue(PLAYBACK_STATE_KEY, { v: 1, at: Date.now(), id: String(id), position: Number(position) || 0, playing: !!playing });
  } catch (e) { /* same nicety rule as above */ }
}

export function clearPlaybackState() {
  try {
    GM_setValue(PLAYBACK_STATE_KEY, null);
  } catch (e) { /* ignore */ }
}

// ── pagehide flush ──────────────────────────────────────────────────
// One registration point for "the realm is about to die": both blobs are
// saved continuously, but a save scheduled by the scroll/playback
// throttles could still be pending when navigation starts, so this final
// synchronous pass guarantees the freshest value is on disk.
let _onPageHide = null;
export function flushOnPageHide(saveFn) {
  if (_onPageHide) window.removeEventListener("pagehide", _onPageHide);
  _onPageHide = () => { try { saveFn(); } catch (e) { /* never block unload */ } };
  window.addEventListener("pagehide", _onPageHide);
}
