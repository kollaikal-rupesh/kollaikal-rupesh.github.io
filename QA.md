# Quality assurance

Checked November 24, 2026.

## Passed

- A clean dependency install from the lockfile (`npm ci --offline`) succeeded.
- ESLint, strict TypeScript, and the optimized Next.js production build passed.
- All requested routes are statically generated, including individual research and publication pages. The export is approximately 2 MB before compression.
- The export checker passed for both a root deployment and a project-path deployment (`/academic-website/` with a different origin). It checked 13 generated HTML documents, 264 internal links/assets, unique page titles, canonical URLs, structured-data JSON, sitemap, robots, and the missing-CV guard.
- The final `out/` directory was rebuilt for the default GitHub user-site origin, with no project prefix.
- The documented development command started successfully and the homepage returned HTTP 200.
- Desktop layout inspected at 1440 × 1000; mobile layouts inspected at 390 × 844 and 320 × 740. No horizontal overflow was observed at those tested widths. Mobile navigation was simplified to one row.
- Research-index, project-page, and publication-index navigation were exercised. Keyboard activation of research and publication links worked.
- No browser warnings/errors were captured during the inspected homepage and research flows.
- Text contrast against the off-white background: primary text 14.29:1, muted text 5.62:1, accent links 8.98:1. Inline prose links are underlined, and visible keyboard focus/skip-link styles are supplied.
- The actual CV PDF is absent; public PDF view/download links are therefore absent. The CV page provides an email request link and supplied background information.
- Research/publication integrity review is documented in `VERIFICATION.md`. The website omits unsupported publication entries and does not display the private personal information excluded in the brief.

## External-link checks

`reports/external-links.json` records all 19 distinct external links rendered in the website. Sixteen returned HTTP 200. SSRN and Preprints.org returned 403 to the direct automated checker; their original indexed primary records were independently read. IJNRD's publisher page was verified earlier but returned HTTP 500 in the final direct check. LinkedIn may present an interstitial; the supplied URL is independently cross-linked by the GitHub profile.

These access restrictions are not represented as successful unrestricted access. Recheck publisher availability before an important application submission.

## Limits and remaining setup

- Lighthouse scores were not measured. No numerical performance/accessibility score is claimed.
- The browser tool became unavailable after the mobile and navigation checks. Clipboard-copy behavior, a complete keyboard focus-order walkthrough, and a final browser pass after the small inline-link underline change were not completed. Automated pointer clicks were unreliable under the in-app browser's viewport override; keyboard activation worked. Test the deployed site in a regular desktop and mobile browser.
- The CV view/download branch cannot be tested with the real document until the owner supplies the PDF. No substitute PDF was generated.
- Experience dates/titles are supplied by the owner and still need reconciliation against the latest academic CV.
- Two requested AIP entries remain omitted: one has publisher-deposited Crossref metadata but lacks direct-publisher date confirmation; the other lacks a matching original record.
- No GitHub Pages or Vercel deployment was performed. The GitHub Actions workflow, Vercel configuration, and exact setup instructions are included. Domain availability, purchase, DNS configuration, and HTTPS provisioning are not completed or claimed.

The mobile project screenshot is delivered separately as `research-mobile.jpg`.
