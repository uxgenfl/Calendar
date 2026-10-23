# Calendar

Offline-capable PWA calendar. Events are stored in the browser (IndexedDB).

## Structure
- `index.html` page shell
- `css/` styles (`base.css`, `styles.css`)
- `js/` scripts (`theme-init.js`, `i18n.js`, `ui.js`, `pwa.js`, `app.js`)
- `fonts/` Geist (woff2)
- `icons/` app icons (vector `icon.svg`, PNG 16 to 1024, maskable)
- `sw.js` service worker, `manifest.webmanifest` install manifest

## Deploy to GitHub Pages
1. Push these files to the repository root (or `/docs`).
2. Settings > Pages > Deploy from a branch > pick the branch and folder.
3. Open `https://<user>.github.io/<repo>/` and install from the browser menu.

All paths are relative, so it works under a repo subpath. After changing any file, bump `VERSION` in `sw.js`.
