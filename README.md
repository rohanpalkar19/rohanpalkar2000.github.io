# rohanpalkar2000.github.io
Portfolio webiste


# Rohan Palkar — Portfolio (v2)

A plain HTML/CSS/JS portfolio (no build step) using your real profile content
pulled from your existing site, in a new dashboard/BI-panel visual style —
light surface, teal accent, animated skill bars, card-based layout.

## Files
- `index.html` — page content (About, Experience, Education, Skills,
  Projects, Certifications, Contact — all filled in with your real details)
- `styles.css` — all styling
- `script.js` — scroll reveal + animated skill bars

## What's already filled in
- Name, role, location, bio from your About/Resume sections
- Both internships (Nanavati Max Super Speciality Hospital, Cynthi'ans)
- Both degrees (M.Sc. IT–AI, B.Sc. IT)
- Skill percentages (SQL, Python, Data Viz, Statistical Analysis, ML)
- All 4 GitHub projects, linked to their real repos
- All 6 certifications/credentials, linked to their real sources
- Email, phone, LinkedIn, GitHub, YouTube, résumé link

Double-check the phone number and email before publishing, and swap the
résumé link if you've since updated it.

## Preview locally
Open `index.html` directly in a browser, or serve the folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Publish on GitHub Pages
Since your GitHub Pages repo (`rohanpalkar2000.github.io`) already exists:

1. Replace the contents of that repo with these three files (`index.html`,
   `styles.css`, `script.js`) — you can remove the old `css/`, `js/`, `scss/`,
   `lib/`, `fonts/` folders since this version is self-contained. Keep the
   `certificate/` folder as-is; the new site links directly into it.
2. Commit and push to `main`:
   ```
   git add -A
   git commit -m "Redesign portfolio: dashboard-style layout"
   git push origin main
   ```
3. GitHub Pages will redeploy automatically at
   `https://rohanpalkar2000.github.io/` — usually live within a minute or two.

## Notes
- Fully responsive down to mobile widths.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via CDN.
- No frameworks or build tools — nothing to install before deploying.
