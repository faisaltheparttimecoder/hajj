<div align="center">

# 🕌 Hajj Companion

### _A complete offline guide and personal checklist for the Hajj pilgrimage_

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-gold?style=for-the-badge)](https://faisaltheparttimecoder.github.io/hajj/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge)](https://github.com/faisaltheparttimecoder)

---

**Built with vanilla HTML, CSS, and JavaScript**  
_No frameworks • No tracking • No login • Works offline_

</div>

## Features

- **Nusuk registration guide** — step-by-step walkthrough of the official Saudi Hajj booking platform
- **Umrah guide** — complete phase-by-phase Umrah companion from home to Makkah, including Tawaf and Sa'i
- **Hajj day-by-day** — every day of Hajj (Day 0–5) with rites, locations, duas, and edge cases
- **Madinah guide** — presenting Salam, the Rawdah, Jannat al-Baqi', and recommended visits
- **Pre-travel checklist** — documents, health, Ihrām, toiletries, tech, logistics, and spiritual preparation
- **Duas collection** — Arabic text, full transliteration, and English translation for every key moment
- **Glossary** — 60+ terms covering Hajj fiqh, Arabic vocabulary, and ritual terminology
- **Dark & light themes** — automatic system preference with manual override
- **Offline-capable** — works fully without internet after first load via service worker
- **PWA-ready** — installable on iPhone and Android as a home screen app
- **Progress tracking** — every step checkable, saved in `localStorage` with export/import support
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation

## Deploy

This site is designed for GitHub Pages:

1. Push your code to GitHub
2. Go to **Settings** → **Pages** → set source to **GitHub Actions**
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

The included workflow at `.github/workflows/deploy.yml` handles deployment automatically on every push to `main`.

## Local Development

```bash
python3 -m http.server 8787
```

Then open `http://localhost:8787` — no build step, no dependencies.

## Content Structure

All content is plain JavaScript modules — no framework knowledge needed:

| File                      | Contents                                               |
| ------------------------- | ------------------------------------------------------ |
| `js/content/duas.js`      | Dua texts, transliterations, translations, and sources |
| `js/content/checklist.js` | Pre-travel checklist categories and items              |
| `js/content/hajj-days.js` | Day-by-day Hajj guide (Day 0–5)                        |
| `js/content/umrah.js`     | Phase-by-phase Umrah guide                             |
| `js/content/madinah.js`   | Madinah visit guide                                    |
| `js/content/glossary.js`  | Glossary terms and definitions                         |
| `js/content/nusuk.js`     | Nusuk registration and Rawdah permit steps             |

## Religious Disclaimer

This app is a **memory aid and personal checklist — not a source of religious rulings (fatawa).**

- Duas are sourced from Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami' al-Tirmidhi, and other established collections
- Translations are approximations — the Arabic is always the primary text
- Schools of Islamic jurisprudence differ on many details of Hajj rites
- Saudi regulations and Nusuk requirements change each season

**For all religious matters, follow the guidance of your group leader and a qualified scholar.**

## Privacy

Zero outbound network requests after the first page load. No analytics, no trackers, no third-party scripts. Your progress data is stored only in your browser's `localStorage` on your own device.

## Contributing

Religious accuracy is the highest priority. If you find an error in any dua, translation, or guidance:

1. Open an issue with the correct text and its scholarly source
2. Or submit a pull request with the correction

Please include the hadith reference or scholarly source for any changes to religious content.

## License

- **Code**: [MIT License](LICENSE) — free to use, modify, and distribute
- **Content**: Public devotional material — share freely for the sake of Allah

---

<div align="center">

### 🤲 _May Allah accept your Hajj, forgive your sins, and return you safely to your family_

_Ameen_

---

Made with ❤️ for the Ummah | [Report an Issue](https://github.com/faisaltheparttimecoder/hajj/issues)

</div>
