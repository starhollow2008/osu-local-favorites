import { GM_getValue } from "../core/gm-shim.js";

// ═══ Theme ═══
// Accent color and the idle/hover/active opacity levels used by the cover
// preview button are all exposed as CSS custom properties on <html>, rather
// than hardcoded throughout the UI. Settings → Appearance just updates these
// variables (and persists them) - every element that references
// var(--osu-fav-accent) etc. picks up the change immediately, with no need
// to touch each individual style string.
export const THEME_ACCENT_KEY = "osu_theme_accent";
export const THEME_HEART_KEY = "osu_theme_heart_color";
export const THEME_IDLE_OPACITY_KEY = "osu_theme_idle_opacity";
export const THEME_IDLE_DIM_KEY = "osu_theme_idle_dim";
export const THEME_HOVER_DIM_KEY = "osu_theme_hover_dim";
export const THEME_ACTIVE_OPACITY_KEY = "osu_theme_active_opacity";
export const THEME_STYLE_KEY = "osu_theme_style";

export const THEME_DEFAULTS = {
  style: "neo",
  // v6 palette: softer sakura accent and a deeper heart fill so favorited
  // hearts read as a distinct "filled" state against the pastel accent.
  // Both remain user-overridable in Settings; only the DEFAULTS changed -
  // stored theme settings keep whatever the user picked.
  accent: "#ff91bb",
  heartColor: "#ce7698",
  idleOpacity: 0.15,
  idleDim: 0,
  hoverDim: 0.65,
  activeOpacity: 0.8,
};

export const THEME_PALETTES = {
  neo: {
    accent: "#ff91bb",
    heartColor: "#ce7698",
    preview: ["#111", "#1a1a1a", "#242424", "#333", "#666", "#ff91bb", "#ddd"],
    colors: {
      "panel-bg": "#111", surface: "#1a1a1a", "surface-alt": "#242424",
      divider: "#222", border: "#333", "border-strong": "#444",
      "muted-strong": "#555", muted: "#666", "muted-soft": "#888",
      secondary: "#999", "secondary-soft": "#aaa", "secondary-bright": "#bbb",
      "text-soft": "#ccc", text: "#ddd", "text-bright": "#eee",
      "header-bg": "#1a1a1a", "nav-bg": "#242424", "stats-bg": "#333",
      "surface-soft": "#242424", "bio-box": "#1a1a1a", "mode-active": "#ff91bb",
      "section-bar": "#444", heading: "#ff91bb", label: "#ddd",
      "username-link": "#ff91bb", "login-link": "#ff91bb", "nav-text": "#ddd",
      "chart-line": "#ff91bb", "rank-ss": "#ce7698",
    },
  },
  modern: {
    accent: "#ff66ab",
    heartColor: "#ce1c9d",
    preview: ["#1c1719", "#2a2226", "#382e32", "#46393f", "#3d2932", "#ff66ab", "#ffffff"],
    colors: {
      "panel-bg": "#1c1719", surface: "#2a2226", "surface-alt": "#382e32",
      divider: "#3d2932", border: "#46393f", "border-strong": "#ff66ab",
      "muted-strong": "#d9a6bd", muted: "#d9a6bd", "muted-soft": "#d9a6bd",
      secondary: "#d9a6bd", "secondary-soft": "#d9a6bd", "secondary-bright": "#ffffff",
      "text-soft": "#ffffff", text: "#ffffff", "text-bright": "#ffffff",
      "header-bg": "#2e1f25", "nav-bg": "#3d2932", "stats-bg": "#382e32",
      "surface-soft": "#382e32", "bio-box": "#2a2226", "mode-active": "#46393f",
      "section-bar": "#46393f", heading: "#ff66ab", label: "#ffffff",
      "username-link": "#ff66ab", "login-link": "#ff66ab", "nav-text": "#d9a6bd",
      "chart-line": "#ff66ab", "rank-ss": "#ce1c9d",
    },
  },
  classic: {
    accent: "#ff5bac",
    heartColor: "#a64d83",
    preview: ["#a9a9ff", "#ffffff", "#f0ecfa", "#f5f2fe", "#e7e4fc", "#ffd6f3", "#5a539a"],
    colors: {
      "panel-bg": "#a9a9ff", surface: "#ffffff", "surface-alt": "#f0ecfa",
      divider: "#bea8f4", border: "#5a539a", "border-strong": "#5f5f5f",
      "muted-strong": "#5f5f5f", muted: "#5a539a", "muted-soft": "#3843a6",
      secondary: "#4e2151", "secondary-soft": "#3843a6", "secondary-bright": "#3366ff",
      "text-soft": "#4e2151", text: "#4e2151", "text-bright": "#3843a6",
      "header-bg": "#666cbc", "nav-bg": "#ffd6f3", "stats-bg": "#8588dd",
      "surface-soft": "#f5f2fe", "bio-box": "#e7e4fc", "mode-active": "#bea8f4",
      "section-bar": "#5f5f5f", heading: "#5a539a", label: "#3843a6",
      "username-link": "#3366ff", "login-link": "#0f72ff", "nav-text": "#4e2151",
      "chart-line": "#ff7f0e", "rank-ss": "#ff5bac",
    },
  },
};
// Simple hex darken for the accent's hover/pressed shade - keeps the same
// ~-25% lightness relationship for any picked color (the original pair
// was #ff66aa → #ff3377; the v6 default darkens equivalently).
function darkenHex(hex, amount = 0.25) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return hex;
  const clamp = (n) => Math.max(0, Math.min(255, Math.round(n)));
  const [r, g, b] = [1, 2, 3].map((i) => clamp(parseInt(m[i], 16) * (1 - amount)));
  return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
}

export function getThemeSettings() {
  const storedStyle = GM_getValue(THEME_STYLE_KEY, THEME_DEFAULTS.style);
  const style = Object.prototype.hasOwnProperty.call(THEME_PALETTES, storedStyle)
    ? storedStyle
    : THEME_DEFAULTS.style;
  const palette = THEME_PALETTES[style];
  const storedAccent = GM_getValue(THEME_ACCENT_KEY, null);
  const storedHeartColor = GM_getValue(THEME_HEART_KEY, null);
  const isPresetColor = (value, key) =>
    value == null || Object.values(THEME_PALETTES).some((preset) => preset[key] === value);
  return {
    style,
    accent: isPresetColor(storedAccent, "accent") ? palette.accent : storedAccent,
    heartColor: isPresetColor(storedHeartColor, "heartColor") ? palette.heartColor : storedHeartColor,
    idleOpacity: GM_getValue(THEME_IDLE_OPACITY_KEY, THEME_DEFAULTS.idleOpacity),
    idleDim: GM_getValue(THEME_IDLE_DIM_KEY, THEME_DEFAULTS.idleDim),
    hoverDim: GM_getValue(THEME_HOVER_DIM_KEY, THEME_DEFAULTS.hoverDim),
    activeOpacity: GM_getValue(THEME_ACTIVE_OPACITY_KEY, THEME_DEFAULTS.activeOpacity),
  };
}

// Applies the current theme settings to :root as CSS custom properties.
// Safe to call repeatedly (e.g. right after a Settings change) - it just
// overwrites the same handful of variables.
export function applyTheme() {
  const t = getThemeSettings();
  const root = document.documentElement.style;
  const palette = THEME_PALETTES[t.style];
  for (const [name, value] of Object.entries(palette.colors)) {
    root.setProperty(`--osu-fav-${name}`, value);
  }
  root.setProperty("--osu-fav-accent", t.accent);
  root.setProperty("--osu-fav-accent-dark", darkenHex(t.accent));
  root.setProperty("--osu-fav-heart-color", t.heartColor);
  root.setProperty("--osu-fav-idle-opacity", t.idleOpacity);
  root.setProperty("--osu-fav-idle-dim", t.idleDim);
  root.setProperty("--osu-fav-hover-dim", t.hoverDim);
  root.setProperty("--osu-fav-active-opacity", t.activeOpacity);
}

// Minimal heart glyph as real SVG (not emoji) - emoji hearts render from the
// system emoji font with a fixed, non-CSS-colorable presentation, which is
// exactly why they can't be recolored. This one uses fill/stroke, so
// --osu-fav-heart-color actually takes effect.
const HEART_PATH =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
export function heartSVG(filled, size = 26) {
  return filled
    ? `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><path d="${HEART_PATH}" fill="var(--osu-fav-heart-color)"/></svg>`
    : `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><path d="${HEART_PATH}" fill="none" stroke="var(--osu-fav-heart-color)" stroke-width="1.6"/></svg>`;
}

// Play/pause icons as inline SVGs - the old U+25B6/U+23F8 text glyphs get
// emoji presentation on mobile (▶️ / colored ⏸), which broke sizing and
// theming. SVGs render identically everywhere and inherit currentColor.
export function playSVG(size = 11) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="play"><path d="M8 5v14l11-7z"/></svg>`;
}

export function pauseSVG(size = 11) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="pause"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`;
}

// Player-bar icons - previous/next/shuffle/loop, same inline-SVG approach
// as playSVG/pauseSVG above and for the same reason.
export function prevSVG(size = 14) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>`;
}
export function nextSVG(size = 14) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>`;
}
export function shuffleSVG(size = 14) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="shuffle"><path d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>`;
}
export function loopSVG(size = 14) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-label="loop"><path d="M7 7h10v3l4-4-4-4v3H5v6h2zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2z"/></svg>`;
}

