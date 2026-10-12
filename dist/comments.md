# Stripped comments

569 comments were removed from [`osu-local-favorites.user.js`](./osu-local-favorites.user.js) by `npm run build` - the built script ships without them.

Each entry links to the **line of the built userscript** the comment was attached to: the
line it documented, or the first code line after it when the comment sat on its own. The
`src L…` number on the right is the comment's line in the module it came from.

Not listed here, because they stay in the built file:

- the `==UserScript==` metadata block (`meta/userscript-header.txt`)
- the generated context table at the top of the file
- the per-module section banners (`// ━━━━━━━━━━ src/… ━━━━━━━━━━`)

## Contents

1. [`src/core/gm-shim.js`](#core-gm-shim-js) - 12 comments, [first](./osu-local-favorites.user.js#L76)
2. [`src/core/interceptor.js`](#core-interceptor-js) - 8 comments, [first](./osu-local-favorites.user.js#L176)
3. [`src/core/errors.js`](#core-errors-js) - 6 comments, [first](./osu-local-favorites.user.js#L285)
4. [`src/data/storage.js`](#data-storage-js) - 18 comments, [first](./osu-local-favorites.user.js#L360)
5. [`src/data/collections.js`](#data-collections-js) - 5 comments, [first](./osu-local-favorites.user.js#L525)
6. [`src/ui/theme.js`](#ui-theme-js) - 6 comments, [first](./osu-local-favorites.user.js#L597)
7. [`src/data/mirrors.js`](#data-mirrors-js) - 9 comments, [first](./osu-local-favorites.user.js#L674)
8. [`src/api/previews.js`](#api-previews-js) - 6 comments, [first](./osu-local-favorites.user.js#L785)
9. [`src/data/playback-settings.js`](#data-playback-settings-js) - 2 comments, [first](./osu-local-favorites.user.js#L856)
10. [`src/data/media-cache-db.js`](#data-media-cache-db-js) - 69 comments, [first](./osu-local-favorites.user.js#L875)
11. [`src/ui/media-session.js`](#ui-media-session-js) - 13 comments, [first](./osu-local-favorites.user.js#L1587)
12. [`src/ui/audio-player.js`](#ui-audio-player-js) - 26 comments, [first](./osu-local-favorites.user.js#L1768)
13. [`src/ui/popup-menu.js`](#ui-popup-menu-js) - 3 comments, [first](./osu-local-favorites.user.js#L2005)
14. [`src/ui/download-menu.js`](#ui-download-menu-js) - 2 comments, [first](./osu-local-favorites.user.js#L2075)
15. [`src/ui/genre-filter.js`](#ui-genre-filter-js) - 4 comments, [first](./osu-local-favorites.user.js#L2114)
16. [`src/ui/filter-menu.js`](#ui-filter-menu-js) - 6 comments, [first](./osu-local-favorites.user.js#L2156)
17. [`src/ui/filters.js`](#ui-filters-js) - 7 comments, [first](./osu-local-favorites.user.js#L2348)
18. [`src/ui/collections-menu.js`](#ui-collections-menu-js) - 1 comments, [first](./osu-local-favorites.user.js#L2737)
19. [`src/api/gist-backup.js`](#api-gist-backup-js) - 11 comments, [first](./osu-local-favorites.user.js#L2822)
20. [`src/api/osu-api.js`](#api-osu-api-js) - 31 comments, [first](./osu-local-favorites.user.js#L2953)
21. [`src/data/beatmap-extraction.js`](#data-beatmap-extraction-js) - 15 comments, [first](./osu-local-favorites.user.js#L3219)
22. [`src/data/favorite-detection.js`](#data-favorite-detection-js) - 7 comments, [first](./osu-local-favorites.user.js#L3475)
23. [`src/ui/heart-visual.js`](#ui-heart-visual-js) - 4 comments, [first](./osu-local-favorites.user.js#L3575)
24. [`src/data/enrichment.js`](#data-enrichment-js) - 15 comments, [first](./osu-local-favorites.user.js#L3608)
25. [`src/data/reenrichment.js`](#data-reenrichment-js) - 3 comments, [first](./osu-local-favorites.user.js#L3767)
26. [`src/data/toggle-favorite.js`](#data-toggle-favorite-js) - 4 comments, [first](./osu-local-favorites.user.js#L3839)
27. [`src/ui/copy-all-button.js`](#ui-copy-all-button-js) - 13 comments, [first](./osu-local-favorites.user.js#L3875)
28. [`src/ui/floating-heart.js`](#ui-floating-heart-js) - 26 comments, [first](./osu-local-favorites.user.js#L4016)
29. [`src/ui/settings.js`](#ui-settings-js) - 51 comments, [first](./osu-local-favorites.user.js#L4260)
30. [`src/ui/main-panel.js`](#ui-main-panel-js) - 108 comments, [first](./osu-local-favorites.user.js#L5633)
31. [`src/ui/menu-commands.js`](#ui-menu-commands-js) - 1 comments, [first](./osu-local-favorites.user.js#L7099)
32. [`src/ui/guest-fallback.js`](#ui-guest-fallback-js) - 10 comments, [first](./osu-local-favorites.user.js#L7134)
33. [`src/ui/guest-downloads.js`](#ui-guest-downloads-js) - 16 comments, [first](./osu-local-favorites.user.js#L7206)
34. [`src/core/toast.js`](#core-toast-js) - 1 comments, [first](./osu-local-favorites.user.js#L7358)
35. [`src/data/version-check.js`](#data-version-check-js) - 7 comments, [first](./osu-local-favorites.user.js#L7385)
36. [`src/ui/update-prompt.js`](#ui-update-prompt-js) - 7 comments, [first](./osu-local-favorites.user.js#L7463)
37. [`src/core/init.js`](#core-init-js) - 36 comments, [first](./osu-local-favorites.user.js#L7573)

---

## `src/core/gm-shim.js`

12 comments · userscript [L76](./osu-local-favorites.user.js#L76) - [L166](./osu-local-favorites.user.js#L166)

**[L76](./osu-local-favorites.user.js#L76)** · src L1

```js
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
```

**[L79](./osu-local-favorites.user.js#L79)** · src L19

```js
// Cross-tab notification channel used when native GM storage works but the
// userscript manager does not expose a working GM_addValueChangeListener.
// Only the changed key is written here; the authoritative value remains in
// native GM storage. In fallback mode, GM_setValue already writes the shared
// localStorage object, so this extra signal is unnecessary.
```

**[L86](./osu-local-favorites.user.js#L86)** · src L31

```js
// Node exposes BroadcastChannel too; unref keeps the build checker from
// waiting forever for this browser-only communication channel.
```

**[L105](./osu-local-favorites.user.js#L105)** · src L52

```js
// Nothing more we can do if localStorage is also unavailable/full.
```

**[L108](./osu-local-favorites.user.js#L108)** · src L56

```js
// In-memory write-through cache over the localStorage fallback.
// Without this, EVERY GM_getValue call re-serialized the entire store -
// with a large favorites library (500+) that meant multi-megabyte
// JSON.parse calls hundreds of times per panel render, causing the
// exponential slowdown / "Forced reflow" violations. Reads hit the cache;
// writes update the cache and persist asynchronously-ish (sync write,
// but only one stringify per mutation instead of read+parse+stringify).
```

**[L108](./osu-local-favorites.user.js#L108)** · src L63

```js
// null = not loaded yet
```

**[L110](./osu-local-favorites.user.js#L110)** · src L65

```js
// A fallback-store write in another tab updates localStorage, but this tab's
// in-memory compatibility cache would otherwise keep returning the old object
// forever. In that mode the storage event is the authoritative invalidation
// signal; the data layer will separately notify the UI to re-render.
```

**[L150](./osu-local-favorites.user.js#L150)** · src L109

```js
// Persist the mutated object directly - no re-parse needed.
```

**[L153](./osu-local-favorites.user.js#L153)** · src L113

```js
// Broadcast a scalar storage-event notification without duplicating the
// potentially large favorites/collections payload into localStorage. The
// timestamp + random suffix guarantees that repeated writes always produce a
// distinct storage event.
```

**[L156](./osu-local-favorites.user.js#L156)** · src L120

```js
// BroadcastChannel is the primary notification path because it is not
// dependent on storage-event delivery from the userscript sandbox.
```

**[L159](./osu-local-favorites.user.js#L159)** · src L125

```js
// localStorage notification below is the compatibility fallback.
```

**[L166](./osu-local-favorites.user.js#L166)** · src L133

```js
// Native GM storage remains authoritative; a localStorage failure only
// removes this supplementary notification path.
```


## `src/core/interceptor.js`

8 comments · userscript [L176](./osu-local-favorites.user.js#L176) - [L271](./osu-local-favorites.user.js#L271)

**[L176](./osu-local-favorites.user.js#L176)** · src L1

```js
// ═══ Page-world XHR/fetch interceptor ═══
// Also blocks login redirects triggered by unauthenticated favourite actions.
```

**[L179](./osu-local-favorites.user.js#L179)** · src L6

```js
// ── XHR intercept: block /favourites write requests ──
// Only the write verbs (POST/PUT/PATCH/DELETE) are faked - osu!'s own
// favorites *listing* endpoints share the /favourites path and must
// keep hitting the network, or page code silently receives "{}"
// instead of real JSON.
```

**[L220](./osu-local-favorites.user.js#L220)** · src L52

```js
// ── Fetch intercept: block /favourites write requests ──
```

**[L235](./osu-local-favorites.user.js#L235)** · src L68

```js
// ── Navigation intercept: block login redirects from favourite clicks ──
// osu! SPA navigates via history.pushState when not logged in for some actions.
// We trap pushState/replaceState and location.href assignments that redirect to /login.
// Only redirects that originate within 500ms of a favourite-click are blocked.
```

**[L239](./osu-local-favorites.user.js#L239)** · src L76

```js
// Check if this looks like a favourite button
```

**[L258](./osu-local-favorites.user.js#L258)** · src L96

```js
// block login redirect
```

**[L266](./osu-local-favorites.user.js#L266)** · src L104

```js
// block login redirect
```

**[L271](./osu-local-favorites.user.js#L271)** · src L109

```js
// Intercept anchor navigation to /login triggered by favourite actions
```


## `src/core/errors.js`

6 comments · userscript [L285](./osu-local-favorites.user.js#L285) - [L340](./osu-local-favorites.user.js#L340)

**[L285](./osu-local-favorites.user.js#L285)** · src L1

```js
// ═══ Error reporting ═══
// One place for every failure in this script to end up: a structured
// console.error() (name/message/HTTP status/stack, so pasting that one
// line is enough to file a useful bug report) plus a small on-page toast
// when it's worth telling the user something failed. Call sites that
// already showed a plain toast on failure route through reportError()
// below instead of building their own message, so they pick up the
// console detail for free without changing what appears on screen.
```

**[L285](./osu-local-favorites.user.js#L285)** · src L9

```js
// don't flood the screen if something fails repeatedly
```

**[L289](./osu-local-favorites.user.js#L289)** · src L13

```js
// page not ready - the console line already has the detail
```

**[L317](./osu-local-favorites.user.js#L317)** · src L41

```js
// context: short human label for where this happened, shown in both the
// toast and the console line (e.g. "Gist backup", "Toggle favorite").
// err: whatever was thrown/rejected - normally an Error, handled
// gracefully either way. extra: optional {status, statusText, ...} for
// callers that know more than what's already on the Error object (most
// network helpers below attach .status/.statusText themselves, so this is
// rarely needed).
```

**[L335](./osu-local-favorites.user.js#L335)** · src L66

```js
// already told the user something just failed
```

**[L340](./osu-local-favorites.user.js#L340)** · src L71

```js
// Last-resort safety net for bugs that slip past every try/catch above.
// window-level "error"/"unhandledrejection" fire for *every* script on the
// page, not just this one, so each listener below only reports when the
// stack trace contains one of this script's own function names - a
// best-effort filter (Tampermonkey doesn't expose a reliable "this came
// from a userscript" flag), but good enough to avoid popping a Local
// Favorites error toast for osu!'s own unrelated page bugs.
```


## `src/data/storage.js`

18 comments · userscript [L360](./osu-local-favorites.user.js#L360) - [L514](./osu-local-favorites.user.js#L514)

**[L360](./osu-local-favorites.user.js#L360)** · src L6

```js
// ═══ Storage ═══
// In-memory write-through cache over the favorites object. getFavorites()
// used to deserialize the ENTIRE favorites store out of GM storage on every
// single call, and it sits under hot paths that run constantly:
// refreshButtons() (every DOM mutation + a 1.5s fallback interval, once per
// heart button per pass via isFavorited), updateFloatingHeart(), and the
// enrichment drainer re-filtering the queue against it every second. With a
// large library that was several multi-megabyte JSON parses per second for
// the whole tab lifetime - constant CPU burn and GC churn bad enough to get
// the renderer OOM-killed ("Aw, Snap!" / SIGILL) and the page stuck loading.
// Every writer already goes through setFavorites(), so caching the last
// value in memory and persisting only on write is coherent; the cross-tab
// listeners (GM_addValueChangeListener in init() for native GM storage, the
// DOM "storage" event here for the localStorage fallback) invalidate it.
```

**[L372](./osu-local-favorites.user.js#L372)** · src L32

```js
// ── Change notification ───────────────────────────────────────────────
// Every surface that draws a heart (card buttons on the page, the floating
// indicator, the guest button, the panel) used to be refreshed by hand at
// each mutation site. There were eight such sites and none of them
// refreshed the card buttons, so removing a favorite from the panel left
// the page's own hearts filled until a full reload - and, because
// refreshButtons() marks a button as processed and never revisits it, a
// Turbolinks snapshot restored that stale state right back.
//
// Instead, storage announces membership changes once and the UI layer
// subscribes. Kept as a subscriber list rather than a DOM CustomEvent so
// the data layer stays free of DOM assumptions, and so a listener cannot
// be lost when Turbolinks swaps out <body>.
```

**[L380](./osu-local-favorites.user.js#L380)** · src L53

```js
// A cheap signature over *which ids are favorited*, deliberately ignoring
// the contents of each record. Background enrichment calls setFavorites()
// roughly once a second purely to attach metadata to an existing entry;
// without this, every one of those writes would trigger a full heart
// resync across the page for no visible change.
//
// Count alone is not enough (a restore can swap ids while keeping the
// count), so the id sum comes along for the ride. Both are O(n) integer
// work over keys that were about to be serialized by GM_setValue anyway.
```

**[L399](./osu-local-favorites.user.js#L399)** · src L81

```js
// Listeners always run; the detail tells them how much actually changed.
//
// `membershipChanged: true`  - a beatmap was added or removed. Hearts are
//                              now wrong everywhere and the panel list has
//                              the wrong contents. Repaint immediately.
// `membershipChanged: false` - same ids, different record contents. This is
//                              background enrichment filling in title and
//                              artist, which runs about once a second
//                              during a bulk pass. Hearts are unaffected;
//                              the panel only needs to catch up eventually,
//                              so subscribers debounce this case rather
//                              than rebuilding the list once per second.
```

**[L404](./osu-local-favorites.user.js#L404)** · src L98

```js
// One bad listener must not stop the others, and must never take
// down the write that triggered it.
```

**[L409](./osu-local-favorites.user.js#L409)** · src L105

```js
// Drops the in-memory cache so the next getFavorites() re-reads persisted
// state. Exported (rather than exposing _favsCache itself) so other modules
// - cross-tab sync in core/init.js, the localStorage-fallback listener right
// below - can invalidate it without holding a live, writable binding into
// this module's private state.
```

**[L410](./osu-local-favorites.user.js#L410)** · src L111

```js
// GM_addValueChangeListener supplies the new value directly. Prefer it when
// available: some managers deliver the notification before a subsequent
// GM_getValue() can observe the updated store, which made page A rebuild
// against its old cache after page B changed a favorite.
```

**[L411](./osu-local-favorites.user.js#L411)** · src L116

```js
// Another tab (or a restore) replaced the store wholesale, so this tab's
// idea of what is favorited is void - force listeners to re-read rather
// than comparing against a signature computed from the old contents.
```

**[L415](./osu-local-favorites.user.js#L415)** · src L123

```js
// Drops the cache and re-reads persisted state WITHOUT notifying listeners.
// invalidateFavoritesCache() always announces a change, which is right for a
// cross-tab write but wrong for a speculative re-read: the visibilitychange
// handler in core/init.js re-reads on every single return to the tab, and
// announcing that unconditionally rebuilt the open panel - losing the user's
// place in the list - even when nothing had changed while they were away.
// The caller compares favoritesFingerprint() before and after and decides.
```

**[L422](./osu-local-favorites.user.js#L422)** · src L137

```js
// A cheap content fingerprint: which ids are present, plus enough of each
// record to notice enrichment filling in metadata. Deliberately not a
// JSON.stringify of the store - that is multi-megabyte on a large library
// and this runs every time the tab regains focus. O(n) integer work.
```

**[L437](./osu-local-favorites.user.js#L437)** · src L156

```js
// Invalidate on cross-tab writes in the localStorage-fallback mode. (In
// native GM mode this event never fires for GM storage - init()'s
// GM_addValueChangeListener handler covers that path instead.)
```

**[L448](./osu-local-favorites.user.js#L448)** · src L170

```js
// ── Import sanitization ──
// Favorites can arrive from outside the script's own writes: JSON file import,
// Gist fetch, and Gist restore. All three are untrusted data - the README
// explicitly encourages importing someone else's shared list. Without a
// schema gate, a crafted file could (a) prototype-pollute the favorites
// object via "__proto__"/"constructor"/"prototype" keys, (b) plant record
// fields the UI consumes verbatim (f.url -> <a href>, f.preview -> <audio>,
// f.covers -> <img>/cache fetch), or (c) merge an unbounded payload that then
// taxes every render and backup forever. Records are therefore rebuilt
// field-by-field from a whitelist, ids must be numeric strings, and a raw
// size cap rejects absurd payloads before parsing cost.
```

**[L460](./osu-local-favorites.user.js#L460)** · src L193

```js
// Rebuilds one favorite record from whitelisted fields only. Returns null
// when the entry is not an object at all. Unknown fields are dropped, not
// merged - the stored schema is exactly what the rest of the script reads.
// url and preview are NOT taken from the record: parseImportedFavorites()
// stamps them (plus id) canonically from the numeric key, so a shared
// record can't point the Open button or <audio> at a javascript: or
// lookalike URL.
```

**[L483](./osu-local-favorites.user.js#L483)** · src L223

```js
// Validates and sanitizes an import payload. Returns a fresh
// { [numericId]: sanitizedRecord } map keyed only by numeric beatmap ids,
// which also makes "__proto__"/"constructor"/"prototype" keys impossible to
// carry over. Throws with a readable message on structurally invalid data.
```

**[L489](./osu-local-favorites.user.js#L489)** · src L233

```js
// numeric beatmap ids only
```

**[L492](./osu-local-favorites.user.js#L492)** · src L236

```js
// Canonical identity fields come from the numeric key, never from the
// imported record (see sanitizeFavoriteRecord above).
```

**[L501](./osu-local-favorites.user.js#L501)** · src L247

```js
// Cover art is resolved from the id when a record carries no `covers`, so
// exports leave the object out (its URLs only differ by a cache-buster).
// Imported records are the untrusted path into `covers` (shared Gists), so
// anything not on an osu!/ppy.sh host is ignored here rather than rendered
// into <img>/MediaSession - a crafted record can't make the browser fetch
// attacker-chosen URLs.
```

**[L514](./osu-local-favorites.user.js#L514)** · src L266

```js
// The JSON written by Export and the Gist backup: same records as storage
// minus what is rebuilt on load (`covers`) or empty (`source`, `tags`).
```


## `src/data/collections.js`

5 comments · userscript [L525](./osu-local-favorites.user.js#L525) - [L586](./osu-local-favorites.user.js#L586)

**[L525](./osu-local-favorites.user.js#L525)** · src L3

```js
// ═══ Collections (playlists) ═══
// User-defined groupings of favorites, entirely separate from osu!'s own
// collections. Stored as { [collectionId]: { name, created, ids: [beatmapId,...] } }.
```

**[L527](./osu-local-favorites.user.js#L527)** · src L8

```js
// In-memory write-through cache, mirroring the favorites store above.
// Every card row's "+ Playlist" badge calls collectionsContainingMap() 2-3
// times during buildCard, and each of those used to deserialize the whole
// collections store out of GM storage - 1000+ reads for a single 500-card
// render. All writers go through setCollections(), so caching is coherent;
// cross-tab invalidation matches the favorites cache (storage event below +
// GM_addValueChangeListener in init()).
```

**[L538](./osu-local-favorites.user.js#L538)** · src L26

```js
// See invalidateFavoritesCache() in data/storage.js for why this is a
// function rather than an exported mutable binding.
```

**[L561](./osu-local-favorites.user.js#L561)** · src L51

```js
// Adds/removes a beatmap from a collection; returns the new membership state.
```

**[L586](./osu-local-favorites.user.js#L586)** · src L77

```js
// Per-render membership index: one pass over every collection's id list,
// producing mapId -> count. buildCard() needs only the count for the
// "+ Playlist" badge, and the direct scan (collectionsContainingMap) is
// O(collections x ids) per card - quadratic across a 1000-card render and
// re-paid on every filter/sort/enrichment-triggered rebuild. Callers should
// build this once per renderList() and pass it down instead.
```


## `src/ui/theme.js`

6 comments · userscript [L597](./osu-local-favorites.user.js#L597) - [L660](./osu-local-favorites.user.js#L660)

**[L597](./osu-local-favorites.user.js#L597)** · src L3

```js
// ═══ Theme ═══
// Accent color and the idle/hover/active opacity levels used by the cover
// preview button are all exposed as CSS custom properties on <html>, rather
// than hardcoded throughout the UI. Settings → Appearance just updates these
// variables (and persists them) - every element that references
// var(--osu-fav-accent) etc. picks up the change immediately, with no need
// to touch each individual style string.
```

**[L613](./osu-local-favorites.user.js#L613)** · src L26

```js
// Simple hex darken for the accent's hover/pressed shade - mirrors the
// original #ff66aa → #ff3377 relationship (roughly -25% lightness)
```

**[L632](./osu-local-favorites.user.js#L632)** · src L47

```js
// Applies the current theme settings to :root as CSS custom properties.
// Safe to call repeatedly (e.g. right after a Settings change) - it just
// overwrites the same handful of variables.
```

**[L644](./osu-local-favorites.user.js#L644)** · src L62

```js
// Minimal heart glyph as real SVG (not emoji) - emoji hearts render from the
// system emoji font with a fixed, non-CSS-colorable presentation, which is
// exactly why they can't be recolored. This one uses fill/stroke, so
// --osu-fav-heart-color actually takes effect.
```

**[L652](./osu-local-favorites.user.js#L652)** · src L74

```js
// Play/pause icons as inline SVGs - the old U+25B6/U+23F8 text glyphs get
// emoji presentation on mobile (▶️ / colored ⏸), which broke sizing and
// theming. SVGs render identically everywhere and inherit currentColor.
```

**[L660](./osu-local-favorites.user.js#L660)** · src L85

```js
// Player-bar icons - previous/next/shuffle/loop, same inline-SVG approach
// as playSVG/pauseSVG above and for the same reason.
```


## `src/data/mirrors.js`

9 comments · userscript [L674](./osu-local-favorites.user.js#L674) - [L761](./osu-local-favorites.user.js#L761)

**[L674](./osu-local-favorites.user.js#L674)** · src L3

```js
// ═══ Download Mirrors ═══
// Third-party beatmap mirrors, used as a fallback wherever osu!'s own
// download doesn't work - guests (osu!'s own download button/route is
// gated behind a real logged-in session), beatmaps with downloads disabled,
// or just as an alternative when the official servers are slow. Modeled
// after the mirror list in limjeck/osuplus.
```

**[L717](./osu-local-favorites.user.js#L717)** · src L52

```js
// Detects a real logged-in osu! session via the page's own current-user
// JSON blob (empty object "{}" for guests, populated for a real session).
// Used to decide whether "Official Download" is worth offering at all -
// osu!'s download route requires server-side auth and simply doesn't work
// for guests regardless of what our script does.
//
// Memoized on the blob's exact text: buildCard() reaches this via both
// resolveDefaultMirror() and buildDownloadOptions() once per card, so a
// single 500-card panel render used to re-parse the same JSON blob ~1000
// times. Keying the cache on the raw text (not just a one-shot boolean)
// keeps it correct if Turbolinks swaps in a different user blob.
```

**[L736](./osu-local-favorites.user.js#L736)** · src L82

```js
// Exported invalidator (see invalidateFavoritesCache() in data/storage.js
// for why this is a function rather than exporting the raw bindings) -
// called from core/init.js's cross-tab sync handler when another tab's
// login state may have changed.
```

**[L741](./osu-local-favorites.user.js#L741)** · src L91

```js
// Which video variant to prefer, and whether Official or Mirrors should be
// listed first - both user-configurable in Settings → Download Mirrors.
// Nothing is ever hidden by these; they only decide ordering, so the full
// set of options is always one click away in the dropdown.
```

**[L741](./osu-local-favorites.user.js#L741)** · src L95

```js
// "video" | "novideo"
```

**[L742](./osu-local-favorites.user.js#L742)** · src L96

```js
// "official" | "mirrors"
```

**[L743](./osu-local-favorites.user.js#L743)** · src L97

```js
// "" | "official" | "official_novideo" | "<mirror.key>" | "<mirror.key>_novideo"
```

**[L745](./osu-local-favorites.user.js#L745)** · src L99

```js
// Flat, order-independent registry of every possible download destination
// (both Official variants + every mirror's variants), keyed stably so a
// stored "default mirror" choice keeps meaning the same thing no matter
// how the user's video/source-order preferences later reorder the
// dropdown itself. Used to populate the Settings picker and to resolve a
// stored default back into a real URL.
```

**[L761](./osu-local-favorites.user.js#L761)** · src L121

```js
// Resolves the stored default-mirror key into an actual {label, url} for
// this beatmap, or null if it can't currently be used - either because
// the setting is unset, the chosen mirror has since been disabled, or
// it's Official but the user isn't signed in. Returning null is the
// signal to fall back to showing the normal dropdown, so this never
// hands back a link that would just fail.
```


## `src/api/previews.js`

6 comments · userscript [L785](./osu-local-favorites.user.js#L785) - [L843](./osu-local-favorites.user.js#L843)

**[L785](./osu-local-favorites.user.js#L785)** · src L5

```js
// ═══ Full-length previews (Hinamizawa music mirror) ═══
// osu!'s own preview clip is a fixed ~10s cut. mirror.hinamizawa.ai runs a
// separate music-streaming API (distinct from its beatmap-download mirror)
// that serves the full track from its own disk when it has one cached, and
// otherwise transparently falls back to proxying the same ~30s official
// clip while it extracts the full song in the background - so pointing
// the preview player at it is a strict upgrade, never a worse experience
// than what we already show. No auth, open CORS, HTTP Range for seeking.
```

**[L787](./osu-local-favorites.user.js#L787)** · src L15

```js
// The mirror asks integrations to identify themselves so traffic can be
// attributed and supported. Keep this separate from navigator.userAgent:
// browser media requests control their own forbidden User-Agent header,
// while the metadata request below is made through GM_xmlhttpRequest.
```

**[L789](./osu-local-favorites.user.js#L789)** · src L21

```js
// beatmapset id -> Promise<Song|null>
```

**[L791](./osu-local-favorites.user.js#L791)** · src L23

```js
// Firefox for Android on some devices (including Redmi models) is much
// less forgiving of a cold cross-origin stream. Keep the mirror as the
// primary source when full-song previews are enabled, but do not make the
// first tap compete with a second GM_xmlhttpRequest cache download. If the
// mirror is unavailable, undecodable, or only has the short clip, the
// player falls back to osu!'s direct preview below.
```

**[L804](./osu-local-favorites.user.js#L804)** · src L42

```js
// Fetch only when a user starts a track, never once per visible card. The
// Song response's duration_sec lets us distinguish a genuinely short song
// from the mirror's transitional ~30s osu! preview without delaying the
// click that starts playback.
```

**[L843](./osu-local-favorites.user.js#L843)** · src L85

```js
// Preserve the useful metadata across panel re-renders and future plays.
// These fields intentionally match the Music API response names.
```


## `src/data/playback-settings.js`

2 comments · userscript [L856](./osu-local-favorites.user.js#L856) - [L859](./osu-local-favorites.user.js#L859)

**[L856](./osu-local-favorites.user.js#L856)** · src L3

```js
// ═══ Music Playback settings (loop / auto next / shuffle / volume) ═══
```

**[L859](./osu-local-favorites.user.js#L859)** · src L7

```js
// 0-100, applied as audio.volume/100
```


## `src/data/media-cache-db.js`

69 comments · userscript [L875](./osu-local-favorites.user.js#L875) - [L1584](./osu-local-favorites.user.js#L1584)

**[L875](./osu-local-favorites.user.js#L875)** · src L3

```js
// ═══ Media Cache (background covers + audio previews) ═══
// Without this, every reload re-requests every visible cover image, and
// every reopen of the panel re-streams the same preview clips - none of
// it changes between visits, so by default it's pure repeat network
// traffic. This stores both kinds of media as Blobs in IndexedDB, keyed
// by their source URL, and serves them back as local blob: URLs on
// future renders until the entry's chosen expiry passes.
//
// "never" skips the cache store entirely (identical to how this script
// behaved before this feature existed - always straight to the network).
// "always" caches with no expiry; entries only change if the URL itself
// does. Every other mode is a fixed, or user-typed custom, TTL. Applies
// the same way on every platform, including Firefox Android.
```

**[L875](./osu-local-favorites.user.js#L875)** · src L16

```js
// "custom"|"30min"|"1h"|"6h"|"12h"|"24h"|"1week"|"1month"|"always"|"never"
```

**[L893](./osu-local-favorites.user.js#L893)** · src L34

```js
// TTL in ms, or Infinity for "always" - "never" is handled by callers
// before this is ever reached (they skip the cache store outright).
```

**[L907](./osu-local-favorites.user.js#L907)** · src L50

```js
// Partial ("while streaming") downloads live in their own store until the
// whole track has arrived; see startStreamingCacheWrite() at the bottom.
// Bumping the version is what creates it for existing installs - the media
// store and everything already cached in it are left untouched.
```

**[L909](./osu-local-favorites.user.js#L909)** · src L56

```js
// Housekeeping limits. Without them the store only ever grew: entries past
// their TTL stayed on disk until the same URL happened to be fetched again,
// half-downloaded tracks that were never replayed stayed forever, and "always"
// had no ceiling at all. Full-length previews are several MB each, so this is
// what keeps a long-lived install from quietly filling the browser's quota.
// The size ceiling is a user setting (Settings -> Media Cache -> Cache size
// limit): oldest entries are dropped past it.
```

**[L909](./osu-local-favorites.user.js#L909)** · src L63

```js
// "custom"|"100mb"|"250mb"|"512mb"|"1gb"|"2gb"|"5gb"|"unlimited"
```

**[L927](./osu-local-favorites.user.js#L927)** · src L81

```js
// Ceiling in bytes, or Infinity for "unlimited".
```

**[L933](./osu-local-favorites.user.js#L933)** · src L88

```js
// ...down to this fraction, so it is not re-triggered every write
```

**[L934](./osu-local-favorites.user.js#L934)** · src L89

```js
// abandoned half-downloads
```

**[L937](./osu-local-favorites.user.js#L937)** · src L92

```js
// URLs whose stored copy was discarded as unusable (see forgetCachedMedia).
// A lookup that was already in flight when that happened must not put the
// rejected bytes straight back into the memory LRU, or the next play would
// pick the broken copy again.
```

**[L954](./osu-local-favorites.user.js#L954)** · src L113

```js
// One sweep shortly after the first open of a page load, out of the
// way of startup work.
```

**[L956](./osu-local-favorites.user.js#L956)** · src L117

```js
// Fail soft - callers treat a null db exactly like "cache
// unavailable" and fall back to plain network URLs, same as if
// caching were switched off.
```

**[L978](./osu-local-favorites.user.js#L978)** · src L142

```js
// One write, resolved when the transaction has actually committed. It used
// to resolve as soon as put() was queued, so a failed write (quota, storage
// pressure) was invisible to callers - who then deleted the partial chunks
// and remembered the blob as cached even though nothing had been stored.
```

**[L991](./osu-local-favorites.user.js#L991)** · src L159

```js
// Resolves true only when the entry is really stored. A failed first attempt
// is most often quota, so the oldest entries are dropped to make room and the
// write is retried once.
```

**[L994](./osu-local-favorites.user.js#L994)** · src L165

```js
// Fresh bytes are being written, so this URL is trustworthy again.
```

**[L1002](./osu-local-favorites.user.js#L1002)** · src L174

```js
// Revoke every blob URL handed out from the cache - otherwise clearing
// the IndexedDB store still leaves those object URLs (and the Blobs
// behind them) alive in memory until the tab closes, and any <img>/
// <audio> still pointing at one would keep "working" despite the
// underlying cache entry no longer existing.
```

**[L1009](./osu-local-favorites.user.js#L1009)** · src L186

```js
// Half-downloaded tracks go too - otherwise "Clear cache" would
// report nothing cached while still holding megabytes of partial
// audio that nothing can ever play.
```

**[L1044](./osu-local-favorites.user.js#L1044)** · src L224

```js
// Oldest-cached first, until `bytesToFree` is covered. An entry that still has
// a live blob: URL (the playing track, covers on screen) is in use and is
// skipped, so making room never pulls media out from under the UI.
```

**[L1057](./osu-local-favorites.user.js#L1057)** · src L240

```js
// Frees at least `bytes` by dropping the oldest entries. Resolves the number
// of bytes actually freed (0 = nothing could be dropped).
```

**[L1065](./osu-local-favorites.user.js#L1065)** · src L250

```js
// Housekeeping sweep: drops entries past their TTL, abandoned half-downloads
// and, if the store is over CACHE_MAX_BYTES, the oldest entries. Throttled, and
// safe to call as often as convenient (after each finished download, once
// after the first open).
```

**[L1067](./osu-local-favorites.user.js#L1067)** · src L256

```js
// `force` skips the throttle - used when the user changes the size limit and
// expects the store to shrink right away.
```

**[L1079](./osu-local-favorites.user.js#L1079)** · src L270

```js
// 1. Entries past their TTL can never be served again.
```

**[L1083](./osu-local-favorites.user.js#L1083)** · src L275

```js
// 2. Half-downloads: abandoned (nothing written for a day), or left
// behind for a track whose complete copy is already stored. Rows from
// before chunks were timestamped count as abandoned.
```

**[L1099](./osu-local-favorites.user.js#L1099)** · src L294

```js
// 3. Size cap over what is left.
```

**[L1120](./osu-local-favorites.user.js#L1120)** · src L316

```js
// Used by the Settings panel to show how much is currently stored.
```

**[L1125](./osu-local-favorites.user.js#L1125)** · src L322

```js
// Partial chunks count toward the reported size: they occupy the
// same quota, and hiding them would make "Clear cache" look like it
// freed less than it actually did.
```

**[L1143](./osu-local-favorites.user.js#L1143)** · src L343

```js
// Fetches a URL's raw bytes as a Blob for caching, via GM_xmlhttpRequest
// rather than a page-context fetch(). osu!'s own CDN (assets.ppy.sh /
// b.ppy.sh) doesn't send permissive Access-Control-Allow-Origin headers,
// so a plain fetch() from here is blocked by the browser as a cross-origin
// network error before any bytes ever arrive - the image/audio still
// displays fine via <img>/<audio> (those aren't subject to CORS), but the
// cache store silently never gets populated, which is exactly why caching
// "worked" for nothing. GM_xmlhttpRequest runs outside the page's CORS
// sandbox (same mechanism already used for the GitHub/osu! API calls
// above), so it isn't affected. Falls back to a normal fetch() if this
// userscript manager doesn't support GM_xmlhttpRequest at all.
```

**[L1172](./osu-local-favorites.user.js#L1172)** · src L383

```js
// Reuses one blob: URL per cached source URL for the whole tab's
// lifetime, instead of minting a fresh one every time resolveCachedMediaUrl
// resolves the same cover/preview again (which happens on essentially
// every re-render - sorting, filtering, search, scroll-chunking all
// rebuild cards from scratch). Blob URLs are never garbage-collected just
// because the <img>/<audio> referencing them got removed from the DOM -
// only URL.revokeObjectURL() or a full page unload frees the underlying
// Blob - so without this, a long session doing a lot of re-rendering was
// steadily accumulating orphaned blob URLs (and, for full-length preview
// audio, several-MB Blobs behind each one) that never got released.
// sourceUrl -> objectURL for fresh cached blobs currently in use by <img>/
// <audio> elements. Object URLs live until revoked, so an uncapped map grows
// for the tab's lifetime - a long session browsing thousands of covers kept
// thousands of URLs alive. Capped LRU-style: minting past the cap revokes the
// oldest entry (safe to revoke - entries here are only "expected reuse"
// hints; the next resolve() re-mints from the still-cached Blob).
```

**[L1172](./osu-local-favorites.user.js#L1172)** · src L399

```js
// sourceUrl -> objectURL
```

**[L1177](./osu-local-favorites.user.js#L1177)** · src L404

```js
// re-mint for changed bytes
```

**[L1188](./osu-local-favorites.user.js#L1188)** · src L415

```js
// One definition of "this cache entry is usable right now", shared by the
// playback source choice, the streaming writer's pre-request check and
// resolveCachedMediaUrl below. They each used to re-derive it, so a change
// to the TTL rules could silently make one of them disagree with the others.
```

**[L1194](./osu-local-favorites.user.js#L1194)** · src L425

```js
// A tiny in-memory LRU of fully cached songs. IndexedDB reads are async and
// playback has to choose its source synchronously, inside the click that
// started it - so without this, a song cached seconds ago still opened a
// network request that was then immediately swapped away. With it, a repeat
// play (replay, back/next, loop, an auto-next round trip) starts from the
// local copy with no request at all.
```

**[L1195](./osu-local-favorites.user.js#L1195)** · src L432

```js
// sourceUrl -> { blob, cachedAt }
```

**[L1199](./osu-local-favorites.user.js#L1199)** · src L436

```js
// Explicitly rejected bytes (a local copy that failed to decode) must not
// come back through a late lookup; only a new cachePut clears this.
```

**[L1203](./osu-local-favorites.user.js#L1203)** · src L442

```js
// oldest first
```

**[L1207](./osu-local-favorites.user.js#L1207)** · src L446

```js
// Synchronous: the Blob for url when this session has already seen a fresh
// cached copy, else null. Never touches IndexedDB, so it is safe to call in
// the middle of a click/pointer handler.
```

**[L1214](./osu-local-favorites.user.js#L1214)** · src L456

```js
// LRU touch
```

**[L1219](./osu-local-favorites.user.js#L1219)** · src L461

```js
// Async boolean form of the same question - "is a request for this URL
// pointless?" - for callers that only need to decide whether to fetch.
```

**[L1231](./osu-local-favorites.user.js#L1231)** · src L475

```js
// Background fill for covers (and anything else resolved through
// resolveCachedMediaUrl). Every re-render (sort, filter, search, scroll) asks
// for the same URLs again before the first download has finished, and a first
// load of a big library asks for hundreds at once - so requests for the same
// URL share one download, and only a few run at a time instead of flooding the
// userscript manager with a request per card.
```

**[L1232](./osu-local-favorites.user.js#L1232)** · src L482

```js
// url -> Promise<boolean stored>
```

**[L1259](./osu-local-favorites.user.js#L1259)** · src L509

```js
// Resolves to a URL safe to hand straight to <img src> / <audio src>: a
// local blob: URL when a fresh cached copy exists, otherwise the original
// network URL unchanged - so a cache miss never delays first-time
// playback/display waiting on a full download. A miss also kicks off a
// background fetch to populate the cache for next time; fire-and-forget,
// not awaited by the caller either way. This runs on Firefox Android too
// now - caching should behave the same across browsers/platforms.
```

**[L1275](./osu-local-favorites.user.js#L1275)** · src L532

```js
// The blob just changed (first fetch, or a re-fetch after the old
// entry expired) - drop any object URL for the previous bytes so the
// next resolve mints one for the new blob instead of quietly serving
// stale content forever.
```

**[L1285](./osu-local-favorites.user.js#L1285)** · src L546

```js
// Returns the cached Blob for url when a fresh copy exists (per the current
// TTL setting), or null. Pure read: unlike resolveCachedMediaUrl it never
// kicks off a background fetch and never mints a blob: URL - callers use it
// when they need the raw bytes (playback source swap) rather than something
// to assign to an <img>/<audio> src.
```

**[L1290](./osu-local-favorites.user.js#L1290)** · src L556

```js
// Remember it so the next play of this song can pick the local copy
// synchronously, without even this lookup.
```

**[L1295](./osu-local-favorites.user.js#L1295)** · src L563

```js
// ── Cache-first source selection ────────────────────────────────────
// Playback has to decide its <audio> source *before* it calls play(), and
// on a persistent-cache hit that source has to be the local blob: URL - no
// remote preview request may be issued at all. Two helpers make that
// possible:
//
//   prewarmCachedPreview(url) - kicked off on pointer-down/hover/focus of a
//     card, so the IndexedDB read for that track has normally finished well
//     before its Play button is clicked.
//   lookupCachedBlob(url)     - the click-time question. Answered
//     synchronously (a microtask) when the prewarm, or an earlier play of
//     the same song, already hydrated the entry; otherwise it is one
//     IndexedDB read, bounded so a wedged storage backend can never stall
//     playback. The bound is orders of magnitude longer than a healthy read
//     and stays inside the ~5s transient-activation window a click grants,
//     so the play() that follows is still a gesture-driven call.
```

**[L1296](./osu-local-favorites.user.js#L1296)** · src L580

```js
// url -> in-flight lookup promise
```

**[L1298](./osu-local-favorites.user.js#L1298)** · src L582

```js
// One shared read per URL: a prewarm that is still running when the user
// clicks is awaited rather than restarted, and concurrent callers cannot
// stack duplicate IndexedDB reads.
```

**[L1311](./osu-local-favorites.user.js#L1311)** · src L598

```js
// Fire-and-forget hydration. Safe to call as often as the UI likes: a URL
// already in the LRU or already being read is skipped outright, and the
// read only ever populates the bounded LRU (never the object-URL cache, so
// prewarming tracks the user has not played holds no Blob alive).
```

**[L1318](./osu-local-favorites.user.js#L1318)** · src L609

```js
// Cache-first decision for playback. Resolves to the cached Blob when this
// browser holds a fresh copy, else null - and callers treat null as "use
// the network source". Synchronous fast path when already hydrated.
```

**[L1333](./osu-local-favorites.user.js#L1333)** · src L627

```js
// A timed-out lookup still populates the LRU when it eventually
// resolves, so the next play of this song decides synchronously.
```

**[L1340](./osu-local-favorites.user.js#L1340)** · src L636

```js
// Drops a cached copy entirely - used when the stored bytes turned out to
// be unusable (a local play that will not decode). The next play re-fetches
// from the network and caches a fresh copy.
```

**[L1355](./osu-local-favorites.user.js#L1355)** · src L654

```js
// ── Progressive ("while streaming") cache writes ────────────────────
// Caching a track used to be all-or-nothing: one whole-file GET issued
// alongside the media element's own request, written to IndexedDB only
// once the last byte had arrived, and skipped outright on Firefox Android.
// So a song skipped halfway wasted its entire download, a track whose tab
// was closed cached nothing, and nothing was ever written *while* the
// audio was still playing.
//
// This reads the response body as a stream and persists it in chunks as it
// arrives instead:
//   * bytes land in IndexedDB during playback, not after it finishes,
//   * an interrupted or skipped track keeps its partial chunks and resumes
//     with a Range request on the next play (If-Range, so a track whose
//     bytes changed server-side restarts cleanly instead of splicing two
//     different files together),
//   * completion assembles the chunks into the single `media` record the
//     rest of the cache - including playback's cache-first source swap -
//     already reads from, and the partial chunks are then dropped.
//
// fetch() needs CORS permission, which osu!'s own CDN does not grant; when
// the request is rejected before any bytes land this returns null so the
// caller can fall back to the GM_xmlhttpRequest whole-file path below (that
// one runs outside the page's CORS sandbox).
```

**[L1355](./osu-local-favorites.user.js#L1355)** · src L677

```js
// batch partial writes instead of one per network packet
```

**[L1356](./osu-local-favorites.user.js#L1356)** · src L678

```js
// url -> { promise, cancel }
```

**[L1428](./osu-local-favorites.user.js#L1428)** · src L750

```js
// The GM_ path: one whole-file request, written in a single go. Used when
// fetch() is unavailable or the stream was CORS-blocked before any bytes
// landed. Any partial chunks are discarded once the full copy is in.
```

**[L1432](./osu-local-favorites.user.js#L1432)** · src L757

```js
// Only a committed write may retire the partial chunks or count as
// cached; on a failed write they are still the best copy there is.
```

**[L1445](./osu-local-favorites.user.js#L1445)** · src L772

```js
// Chunks with no validator cannot be trusted to belong to the bytes the
// server would send now, so start over rather than resume onto them.
```

**[L1461](./osu-local-favorites.user.js#L1461)** · src L790

```js
// A 200 while we asked for a range means If-Range failed (the file
// changed) or the server ignored it - the body is the whole file again,
// so the chunks on disk no longer line up with it.
```

**[L1471](./osu-local-favorites.user.js#L1471)** · src L803

```js
// One stored row per flush (~1 MB), not one per network packet: a
// multi-MB song used to become hundreds of tiny rows, each one read back
// and stitched together at the end.
```

**[L1492](./osu-local-favorites.user.js#L1492)** · src L827

```js
// A failed batch leaves a hole, and everything after a hole would be
// spliced onto the wrong offset when the file is assembled - so retry
// once after making room, and otherwise stop with a clean prefix.
```

**[L1503](./osu-local-favorites.user.js#L1503)** · src L841

```js
// keep what already arrived, for a resume later
```

**[L1517](./osu-local-favorites.user.js#L1517)** · src L855

```js
// A connection that dies mid-body can end the stream without an error,
// which used to be cached as if the whole song had arrived - and a
// truncated MP3 still decodes, so it then played short forever. When the
// server declared a length (and nothing re-encoded the body), the bytes
// received must match it; otherwise the chunks stay for a resume.
```

**[L1523](./osu-local-favorites.user.js#L1523)** · src L866

```js
// Chunks are only retired once the assembled copy is really stored.
```

**[L1530](./osu-local-favorites.user.js#L1530)** · src L874

```js
// Nothing usable arrived (CORS-blocked, offline, mirror error) and no
// bytes were persisted - let the caller try the GM_ whole-file path.
```

**[L1540](./osu-local-favorites.user.js#L1540)** · src L886

```js
// Already fully cached (this is the track that is playing from the cache):
// nothing to download, just make sure no half-file chunks are left behind.
```

**[L1544](./osu-local-favorites.user.js#L1544)** · src L892

```js
// A stale/expired entry cannot be resumed onto - drop it with its chunks.
```

**[L1556](./osu-local-favorites.user.js#L1556)** · src L905

```js
// Starts caching `url` while it is being streamed by the media element.
// Returns a Promise<boolean> (true = a complete copy is now cached). Only
// one write per URL can be in flight; a repeat call for the same track
// returns the existing one. `isStillWanted()` is polled as bytes arrive so
// a skipped track stops consuming bandwidth immediately - and the single
// `cancel()` on the returned handle stops it without waiting for the next
// packet.
```

**[L1578](./osu-local-favorites.user.js#L1578)** · src L934

```js
/* already settled */
```

**[L1584](./osu-local-favorites.user.js#L1584)** · src L941

```js
// Used only when the Song metadata could not be read. The mirror's
// transitional preview is about 30 seconds; duration_sec is the preferred
// check because a real song may itself be short.
```


## `src/ui/media-session.js`

13 comments · userscript [L1587](./osu-local-favorites.user.js#L1587) - [L1738](./osu-local-favorites.user.js#L1738)

**[L1587](./osu-local-favorites.user.js#L1587)** · src L4

```js
// ═══ Media Session ═══
// Everything that talks to navigator.mediaSession - the OS-level media
// widget (Android notification / lock screen, macOS Now Playing, Windows
// SMTC). Split out of ui/audio-player.js, which is now only responsible
// for the <audio> element and the in-page mini-player.
//
// Every entry point is defensive on purpose. Media Session is unevenly
// implemented: Firefox Android has it but not setPositionState on older
// builds, some Chromium builds throw on a setActionHandler for an action
// they don't support, and Safari implements a subset. A throw from any of
// these would otherwise propagate into an <audio> event handler and break
// playback control that has nothing to do with the OS widget.
```

**[L1592](./osu-local-favorites.user.js#L1592)** · src L22

```js
// osu!'s canonical cover renditions and their real pixel dimensions.
// Supplying `sizes` lets the OS pick the right rendition instead of
// downloading whichever one happens to be listed first - Android's
// notification wants something small, the lock screen wants the large one.
// Only applied to URLs that match osu!'s own cover path, so a custom or
// cached URL is still offered, just without a size hint.
```

**[L1611](./osu-local-favorites.user.js#L1611)** · src L47

```js
// Returns several renditions rather than one. The previous single-entry
// version handed Android a 900x250 banner for a 64px notification icon,
// which some devices simply refused to decode and rendered as a blank tile.
```

**[L1625](./osu-local-favorites.user.js#L1625)** · src L64

```js
// Host pinning: covers can arrive from an untrusted import (shared
// Gists); only osu!/ppy.sh artwork is handed to MediaSession.
```

**[L1633](./osu-local-favorites.user.js#L1633)** · src L74

```js
// Set metadata only when the track actually changed. The old code rebuilt
// a MediaMetadata on every "play" event, including a resume from pause -
// on Android that re-posts the notification, which visibly flickers the
// artwork and, on some builds, resets the OS widget's seek bar.
```

**[L1651](./osu-local-favorites.user.js#L1651)** · src L96

```js
// A rejected MediaMetadata (bad artwork URL, unsupported field) must
// not leave a stale signature behind, or the next attempt is skipped.
```

**[L1663](./osu-local-favorites.user.js#L1663)** · src L110

```js
// Firefox for Android can expose a live/cross-origin stream to the media
// notification before it has derived a finite HTMLMediaElement duration.
// The Hinamizawa Song response already carries that duration, so it stands
// in rather than publishing the 00:00-00:00 range shown by some devices.
```

**[L1675](./osu-local-favorites.user.js#L1675)** · src L126

```js
// playbackRate must be > 0: the spec rejects 0, which is exactly what a
// media element reports in some paused/stalled states, and the resulting
// throw used to be swallowed - leaving the OS widget frozen on the
// previous track's position for the rest of the session.
```

**[L1680](./osu-local-favorites.user.js#L1680)** · src L135

```js
// Some builds reject position updates while media is transitioning
// between sources; playback itself is unaffected.
```

**[L1687](./osu-local-favorites.user.js#L1687)** · src L144

```js
// Called with no argument, this resets the state. The old code never
// did this, so after playback stopped the OS widget kept showing the
// last track's elapsed time against its full duration.
```

**[L1696](./osu-local-favorites.user.js#L1696)** · src L156

```js
// Unsupported action - the browser tells us by throwing.
```

**[L1700](./osu-local-favorites.user.js#L1700)** · src L161

```js
// Previous/next are registered separately from the transport controls
// because they must reflect whether a queue exists. Registering them
// unconditionally (as before) makes Android draw enabled skip buttons that
// silently do nothing whenever playback was started outside the panel.
```

**[L1738](./osu-local-favorites.user.js#L1738)** · src L203

```js
// fastSeek is what the spec asks us to honour for scrub gestures; it
// is not implemented everywhere, so fall back to a normal seek.
```


## `src/ui/audio-player.js`

26 comments · userscript [L1768](./osu-local-favorites.user.js#L1768) - [L2002](./osu-local-favorites.user.js#L2002)

**[L1768](./osu-local-favorites.user.js#L1768)** · src L16

```js
// Singleton <audio> element, shared across every card's preview button
// and the Now Playing bar. Created once per page load and reused for the
// lifetime of the tab, so its listeners key off dynamic `_np*`/`_queue*`
// properties (reassigned by whichever panel is currently open) rather
// than closing over any one panel's local variables, which would go
// stale the moment that panel is closed and reopened.
```

**[L1771](./osu-local-favorites.user.js#L1771)** · src L25

```js
// Keep a real media element alive for the lifetime of the page. Using a
// normal network URL for playback (rather than swapping in blob: URLs
// after an async cache lookup) keeps Firefox Android's media session tied
// to a conventional media resource and, importantly, preserves the
// original click's user activation for audio.play().
// Firefox Android on Redmi devices starts media more reliably when the
// element is not asked to fetch metadata before the tap. Calling play()
// below still starts the request immediately from the user gesture.
```

**[L1800](./osu-local-favorites.user.js#L1800)** · src L62

```js
// Source URL this track's bytes are cached under (the network URL, not
// the blob: URL the element may end up playing), plus whether the current
// source is that local copy. Owned by ui/main-panel.js
// startPlayback(); initialized here so the page-lifetime element always
// has the properties before any track is chosen.
```

**[L1802](./osu-local-favorites.user.js#L1802)** · src L69

```js
// Cache-first source selection bookkeeping, owned by
// ui/main-panel.js startPlayback(): a monotonic id for the current
// play request (so a source decided after the user moved on is dropped)
// and the track whose source decision is still in flight (so its card's
// button does not act on the previous track's still-assigned src).
```

**[L1813](./osu-local-favorites.user.js#L1813)** · src L85

```js
// Kept as a property so the panel (which owns the Now Playing bar) can
// force a position refresh right after it swaps the source, without
// importing the media-session module itself.
```

**[L1819](./osu-local-favorites.user.js#L1819)** · src L94

```js
// Queue availability can change between tracks (a preview started from
// a card has no queue; one started from the panel list does), so the
// skip handlers are re-evaluated on each play rather than once at
// element creation.
```

**[L1826](./osu-local-favorites.user.js#L1826)** · src L105

```js
// Freeze the OS widget at the exact paused position rather than
// whatever it last extrapolated to.
```

**[L1828](./osu-local-favorites.user.js#L1828)** · src L109

```js
// Deliberately NOT bound to "timeupdate": that event fires every ~250ms
// while foregrounded but gets throttled to roughly once/sec by the
// browser when the tab is backgrounded - which is exactly when someone
// is actually looking at this position (lock screen / OS media widget,
// not our own in-page mini-player). Each throttled call reports a
// position that's already ~1s stale by the time it reaches the native
// widget, so the widget snaps back to it before resuming forward - a
// visible "rewinds 1s every second" stutter. setPositionState() exists
// precisely so the OS can extrapolate the position itself between
// updates; we only need to call it on real discontinuities.
```

**[L1848](./osu-local-favorites.user.js#L1848)** · src L139

```js
// The source has moved off the mirror URL; stop treating a local copy of
// those bytes as the current source, and let object-URL cleanup follow
// the fallback URL from here on.
```

**[L1851](./osu-local-favorites.user.js#L1851)** · src L145

```js
// Cache-first for the official preview too: when a fresh local copy
// exists the element is handed that blob: URL and the remote preview URL
// is never assigned, so no request is made for it. This runs from an
// asynchronous media error, so it reads the synchronous in-memory copy
// rather than awaiting a lookup; a cold/missing entry prewarms for next
// time and uses the network URL exactly as before. A cached copy that
// itself fails is caught by the error handler below, which drops it and
// retries from the network once.
```

**[L1868](./osu-local-favorites.user.js#L1868)** · src L170

```js
// Source replacement can make Firefox briefly report the failed mirror
// as paused before the new preview begins. Keep the panel's mini-player
// attached through that hand-off; the guards ensure an error or a newly
// selected track can still remove it normally.
```

**[L1887](./osu-local-favorites.user.js#L1887)** · src L193

```js
// The fallback can be selected from an asynchronous media error,
// outside the original tap's user-activation task. A rejected play()
// here does not mean the official preview failed; keep Now Playing
// visible so the user can resume it with the play control. A genuine
// media error on this fallback still reaches the error handler below.
// This used to read a variable that belongs to showFavoritesPanel()
// in ui/main-panel.js and was never in scope in this function,
// so the line threw a ReferenceError inside a promise catch. It
// surfaced only as an unhandled rejection, and the mini-player it was
// meant to keep on screen stayed hidden. The helper below already
// makes the same decision, from state that is actually reachable.
```

**[L1898](./osu-local-favorites.user.js#L1898)** · src L215

```js
// Container/MP3 duration rounding is normally sub-second. Permit a
// small margin, but a 30s fallback for a multi-minute song is never
// mistaken for a full track.
```

**[L1904](./osu-local-favorites.user.js#L1904)** · src L224

```js
// Returns true when it has swapped the source, so callers know the
// metadata they are looking at belongs to a clip being discarded.
```

**[L1911](./osu-local-favorites.user.js#L1911)** · src L233

```js
// One handler for everything that has to happen when metadata arrives.
// There used to be three separate "loadedmetadata" listeners whose
// relative order was load-order-dependent; the fallback decision in
// particular has to run before the position is published, or the OS
// widget briefly advertises the duration of a clip we are about to
// throw away.
```

**[L1912](./osu-local-favorites.user.js#L1912)** · src L240

```js
// The mirror endpoint uses a short osu! clip when it has no full
// track. duration_sec, when available, avoids treating a genuinely
// short full song as that fallback.
```

**[L1917](./osu-local-favorites.user.js#L1917)** · src L248

```js
// A mirror can be cold, unavailable, or return a response Firefox cannot
// decode. Retry the official osu! clip once, but only for the source that
// is currently active so a late error from an old track cannot interrupt a
// newly selected one.
```

**[L1920](./osu-local-favorites.user.js#L1920)** · src L255

```js
// A local copy that will not decode (an interrupted write, storage
// corruption, a codec the browser cannot pull out of a Blob) is dropped
// from the cache and retried from the network once instead of looking
// like a dead track. The retry uses whichever URL those bytes were
// cached from, so an unreachable mirror still falls through to the
// official preview by the branch below.
```

**[L1931](./osu-local-favorites.user.js#L1931)** · src L272

```js
// Not seekable until metadata for the retry is in - fine, it starts
// from the top.
```

**[L1944](./osu-local-favorites.user.js#L1944)** · src L287

```js
// The fallback is normally the raw official URL, but it is a blob: URL
// when that preview was served from the cache - compare against
// whichever source it actually selected.
```

**[L1951](./osu-local-favorites.user.js#L1951)** · src L297

```js
// Do NOT clearMediaSession() before a loop/auto-next: nulling the
// metadata (even for one synchronous tick before startPlayback()
// re-populates it) can make Android treat the session as ended and
// tear down the notification's foreground service. On a locked
// screen there is nothing left keeping the page alive after that, so
// playback dies a few seconds into the *next* track even though the
// handoff itself looked instantaneous in the console. Only clear the
// session on the branch below where playback is actually stopping.
```

**[L1953](./osu-local-favorites.user.js#L1953)** · src L307

```js
// A rejected play() here (autoplay policy after a long lock-screen
// idle) previously surfaced as an unhandled rejection, and left the
// OS widget advertising "playing" for audio that had stopped.
```

**[L1972](./osu-local-favorites.user.js#L1972)** · src L329

```js
// Single teardown for "playback has stopped for good" - end of queue, or
// both the mirror source and its one official fallback failing.
//
// This was previously two near-identical copies (the "ended" handler and
// resetPlaybackAfterError) which had already drifted apart: only one of
// them reset the card button's _playing flag, so a preview that failed
// outright left its button stuck showing pause until the panel was
// reopened. One copy also dereferenced _activeBar.parentElement with no
// guard, which throws if the row was re-rendered while the clip loaded.
```

**[L1995](./osu-local-favorites.user.js#L1995)** · src L361

```js
// Drop the now-dead skip handlers too, so the OS widget stops offering
// next/previous for a queue that no longer exists.
```

**[L1999](./osu-local-favorites.user.js#L1999)** · src L367

```js
// Called by the panel when a source fails before any card binding exists.
```

**[L2002](./osu-local-favorites.user.js#L2002)** · src L372

```js
// Builds the ordered list of download options for a beatmapset. Official
// download offers both a with-video and no-video (confirmed real
// ?noVideo=1 param) variant - previously this was hardcoded to
// video-only. Guests always see mirrors first, since Official won't work
// for them no matter what; logged-in users get their configured order.
```


## `src/ui/popup-menu.js`

3 comments · userscript [L2005](./osu-local-favorites.user.js#L2005) - [L2039](./osu-local-favorites.user.js#L2039)

**[L2005](./osu-local-favorites.user.js#L2005)** · src L1

```js
// Shared shell for the small floating popovers (download, collections,
// filter). Owns everything that used to be copy-pasted into each of them:
// one instance per id (a second tap on the same anchor closes it),
// dismissal on outside click / Escape / page scroll, and placement under the
// anchor, flipping above when it would overflow the viewport.
//
// Returns null when this call merely closed an already-open menu for the same
// anchor. Otherwise { menu, cleanup, show }: fill `menu`, then call show().
```

**[L2020](./osu-local-favorites.user.js#L2020)** · src L24

```js
// A scroll *inside* the menu (long genre/tag or collections list) must not
// close it; only page/panel scrolls that move the anchor away do.
```

**[L2039](./osu-local-favorites.user.js#L2039)** · src L45

```js
// Deferred so the click that opened the menu doesn't immediately close it.
```


## `src/ui/download-menu.js`

2 comments · userscript [L2075](./osu-local-favorites.user.js#L2075) - [L2111](./osu-local-favorites.user.js#L2111)

**[L2075](./osu-local-favorites.user.js#L2075)** · src L33

```js
// Shows a small popover of download options (official + enabled mirrors)
// anchored to the triggering element. Appended to <body> - not the
// scrollable panel list - so it's never clipped by overflow:auto. Closes
// on outside click, Escape, or if any ancestor (e.g. the panel list)
// scrolls out from under it.
```

**[L2111](./osu-local-favorites.user.js#L2111)** · src L75

```js
// ── Genre + Tags term collection ──
// Builds two frequency-counted term lists from the current favorites:
// one from the `genre` field (osu!'s own taxonomy - a handful of values),
// one from the freeform `tags` field (can be large). Each favorite counts
// once per unique term even if it shows up twice (e.g. a tag repeated).
// Any tag string that collides with a genre value is dropped from the tag
// list so the same term never appears twice across both sections.
//
// Tag text gets light cleanup before it's used as a dedup key: NFKC
// normalization folds full-width Latin letters and other compatibility
// variants down to their plain form (so e.g. a full-width "Ｋａｓａｉ" and
// an ordinary "Kasai" collapse into one entry instead of two near-
// duplicate rows), and stray leading/trailing punctuation is trimmed.
// Display text keeps the normalized form's original casing/script -
// this only removes accidental duplicates, it doesn't translate or
// otherwise rewrite non-Latin tags.
```


## `src/ui/genre-filter.js`

4 comments · userscript [L2114](./osu-local-favorites.user.js#L2114) - [L2146](./osu-local-favorites.user.js#L2146)

**[L2114](./osu-local-favorites.user.js#L2114)** · src L1

```js
// ── Genre + tag term extraction ──
// The popover that renders these lives in ui/filter-menu.js and the
// category wiring in ui/filters.js; this module owns only the question of
// what counts as a genre, what counts as a tag, and how a tag is spelled.
```

**[L2121](./osu-local-favorites.user.js#L2121)** · src L12

```js
// lowercase key -> { display, count }
```

**[L2142](./osu-local-favorites.user.js#L2142)** · src L33

```js
// A term that's ever used as an actual genre value is a genre, not a tag.
```

**[L2146](./osu-local-favorites.user.js#L2146)** · src L38

```js
// Whether a favorite matches a given genre/tag filter key (both compared
// lowercase, tags run through the same NFKC-normalize + trim as the
// popover list) - true if it's that favorite's genre, or one of its tags.
```


## `src/ui/filter-menu.js`

6 comments · userscript [L2156](./osu-local-favorites.user.js#L2156) - [L2342](./osu-local-favorites.user.js#L2342)

**[L2156](./osu-local-favorites.user.js#L2156)** · src L3

```js
// ── Generic filter popover ──
// One popover implementation shared by every toolbar filter (Date, Title,
// Artist, Status, Genre). It was previously written once, inline, for the
// genre filter; every other toolbar button was sort-only. Generalising it
// here is what lets all five categories behave identically:
//
//   3-tap cycle per row: neutral -> include (green) -> exclude (red) -> neutral
//
// Within one category, "include" terms are OR'd together and any "exclude"
// term always drops the entry, even if it would otherwise match an include.
// (Across categories the results are AND'd - see data model in ui/filters.js.)
//
// `state` is { [termKey]: "include" | "exclude" }; onApply is called after
// every tap with a fresh copy, so the caller re-renders live without the
// menu closing.
//
// `config`:
//   collect()      -> [{ label, terms: [{ key, display, count }], cap? }]
//   hint           -> the small explainer line at the top
//   searchable     -> show the live filter box (for long lists)
//   placeholder    -> filter box placeholder
//   emptyText      -> shown when collect() returns nothing at all
//   sortOptions    -> [{ asc, label }] pinned above everything else - the
//                     category's own two-way sort (Newest/Oldest, A-Z/Z-A).
//                     Omitted entirely for a category with no natural order
//                     (Status). Selecting one re-sorts the whole list; it is
//                     a single live choice, not an include/exclude term, so
//                     it has no neutral state and clicking the active option
//                     again is a no-op.
//   isSortActive   -> whether THIS category currently drives the list order
//   sortAsc        -> current direction, meaningful only if isSortActive
//   onSortSelect(asc) -> called on a sort pick; omitted if sortOptions is
```

**[L2158](./osu-local-favorites.user.js#L2158)** · src L38

```js
// Long lists (tags, artists) used to build a DOM row per term on open,
// which is where the multi-second "click handler" jank came from. Rows are
// capped; the live filter box (with its own larger cap) reaches the rest.
```

**[L2174](./osu-local-favorites.user.js#L2174)** · src L57

```js
// ── Sort row ──
// Sits above the term list because it answers a different question
// ("what order is the whole list in") from everything below it ("which
// rows are in the list at all"). A single live choice - no neutral state,
// so the two options just swap which one is highlighted.
```

**[L2201](./osu-local-favorites.user.js#L2201)** · src L89

```js
// already active
```

**[L2271](./osu-local-favorites.user.js#L2271)** · src L159

```js
// Build off-DOM, then attach once - avoids a forced layout per row.
```

**[L2342](./osu-local-favorites.user.js#L2342)** · src L231

```js
// Closes whichever filter popover is open, if any. Used when the panel is
// torn down or the view switches to Settings, so a popover is never left
// floating over unrelated content.
```


## `src/ui/filters.js`

7 comments · userscript [L2348](./osu-local-favorites.user.js#L2348) - [L2617](./osu-local-favorites.user.js#L2617)

**[L2348](./osu-local-favorites.user.js#L2348)** · src L4

```js
// ── Toolbar filter categories ──
// Date / Title / Artist / Status used to be sort-only buttons while Genre
// was the single real filter. Each category now carries filter terms of its
// own, and all of them go through the same popover (ui/filter-menu.js) and
// the same include/exclude semantics:
//
//   within a category : includes are OR'd, any exclude always drops the entry
//   across categories : results are AND'd
//
// A descriptor is { id, label, searchable, collect(favs), matches(f, key) }.
// `collect` returns popover sections; `matches` answers whether one favorite
// satisfies one term key. Sorting stays a separate control - see the sort
// row in ui/main-panel.js.
```

**[L2350](./osu-local-favorites.user.js#L2350)** · src L20

```js
// Date terms are deliberately cumulative ranges rather than disjoint
// buckets: "Last 30 days" should include what "Last 7 days" matched, which
// is how anyone reads a date filter. Counts follow the same rule.
```

**[L2391](./osu-local-favorites.user.js#L2391)** · src L64

```js
// Title has no natural taxonomy, so it filters by first character - the
// same grouping an alphabetical list would show. Non-Latin titles (common
// on osu!) collapse into one "Other" row rather than being dropped.
```

**[L2454](./osu-local-favorites.user.js#L2454)** · src L130

```js
// osu!'s own ranking states, in the order the website presents them rather
// than by count - a status list that reorders itself as the library grows
// is harder to use than a fixed one.
```

**[L2509](./osu-local-favorites.user.js#L2509)** · src L188

```js
// A category with `sortField` set also drives the main list's ordering, and
// carries `sortOptions` for the two-way choice pinned at the top of its own
// popover (see filter-menu.js) - there is no separate sort row in the
// toolbar; each button now does both jobs. `sortField` is the key
// renderList()'s comparator switches on (ui/main-panel.js), and each
// option's `asc` is the sortAsc value that choice sets. Status has neither:
// ranking status has no natural order worth sorting the whole list by, so it
// stays filter-only.
```

**[L2593](./osu-local-favorites.user.js#L2593)** · src L280

```js
// Flattening the state once per render, rather than per favorite, keeps a
// 500-row rebuild from re-deriving the same include/exclude lists 500 times.
```

**[L2617](./osu-local-favorites.user.js#L2617)** · src L306

```js
// Convenience wrapper for the popover: hands each category the current
// favorites store without every call site importing storage.
```


## `src/ui/collections-menu.js`

1 comments · userscript [L2737](./osu-local-favorites.user.js#L2737) - [L2737](./osu-local-favorites.user.js#L2737)

**[L2737](./osu-local-favorites.user.js#L2737)** · src L119

```js
// ── Per-card "add to collection" popover ──
// Toggle-style checklist (a map can belong to several collections at once),
// plus the same inline "new collection" creator as the toolbar selector.
```


## `src/api/gist-backup.js`

11 comments · userscript [L2822](./osu-local-favorites.user.js#L2822) - [L2944](./osu-local-favorites.user.js#L2944)

**[L2822](./osu-local-favorites.user.js#L2822)** · src L3

```js
// ═══ GitHub Gist Backup ═══
```

**[L2824](./osu-local-favorites.user.js#L2824)** · src L6

```js
// ── osu! API v2 (OAuth2 authorization-code) storage keys ──
```

**[L2826](./osu-local-favorites.user.js#L2826)** · src L9

```js
// {access,refresh,expires_at}
```

**[L2829](./osu-local-favorites.user.js#L2829)** · src L12

```js
// The redirect URI users must register on their osu! OAuth application.
// Must match EXACTLY (scheme/host/path, no trailing slash).
```

**[L2834](./osu-local-favorites.user.js#L2834)** · src L19

```js
// "private" | "public"
```

**[L2877](./osu-local-favorites.user.js#L2877)** · src L62

```js
// Looks for a gist already containing our backup filename - lets a
// reconnect (new browser/device) pick up an existing backup instead of
// silently creating a duplicate.
```

**[L2884](./osu-local-favorites.user.js#L2884)** · src L72

```js
// GitHub reports each gist's real visibility as a boolean `public` on the
// gist object (list, get, create and update responses all carry it). This is
// the source of truth - the stored GH_PRIVACY_KEY is only ever a mirror of it
// for a linked gist, and only decides visibility for a gist not yet created.
```

**[L2889](./osu-local-favorites.user.js#L2889)** · src L81

```js
// Links a gist as the backup target and adopts its real visibility, so the
// Settings toggle shows what the gist actually is instead of a default.
```

**[L2898](./osu-local-favorites.user.js#L2898)** · src L92

```js
// Asks GitHub what a linked gist really is, and syncs the stored setting to
// it. Resolves "public" | "private", or null when it could not be read
// (offline, token revoked) - callers must treat null as "unknown" and leave
// the setting alone rather than guess.
```

**[L2920](./osu-local-favorites.user.js#L2920)** · src L118

```js
// Fetches and parses the backup file from a gist. Falls back to raw_url
// when GitHub truncates large file content in the API response.
```

**[L2944](./osu-local-favorites.user.js#L2944)** · src L144

```js
// Pulls a gist id out of either a raw id or a pasted gist URL
// (https://gist.github.com/user/<id> or the api.github.com form).
```


## `src/api/osu-api.js`

31 comments · userscript [L2953](./osu-local-favorites.user.js#L2953) - [L3200](./osu-local-favorites.user.js#L3200)

**[L2953](./osu-local-favorites.user.js#L2953)** · src L8

```js
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
```

**[L2966](./osu-local-favorites.user.js#L2966)** · src L37

```js
// Random state guards against CSRF on the callback.
```

**[L2975](./osu-local-favorites.user.js#L2975)** · src L47

```js
// osu! answers /oauth/authorize with 401 (rendered as a plain browser
// error, no osu! page) when the Application Callback URL registered for
// this Client ID does not exactly match our redirect_uri. Probe the exact
// authorize URL first and route the user back with an explanation instead
// of leaving them on an opaque error page.
```

**[L2993](./osu-local-favorites.user.js#L2993)** · src L70

```js
// Pre-flight itself failed (offline etc.) - still attempt the redirect,
// the browser will surface its own error.
```

**[L2998](./osu-local-favorites.user.js#L2998)** · src L77

```js
// osu! documents this endpoint as application/x-www-form-urlencoded. A
// JSON body can make the authorization-code exchange fail even after the
// user successfully approves the app.
```

**[L3027](./osu-local-favorites.user.js#L3027)** · src L109

```js
// refresh 1 min early
```

**[L3031](./osu-local-favorites.user.js#L3031)** · src L113

```js
// Returns a Promise<string> with a valid access token. Refreshes (and
// retries once after a refresh) automatically. Rejects when not configured
// or when both access and refresh tokens are dead.
```

**[L3038](./osu-local-favorites.user.js#L3038)** · src L123

```js
// Deduplicate concurrent refreshes
```

**[L3039](./osu-local-favorites.user.js#L3039)** · src L125

```js
// Per osu! docs: the refresh grant is also form-urlencoded and re-states
// the original scope; omitting scope would also be accepted (existing
// scopes are reused), but being explicit avoids any manager-side
// normalization surprises.
```

**[L3049](./osu-local-favorites.user.js#L3049)** · src L139

```js
// Refresh dead → force a clean reconnect
```

**[L3057](./osu-local-favorites.user.js#L3057)** · src L148

```js
// ── Rate limiting / queuing (per https://osu.ppy.sh/docs/index.html) ──
// osu! asks clients to stay under ~60 requests/minute (≈1/sec), honor
// Retry-After on HTTP 429, use exponential backoff, and cache responses.
// All of that is enforced centrally here so every osuApiGet() caller is
// compliant regardless of where the call originates.
```

**[L3057](./osu-local-favorites.user.js#L3057)** · src L153

```js
// ≥1s between requests
```

**[L3058](./osu-local-favorites.user.js#L3058)** · src L154

```js
// serializes request pacing
```

**[L3059](./osu-local-favorites.user.js#L3059)** · src L155

```js
// absolute ts while server says wait
```

**[L3060](./osu-local-favorites.user.js#L3060)** · src L156

```js
// grows exponentially on repeat 429s
```

**[L3061](./osu-local-favorites.user.js#L3061)** · src L157

```js
// path → response JSON (session cache)
```

**[L3068](./osu-local-favorites.user.js#L3068)** · src L164

```js
// Serializes every API call through one queue with ≥OSU_API_MIN_GAP_MS
// spacing, plus any server-mandated or backoff wait before dispatching.
```

**[L3084](./osu-local-favorites.user.js#L3084)** · src L182

```js
// Docs good-practice #4: cache retrieved data and reuse it.
```

**[L3092](./osu-local-favorites.user.js#L3092)** · src L191

```js
// Honor the server's Retry-After, then apply exponential backoff
// for any further 429s (docs good-practice #3).
```

**[L3098](./osu-local-favorites.user.js#L3098)** · src L199

```js
// successful window - reset backoff
```

**[L3100](./osu-local-favorites.user.js#L3100)** · src L201

```js
// Access token died early (revoked/password change): drop cached
// token so the next osuApiGetToken() refreshes, then retry once.
```

**[L3112](./osu-local-favorites.user.js#L3112)** · src L215

```js
// One transparent retry after a rate-limit wait has elapsed.
```

**[L3128](./osu-local-favorites.user.js#L3128)** · src L232

```js
// Evict oldest inserted entry
```

**[L3139](./osu-local-favorites.user.js#L3139)** · src L244

```js
// Runs once at document-start. If we're back on osu.ppy.sh with ?code= &
// ?state= from our own authorize redirect, exchange the code before osu!
// renders its 404 page, then rewrite the URL clean.
```

**[L3147](./osu-local-favorites.user.js#L3147)** · src L255

```js
// hide ?code=… immediately
```

**[L3159](./osu-local-favorites.user.js#L3159)** · src L267

```js
/* never break page load over this */
```

**[L3162](./osu-local-favorites.user.js#L3162)** · src L270

```js
// Fetches a beatmapset through the API v2 and normalizes it into LOF's
// stored-favorite shape (identical fields to getBeatmapDataFromJSON - the
// website's embedded JSON is basically the same object as the API payload).
```

**[L3165](./osu-local-favorites.user.js#L3165)** · src L276

```js
// The API does not always include the featured-artist marker. `null`
// means "not supplied" so enrichment can preserve a known value from
// the existing favorite instead of turning it off during re-enrichment.
```

**[L3169](./osu-local-favorites.user.js#L3169)** · src L283

```js
// Creates the backup gist on first run, otherwise updates the linked one.
// Note: GitHub does not allow flipping a gist's public/private flag after
// creation, so a genuine privacy change (confirmed against the linked gist's
// real visibility in Settings) clears GH_GIST_ID_KEY and this naturally
// creates a fresh gist with the new visibility on the next call. Every
// create/update response is also used to keep the stored visibility setting
// equal to what the linked gist actually is.
```

**[L3187](./osu-local-favorites.user.js#L3187)** · src L308

```js
// A user can delete the linked gist directly on GitHub. Treat its 404
// as a stale local link, create a replacement, and relink it so both
// manual and automatic backups recover on the same attempt.
```

**[L3200](./osu-local-favorites.user.js#L3200)** · src L324

```js
// Debounced auto-backup - call this after every favorites mutation.
// No-ops unless the user has connected GitHub and switched auto-update on.
// Debouncing avoids hammering the API when several maps are favorited in
// a row (e.g. the "Favorite all" bulk button).
```


## `src/data/beatmap-extraction.js`

15 comments · userscript [L3219](./osu-local-favorites.user.js#L3219) - [L3452](./osu-local-favorites.user.js#L3452)

**[L3219](./osu-local-favorites.user.js#L3219)** · src L1

```js
// ═══ Beatmap data extraction ═══
// Turns a beatmapset object (the page's embedded JSON or an API v2 response)
// into the stored-favorite shape. `featuredFallback` is what
// is_artist_featured becomes when the source doesn't say: the page path
// passes false, the API path passes null so enrichment can keep a known value.
```

**[L3263](./osu-local-favorites.user.js#L3263)** · src L50

```js
// Skip cards inside pinned scores section
```

**[L3276](./osu-local-favorites.user.js#L3276)** · src L64

```js
// ── Title ────────────────────────────────────────────────────
// .beatmap-playcount__title (Most Played rows) is handled alongside
// the regular panel selectors - its text also carries a trailing
// "[Difficulty]" and an inline "by Artist" span, both stripped below,
// since we're favouriting the *set*, not one specific diff.
```

**[L3294](./osu-local-favorites.user.js#L3294)** · src L87

```js
// ── Artist ───────────────────────────────────────────────────
// Use dedicated semantic elements first; fall back to filtered info-row text.
// Never read raw info-row text without stripping stat nodes - doing so causes
// play counts / fav counts / dates to bleed into the artist field.
```

**[L3300](./osu-local-favorites.user.js#L3300)** · src L97

```js
// Most Played rows - text is "by Artist", stripped below
```

**[L3330](./osu-local-favorites.user.js#L3330)** · src L127

```js
// ── Creator (mapper) ─────────────────────────────────────────
```

**[L3336](./osu-local-favorites.user.js#L3336)** · src L134

```js
// Most Played rows - username only, no "mapped by " text to strip
```

**[L3369](./osu-local-favorites.user.js#L3369)** · src L167

```js
// source is not present in listing card DOM - leave blank rather than
// accidentally capturing stats / date text from info-row nodes
```

**[L3371](./osu-local-favorites.user.js#L3371)** · src L171

```js
// Extract cover URL - try multiple methods
```

**[L3373](./osu-local-favorites.user.js#L3373)** · src L174

```js
// Method 1: computed style --bg custom property on cover element
```

**[L3382](./osu-local-favorites.user.js#L3382)** · src L184

```js
// Method 2: img inside cover
```

**[L3390](./osu-local-favorites.user.js#L3390)** · src L193

```js
// Method 3: any img in card that looks like a cover
```

**[L3400](./osu-local-favorites.user.js#L3400)** · src L204

```js
// First image that's not an icon
```

**[L3409](./osu-local-favorites.user.js#L3409)** · src L214

```js
// Normalize URL
```

**[L3452](./osu-local-favorites.user.js#L3452)** · src L258

```js
// Walk up from the button and find the smallest ancestor that contains
// links to exactly one distinct beatmapset id. This works no matter how
// deeply the beatmapset link is nested inside the card's markup (some
// layouts - e.g. the Featured Artist track grid - wrap it several levels
// deep rather than as a direct child), and no matter which wrapper class
// a given card layout uses, since we no longer depend on ".beatmapset-panel"
// or a direct-child relationship at all. As soon as an ancestor's links
// span more than one distinct beatmapset, we've walked past the card
// boundary into a container shared by multiple cards, so we stop there
// rather than risk grabbing a neighboring card's id.
```


## `src/data/favorite-detection.js`

7 comments · userscript [L3475](./osu-local-favorites.user.js#L3475) - [L3541](./osu-local-favorites.user.js#L3541)

**[L3475](./osu-local-favorites.user.js#L3475)** · src L3

```js
// ═══ Favorite button detection ═══
// Accepts BUTTON, A, and SPAN elements (the guest-disabled span on listing pages).
```

**[L3490](./osu-local-favorites.user.js#L3490)** · src L20

```js
// Reject download buttons immediately - never treat them as fav buttons
```

**[L3497](./osu-local-favorites.user.js#L3497)** · src L28

```js
// ── Fast path: the guest-disabled span osu! renders when not signed in ──
// <span class="beatmapset-panel__menu-item beatmapset-panel__menu-item--disabled"
//       data-orig-title="sign in to favourite this beatmap">
//   <span class="far fa-heart"></span>
// </span>
```

**[L3504](./osu-local-favorites.user.js#L3504)** · src L40

```js
// For SPANs that aren't the specific menu-item, require them to look like a fav button
```

**[L3506](./osu-local-favorites.user.js#L3506)** · src L43

```js
// Only match spans that contain a heart icon and are inside a beatmap panel
```

**[L3514](./osu-local-favorites.user.js#L3514)** · src L52

```js
// BUTTON / A checks below
// Guard: only treat a heart-icon button as a fav button when it actually
// sits in a beatmap context (a beatmapset detail page, or inside a listing
// card). Hearts also appear on profiles, forums, modding posts, etc., and
// previously those matched here, then failed id resolution and produced
// spurious "couldn't resolve a beatmap id" errors.
```

**[L3541](./osu-local-favorites.user.js#L3541)** · src L85

```js
// title and text are already declared at top of function - reuse them
```


## `src/ui/heart-visual.js`

4 comments · userscript [L3575](./osu-local-favorites.user.js#L3575) - [L3591](./osu-local-favorites.user.js#L3591)

**[L3575](./osu-local-favorites.user.js#L3575)** · src L1

```js
// ═══ Visual helpers ═══
```

**[L3576](./osu-local-favorites.user.js#L3576)** · src L3

```js
// Update FontAwesome heart solid/outline.
```

**[L3582](./osu-local-favorites.user.js#L3582)** · src L10

```js
// osu! uses SVG heart icons in some layouts. Those buttons are detected by
// favorite-detection.js, but the old visual update only handled FontAwesome
// markup, so the click was persisted while the page heart stayed unchanged.
```

**[L3591](./osu-local-favorites.user.js#L3591)** · src L22

```js
// Also update the container span's disabled/active look
```


## `src/data/enrichment.js`

15 comments · userscript [L3608](./osu-local-favorites.user.js#L3608) - [L3752](./osu-local-favorites.user.js#L3752)

**[L3608](./osu-local-favorites.user.js#L3608)** · src L6

```js
// ═══ Background enrichment ═══
// Shared pacing for any sequence of osu! beatmapset detail-page requests -
// keeps us comfortably under ~60 requests/min regardless of which feature
// (bulk "Favorite all" import or a full-library re-enrichment) is driving it.
```

**[L3610](./osu-local-favorites.user.js#L3610)** · src L12

```js
// Persistent queue of beatmapset IDs still missing full metadata (genre/
// language/tags/source/etc.) - anything favorited from a listing card
// instead of the beatmapset detail page starts here (see toggleFavorite/
// "Favorite all" below) and is only removed once enrichBeatmapData()
// actually succeeds for it.
//
// This exists because the previous approach - fire off enrichBeatmapData()
// once right after favoriting and otherwise forget about it - quietly
// lost genre/language for a lot of favorites in practice: at the required
// ~1 req/sec throttle, favoriting even a couple hundred maps in one
// "Favorite all" run takes minutes to fully enrich, and closing the tab
// (or just navigating away) partway through abandons whatever hadn't been
// reached yet, with no record that it was ever incomplete. The queue below
// survives navigation/reloads and a background drainer (see
// ensureEnrichDrainerRunning) resumes it automatically wherever the user
// happens to be browsing, at the same gentle pace, until it's empty.
```

**[L3627](./osu-local-favorites.user.js#L3627)** · src L45

```js
// Batch queue migration/import writes. Calling addToEnrichQueue once per
// favorite makes native Tampermonkey serialize and persist the entire
// queue once per item, which can make the first page load painfully slow
// for a large existing library.
```

**[L3650](./osu-local-favorites.user.js#L3650)** · src L72

```js
// Fetches the beatmapset detail page and merges full JSON data into storage.
// Fire-and-forget - card data is stored instantly, this fills in the gaps.
// Also used standalone by the global re-enrichment feature to refresh
// fields (tags/source/genre/language/etc.) that may be stale or were saved
// in an older, differently-normalized format.
```

**[L3651](./osu-local-favorites.user.js#L3651)** · src L78

```js
// Prefer the osu! API v2 when connected (clean JSON, no HTML parsing,
// no reliance on the embedded #json-beatmapset element). Falls back to
// scraping the beatmapset page's embedded JSON when the API isn't set up.
```

**[L3679](./osu-local-favorites.user.js#L3679)** · src L109

```js
// Removed before enrichment finished - nothing to fill in, but it's
// also not "still needing enrichment" anymore, so stop retrying it.
```

**[L3686](./osu-local-favorites.user.js#L3686)** · src L118

```js
// Re-enrichment must not replace the whole record with a lossy API
// projection. In particular, API v2 beatmapset responses can omit the
// featured-artist marker (and other fields introduced by the page/card
// payload). Keep existing values whenever the response does not provide
// a value, while still allowing an explicit API false to clear stale
// metadata.
```

**[L3702](./osu-local-favorites.user.js#L3702)** · src L140

```js
// API v2 returns objects here, while the normalized API helper and
// older page payloads may already provide plain strings.
```

**[L3718](./osu-local-favorites.user.js#L3718)** · src L158

```js
// left in the queue - a later drain pass retries it
```

**[L3721](./osu-local-favorites.user.js#L3721)** · src L161

```js
// Sequentially enriches a list of IDs with a delay between requests
```

**[L3730](./osu-local-favorites.user.js#L3730)** · src L171

```js
// Quietly works through the persistent enrichment queue (see
// ENRICH_QUEUE_KEY above) in the background, one map per
// ENRICH_RATE_LIMIT_MS - same throttle as every other enrichment path,
// just spread across however many page loads it takes instead of
// requiring one tab to stay open until it's done. Safe to call any time;
// it's a no-op while a manual "Re-enrich all maps" run is already going
// (avoids doubling up the request rate), and naturally stops calling
// itself once the queue is empty or every favorite it names is gone.
```

**[L3737](./osu-local-favorites.user.js#L3737)** · src L186

```js
// Manual re-enrichment took over - back off and let it finish;
// it removes IDs from this same queue as it goes.
```

**[L3743](./osu-local-favorites.user.js#L3743)** · src L194

```js
// drop removed or already-enriched IDs
```

**[L3746](./osu-local-favorites.user.js#L3746)** · src L197

```js
// queue empty - stop until something re-queues it
```

**[L3752](./osu-local-favorites.user.js#L3752)** · src L203

```js
// Left in the queue by enrichBeatmapData on failure, but rotate it
// to the back rather than leaving it at the front - otherwise a
// single persistently-failing map (deleted beatmapset, transient
// error, whatever) gets retried forever every cycle and every
// *other* queued map behind it never gets a turn, which looked
// exactly like enrichment being broken again even though it was
// just stuck on one bad entry.
```


## `src/data/reenrichment.js`

3 comments · userscript [L3767](./osu-local-favorites.user.js#L3767) - [L3776](./osu-local-favorites.user.js#L3776)

**[L3767](./osu-local-favorites.user.js#L3767)** · src L6

```js
// ═══ Global re-enrichment (Settings → Library Maintenance) ═══
// Re-fetches every favorited map's full data, one request at a time and
// rate-limited via ENRICH_RATE_LIMIT_MS. Exposed through a couple of
// module-level state vars + ID-lookups (rather than closures) so progress
// keeps rendering correctly even if the settings view is torn down and
// rebuilt (e.g. re.render on unrelated state changes) while a run is live.
```

**[L3772](./osu-local-favorites.user.js#L3772)** · src L17

```js
// Read-only accessor for other modules (data/enrichment.js,
// ui/settings.js) that need to know whether a global re-enrichment
// pass is currently in flight, without holding a live, writable binding
// into this module's private state.
```

**[L3776](./osu-local-favorites.user.js#L3776)** · src L25

```js
// Pushes current progress into the Settings panel's progress bar, if it's
// currently mounted. Safe to call even when the panel/settings view isn't
// open - the elements simply won't be found and this becomes a no-op.
```


## `src/data/toggle-favorite.js`

4 comments · userscript [L3839](./osu-local-favorites.user.js#L3839) - [L3867](./osu-local-favorites.user.js#L3867)

**[L3839](./osu-local-favorites.user.js#L3839)** · src L7

```js
// ═══ Toggle favorite ═══
```

**[L3847](./osu-local-favorites.user.js#L3847)** · src L16

```js
// no longer favorited - stop trying to enrich it
```

**[L3863](./osu-local-favorites.user.js#L3863)** · src L32

```js
// setFavorites() announces the membership change; the subscriber wired up
// in core/init.js repaints every heart on the page and re-renders the
// panel list in place.
//
// This used to remove the panel and call showFavoritesPanel() to rebuild
// it from scratch, which reset the search box, sort order, genre filter,
// active collection and scroll position, and tore down the Now Playing
// bar mid-preview - every time any heart was clicked.
```

**[L3867](./osu-local-favorites.user.js#L3867)** · src L44

```js
// Persisted first so this survives even if the immediate attempt
// below doesn't finish before the tab closes/navigates away - the
// background drainer picks it back up later regardless.
```


## `src/ui/copy-all-button.js`

13 comments · userscript [L3875](./osu-local-favorites.user.js#L3875) - [L4012](./osu-local-favorites.user.js#L4012)

**[L3875](./osu-local-favorites.user.js#L3875)** · src L7

```js
// ═══ Copy-all button ("Favourite Beatmaps" + "Most Played Beatmaps") ═══
// Both live on a profile's Beatmaps tab and share the same "click show
// more until it's gone" pagination pattern, but render completely
// differently under the hood:
//   • Favourite (data-page-id="beatmaps") - one .beatmapset-panel card
//     per beatmapset, "show more" carries both the "profile-page" and
//     "profile-page-beatmapsets" modifier classes.
//   • Most Played (data-page-id="historical") - one .beatmap-playcount
//     row per DIFFICULTY the user has played, so the same beatmapset can
//     show up dozens of times; its "show more" only carries the plain
//     "profile-page" modifier. getBeatmapDataFromCard() already knows how
//     to read both row types, and the dedup below (favs[id] already set,
//     whether from a prior favourite or an earlier row in *this* run)
//     means a 20-diff mapset only ever gets added once.
```

**[L3876](./osu-local-favorites.user.js#L3876)** · src L22

```js
// The .js-sortable--page sections these buttons attach to only exist on
// profile pages. Everything below is four querySelector calls per call -
// and this runs on every debounced mutation pass and the 1.5s interval -
// so bail before any DOM work on pages that can't possibly match.
```

**[L3886](./osu-local-favorites.user.js#L3886)** · src L36

```js
// rows sit directly in the page container, no dedicated grid wrapper
```

**[L3898](./osu-local-favorites.user.js#L3898)** · src L48

```js
// Guard: don't add the button twice
```

**[L3925](./osu-local-favorites.user.js#L3925)** · src L76

```js
// Click "show more" once and wait for new rows to appear
```

**[L3959](./osu-local-favorites.user.js#L3959)** · src L111

```js
// Recursively click "show more" until everything is loaded
```

**[L3972](./osu-local-favorites.user.js#L3972)** · src L125

```js
// Use a decreasing base timestamp so top-to-bottom DOM order is preserved
// (panel sorts by favourited_at descending)
```

**[L3980](./osu-local-favorites.user.js#L3980)** · src L135

```js
// Already favourited before, OR another diff of a set we
// already added earlier in *this* run - either way, skip it.
```

**[L3982](./osu-local-favorites.user.js#L3982)** · src L139

```js
// Subtract i seconds so first row (top) gets newest timestamp
```

**[L3992](./osu-local-favorites.user.js#L3992)** · src L150

```js
// setFavorites() notifies the shared panel refresh subscriber.
// Show matching/skipped count when some were already favorited
```

**[L3996](./osu-local-favorites.user.js#L3996)** · src L156

```js
// Persist the queue first - for a big batch, this run alone can
// take minutes at the required throttle, and closing the tab
// partway through used to lose genre/language/tags permanently
// for whatever hadn't been reached yet. Now the background
// drainer just resumes where this left off on a later page load.
```

**[L3997](./osu-local-favorites.user.js#L3997)** · src L162

```js
// Enrich each new beatmapset sequentially - respects ENRICH_RATE_LIMIT_MS
// (1 request/sec), the same throttle every other bulk/re-enrich path uses.
```

**[L4012](./osu-local-favorites.user.js#L4012)** · src L179

```js
// Append button inside the heading element
```


## `src/ui/floating-heart.js`

26 comments · userscript [L4016](./osu-local-favorites.user.js#L4016) - [L4252](./osu-local-favorites.user.js#L4252)

**[L4016](./osu-local-favorites.user.js#L4016)** · src L11

```js
// ═══ Floating heart - always visible on all osu! pages ═══
// Visual language matches the rest of LOF's UI (flat dark surface, 1px
// hairline border, small radius, accent used sparingly) instead of the old
// generic glowing-circle look.
```

**[L4016](./osu-local-favorites.user.js#L4016)** · src L15

```js
// {right,bottom} px from bottom-right
```

**[L4019](./osu-local-favorites.user.js#L4019)** · src L18

```js
// updateFloatingHeart() runs on every debounced DOM-mutation pass and
// every cross-tab sync; rebuilding the SVG innerHTML each time churned
// the DOM (parse + node replacement + style invalidation) several times
// per second even when the heart's state hadn't changed. Skip when the
// visual state is identical - the very first call still renders.
```

**[L4025](./osu-local-favorites.user.js#L4025)** · src L29

```js
// No glow in either state. The accent-coloured border is already the
// favorited signal; the pink drop shadow on top of it was the one piece
// of the old "glowing circle" look left over, and it read as a halo
// around the button on beatmap pages. Explicitly set to "none" rather
// than removed, so a favorited -> unfavorited transition still clears
// any shadow left on the element.
```

**[L4051](./osu-local-favorites.user.js#L4051)** · src L61

```js
// Restore last saved position (drag is persisted across pages/sessions)
```

**[L4054](./osu-local-favorites.user.js#L4054)** · src L65

```js
// Clamp into the viewport in case the window shrank since saving
```

**[L4065](./osu-local-favorites.user.js#L4065)** · src L77

```js
// Clicking heart always opens favorites panel
```

**[L4068](./osu-local-favorites.user.js#L4068)** · src L81

```js
// ── Click vs hold-to-drag ──
// A short press without movement = click (open panel). Holding for
// HOLD_MS or moving > MOVE_THRESHOLD px starts a drag; the new position
// is anchored to bottom/right so it survives resizes, and persisted.
```

**[L4096](./osu-local-favorites.user.js#L4096)** · src L113

```js
// Cancel pending drag if the finger/mouse moved before hold elapsed
```

**[L4149](./osu-local-favorites.user.js#L4149)** · src L167

```js
// Inline style wins over osu!'s own stylesheet rules, so our button
// reads as clearly "ours" rather than an indistinguishable copy of
// osu!'s native heart.
```

**[L4166](./osu-local-favorites.user.js#L4166)** · src L187

```js
// ═══ Click interception ═══
```

**[L4169](./osu-local-favorites.user.js#L4169)** · src L191

```js
// Never treat clicks inside our own UI (the favorites panel or the
// download-mirror popover) as a native-page favourite-button click.
// isFavButton()'s matching is heuristic (title/class/icon-based) and
// meant for osu!'s own page elements - it previously misfired on our
// own "Download ▾" menu, e.g. the "Official Download (requires
// sign-in)" row, which doesn't carry a "download" title/class, only
// the word in its visible text. The panel and menu already handle
// all of their own actions directly (toggleFavorite, removeBtn,
// showDownloadMenu's row links), so excluding them here entirely is
// both the fix and the more robust long-term guard.
```

**[L4171](./osu-local-favorites.user.js#L4171)** · src L203

```js
// Also intercept clicks on the guest-disabled <span> (not just button/a)
```

**[L4174](./osu-local-favorites.user.js#L4174)** · src L207

```js
// As soon as we've identified this as a favorite button, we commit to
// handling the click ourselves - block osu!'s own click handler
// unconditionally, even if something below fails. Previously this only
// happened after beatmap-id resolution succeeded, so a resolution
// failure would silently fall through to osu!'s real click handler -
// which our own XHR/fetch interceptor then turns into a broken fake
// response, since it blindly fakes *any* request to a "/favourites"
// URL regardless of whether we handled the click. Blocking here always
// avoids that half-broken passthrough state.
```

**[L4181](./osu-local-favorites.user.js#L4181)** · src L223

```js
// Not an error: isFavButton()'s matching is heuristic, so an
// occasional false positive can slip past it. Just ignore the click
// quietly instead of spamming the console and toasting the user.
```

**[L4203](./osu-local-favorites.user.js#L4203)** · src L248

```js
// ═══ Refresh visible buttons ═══
```

**[L4204](./osu-local-favorites.user.js#L4204)** · src L250

```js
// Cheap short-circuit: isFavButton() only ever returns true for an
// element on an actual beatmapset detail page or one sitting inside a
// ".beatmapset-panel" (listing/profile cards) - every other branch in it
// requires one of those two. On any other page (dashboard, forum, wiki,
// chat, settings, etc.) that's guaranteed false for literally every
// element, so skip straight past the expensive "every <button> on the
// whole page" scan below rather than running it - and the several
// querySelector/closest calls inside isFavButton() for each one - on
// totally unrelated pages, every 1.5s and on every DOM mutation, for as
// long as the tab stays open. This is a pure short-circuit: it changes
// nothing about which buttons get matched, only skips the work when the
// page couldn't possibly contain any.
```

**[L4208](./osu-local-favorites.user.js#L4208)** · src L266

```js
// Also scan disabled <span> elements used when the user is not signed in
```

**[L4212](./osu-local-favorites.user.js#L4212)** · src L271

```js
// Cheapest checks first. The dataset flag must gate BEFORE isFavButton()
// - the old order ran the full heuristic (several querySelector calls
// per candidate) on every already-processed button on every pass. And
// everything inside our own UI is skipped outright: an open favorites
// panel alone can hold thousands of <button>s (rows × Open/Download/
// Remove/preview), each of which would otherwise run isFavButton() -
// and always fail - on every debounced mutation pass and 1.5s interval
// tick for as long as the panel stays open.
```

**[L4216](./osu-local-favorites.user.js#L4216)** · src L283

```js
// Context couldn't be resolved yet - this is common when a card is
// still mid-render (fast scroll / infinite-load on search & profile
// pages). Do NOT mark it checked here, or it'll be skipped forever and
// silently show the wrong (unfavorited) heart state even though it's
// actually in local favorites - clicking it would then remove it
// instead of doing nothing. Leave it unmarked so the next pass (mutation
// observer or periodic fallback) retries once the card has settled.
```

**[L4218](./osu-local-favorites.user.js#L4218)** · src L292

```js
// Record the resolved id on the element. resolveBeatmapContext() is the
// expensive part of this scan (several closest()/querySelector calls),
// and resyncFavoriteButtons() below needs to re-derive the favorited
// state for exactly these buttons on every change - reading it back
// from the dataset turns that into a plain attribute lookup.
```

**[L4220](./osu-local-favorites.user.js#L4220)** · src L299

```js
// Make the disabled span look clickable
```

**[L4228](./osu-local-favorites.user.js#L4228)** · src L308

```js
// The audio element is deliberately page-lifetime. Closing the favorites panel
// must only detach the panel UI - never pause/reset the actual preview. This lets
// previews keep playing while the user closes the panel, switches tabs, or opens
// another app on mobile. A newly opened panel re-binds its Now Playing controls.
```

**[L4239](./osu-local-favorites.user.js#L4239)** · src L323

```js
// The queue callback closes over this panel's DOM/list, so do not keep it after
// the panel is gone. Playback itself remains untouched.
```

**[L4242](./osu-local-favorites.user.js#L4242)** · src L328

```js
// Re-derives the favorited state of every heart already drawn on the page,
// plus the floating indicator and the guest button.
//
// This is the single subscriber to storage's change notification, so any
// mutation from anywhere - the panel, a card click, Copy All, a Gist
// restore, another tab - lands on every visible surface at once. It is
// deliberately cheap: no DOM scan for new buttons (refreshButtons() owns
// that) and no context re-resolution, just an attribute read per button
// that was already processed.
```

**[L4252](./osu-local-favorites.user.js#L4252)** · src L347

```js
// Clears the "already processed" markers so the next refreshButtons() pass
// re-examines every candidate from scratch. Needed after a navigation that
// swapped the page content without going through hardResync() - the markers
// survive on a restored Turbolinks snapshot and would otherwise make every
// heart on it permanently unreachable.
```


## `src/ui/settings.js`

51 comments · userscript [L4260](./osu-local-favorites.user.js#L4260) - [L5629](./osu-local-favorites.user.js#L5629)

**[L4260](./osu-local-favorites.user.js#L4260)** · src L18

```js
// Gist ids whose real visibility was already checked against GitHub this page
// load (see the Gist visibility row) - keeps the autodetect to one request.
```

**[L4262](./osu-local-favorites.user.js#L4262)** · src L22

```js
// ═══ Settings view (⚙ in the panel header) ═══
// Everything the ⚙ pane is made of: the scroll container, the control
// builders each section is assembled from, and renderSettingsView() itself.
// Split out of what used to be a single 3,000-line ui/favorites-panel.js so
// that file is only about the favorites list; createSettingsView() at the
// bottom of this one is the whole interface between the two.
```

**[L4262](./osu-local-favorites.user.js#L4262)** · src L29

```js
// Settings' own toast: a little wider than the page-level default, because
// these messages tend to be full sentences ("Disconnected from osu! API").
```

**[L4266](./osu-local-favorites.user.js#L4266)** · src L35

```js
// ── Settings view helpers ────────────────────────────────
```

**[L4293](./osu-local-favorites.user.js#L4293)** · src L63

```js
// Usually plain text, but a row can also pass a Node/DocumentFragment
// (e.g. to embed a real hyperlink inside the subtitle)
```

**[L4301](./osu-local-favorites.user.js#L4301)** · src L73

```js
// Pink pill switch - matches the accent color used throughout the panel
```

**[L4319](./osu-local-favorites.user.js#L4319)** · src L92

```js
// Two/three-way segmented control - mirrors the sort-button pill style
```

**[L4344](./osu-local-favorites.user.js#L4344)** · src L118

```js
// Native <select> for settings with many choices - segmented pills work
// well for 2-3 options, but a real dropdown scales better once there
// are this many (every mirror × video variant, plus both Official
// variants, plus "not set").
```

**[L4360](./osu-local-favorites.user.js#L4360)** · src L138

```js
// 0–100 percentage slider with a live-updating label - used by Appearance
```

**[L4380](./osu-local-favorites.user.js#L4380)** · src L159

```js
// ── Custom color picker ──
// We used to hand off to a real <input type="color">, but the
// saturation/value "plane" it opens is drawn by the browser's own
// chrome (not page content), so a userscript has zero access to it -
// on some Firefox/PC setups it drags very sluggishly and there is no
// code-side fix. Built our own instead: a plain-CSS gradient square
// for saturation/value, a gradient strip for hue, and a hex field.
// Dragging just repositions an absolutely-positioned cursor div - no
// canvas, no redraw loop, nothing outside our own DOM to be slow.
```

**[L4384](./osu-local-favorites.user.js#L4384)** · src L173

```js
// falls back to the original #ff66aa-ish accent
```

**[L4418](./osu-local-favorites.user.js#L4418)** · src L207

```js
// rAF-throttled pointer drag: reads the latest pointer position but
// only applies it once per frame, so fast mouse/finger movement can't
// queue up more work than the display can actually show.
```

**[L4441](./osu-local-favorites.user.js#L4441)** · src L233

```js
// Tracks whichever custom color panel is currently open (across both
// the accent and heart-color swatches) so opening one closes the other
// instead of leaving two floating at once.
```

**[L4441](./osu-local-favorites.user.js#L4441)** · src L236

```js
// `root` is the settings scroll container this swatch lives in: an open
```

**[L4442](./osu-local-favorites.user.js#L4442)** · src L237

```js
// picker closes itself when that container is torn down and rebuilt, so it
// never lingers detached from its swatch.
```

**[L4542](./osu-local-favorites.user.js#L4542)** · src L339

```js
// Same off-screen clamping the native-input version used: prefer
// opening to the left (the panel this lives in is docked to the
// right edge of the viewport), fall back to the right, clamp both.
```

**[L4577](./osu-local-favorites.user.js#L4577)** · src L377

```js
// clicking again toggles it closed
```

**[L4581](./osu-local-favorites.user.js#L4581)** · src L381

```js
// Clean up an open panel if the row is ever torn down (e.g. Settings
// re-rendered) so it doesn't linger detached from its swatch.
```

**[L4590](./osu-local-favorites.user.js#L4590)** · src L392

```js
// ── Settings view ─────────────────────────────────
// Builds the whole pane: the container element, the section helpers below
// it, and the render pass. It lives here rather than in ui/main-panel.js
// because the panel only ever asks for two things - the element to slot into
// its content area, and a re-render to call when the gear button is hit.
//
// `deps` carries the panel instance surface this view has to call back into.
// Imported helpers and storage/API functions are visible directly (imports
// at the top of this file); these six only exist inside showFavoritesPanel(),
// so they are handed over once when the panel is built.
```

**[L4593](./osu-local-favorites.user.js#L4593)** · src L405

```js
// The scroll container. flex:1 inside the panel's content area; hidden
// until the gear button flips it on (see setView in ui/main-panel.js).
```

**[L4597](./osu-local-favorites.user.js#L4597)** · src L411

```js
// ── Render settings view ─────────────────────────────────
```

**[L4598](./osu-local-favorites.user.js#L4598)** · src L413

```js
// Clean up any real <input type="color"> elements a previous render
// parked on <body> (see makeColorInput) before we rebuild everything.
```

**[L4602](./osu-local-favorites.user.js#L4602)** · src L419

```js
// Attach immediately (while still empty) rather than at the end of this
// function - some sub-sections (e.g. Library Maintenance) sync their
// initial state via document.getElementById, which only finds nodes
// that are actually part of the live document tree.
```

**[L4605](./osu-local-favorites.user.js#L4605)** · src L426

```js
// ── Backup & Restore (Export / Import) ──
```

**[L4654](./osu-local-favorites.user.js#L4654)** · src L476

```js
// Collections have their own portable backup: map memberships are small
// and useful to move independently of the (potentially much larger)
// favorite library. The exported object deliberately matches the
// COLLECTIONS_KEY storage format so it remains simple and future-proof.
```

**[L4673](./osu-local-favorites.user.js#L4673)** · src L499

```js
// Keep the suggested filename valid on Windows, Android, and macOS.
```

**[L4729](./osu-local-favorites.user.js#L4729)** · src L556

```js
// Collections store only beatmapset IDs. Materialize any missing IDs in
// the local favorites library as lightweight placeholders, then queue
// them for the existing background enrichment system. This keeps the
// collection immediately usable while resolving title/artist/covers/
// tags/genre/language/etc. in the background without a request burst.
```

**[L4768](./osu-local-favorites.user.js#L4768)** · src L600

```js
// ── About / version / update check ──
// The project links sit at the top of the update controls, so the version
// they refer to introduces this block instead of trailing the panel. The
// old "Running v..." line directly above is gone with it - the version is
// already the first thing this hint says.
```

**[L4799](./osu-local-favorites.user.js#L4799)** · src L636

```js
// Offer a one-click jump to the install URL
```

**[L4818](./osu-local-favorites.user.js#L4818)** · src L656

```js
// ── osu! API v2 (OAuth) ──
```

**[L4832](./osu-local-favorites.user.js#L4832)** · src L671

```js
// Same status row as the Gist section below: coloured dot, ellipsised
// text, action button on the right - so a connected account reads
// identically wherever it appears in Settings. The dot carries the
// "connected" signal the old ✔ prefix used to, and Disconnect moved
// into the row (it used to be a separate full-width button below).
```

**[L4880](./osu-local-favorites.user.js#L4880)** · src L724

```js
// Redirects to osu!'s authorize page; we resume on /home?code=…
```

**[L4888](./osu-local-favorites.user.js#L4888)** · src L733

```js
// ── GitHub Gist Backup ──
```

**[L4941](./osu-local-favorites.user.js#L4941)** · src L787

```js
// Public gists can be read without authentication. Keep this import
// path available before connection: it deliberately does not set the
// backup target, so connecting/backing up later remains independent.
```

**[L5039](./osu-local-favorites.user.js#L5039)** · src L888

```js
// GitHub cannot change a gist's visibility after creation, so a
// new gist is only needed when the linked one is genuinely the
// other kind. Ask GitHub instead of trusting the stored value,
// which can be stale (a gist linked before visibility was
// tracked, or one changed from another device).
```

**[L5041](./osu-local-favorites.user.js#L5041)** · src L895

```js
// The detection call overwrites the stored setting with the
// gist's real visibility; put the user's choice back before
// deciding what it means.
```

**[L5052](./osu-local-favorites.user.js#L5052)** · src L909

```js
// Could not verify (offline, token problem). Fall back to the
// previous behaviour of assuming the change is real, so the
// choice is never silently ignored.
```

**[L5063](./osu-local-favorites.user.js#L5063)** · src L923

```js
// Autodetect: once per linked gist per page load, ask GitHub what the
// gist really is and show that. Re-renders only when the stored value
// was wrong, so a correct setting never flickers.
```

**[L5070](./osu-local-favorites.user.js#L5070)** · src L933

```js
// Unknown: leave the setting alone and allow a retry next time.
```

**[L5209](./osu-local-favorites.user.js#L5209)** · src L1073

```js
// ── Download Mirrors ──
```

**[L5263](./osu-local-favorites.user.js#L5263)** · src L1128

```js
// ── Music Playback ──
```

**[L5310](./osu-local-favorites.user.js#L5310)** · src L1176

```js
// Applied immediately to whatever's already playing, not just future
// playback - the audio element is a tab-lifetime singleton, so
// without this the change wouldn't take effect until the next track.
```

**[L5318](./osu-local-favorites.user.js#L5318)** · src L1187

```js
// ── Media Cache ──
```

**[L5346](./osu-local-favorites.user.js#L5346)** · src L1216

```js
// reveal/hide the custom-minutes row below
```

**[L5389](./osu-local-favorites.user.js#L5389)** · src L1259

```js
// reveal/hide the custom-size row below
```

**[L5446](./osu-local-favorites.user.js#L5446)** · src L1316

```js
// ── Appearance ──
```

**[L5523](./osu-local-favorites.user.js#L5523)** · src L1394

```js
// ── Library Maintenance ──
```

**[L5582](./osu-local-favorites.user.js#L5582)** · src L1454

```js
// Sync button label/progress bar to the real state in case a run is
// already in flight (e.g. started, then user switched view and back)
```

**[L5586](./osu-local-favorites.user.js#L5586)** · src L1460

```js
// ── Danger Zone ──
```

**[L5618](./osu-local-favorites.user.js#L5618)** · src L1493

```js
// Keep the osu! API controls at the top of Settings regardless of the
// order in which the remaining settings sections are assembled above.
```

**[L5629](./osu-local-favorites.user.js#L5629)** · src L1506

```js
// Handed back to the panel: the container to mount, and the render entry
// point its setView() calls (and the pane itself calls after any change
// that alters what should be on screen).
```


## `src/ui/main-panel.js`

108 comments · userscript [L5633](./osu-local-favorites.user.js#L5633) - [L7089](./osu-local-favorites.user.js#L7089)

**[L5633](./osu-local-favorites.user.js#L5633)** · src L21

```js
// ═══ Favorites panel ═══
```

**[L5636](./osu-local-favorites.user.js#L5636)** · src L25

```js
// The audio element is page-lifetime, while the player UI belongs to the
// panel. Detach only the old UI binding; never stop the preview when closing.
```

**[L5646](./osu-local-favorites.user.js#L5646)** · src L37

```js
// { [categoryId]: { [termKey]: "include" | "exclude" } } - one entry per
// category in ui/filters.js (date, title, artist, status, genre).
```

**[L5647](./osu-local-favorites.user.js#L5647)** · src L40

```js
// "" = no collection filter (show all)
```

**[L5649](./osu-local-favorites.user.js#L5649)** · src L42

```js
// Inject shared styles once - covers scrollbar, slide-down banner, and slide-up prompt
```

**[L5695](./osu-local-favorites.user.js#L5695)** · src L89

```js
// Shows an overlay popup centered inside the panel
```

**[L5700](./osu-local-favorites.user.js#L5700)** · src L95

```js
// Backdrop - covers the panel content but not the header
```

**[L5706](./osu-local-favorites.user.js#L5706)** · src L102

```js
// Card
```

**[L5712](./osu-local-favorites.user.js#L5712)** · src L109

```js
// Accent header
```

**[L5735](./osu-local-favorites.user.js#L5735)** · src L133

```js
// Body
```

**[L5741](./osu-local-favorites.user.js#L5741)** · src L140

```js
// Footer
```

**[L5779](./osu-local-favorites.user.js#L5779)** · src L179

```js
// ── Header ─────────────────────────────────────────────
```

**[L5856](./osu-local-favorites.user.js#L5856)** · src L257

```js
// Debounced search: renderList() re-filters, re-sorts, and rebuilds the
// whole visible list from scratch (chunked over rAF, but still). On a
// 500+ map library every keystroke used to pay that full price - typing
// a 10-character query ran it 10 times in quick succession. A 150ms
// debounce keeps the live-filter feel while collapsing a typing burst
// into one render.
```

**[L5869](./osu-local-favorites.user.js#L5869)** · src L276

```js
// ── GitHub star notice (shown once, ever, on first panel open) ──
```

**[L5904](./osu-local-favorites.user.js#L5904)** · src L312

```js
// ── Toolbar ────────────────────────────────────────────
// One grid of six chips - Date | Title | Artist / Status | Genre |
// Collections - each doing both jobs a separate sort row used to split
// across two rows: opening a chip's popover offers that category's own
// sort choice (Newest/Oldest for Date, A-Z/Z-A for Title/Artist/Genre) at
// the top, above its filter terms. Status has no natural order, so its
// popover is filter-only. Grid columns are sized from the track, not the
// content, so a chip growing from "Genre" to "Genre (1)" can never reflow
// its neighbours; labels ellipsis inside their own cell instead.
```

**[L5919](./osu-local-favorites.user.js#L5919)** · src L336

```js
// Every category is driven by the same descriptor list, so adding one is
// an entry in ui/filters.js rather than another hand-built button here.
```

**[L5967](./osu-local-favorites.user.js#L5967)** · src L386

```js
// Actively filtered wins the solid fill - it is the stronger claim on
// the list's contents. A category that's merely the current sort
// order, with no terms applied, gets the quieter outline instead so
// the two states stay visually distinct at a glance.
```

**[L6000](./osu-local-favorites.user.js#L6000)** · src L423

```js
// Collections is a filter too, so it shares the filter row's last cell -
// but it keeps its own popover, which also creates and deletes playlists.
```

**[L6034](./osu-local-favorites.user.js#L6034)** · src L459

```js
// "Clear all" appears only while something is filtered, and occupies the
// full width below the grid so its arrival cannot shift the rows above it.
```

**[L6063](./osu-local-favorites.user.js#L6063)** · src L490

```js
// ── Content area (favorites list + settings view share this space) ──
```

**[L6067](./osu-local-favorites.user.js#L6067)** · src L495

```js
// ── List ───────────────────────────────────────────────
```

**[L6077](./osu-local-favorites.user.js#L6077)** · src L506

```js
// ── Settings view (hidden until the gear button is clicked) ──
// The pane itself is built by ui/settings.js; this file only decides where
// it sits (inside the scrolling content area, as a sibling of the list) and
// when it is visible. The deps object is that view's whole interface back
// into the panel instance: each name is a function declaration in this
// scope, so they are already defined by the time anything calls them.
```

**[L6089](./osu-local-favorites.user.js#L6089)** · src L524

```js
// ── Footer - sync status bar, doubles as a shortcut into Settings ──
```

**[L6115](./osu-local-favorites.user.js#L6115)** · src L551

```js
// ── Now Playing bar - persistent mini-player ─────────────────
// This intentionally lives as a direct child of the fixed panel rather
// than inside the scrolling content area. It therefore never moves with
// the favorites/settings scroll position.
```

**[L6123](./osu-local-favorites.user.js#L6123)** · src L563

```js
// Album-art backdrop - subtle and blurred, so the bar visually inherits
// the same artwork as the track without making the controls unreadable.
```

**[L6133](./osu-local-favorites.user.js#L6133)** · src L575

```js
// Track thumbnail - this is deliberately a normal img rather than a
// background-only image, so the current cover remains identifiable.
```

**[L6217](./osu-local-favorites.user.js#L6217)** · src L661

```js
// The current track's source is still being decided (cache lookup in
// flight), so audio.src is whatever played before: play/pause here would
// act on that instead. The pending request starts playback by itself.
```

**[L6225](./osu-local-favorites.user.js#L6225)** · src L672

```js
// Resets whatever card is currently linked to the audio element back to
// its idle look - shared by the "switch to a different track" path and
// the natural end-of-track path.
```

**[L6244](./osu-local-favorites.user.js#L6244)** · src L694

```js
// Starts a track by id/record, linking up whichever card is currently
// on screen for it (if any - long lists build cards lazily) and the
// Now Playing bar. `navigated` marks a track reached via Back/Next/
// auto-next/shuffle rather than a direct click on its own preview
// button, which is what gates the "skip if not on Hina" check in
// ensureAudio(). The full-song mirror remains the primary source whenever
// enabled; the official short preview is selected only by the fallback
// path if the mirror fails or reports a short clip.
```

**[L6255](./osu-local-favorites.user.js#L6255)** · src L713

```js
// Per-track: true once this track started playing from the local cache
// copy (see the cache-first swap below). Reset here so a cached track
// never suppresses the streaming cache write for a *different* one.
```

**[L6266](./osu-local-favorites.user.js#L6266)** · src L727

```js
// Don't drop playbackState to "none" here: this runs on every track
// handoff (including auto-next while backgrounded), and the load()
// below takes a moment before the "play" listener sets it back to
// "playing". Reporting "none" during that gap is a second way Android
// can read the session as ended and kill the notification's
// foreground service on a locked screen. Leave the previous state
// (normally still "playing") in place; the "play" event corrects it
// moments later regardless.
```

**[L6300](./osu-local-favorites.user.js#L6300)** · src L769

```js
// Now Playing artwork: same cache-first rule as list covers. Swap in
// the cached blob asynchronously; the network URL set above renders
// immediately and stays if the cache has nothing fresh.
```

**[L6318](./osu-local-favorites.user.js#L6318)** · src L790

```js
// Release the previous track's cached object URL before switching away.
// Keyed by the source URL its bytes were cached under - which is
// `_activePreviewUrl` only until a track has been swapped onto its local
// copy, after which that property holds the blob: URL itself and the
// lookup below would miss (leaking the object URL for the whole tab).
```

**[L6327](./osu-local-favorites.user.js#L6327)** · src L804

```js
// ── Cache-first source selection ─────────────────────────────────
// The persistent cache is consulted *before* a source is chosen, so a
// track that is already cached never has the remote preview URL
// assigned to the element at all - not even for one tick - and therefore
// never opens a request for it. Three tiers, cheapest first:
//   1. getKnownCachedBlob() - synchronous; this session's in-memory
//      copy, normally hydrated ahead of the click by the card's
//      pointer/hover/focus prewarm (see buildCard) or by an earlier play
//      of the same song,
//   2. one IndexedDB read via lookupCachedBlob(), bounded (see
//      media-cache-db.js) so a wedged storage backend can never stall
//      playback,
//   3. the network source, whose bytes are then cached as they stream.
// Only tier 3 issues a request.
//
// Tier 2's await is safe for autoplay policy: it is a local read of a
// few milliseconds, far inside the transient-activation window a click
// grants, so the play() below is still a gesture-driven call. Tier 1
// resolves in a microtask and never leaves the click's own task at all -
// which is exactly why the prewarm exists.
```

**[L6328](./osu-local-favorites.user.js#L6328)** · src L825

```js
// Stamped on every request so a decision that lands after the user has
// already moved on cannot write its source, or its UI state, over the
// newer request's.
```

**[L6330](./osu-local-favorites.user.js#L6330)** · src L830

```js
// Tells the card's own button that a source decision is still in flight,
// so a second click is not mistaken for pause/resume of the *previous*
// track - audio.src still points at it until beginWithSource() runs.
```

**[L6333](./osu-local-favorites.user.js#L6333)** · src L836

```js
// Superseded while the lookup was in flight (another card, Back/Next,
// auto-next, a shuffle jump): that request owns the element now.
```

**[L6345](./osu-local-favorites.user.js#L6345)** · src L850

```js
// Cache hit: the element only ever sees the local blob: URL. Miss: the
// network source, which the streaming writer below fills in so the
// next play of this song is a hit.
```

**[L6354](./osu-local-favorites.user.js#L6354)** · src L862

```js
// A response may arrive after the user chose another card. Only
// apply it to the media element while this exact track/source is
// still active.
```

**[L6356](./osu-local-favorites.user.js#L6356)** · src L867

```js
// This often arrives after playback has already created Android's
// media notification, so submit a second position state now.
```

**[L6361](./osu-local-favorites.user.js#L6361)** · src L874

```js
// Keep this request's source so a late rejection from a failed mirror
// cannot tear down the UI after fallbackToOfficialPreview() has already
// replaced it with osu!'s working preview (e.g. Nightrunning (7_7
// Bootleg)). Read back from the property that was just set, so it
// matches a cached local copy and a network URL alike - a blob: URL
// never string-matches the request URL.
```

**[L6366](./osu-local-favorites.user.js#L6366)** · src L885

```js
// This play() belonged to a source that has since been replaced by
// the official fallback, or to a track the user has moved away
// from. Its rejection is stale and must not hide the active
// mini-player.
```

**[L6368](./osu-local-favorites.user.js#L6368)** · src L891

```js
// Firefox can reject the original mirror play() asynchronously even
// after its error event has selected the official fallback. That
// promise belongs to the mirror forever; only the media error path
// may decide whether the replacement preview has genuinely failed.
```

**[L6369](./osu-local-favorites.user.js#L6369)** · src L896

```js
// A direct official preview has no alternative source to recover to.
```

**[L6375](./osu-local-favorites.user.js#L6375)** · src L903

```js
// Cache the track while it streams. The write is progressive (bytes are
// persisted in chunks as they arrive rather than only after the whole
// file lands), resumes from where it left off if a previous attempt was
// interrupted, and stops as soon as this track is no longer the active
// source - so skipping a song no longer downloads it in full for
// nothing.
//
// It starts once playback has actually begun rather than up front. The
// media element's own request must reach the mirror first (this is the
// reason caching used to be disabled on Firefox Android entirely, where
// the tap-to-first-byte timing is the fragile part); a parallel reader
// that only begins after "playing" fires cannot delay that, and unlike
// the old whole-file approach it also cannot waste more than the few
// hundred KB that arrived before the user moved on.
//
// A track being served from the cache is excluded outright: the lookup
// above already answered for it, so there is nothing left to fetch.
```

**[L6382](./osu-local-favorites.user.js#L6382)** · src L927

```js
// Explicit pre-request check: if this browser already holds a
// written cache entry for the song, do not issue any request at
// all. Only a genuine miss downloads; an interrupted download is
// not a miss either - it resumes from its stored chunks with a
// Range request for the remainder (see startStreamingCacheWrite).
```

**[L6392](./osu-local-favorites.user.js#L6392)** · src L942

```js
// The decision itself. A synchronous in-memory hit skips the lookup
// entirely; otherwise this is the one bounded IndexedDB read that has to
// happen before play().
```

**[L6397](./osu-local-favorites.user.js#L6397)** · src L950

```js
// Nothing on this path is expected to throw (the lookup swallows its
// own failures and resolves null instead), but a source that could not
// be assigned at all must not leave the row stuck showing pause.
```

**[L6405](./osu-local-favorites.user.js#L6405)** · src L961

```js
// Moves to the next (direction 1) or previous (direction -1) track in
// the currently visible, sorted/filtered list. Shuffle picks a random
// track instead of stepping in order.
```

**[L6429](./osu-local-favorites.user.js#L6429)** · src L988

```js
// Wire this panel's Now Playing bar + queue functions into the
// (page-lifetime, singleton) audio element. The bar itself is mounted
// directly in this panel's content area, so it never scrolls away with
// the list/settings view.
```

**[L6439](./osu-local-favorites.user.js#L6439)** · src L1002

```js
// Reconcile the freshly-rendered favorite cards with the singleton audio.
// renderList() can replace the DOM node for the current song while playback
// is still alive; never let the detached node remain the active UI owner.
```

**[L6450](./osu-local-favorites.user.js#L6450)** · src L1016

```js
// Clear the old card refs first; then link them to this newly-mounted node.
```

**[L6497](./osu-local-favorites.user.js#L6497)** · src L1064

```js
// ── View switching ───────────────────────────────────────
```

**[L6505](./osu-local-favorites.user.js#L6505)** · src L1073

```js
// The search field belongs only to the favorites list. Collapse the
// header to its title row while Settings is open so it does not leave
// an empty search-sized gap above the controls.
```

**[L6517](./osu-local-favorites.user.js#L6517)** · src L1088

```js
// Returning to the list from Settings rebuilds rows so controls pick
// up changed settings, then reconnects the current audio track to the
// newly-created card instead of leaving stale detached DOM refs.
```

**[L6523](./osu-local-favorites.user.js#L6523)** · src L1097

```js
// ── Helpers ────────────────────────────────────────────
```

**[L6548](./osu-local-favorites.user.js#L6548)** · src L1123

```js
// ── Render list ────────────────────────────────────────
```

**[L6553](./osu-local-favorites.user.js#L6553)** · src L1129

```js
// Scroll preservation. renderList() empties the list node and rebuilds
// it, which throws away scrollTop - so a refresh triggered by anything
// other than the user (a tab regaining focus, a cross-tab write, an
// enrichment pass finishing) used to fling the list back to the top.
// The position is only worth keeping while the *same* view is on screen;
// changing the sort, search or any filter should land at the top, which
// is what comparing a view key gives us for free.
```

**[L6566](./osu-local-favorites.user.js#L6566)** · src L1149

```js
// Collection membership counts for the "+ Playlist" badges - one pass
// over all collections per render instead of O(collections x ids) per
// card (see buildCollectionCountIndex).
```

**[L6568](./osu-local-favorites.user.js#L6568)** · src L1154

```js
// Filter
```

**[L6581](./osu-local-favorites.user.js#L6581)** · src L1168

```js
// Category filters (date / title / artist / status / genre). Terms are
// lowercase keys; within a category the "include" terms are OR'd and any
// "exclude" term always drops the entry, even if it also matched an
// include. Across categories the surviving sets are AND'd. The plan is
// flattened once per render rather than per row - see ui/filters.js.
```

**[L6584](./osu-local-favorites.user.js#L6584)** · src L1176

```js
// Collection filter
```

**[L6590](./osu-local-favorites.user.js#L6590)** · src L1183

```js
// The badge reflects the visible result set after search, genre/tag,
// and collection filters, rather than always showing the library total.
```

**[L6592](./osu-local-favorites.user.js#L6592)** · src L1187

```js
// Sort
```

**[L6608](./osu-local-favorites.user.js#L6608)** · src L1204

```js
// Snapshot for the Now Playing bar's Back/Next/shuffle - always the
// currently visible, filtered/sorted order.
```

**[L6611](./osu-local-favorites.user.js#L6611)** · src L1209

```js
// Emptying the node zeroes scrollTop in a browser, but say so explicitly:
// the early-return paths below never reach the restore logic, and a view
// change must land at the top whether or not the engine obliges.
```

**[L6615](./osu-local-favorites.user.js#L6615)** · src L1216

```js
// Invalidate any chunk-append from a previous render (also covers the
// early-return paths below).
```

**[L6617](./osu-local-favorites.user.js#L6617)** · src L1220

```js
// Disconnect any previous lazy-load observer so orphaned refs don't linger
```

**[L6621](./osu-local-favorites.user.js#L6621)** · src L1225

```js
// IntersectionObserver rooted on the scroll container, 100px look-ahead on each side
```

**[L6630](./osu-local-favorites.user.js#L6630)** · src L1235

```js
// IndexedDB lookup is local and fast, so it's fine to wait for
// it before assigning src - avoids a network fetch now and a
// second, cached-copy swap-in moments later (which would
// otherwise cause a visible flicker on every card).
```

**[L6651](./osu-local-favorites.user.js#L6651)** · src L1261

```js
// Card BUILDER - rows are constructed lazily, one chunk per animation
// frame (see renderChunk below), so opening the panel with 500+ favorites
// doesn't build ~15k DOM nodes inside the click handler.
```

**[L6662](./osu-local-favorites.user.js#L6662)** · src L1275

```js
// Cover
```

**[L6668](./osu-local-favorites.user.js#L6668)** · src L1282

```js
// Don't set src yet - the IntersectionObserver will do it when the row
// scrolls within 100px of the list viewport
```

**[L6674](./osu-local-favorites.user.js#L6674)** · src L1290

```js
// insertBefore instead of textContent= so dimOverlay & previewBtn
// (appended after this block) are not destroyed
```

**[L6683](./osu-local-favorites.user.js#L6683)** · src L1301

```js
// Dim overlay - sits at --osu-fav-idle-dim normally (0 by default,
// i.e. invisible) and brightens to --osu-fav-hover-dim on hover/while playing
```

**[L6689](./osu-local-favorites.user.js#L6689)** · src L1309

```js
// Info
```

**[L6750](./osu-local-favorites.user.js#L6750)** · src L1371

```js
// Add-to-collection dropdown - sits right next to the date-added text.
// Shows a checkmark + count once the map is in at least one collection.
// Counts come from the per-render index (_collCounts, built once in
// renderList) - the direct scan here was O(collections x ids) per
// card, i.e. quadratic across a large library, and ran 2x per card.
```

**[L6765](./osu-local-favorites.user.js#L6765)** · src L1391

```js
// Style refresh already read the count; reuse it instead of a second scan.
```

**[L6770](./osu-local-favorites.user.js#L6770)** · src L1397

```js
// Membership may have just changed for THIS map - refresh from
// the live store rather than the render-time index.
```

**[L6777](./osu-local-favorites.user.js#L6777)** · src L1406

```js
// Membership changed - if a collection filter is active, this
// card may need to appear/disappear from the visible list.
```

**[L6783](./osu-local-favorites.user.js#L6783)** · src L1414

```js
// Progress bar (shown during playback)
```

**[L6793](./osu-local-favorites.user.js#L6793)** · src L1425

```js
// Actions
```

**[L6798](./osu-local-favorites.user.js#L6798)** · src L1431

```js
// Canonical URL from the numeric id - never the stored f.url, which
// untrusted imports could otherwise control (javascript:/lookalike).
```

**[L6812](./osu-local-favorites.user.js#L6812)** · src L1447

```js
// If a default mirror is configured (Settings → Download Mirrors)
// and it's actually usable right now (mirror still enabled, or
// Official while actually signed in), skip the dropdown entirely
// and go straight to a real download link. Otherwise fall back to
// the normal "Download ▾" trigger - resolveDefaultMirror() already
// returns null for anything that wouldn't work, so this never
// hands out a dead link.
//
// Separately: even with no default set, buildDownloadOptions() can
// still only have exactly one entry (e.g. a signed-out guest with
// every mirror disabled - Official is the only option, "requires
// sign-in" and all). A "▾" dropdown that opens to one single row is
// just a pointless extra click, so that case also collapses to a
// plain link, same as the default-mirror path.
```

**[L6874](./osu-local-favorites.user.js#L6874)** · src L1523

```js
// Preview button - singleton audio (module-level ensureAudio()), only one plays at a time
```

**[L6878](./osu-local-favorites.user.js#L6878)** · src L1528

```js
// Hydrate this track's cache entry as soon as the user shows intent
// (hover or pointer-down on the row, or keyboard focus). Then the
// click's cache lookup is a synchronous memory hit and the local copy
// is chosen without ever awaiting IndexedDB - see the cache-first
// source selection in startPlayback(). Prewarming only ever populates
// the small LRU, so sweeping a few rows costs no retained memory.
```

**[L6883](./osu-local-favorites.user.js#L6883)** · src L1539

```js
// Play button - lives inside the cover, centred, shown on hover or while playing
```

**[L6893](./osu-local-favorites.user.js#L6893)** · src L1550

```js
// Show/hide button on cover hover; restore original border/color on hover
```

**[L6910](./osu-local-favorites.user.js#L6910)** · src L1568

```js
// Compare by id, not by src string - a cached play sets audio.src
// to a local blob: URL, which never string-matches previewUrl.
```

**[L6911](./osu-local-favorites.user.js#L6911)** · src L1571

```js
// A source decision for this same track is still in flight, so
// audio.src does not point at it yet - a play/pause here would act on
// whatever played before. The pending play() starts on its own.
```

**[L6922](./osu-local-favorites.user.js#L6922)** · src L1585

```js
// Re-link the bar/dim to this card every time we (re)start
// playback, not just on a genuinely new src - if the previous
// play ran to completion, the "ended" handler already cleared
// audio._activeBar/_activeDim and hid the progress wrap, so a
// plain audio.play() here would resume sound with nothing
// wired up to draw progress for it.
```

**[L6936](./osu-local-favorites.user.js#L6936)** · src L1605

```js
// Different track - hand off to the shared player so the Now
// Playing bar and Back/Next queue stay in sync too.
```

**[L6941](./osu-local-favorites.user.js#L6941)** · src L1612

```js
// Reconcile a track that is already loaded in the singleton audio
// element with this freshly built card. renderList() runs on panel
// open, close/reopen, and every external refresh while playback
// keeps going; buildCard always rendered the button in its idle
// state, and syncCurrentCardUI() fires before the chunked append has
// created this row - so the playing/paused state and progress bar
// were forgotten on every rebuild. Link the live card here, per
// chunk, exactly when the node comes into existence.
```

**[L6965](./osu-local-favorites.user.js#L6965)** · src L1644

```js
// Chunked build+append - mounting 500+ rows in one synchronous pass
// blocked the click handler for seconds and forced full-layout reflows.
// Smaller chunks keep each frame comfortably under the ~50ms budget
// Chrome flags as janky, at the cost of slightly more frames to finish
// mounting a very long list - imperceptible either way while scrolled
// near the top, and it's non-blocking regardless.
```

**[L6966](./osu-local-favorites.user.js#L6966)** · src L1651

```js
// set at top of this function
```

**[L6968](./osu-local-favorites.user.js#L6968)** · src L1653

```js
// Rows arrive a chunk at a time, so the saved offset usually does not
// exist yet on the first frame. Restore as soon as the list has grown
// tall enough to hold it (or once every row is mounted, if the list is
// now shorter than it was), then stop checking.
```

**[L6975](./osu-local-favorites.user.js#L6975)** · src L1664

```js
// Keep the mobile search bar's own scroll tracking in step, so the
// restore is not read as the user scrolling and does not collapse or
// expand the header behind their back.
```

**[L6978](./osu-local-favorites.user.js#L6978)** · src L1670

```js
// superseded by newer render
```

**[L6990](./osu-local-favorites.user.js#L6990)** · src L1682

```js
// ── Mobile search bar behavior ─────────────────────────────
// On narrow screens the search field collapses while the favorites list is
// scrolled down, giving the cards more vertical room. The mini-player is
// deliberately outside the scrolling list, so it remains pinned while the
// search bar hides/reappears.
```

**[L7026](./osu-local-favorites.user.js#L7026)** · src L1723

```js
// Collapse the header itself with the search field. The input alone can
// disappear while osu!'s global CSS still leaves a large header box.
```

**[L7036](./osu-local-favorites.user.js#L7036)** · src L1735

```js
// ── Assemble & wire events ─────────────────────────────
// Bottom UI is a panel-level sibling of the scrolling content, exactly like
// the top header: it is absolutely pinned to the panel bottom and never
// participates in the scrollable list/settings viewport.
```

**[L7045](./osu-local-favorites.user.js#L7045)** · src L1748

```js
// Expose the in-place re-render so changes made anywhere else (a heart
// clicked on the page behind, Copy All, a Gist restore, another tab) can
// update this panel without tearing it down. renderList() re-reads the
// store and rebuilds the rows while keeping the closure state - search
// text, sort, genre filter, active collection - and the mini-player's
// binding intact, which destroying and reopening the panel does not.
```

**[L7050](./osu-local-favorites.user.js#L7050)** · src L1759

```js
// Automatic checks can be disabled in Settings. Manual checks remain
// available from Settings and the userscript menu either way.
```

**[L7060](./osu-local-favorites.user.js#L7060)** · src L1771

```js
// Re-renders the favorites panel's list if it is currently open.
// A no-op when the panel is closed, so callers never have to check first.
//
// Deferred rather than immediate, for two reasons:
//
//  1. Re-entrancy. The favorites-changed notification fires synchronously
//     from inside setFavorites(), which is itself usually called from a
//     click handler on a row in this very list. Rebuilding the list right
//     there would detach the node whose handler is still executing, and
//     the rest of that handler would then operate on orphaned elements.
//  2. Double work. Panel-internal handlers already call renderList()
//     themselves after mutating. The render counter below lets a queued
//     refresh notice that the panel has already caught up and skip - so
//     an in-panel action still costs exactly one render, not two.
```

**[L7063](./osu-local-favorites.user.js#L7063)** · src L1788

```js
// `force` is used for storage changes received from another tab. A local
// panel action may already have queued a render when that notification
// arrives; coalescing the notification away would leave page A showing its
// old list until the next local interaction.
```

**[L7076](./osu-local-favorites.user.js#L7076)** · src L1805

```js
// Re-read: the panel may have been closed, or replaced by a newly
// opened one, between queueing and now.
```

**[L7082](./osu-local-favorites.user.js#L7082)** · src L1813

```js
// the panel already re-rendered itself; nothing stale left
```

**[L7089](./osu-local-favorites.user.js#L7089)** · src L1820

```js
// If an external notification arrived while this render was queued,
// perform one authoritative follow-up instead of dropping it.
```


## `src/ui/menu-commands.js`

1 comments · userscript [L7099](./osu-local-favorites.user.js#L7099) - [L7099](./osu-local-favorites.user.js#L7099)

**[L7099](./osu-local-favorites.user.js#L7099)** · src L5

```js
// ═══ Menu commands ═══
// These run at top-level, before init() - an unguarded throw here (rather
// than the graceful no-op-stub behavior GM_getValue/GM_setValue fall back
// to in some environments) would silently prevent everything below,
// including init() itself, from ever running.
```


## `src/ui/guest-fallback.js`

10 comments · userscript [L7134](./osu-local-favorites.user.js#L7134) - [L7202](./osu-local-favorites.user.js#L7202)

**[L7134](./osu-local-favorites.user.js#L7134)** · src L5

```js
// ═══ Guest-mode fallback button ═══
// On beatmapset detail pages (/beatmapsets/12345), no heart button exists when
// not signed in. We inject a standalone button into the page header area.
```

**[L7136](./osu-local-favorites.user.js#L7136)** · src L10

```js
// Only on beatmapset detail pages (not the listing /beatmapsets)
```

**[L7137](./osu-local-favorites.user.js#L7137)** · src L12

```js
// Don't inject if already present
```

**[L7142](./osu-local-favorites.user.js#L7142)** · src L18

```js
// If the native osu! favourite button already exists on the page (user is logged in),
// we don't need to inject our guest fallback - our click interceptor handles the native
// button. Osu!'s own class/title FLIPS once a beatmapset is already favourited
// (…-square-favourite/"favourite this beatmap" → …-square-unfavourite/"unfavourite
// this beatmap"), so both states must be checked or an already-favourited map's native
// button goes undetected and we'd inject a visually-identical duplicate heart next to it.
```

**[L7151](./osu-local-favorites.user.js#L7151)** · src L33

```js
// Try multiple anchor points in order of preference.
// Prefer the header buttons row (.beatmapset-header__buttons) so our button sits alongside
// the native download buttons. Fall back progressively for older/different page layouts.
```

**[L7164](./osu-local-favorites.user.js#L7164)** · src L49

```js
// Build the button using the exact same class and inner-HTML structure as osu!'s
// native favourite button - so it sits flush with the download buttons and uses
// the page's own CSS for sizing, colours, and hover effects.
```

**[L7174](./osu-local-favorites.user.js#L7174)** · src L62

```js
// Inner HTML mirrors the native button exactly:
// <span.btn-osu-big__content> > <span.btn-osu-big__icon> > <span.fa.fa-fw> > <span.{far|fas}.fa-heart>
```

**[L7187](./osu-local-favorites.user.js#L7187)** · src L77

```js
// Mirror the native button's animation
```

**[L7190](./osu-local-favorites.user.js#L7190)** · src L81

```js
// Toggle the heart icon class
```

**[L7202](./osu-local-favorites.user.js#L7202)** · src L94

```js
// Prepend so it appears before the download buttons, matching logged-in position
```


## `src/ui/guest-downloads.js`

16 comments · userscript [L7206](./osu-local-favorites.user.js#L7206) - [L7350](./osu-local-favorites.user.js#L7350)

**[L7206](./osu-local-favorites.user.js#L7206)** · src L4

```js
// ═══ Enable download buttons for guest/logged-out users ═══
// Based on exact DOM structure observed via Kimi WebBridge in logged-in Helium session:
//
// Logged-in listing/user panel download item:
//   <a class="beatmapset-panel__menu-item" href="…/download"
//      data-orig-title="download with video"><span class="fas fa-file-download"></span></a>
//   (user pages use title= instead of data-orig-title=, but same shape)
//
// Logged-in detail page:
//   <a class="btn-osu-big btn-osu-big--beatmapset-header" href="…/download">…Download with Video…</a>
//   <a class="btn-osu-big btn-osu-big--beatmapset-header" href="…/download?noVideo=1">…without Video…</a>
```

**[L7207](./osu-local-favorites.user.js#L7207)** · src L16

```js
// ── 1. Beatmap panel cards (listing + user pages) ────────────────────────
// Replace disabled <span class="beatmapset-panel__menu-item"> download spans
// with real <a> links that match the logged-in element exactly.
```

**[L7208](./osu-local-favorites.user.js#L7208)** · src L20

```js
// Already converted - skip
```

**[L7226](./osu-local-favorites.user.js#L7226)** · src L39

```js
// Context not resolvable yet (card still mid-render) - leave unmarked
// so the next pass retries instead of skipping this element forever.
```

**[L7232](./osu-local-favorites.user.js#L7232)** · src L47

```js
// Match logged-in: listing pages use data-orig-title, user pages use title
```

**[L7235](./osu-local-favorites.user.js#L7235)** · src L51

```js
// Preserve qtip attributes so tooltips work
```

**[L7240](./osu-local-favorites.user.js#L7240)** · src L57

```js
// Inner content: keep the original icon span (fas fa-file-download)
```

**[L7244](./osu-local-favorites.user.js#L7244)** · src L62

```js
// ── 2. Beatmapset detail pages (/beatmapsets/ID) ─────────────────────────
// When logged out, osu! renders a "Sign In to access more features" button
// instead of the download links. Replace it with the exact logged-in pair.
```

**[L7247](./osu-local-favorites.user.js#L7247)** · src L68

```js
// Guard: if real download links already exist (script ran before, or user logged in),
// or if we already injected them, don't duplicate.
```

**[L7259](./osu-local-favorites.user.js#L7259)** · src L82

```js
// Build "Download with Video" - matches logged-in <a class="btn-osu-big btn-osu-big--beatmapset-header">
```

**[L7275](./osu-local-favorites.user.js#L7275)** · src L99

```js
// Build "Download without Video"
```

**[L7294](./osu-local-favorites.user.js#L7294)** · src L119

```js
// Detects osu!plus (limjeck/osuplus) already having injected its own mirror
// buttons on this page - it tags them with this exact class in its
// makeMirror() function. If present, we skip adding our own to avoid a
// cluttered duplicate row of near-identical buttons.
```

**[L7298](./osu-local-favorites.user.js#L7298)** · src L127

```js
// Builds a button matching osu!'s own native download-button markup
// exactly (same classes osu!'s big buttons and osu!plus's mirror buttons
// use) - so ours inherit the page's real CSS instead of looking like a
// custom pill glued on top of it.
```

**[L7316](./osu-local-favorites.user.js#L7316)** · src L149

```js
// Injects native-styled mirror-download buttons onto the beatmapset detail
// page, right after the official download buttons. These work regardless
// of login state or a beatmapset's download_disabled flag - a solid
// fallback for anything the official button can't do. Cheap to call
// repeatedly; only rebuilds when the current beatmapset id actually
// changes, and stands down entirely if osu!plus already covers this.
```

**[L7332](./osu-local-favorites.user.js#L7332)** · src L171

```js
// already current
```

**[L7350](./osu-local-favorites.user.js#L7350)** · src L189

```js
// Match osu!plus's own insertion point exactly: before "…more" if it
// exists, otherwise appended into the main buttons row.
```


## `src/core/toast.js`

1 comments · userscript [L7358](./osu-local-favorites.user.js#L7358) - [L7358](./osu-local-favorites.user.js#L7358)

**[L7358](./osu-local-favorites.user.js#L7358)** · src L1

```js
// ═══ Toast helper ═══
```


## `src/data/version-check.js`

7 comments · userscript [L7385](./osu-local-favorites.user.js#L7385) - [L7439](./osu-local-favorites.user.js#L7439)

**[L7385](./osu-local-favorites.user.js#L7385)** · src L3

```js
// ═══ Version check & update helper ═══
```

**[L7391](./osu-local-favorites.user.js#L7391)** · src L10

```js
// getCurrentVersion() reads directly from Tampermonkey's GM_info API, which always
// mirrors the @version header - no separate constant to keep in sync.
```

**[L7392](./osu-local-favorites.user.js#L7392)** · src L13

```js
// Primary: Tampermonkey/Violentmonkey expose GM_info.script.version from the @version tag
```

**[L7395](./osu-local-favorites.user.js#L7395)** · src L17

```js
// Fallback: scan script tags in the document for a @version comment (development use)
```

**[L7421](./osu-local-favorites.user.js#L7421)** · src L44

```js
// 12 hours
```

**[L7434](./osu-local-favorites.user.js#L7434)** · src L57

```js
// Always fetch the live main branch so version checks pick up real releases
```

**[L7439](./osu-local-favorites.user.js#L7439)** · src L63

```js
// Only scan the UserScript header block (first 2 KB) for speed
```


## `src/ui/update-prompt.js`

7 comments · userscript [L7463](./osu-local-favorites.user.js#L7463) - [L7552](./osu-local-favorites.user.js#L7552)

**[L7463](./osu-local-favorites.user.js#L7463)** · src L3

```js
// ═══ Update prompt UI ═══
// Shown on page load when a new version is detected and the panel isn't open.
// Reuses the same palette as the panel so it looks consistent.
```

**[L7468](./osu-local-favorites.user.js#L7468)** · src L11

```js
// Inject slide-in keyframe if not already present
```

**[L7482](./osu-local-favorites.user.js#L7482)** · src L26

```js
// Matches panel: dark #111 bg, #333 border, same font stack, same shadow
```

**[L7499](./osu-local-favorites.user.js#L7499)** · src L44

```js
// Gradient accent bar - same as displayUpdateBanner inside the panel
```

**[L7523](./osu-local-favorites.user.js#L7523)** · src L69

```js
// Body - same text color and line-height as panel text
```

**[L7529](./osu-local-favorites.user.js#L7529)** · src L76

```js
// Footer buttons - mirror the toolbar makeBtn style from the panel
```

**[L7552](./osu-local-favorites.user.js#L7552)** · src L100

```js
// "Update" button - same style as the in-panel banner's Update button
```


## `src/core/init.js`

36 comments · userscript [L7573](./osu-local-favorites.user.js#L7573) - [L7916](./osu-local-favorites.user.js#L7916)

**[L7573](./osu-local-favorites.user.js#L7573)** · src L32

```js
// ═══ Init ═══
```

**[L7576](./osu-local-favorites.user.js#L7576)** · src L36

```js
// osu!'s own qtip tooltips/popups (difficulty hover cards, user cards,
// achievement popups, etc.) sit at z-index ~512 on the live site - far
// below the favorites panel's z-index (100000+). Whenever a tooltip
// would land underneath the panel's screen area (fixed to the right
// edge, full viewport height), it rendered completely invisible instead
// of on top like it should. This is injected unconditionally at init,
// not folded into the panel's own lazily-created stylesheet, so it's in
// effect from the very first hover - not just after the panel has been
// opened once.
```

**[L7583](./osu-local-favorites.user.js#L7583)** · src L52

```js
// Single place where a change to the favorites store becomes visible.
// Everything that mutates favorites - the panel, a heart on a card, the
// floating heart, Copy All, a Gist restore, another tab - routes through
// here, so no mutation site has to remember to refresh the UI itself
// (which is how the page's hearts and the open panel used to end up
// needing a reload to catch up).
//
// Registered before anything can mutate the store.
```

**[L7586](./osu-local-favorites.user.js#L7586)** · src L63

```js
// Enrichment filled in metadata for maps that are already favorited.
// Hearts are unaffected. Coalesce these - a bulk pass fires roughly
// once a second and rebuilding the list each time would make the
// panel unusable while it runs.
```

**[L7598](./osu-local-favorites.user.js#L7598)** · src L79

```js
// OAuth callback must be handled as early as possible so the user never
// sees a flash of the raw ?code=…&state=… query string on /home.
```

**[L7600](./osu-local-favorites.user.js#L7600)** · src L83

```js
// One-time-per-favorite migration: back-fill the enrichment queue with
// any favorite that has not completed metadata enrichment. Defer this potentially large
// scan and persist it with one batched GM write after the page gets a
// chance to render. The old per-favorite loop serialized and persisted
// the entire queue once per item, making first load scale badly in
// Tampermonkey, especially on Firefox Android.
```

**[L7606](./osu-local-favorites.user.js#L7606)** · src L95

```js
/* never break page load over this */
```

**[L7614](./osu-local-favorites.user.js#L7614)** · src L103

```js
// ═══ Cross-tab sync ═══
// When another tab writes to the favorites key, refresh all UI in this tab.
// GM_addValueChangeListener isn't implemented at all in some userscript
// managers (a hard ReferenceError rather than a graceful no-op stub like
// GM_getValue/GM_setValue get) - left unguarded, that throw would abort
// every line below it in this function, including the MutationObserver
// setup further down that keeps the page's hearts working after the
// first render. Cross-tab sync is a nice-to-have; losing it silently is
// far better than losing everything after it.
```

**[L7617](./osu-local-favorites.user.js#L7617)** · src L115

```js
// ignore writes from this same tab
```

**[L7619](./osu-local-favorites.user.js#L7619)** · src L117

```js
// Use the value delivered with the notification instead of asking
// GM_getValue() immediately. Some managers notify sibling tabs before
// their storage read API has caught up; rebuilding from that read
// would leave page A showing page B's old list until another event.
```

**[L7622](./osu-local-favorites.user.js#L7622)** · src L124

```js
// Re-render floating heart (filled/outline SVG) for the current beatmap
```

**[L7624](./osu-local-favorites.user.js#L7624)** · src L127

```js
// Re-render the existing panel in place. Reopening it here would
// create a new closure and can race with a chunked render already in
// progress, leaving page A with the old list or a partial list.
```

**[L7626](./osu-local-favorites.user.js#L7626)** · src L132

```js
// Re-check all visible card hearts (clear the "already scanned" flag first)
```

**[L7640](./osu-local-favorites.user.js#L7640)** · src L147

```js
// Some userscript managers expose working GM_getValue/GM_setValue but
// do not implement a reliable GM_addValueChangeListener. gm-shim now
// broadcasts a tiny cross-tab signal through BroadcastChannel, with a
// localStorage storage-event fallback. The receiver waits briefly before
// reading native GM storage because some managers propagate the notification
// slightly before the updated value is visible to another tab. A second
// settle pass covers slower extension-storage implementations.
```

**[L7645](./osu-local-favorites.user.js#L7645)** · src L159

```js
// The signal only carries the key; wait for the manager's storage
// read to settle before invalidating and rebuilding the panel.
```

**[L7683](./osu-local-favorites.user.js#L7683)** · src L199

```js
// BroadcastChannel is more reliable than storage events in extension
// sandboxes and reaches sibling tabs/windows on the same origin directly.
```

**[L7693](./osu-local-favorites.user.js#L7693)** · src L211

```js
// storage-event fallback above remains active.
```

**[L7695](./osu-local-favorites.user.js#L7695)** · src L214

```js
// A tab can be backgrounded while another tab changes the store. On return,
// do one cheap authoritative re-read so a throttled background context
// cannot leave the open panel visually stale.
//
// The re-read is unconditional; the *rebuild* is not. This used to call
// invalidateFavoritesCache() + refreshFavoritesPanel(true) every time the
// tab regained focus, and both of those force a full teardown of the list.
// Alt-tabbing away and back - or just switching browser tabs - therefore
// rebuilt the panel and dropped the user back at the top of the list, with
// nothing at all having changed. Compare a fingerprint of the store across
// the hidden period instead, and only repaint when it genuinely moved.
```

**[L7732](./osu-local-favorites.user.js#L7732)** · src L262

```js
// Collections (playlists) live under their own GM key, entirely separate
// from the favorites key above - creating/renaming/deleting a collection,
// or adding/removing a map from one, never touches STORAGE_KEY, so the
// listener above never fires for it. Without this, a tab with the panel
// already open would keep showing the collections list, the per-row
// "+ Playlist" badges and the active-collection filter exactly as they
// were at panel-open time until the tab was reloaded, no matter what was
// edited in another tab. refreshFavoritesPanel() re-reads
// getCollections() from scratch on every call, so invalidating the cache
// and refreshing is enough - no full panel teardown/rebuild needed.
```

**[L7744](./osu-local-favorites.user.js#L7744)** · src L284

```js
// Same story for the Appearance settings (accent, heart color, cover-art
// opacity/dim sliders): each lives under its own GM key and is applied by
// calling applyTheme(), which every mutation site already calls in its
// own tab. Nothing replayed that call in *other* open tabs, so changing
// the accent color in one tab left every other open tab showing the old
// colors until reload. applyTheme() just re-reads all six keys and
// rewrites the CSS custom properties on <html>, so it's cheap and
// idempotent to call from any of them changing remotely.
```

**[L7769](./osu-local-favorites.user.js#L7769)** · src L317

```js
// Auto-check version updates only when the user has left the setting on.
```

**[L7778](./osu-local-favorites.user.js#L7778)** · src L327

```js
// Debounced observer - runs at most once per 600ms to avoid freezing the page
```

**[L7783](./osu-local-favorites.user.js#L7783)** · src L333

```js
// Skip while the tab is in the background - a MutationObserver on
// the whole document body fires on osu!'s own live-updating content
// too (dashboard activity feed, notification counts, relative
// timestamps, etc.), not just our own changes, so on a busy page
// this can otherwise re-run every ~600ms indefinitely even while
// nobody's looking at the tab. The visibilitychange listener below
// catches up in one pass as soon as it's foregrounded again, so
// nothing actually goes stale - this just stops paying for it while
// backgrounded.
```

**[L7804](./osu-local-favorites.user.js#L7804)** · src L363

```js
// ═══ Turbolinks / back-forward resiliency ═══
// osu!'s site navigates via Turbolinks - going back restores a *cached
// snapshot* of the page rather than loading it fresh. That snapshot is a
// clone of whatever was on the page when it got cached, and cloning does
// not carry over addEventListener-based handlers. Our own injected
// elements (floating heart, panel, guest button, mirror row) come back
// looking identical but dead - same ids/classes, so our own "already
// there, skip" guards leave the lifeless clone in place instead of
// rebuilding a working one, and everything reads as "unresponsive" until
// a manual page reload. The MutationObserver above silently stops
// working here too, since it's watching whatever <body> existed at
// attach time and Turbolinks replaces <body> wholesale on every
// navigation. Wiping the known injected ids/classes and reattaching the
// observer on every Turbolinks navigation (cache-restore or fresh) fixes
// both issues at once.
```

**[L7810](./osu-local-favorites.user.js#L7810)** · src L384

```js
// Listen for the browser's native SPA navigation signal as well. The
// history API itself does not emit popstate for pushState/replaceState,
// which is why the URL poll remains as a final fallback.
```

**[L7819](./osu-local-favorites.user.js#L7819)** · src L396

```js
// Keep a live panel node when osu! swaps content in place. If a
// Turbolinks/Turbo snapshot cloned it, the clone has no render closure,
// so discard that inert copy and recreate it below when it was open.
```

**[L7831](./osu-local-favorites.user.js#L7831)** · src L411

```js
// Beatmap context (isLoggedIn's cached user blob, mirror row state)
// is per-page - a Turbolinks navigation may land on a different page
// as a different (or no) user, so stale caches must not survive it.
```

**[L7846](./osu-local-favorites.user.js#L7846)** · src L429

```js
// Remember whether the panel should be restored if navigation replaces the
// document with a cached snapshot. The panel itself is intentionally not
// removed during an in-place navigation, so its search/sort/filter state
// survives page changes.
```

**[L7849](./osu-local-favorites.user.js#L7849)** · src L436

```js
// Turbolinks (classic) fires "turbolinks:load"; Hotwire Turbo renamed it
// to "turbo:load" - listen for both since we can't be sure which is live.
```

**[L7851](./osu-local-favorites.user.js#L7851)** · src L440

```js
// Fallback for a genuine browser back/forward-cache restore, in case any
// navigation path bypasses Turbolinks entirely.
```

**[L7855](./osu-local-favorites.user.js#L7855)** · src L446

```js
// Polling for SPA navigation (low overhead). Some osu! routes do not emit
// either navigation event, and replacing <body> removes the panel before
// the next observer can run. Remember its open state between URL checks so
// the panel is recreated on the new page instead of silently disappearing.
```

**[L7863](./osu-local-favorites.user.js#L7863)** · src L458

```js
// The page content changed without a Turbolinks event. Markers left
// on nodes that survived the swap would make refreshButtons() skip
// them forever, so drop them and let the refresh below redraw from
// scratch.
```

**[L7877](./osu-local-favorites.user.js#L7877)** · src L476

```js
// Periodic fallback scan - the MutationObserver above catches almost
// everything, but some osu! content (e.g. the lazy-loaded "Beatmaps" tab
// on profile pages, which only fetches its data once scrolled into view)
// renders on its own schedule and can occasionally land between observer
// callbacks. This is a cheap, unconditional re-scan that guarantees
// hearts, the "Favorite all" button, and download links all settle into
// the correct state within ~1.5s no matter what triggered the render.
// Skipped while backgrounded for the same reason as debouncedRefresh
// above - a background tab has no reason to keep re-scanning the page
// every 1.5s forever; the visibilitychange listener below runs one pass
// immediately on returning to the tab instead.
//
// Change-gated: the five scan functions together iterate every <button>
// and download menu-item on the page. A DOM-signature check (single
// querySelectorAll pass, same set refreshButtons() walks) skips passes
// where nothing new appeared and the URL didn't change - the observer
// remains the primary driver for real DOM changes, and every 8th tick
// (~12s) still runs a full pass as a safety net for same-count DOM swaps.
```

**[L7896](./osu-local-favorites.user.js#L7896)** · src L513

```js
// Firefox Android may hand a media session to Android right as its tab is
// backgrounded. Re-publish an active preview at that boundary: this keeps
// the OS-owned session authoritative while osu!'s page is hidden and its
// regular page timers are throttled. Do not call play() here - playback
// was already user-initiated, and calling it again from this lifecycle
// event would violate Android's autoplay policy.
```

**[L7906](./osu-local-favorites.user.js#L7906)** · src L529

```js
// Catch up in one pass after returning to the tab, so pausing the scans
// above while hidden never leaves the page UI stale.
```

**[L7916](./osu-local-favorites.user.js#L7916)** · src L541

```js
// Initial refresh after page settles
```

