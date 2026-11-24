# Quality assurance — classic HTML/CSS version

Checked November 24, 2026.

## Completed

- Converted all ten public content pages plus the custom 404 page to editable HTML. Compared the visible text with the previous version to confirm research, publications, background, and links were retained. The 404 page received its own title and a single noindex directive.
- Replaced Tailwind and the framework bundle with one ordinary CSS file. Removed React, Next.js, npm dependencies, generated runtime scripts, and hydration payloads from the deployed site.
- Added a small standalone JavaScript enhancement for citation copying. Buttons remain hidden if JavaScript is unavailable; the complete BibTeX remains readable and manually selectable.
- `python3 scripts/check_site.py` passes: page structure, local links/assets and fragments, unique titles, canonicals, descriptions, sitemap inventory, structured-data JSON, image alt text, citation controls, absent-CV handling, and absence of framework runtime references.
- `node --check assets/site.js` passed as a development syntax check; Node is not needed to serve or deploy the website.
- The supplied portrait is preserved as a 448 × 560 WebP (approximately 25 KB), visually inspected. GitHub and LinkedIn links remain directly below the name and in every page’s footer.
- The shared stylesheet retains the inspected desktop/mobile design and responsive breakpoints. It includes explicit focus, skip-link, reduced-motion, print, and inline-link styles. Main text contrast remains 14.29:1, muted text 5.62:1, and accent links 8.98:1 against the background.
- GitHub Actions now checks and uploads static files directly, without installing website dependencies or compiling a frontend bundle. It publishes only the intended website assets.

## Limits

- The earlier layout was inspected at 1440 × 1000, 390 × 844, and 320 × 740. Browser tooling is currently unavailable, so a fresh visual pass after the plain-HTML conversion and an interactive clipboard test have not been performed. No Lighthouse scores are claimed.
- The genuine academic CV is still absent, so public PDF links remain hidden. Test the real PDF when supplied.
- Role dates and titles still need reconciliation with the latest academic CV. Two requested AIP entries remain omitted pending evidence; see `VERIFICATION.md`.
- The earlier 19-link external check is retained in `reports/external-links.json`: sixteen returned 200; SSRN and Preprints.org blocked direct automated requests (403); the previously verified IJNRD record returned 500 during the final direct check. Source identity was independently checked as described in the verification report.
- Custom-domain registration, purchase, and DNS configuration are not completed or claimed.

Check the latest GitHub Pages Actions run for deployment status. This file records source checks; the final delivery message reports the verified live result.
