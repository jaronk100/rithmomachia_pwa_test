# Rithmomachia — The Philosopher's Game

A medieval "battle of numbers" played on a double chessboard, as a single
self-contained HTML file. Installs to an Android home screen and runs offline.

**Live:** https://jaronk100.github.io/rithmomachia_pwa_test/

---

## Deploying an update

1. **Upload `index.html` *and* `sw.js`.** Both, every time.
2. **Bump the cache name** in `sw.js`:
   ```js
   const CACHE = 'rithmomachia-v9';   // → v10
   ```
3. Wait a minute or two for Pages to build, then **fully close the app on the
   phone** — swipe it out of recents — and reopen.

Step 2 is the one that bites. A service worker serves its stored copy first, so
if the cache name doesn't change, the phone keeps showing the old build and it
looks like the upload failed. Uploading only the HTML has the same effect, for
the same reason.

If something looks stale, open the site in a **private tab** on the phone. That
bypasses the service worker entirely: new version there means it's a cache
problem, old version means the deploy didn't land — check the **Actions** tab.

---

## Files

| File | |
|---|---|
| `index.html` | The whole game — engine, AI, UI, rules screen. No dependencies. |
| `sw.js` | Service worker. Offline support. Navigation is network-first, everything else cache-first. |
| `manifest.webmanifest` | Makes it installable. Name, icon, colours, fullscreen. |
| `icon.svg` | App icon. |
| `make-icons.html` | One-off tool: renders the icon and exports PNGs at 192/512 plus a maskable variant. Not part of the app. |
| `grain-tuner.html` | One-off tool: live sliders for the board's wood grain. Outputs a spec block to paste back. Not part of the app. |

---

## Testing

Append `?test` to the URL to run the built-in self-test — roughly 50 assertions
covering setup totals, movement, all four capture types, pyramid decomposition,
triumph geometry, victory conditions and AI legality, plus 120 random games
checked for crashes and board-state consistency.

https://jaronk100.github.io/rithmomachia_pwa_test/?test

---

## Android

This folder is the input to [Capacitor](https://capacitorjs.com/) when building
the `.apk` / `.aab`. The web code runs unchanged inside a WebView — there is no
port and nothing to rewrite.

Note that new Play Store apps must target API 36, and personal developer
accounts created after 13 Nov 2023 need a closed test with 12 testers opted in
for 14 continuous days before applying for production access.
