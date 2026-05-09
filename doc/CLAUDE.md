# CLAUDE.md — Hajj Companion

A static, offline-first Hajj preparation and journey companion. Built for GitHub Pages. No frameworks, no tracking, no signups.

---

## 1. Project Overview

**Name:** Hajj Companion (working title — feel free to rename)
**Purpose:** A personal checklist and guide that walks a pilgrim through the full Hajj journey — from Nusuk registration, through pre-travel preparation, through each day of Hajj rites with associated duas.
**Audience:** Muslim pilgrims preparing for and performing Hajj. Many will be first-time pilgrims; many will be older; many will read on a phone in poor connectivity in Makkah/Mina.
**Hosting:** GitHub Pages (static only).
**Promise to the user:** No frameworks. No tracking. No distractions. Works offline.

---

## 2. Hard Constraints (Do Not Violate)

1. **No frameworks.** No React, Vue, Svelte, Next, jQuery, Tailwind via CDN, Bootstrap, etc. Vanilla HTML, CSS, and JavaScript only.
2. **No build step.** Files in the repo are the files that get served. A user must be able to clone the repo and open `index.html` directly in a browser and have it work.
3. **No tracking.** No Google Analytics, no Plausible, no Sentry, no fonts loaded from Google Fonts, no third-party scripts at all. Zero outbound network calls after initial page load.
4. **No backend.** No API calls. No `fetch` to anywhere. State is local only.
5. **Works offline.** Use a Service Worker to cache all assets so the site runs fully offline after the first visit. Critical: a pilgrim in Mina with no signal must still be able to open the site and read the day-by-day duas.
6. **Storage is `localStorage` only.** No cookies, no IndexedDB unless absolutely necessary (it's not). All progress is keyed under a single namespace, e.g. `hajj-companion:v1`.
7. **Must work on iOS Safari, Android Chrome, and desktop browsers.** Pilgrims overwhelmingly use phones. Test mental model: iPhone 11, one-handed, bright sunlight.
8. **Arabic must render correctly.** Right-to-left, with proper diacritics (tashkeel). Use a system font stack that handles Arabic well; do not load remote fonts.
9. **Religious accuracy matters.** When in doubt, mark content as "verify with your scholar" rather than fabricating. See section 9.

---

## 3. Tech Stack

- **HTML:** Single `index.html` entry point. Other pages are not needed — this is a single-page app driven by hash routing (`#nusuk`, `#checklist`, `#day-1`, etc.) so deep links work and the back button behaves.
- **CSS:** A single `styles.css`. Use CSS custom properties for theming (light/dark). Use modern CSS — Grid, Flexbox, `:has()`, container queries where helpful. No preprocessor.
- **JavaScript:** Vanilla ES modules. Split into logical files:
    - `app.js` — entry point, router, layout
    - `state.js` — localStorage read/write, schema versioning, migration
    - `content.js` — the guide content as a structured JS object (or import from `content/*.js` modules)
    - `sw.js` — service worker (must be at root for scope reasons)
- **Fonts:** System font stack only. For Arabic: `"Noto Naskh Arabic", "Amiri", "Traditional Arabic", serif` falling back to system. Do not fetch fonts from the network.
- **Icons:** Inline SVG only. No icon font, no external SVG sprites.

---

## 4. Information Architecture

The app has three top-level sections, in this order:

### Section A: Nusuk Registration

The Nusuk app/portal is the official Saudi route for booking Hajj for pilgrims from many countries. Walk the user through:

1. What Nusuk is and who needs it (pilgrims from outside the GCC under the official route).
2. Account creation steps (download app, register with passport).
3. Package selection (understanding tiers, what's included).
4. Document upload (passport, photo, vaccinations).
5. Payment.
6. Confirmation and visa issuance.
7. What to print and bring.

Each step is its own checklist item. Include a note that Nusuk's UI and policies change every season — link out to `nusuk.sa` and remind the user to verify current requirements.

### Section B: Pre-Travel Checklist

Grouped sub-checklists, each collapsible:

- **Documents:** Passport (6+ months validity), visa, Nusuk confirmation, vaccination certificates (meningitis ACWY required, others recommended), travel insurance, ID copies stored separately, emergency contacts list.
- **Health:** Vaccinations, prescription medications (3x supply, in original packaging with prescription), basic first-aid, blister care, electrolyte sachets, sunscreen, lip balm, mask supply.
- **Ihram & Clothing:** Two ihram garments (men) — bring spares; modest clothing for women; comfortable walking sandals (broken in!); flip-flops for wudu areas; light jacket for cold AC; laundry bag.
- **Toiletries:** Unscented soap and shampoo (scented is forbidden in ihram), miswak, unscented toothpaste, towels, prayer mat (small, foldable), pebble pouch for Jamarat.
- **Tech & Money:** Power bank (high capacity), universal adapter (Saudi uses Type G), local SIM or roaming plan, small amount of SAR cash, card that works internationally, offline maps downloaded, Quran app downloaded, this app pinned to home screen.
- **Logistics:** Group/operator contacts written down on paper, hotel addresses in Arabic on paper, emergency embassy number, family WhatsApp group set up, will and finances settled at home, debts paid, forgiveness sought from family.
- **Spiritual preparation:** Intention (niyyah) clarified, key duas memorized or bookmarked, basic Hajj fiqh reviewed, repentance (tawbah).

### Section C: Day-by-Day Hajj Guide

The five days of Hajj plus the days immediately surrounding. Each day is its own page with: overview, what happens, where you'll be, what to do, duas to recite, common mistakes/edge cases, checklist.

- **Day 1 — 8th Dhul Hijjah (Yawm at-Tarwiyah):** Enter ihram from your accommodation, travel to Mina, pray Dhuhr/Asr/Maghrib/Isha/Fajr (next day) shortened in Mina.
- **Day 2 — 9th Dhul Hijjah (Yawm Arafah):** The day of Arafah — the heart of Hajj. Travel to Arafat after Fajr, stand in dua from Dhuhr until Maghrib, then proceed to Muzdalifah for Maghrib + Isha combined and overnight, collect pebbles.
- **Day 3 — 10th Dhul Hijjah (Yawm an-Nahr / Eid al-Adha):** Return to Mina, stone Jamarat al-Aqaba (7 pebbles), sacrifice (hady), shave/shorten hair, remove ihram (partial tahallul), then Tawaf al-Ifadah and Sa'i in Makkah, return to Mina.
- **Day 4 — 11th Dhul Hijjah:** Stay in Mina, stone all three Jamarat after Dhuhr (small, middle, large — 7 pebbles each).
- **Day 5 — 12th Dhul Hijjah:** Stay in Mina, stone all three Jamarat again. Pilgrims may leave Mina before sunset (ta'ajjul) or stay one more day.
- **Day 6 — 13th Dhul Hijjah (optional):** Stay one more day in Mina, stone all three Jamarat one more time.
- **Tawaf al-Wada (Farewell Tawaf):** Final Tawaf before leaving Makkah. Required for non-Makkans.

For each day include the relevant duas in Arabic, transliteration, and English translation. Mark the Talbiyah prominently — it's recited from entering ihram until stoning Jamarat al-Aqaba on Day 3.

### Optional Section D: Reference

- Glossary (Ihram, Tawaf, Sa'i, Talbiyah, Tahallul, Hady, Jamarat, etc.)
- Common duas (Talbiyah in full, dua at Multazam, dua between Safa-Marwa, dua at Arafah, etc.)
- Emergency info (lost in Mina, lost passport, medical emergencies, embassy numbers — leave the actual numbers as placeholders the user fills in for their country)
- About / Credits / Disclaimer

---

## 5. Layout & UX

### Desktop layout (≥ 900px wide)

- **Two-column layout.**
- **Left sidebar (260–300px, fixed):** Navigation. Top-level sections are collapsible. Within each section, sub-items show progress (e.g. "Pre-Travel Checklist 12/24"). Currently-selected item is highlighted. Sidebar is scrollable independently if it overflows.
- **Right pane (fluid, max-width ~720–800px for readability):** Content for the selected section. Scrolls independently.
- **Top:** Minimal — app title on the left, a small progress indicator and a settings icon on the right. No hero, no marketing.

### Mobile layout (< 900px)

- **Sidebar collapses to a drawer** triggered by a hamburger icon in the top bar. Closes when an item is tapped or when the user taps outside.
- **Bottom nav optional but not required.** A "Previous / Next" pair at the bottom of each content page is more useful for sequential flow.
- **Sticky top bar** with section title and progress so the user always knows where they are.

### Visual design

- **Tone:** Calm, modern, professional, slightly reverent. This is not a productivity app — it's a companion for a sacred journey. Avoid gamification, avoid emoji-heavy UI, avoid celebratory animations.
- **Color palette:** A muted, warm light theme and a true dark theme (dark theme is critical — pilgrims read in tents at night). Suggested:
    - Light: off-white background `#FAF8F4`, deep ink text `#1A1A1A`, accent green `#0F5132` (Madinah-green), subtle gold for completed states.
    - Dark: near-black `#0E0F11`, soft text `#E8E6E1`, muted green accent `#5BAE7C`.
- **Typography:** Generous line height (1.6–1.7), 17–18px base on mobile, comfortable reading widths. Arabic text at a larger size (1.4–1.5x) and proper line height.
- **Checkboxes:** Large tap targets (min 44x44px). Clear "checked" state. Tapping a row toggles it — not just the tiny box.
- **Progress:** A single horizontal progress bar at the top of each section. A global progress percentage in the top bar.
- **Respect `prefers-reduced-motion`** and `prefers-color-scheme`.

### Navigation behaviour

- Hash-based routing: `#/nusuk`, `#/checklist/documents`, `#/hajj/day-2`, etc.
- Browser back/forward must work.
- Refreshing the page must keep the user on the same view.
- Deep links must work (someone can bookmark `#/hajj/day-2`).

---

## 6. State Management

### Storage schema

Use a single localStorage key: `hajj-companion:v1`. Value is a JSON-serialized object:

```json
{
    "schemaVersion": 1,
    "completed": {
        "nusuk.create-account": true,
        "checklist.documents.passport": true,
        "hajj.day-1.entered-ihram": true
    },
    "notes": {
        "checklist.health.medications": "Brought 30 days of metformin"
    },
    "settings": {
        "theme": "auto",
        "arabicSize": "default",
        "language": "en"
    },
    "lastViewed": "#/hajj/day-2",
    "updatedAt": "2026-05-09T12:00:00Z"
}
```

### Rules

- **Every write is debounced** (250ms) and wrapped in try/catch — localStorage can throw (Safari private mode, quota exceeded).
- **Every read validates** the shape — if it's malformed, fall back to defaults rather than crashing.
- **Schema version** lets us migrate later without losing data.
- **Provide an "Export my progress" button** in settings that downloads a JSON file. Provide an "Import" button that accepts the same. This is the user's backup mechanism since there's no cloud sync.
- **Provide a "Reset everything" button** with a two-step confirmation (intentional friction — losing all your checklist progress mid-Hajj would be brutal).

---

## 7. Service Worker (Offline)

- `sw.js` at the repo root.
- On install, cache `index.html`, `styles.css`, all JS modules, and all icons.
- Strategy: **cache-first** for app shell, **stale-while-revalidate** is overkill since there's no network content.
- Bump a `CACHE_VERSION` constant when files change so old caches are evicted on activate.
- Register the SW from `app.js` only if `navigator.serviceWorker` exists. Wrap in try/catch.
- On a new SW activation, show a small unobtrusive toast: "Updated. Reload to see changes." Do not auto-reload — a pilgrim mid-page would lose their place.
- The `manifest.json` should declare the app as installable (PWA), with icons (192, 512), theme color, and `display: standalone` so it can be added to the home screen.

---

## 8. Edge Cases to Handle

These are not optional. Walk through each one:

1. **localStorage unavailable or full** → catch the error, show a one-time inline warning ("Your browser is blocking storage; progress won't be saved this session"), continue running in-memory.
2. **Private browsing / Safari quota** → same as above.
3. **User clears browser data** → next visit looks like a first visit; that's fine, but the welcome screen should mention export/import for backup.
4. **Multi-device usage** → not synced. Settings panel must clearly say "Progress is saved on this device only. Use Export/Import to move it."
5. **Slow / no connection mid-journey** → entirely covered by the service worker. Test by going to DevTools → Application → Offline and verifying the whole app still works including all duas.
6. **Old cache after deploy** → `CACHE_VERSION` bump + skipWaiting + clients.claim, but only after the user accepts the reload.
7. **Right-to-left Arabic inside left-to-right English** → wrap Arabic in `<span lang="ar" dir="rtl">…</span>`. Don't force the whole page RTL.
8. **Very long checklists on small screens** → collapsible section headers with item counts; remember collapse state per session.
9. **User taps "Reset everything" by accident** → require typing the word "reset" or two-step "Are you sure? This cannot be undone" with a 3-second delay before the confirm button enables.
10. **Date / day confusion** → Hajj days are lunar (Dhul Hijjah), and Saudi announces moon sighting late. Do **not** auto-detect "today is Day 2 of Hajj." Let the user tap which day they're on. Showing the wrong day to a pilgrim would be a serious problem.
11. **Language toggle** → if you ship multiple languages (English + Arabic + Urdu would be valuable), the toggle persists in settings. If only English at launch, leave a stub.
12. **Print view** → many pilgrims will want to print the checklist. A clean `@media print` stylesheet that hides the sidebar and shows everything expanded.
13. **Accessibility** → semantic HTML (nav, main, aside, section, h1–h3 hierarchy), ARIA labels on icon buttons, focus visible, full keyboard navigation, checkboxes operable with Space, contrast ratios pass WCAG AA.
14. **Tap-target size** → minimum 44x44px for any interactive element. Important for older pilgrims.
15. **Battery / brightness** → dark theme available; avoid pure white backgrounds in dark mode.
16. **No JavaScript** → render a simple fallback message inside `<noscript>` saying the app needs JS, plus a static link to the README on GitHub.
17. **iOS PWA quirks** → `apple-touch-icon`, `apple-mobile-web-app-capable`, viewport-fit=cover for notch handling, `-webkit-tap-highlight-color: transparent`.
18. **Search engines / sharing** → proper `<title>`, meta description, Open Graph tags, but **no tracking pixels**.

---

## 9. Content Sourcing & Religious Accuracy

This is critical. Get this wrong and the app does harm.

- **Do not invent duas.** Source Arabic text, transliteration, and translation from well-established references (Sahih al-Bukhari, Sahih Muslim, the standard Hajj dua collections). Cite the source next to each dua in small text.
- **Do not make fiqh rulings.** When schools of thought differ (e.g. Tamattu' vs Qiran vs Ifrad, exact details of stoning, whether to combine prayers), present the mainstream practice and add: "Practices vary; follow the guidance of your group's scholar."
- **Add a prominent disclaimer** on the welcome screen and in About: this app is a memory aid and personal checklist, not a fatwa. Pilgrims should follow their group leader and a qualified scholar.
- **Translations:** use a respected English translation. Mark translations as translations, not as the divine text itself.
- **Do not include audio recitation files** unless you have rights and can ship them in the cache. Linking out is fine but breaks offline.
- **Welcome the pilgrim respectfully.** "May Allah accept your Hajj" is appropriate; corporate marketing language is not.

---

## 10. Repository Layout

```
/
├── index.html
├── styles.css
├── manifest.json
├── sw.js
├── /js
│   ├── app.js
│   ├── router.js
│   ├── state.js
│   ├── render.js
│   └── content/
│       ├── nusuk.js
│       ├── checklist.js
│       ├── hajj-days.js
│       ├── duas.js
│       └── glossary.js
├── /icons
│   ├── icon-192.png
│   ├── icon-512.png
│   └── (inline SVGs in code, these are just for PWA install)
├── README.md
├── LICENSE          (MIT or similar — be explicit)
└── CLAUDE.md
```

Content lives in plain JS modules exporting structured data. This makes it trivial for contributors to submit corrections via PR without touching rendering code.

---

## 11. GitHub Pages Deployment

- Ship from the `main` branch root, or from `/docs`. No build step.
- Add a `.nojekyll` empty file at the root so Jekyll doesn't try to process anything.
- The site will be served from `https://<user>.github.io/<repo>/`. **All asset paths must be relative** (`./styles.css`, not `/styles.css`) so the app works whether served from a project page, a custom domain, or opened from disk.
- Service worker scope — register it with a relative path so it works under a subpath.
- Add a CNAME file if a custom domain is used.

---

## 12. README

The README should cover: what this is, screenshots, how to use it, how to contribute corrections, the religious-accuracy disclaimer, the privacy promise (no tracking, no cloud), how to self-host (it's just static files), and the license. Keep it humble and clear.

---

## 13. What "Done" Looks Like

A pilgrim opens the site on their phone six weeks before Hajj. They:

1. Read the welcome and disclaimer.
2. Walk through Nusuk registration, ticking items as they complete them.
3. Over the following weeks, work through pre-travel checklists.
4. Add the site to their home screen.
5. On the plane, with no signal, they open the app and review Day 1 of Hajj.
6. In Mina at 2am with one bar of signal, they open the app and read the Talbiyah and the duas for Arafah.
7. After Hajj, they tap "Reset everything" or export their journey for memory.

If every one of those steps works smoothly, on a 4-year-old phone, in airplane mode, with no errors and no surprises — the app is done.

---

## 14. Tone Reminder for Claude

When generating content, code comments, or UI strings: respectful, calm, plain-spoken. Not salesy. Not preachy. Not casual to the point of irreverence. Imagine writing for a parent or grandparent making the journey of their lifetime.
