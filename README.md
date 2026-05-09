# Hajj Companion

A free, offline-first personal checklist and guide for the Hajj pilgrimage.

**No tracking. No login. No cloud. Works offline.**

---

## What this is

A static web app that walks a pilgrim through the complete Hajj journey:

1. **Nusuk registration** — step-by-step guide through the official Saudi booking platform
2. **Pre-travel checklist** — documents, health, Ihrām, toiletries, tech, logistics, and spiritual preparation
3. **Hajj day-by-day guide** — each day of Hajj with rites, duas (in Arabic, transliteration, and English), locations, and edge cases
4. **Reference** — duas collection, glossary, emergency information

Progress is saved in your browser's `localStorage`. Use the Export/Import feature in Settings to back up or move your data.

---

## Using it

Open `index.html` in any modern browser. No build step, no server required.

**Add to home screen (recommended):**
- **iPhone:** Tap Share → "Add to Home Screen"
- **Android:** Tap the browser menu → "Add to Home Screen" or "Install app"

After the first load, the app works fully offline via a service worker. A pilgrim in Mina with no signal can still read the duas for Arafah.

---

## Religious disclaimer

This app is a **memory aid and personal checklist — not a source of religious rulings (fatawa).**

- Duas are sourced from Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami' al-Tirmidhi, and other established collections.
- Translations are approximations — the Arabic is the primary text.
- Schools of Islamic jurisprudence differ on many details of Hajj rites.
- Saudi regulations and Nusuk requirements change each season.
- This app cannot account for your personal circumstances.

**For all religious matters, follow the guidance of your group leader and a qualified scholar.** For visa and registration matters, verify with your country's Hajj authority and [nusuk.sa](https://www.nusuk.sa) directly.

---

## Privacy

Zero outbound network requests after the first page load. No analytics, no trackers, no third-party scripts of any kind. Your checklist data is stored only in your browser's `localStorage` on your own device.

---

## Contributing corrections

Religious accuracy is the highest priority. If you find an error in any dua, translation, or guidance:

1. Open an issue describing the error and providing the correct text with its source
2. Or submit a pull request with the correction

Please include the hadith reference or scholarly source for any correction. Changes to religious content require clear sourcing.

**Content files are plain JavaScript modules** — no framework knowledge needed:
- `js/content/duas.js` — dua texts and sources
- `js/content/checklist.js` — pre-travel checklist items
- `js/content/hajj-days.js` — day-by-day guide content
- `js/content/glossary.js` — terminology definitions
- `js/content/nusuk.js` — Nusuk registration steps

---

## Self-hosting

It's static HTML, CSS, and JavaScript — host it anywhere:

```
# GitHub Pages: push to main, enable Pages from root
# Netlify / Vercel: connect repo, no build command, publish directory = .
# Apache / nginx: serve the directory as static files
# Locally: open index.html directly in a browser
```

All asset paths are relative so the app works whether served from a domain root, a subdirectory, or opened directly from disk.

---

## PWA icons

The repository includes an SVG icon (`icons/icon.svg`). For iOS PWA support, generate PNG icons from it:

```bash
# Using ImageMagick (example):
convert icons/icon.svg -resize 192x192 icons/icon-192.png
convert icons/icon.svg -resize 512x512 icons/icon-512.png
```

Or use any SVG-to-PNG converter. Place the resulting files at `icons/icon-192.png` and `icons/icon-512.png`.

---

## License

MIT — see [LICENSE](./LICENSE).

May Allah accept your Hajj.
