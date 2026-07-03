## Richard B. Jamison Personal Website

- Project ID: `richardbjamison-website`
- Status: `active`
- Canonical local path: `/Users/richardjamison/Documents/Projects/RichardBJamisonPublichtml`
- Repo: `https://github.com/RichardBJamiosn/RichardBJamisonPublichtml.git`
- Branch: `main`
- Production URL: `https://richardbjamison.com`
- Deployment: GitHub Pages via `main` branch with `CNAME`

### Architecture and key files

- `index.html` — home page
- `marketing.html` — biography / marketing page
- `music.html` — music page
- `rbj-portfolio.html` — portfolio page
- `css/music-redesign.css` — music page styling
- `js/` — legacy scripts; `music.html` currently uses inline behavior for the track section

### Run / verify

- Static site; open files directly or serve locally from the repo root:
  - `python3 -m http.server 8000`
- Quick verify:
  - `curl -I https://richardbjamison.com/music.html`
  - Inspect `music.html` for the expected section state

### External services and credentials

- GitHub repository under `RichardBJamiosn`
- GitHub Pages serves `richardbjamison.com`
- GA4 tag present in page HTML; no secrets stored in repo

### Safety constraints

- Preserve existing static asset paths and filenames unless a deployment change requires otherwise
- Confirm live GitHub Pages behavior before changing navigation or page-level interactions
- Do not remove analytics or `CNAME` without explicit instruction

### Known-good verification

- `2026-07-03`: `curl -I https://richardbjamison.com/music.html` returned HTTP 200 from GitHub Pages

### Open work

1. Keep project registry aligned with this canonical path and ID
2. Deploy and verify music-page changes after review

### Last material update

- `2026-07-03` — `CODEX` — created project handoff during music-page track-player disable work
