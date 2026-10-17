// ═══ Hover styling helper ═══
// Nearly every interactive element in this script gets the same treatment:
// mouseenter applies an "active" look, mouselease restores the resting one.
// That pair of listeners was hand-written at ~26 call sites, each with its
// own closure and its own string-pair typos waiting to happen. This module
// is the one idiomatic copy.
//
//   hover(el, over, out)          - apply two style functions
//   hover.props(el, over, out)    - apply two style objects (recommended:
//                                   diffs keys of both, so `out` only needs
//                                   the properties `over` touches)
//   hover.accent(el, opts)        - the panel's standard button hover
//                                   (accent border+text, #333/#999 resting)
//
// Everything returns the element, so it composes at construction sites:
//   hover.accent(makeBtn("Clear")).addEventListener("click", ...)
//
// Deliberately NOT an event-delegation or CSS-class system: the resting
// styles here are set as inline styles at build time and the helpers must
// stay drop-in compatible with that, without a structural change.

export function hover(el, over, out) {
  el.addEventListener("mouseenter", () => over(el));
  el.addEventListener("mouseleave", () => out(el));
  return el;
}

// Style-object form: `over` is applied on enter; every key it touches is
// reset to the value from `out` (or "" when not given) on leave.
hover.props = function props(el, over, out) {
  return hover(
    el,
    () => { for (const k in over) el.style[k] = over[k]; },
    () => {
      for (const k in over) el.style[k] = (out && k in out) ? out[k] : "";
    },
  );
};

// The panel-standard button hover: border and text go accent while resting
// colors come back on leave. `guard` runs before each style application
// (e.g. "only when this row isn't the active one") and may return false to
// skip the styling entirely.
hover.accent = function accent(el, guard) {
  return hover(
    el,
    () => { if (!guard || guard()) { el.style.borderColor = "var(--osu-fav-accent)"; el.style.color = "var(--osu-fav-accent)"; } },
    () => { if (!guard || guard()) { el.style.borderColor = "#333"; el.style.color = "#999"; } },
  );
};
