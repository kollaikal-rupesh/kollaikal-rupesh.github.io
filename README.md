# Kollaikal Rupesh — Academic research website

A static, accessible academic website built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide. Content is stored in typed data files. No database, authentication, CMS, analytics, or runtime API is required.

## Local development

Use Node.js 22.13 or newer (Node 22 LTS is configured in CI).

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js. Validate and export:

```bash
npm run lint
npm run typecheck
npm run build
node scripts/check-export.mjs
npm run preview
```

`npm run check` combines lint, TypeScript, production build, and the static-export checks. Build output is in `out/`. The preview command serves that output at `http://localhost:3000/` and accepts a `PORT` environment variable. Production and development use Next.js’s supported Webpack mode because this development environment restricts the local worker ports used by Turbopack.

## Free hosting on GitHub Pages (recommended)

GitHub Free supports Pages from a **public repository**. Hosting and HTTPS are free. A separately registered custom domain has its own registration/renewal cost. This website is fully static and fits Pages; no Next.js server is needed.

1. Create the public repository **`kollaikal-rupesh.github.io`** under the `kollaikal-rupesh` account. If it already exists, review its contents before replacing anything.
2. Push this project’s contents, including `.github/workflows/pages.yml` and `package-lock.json`, to its `main` branch. Do not upload `node_modules`, `.next`, or `out`.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Open **Actions → Deploy academic website to GitHub Pages → Run workflow** (or push a new commit).
5. Check the workflow’s deployment URL. The expected user-site address is **https://kollaikal-rupesh.github.io/**. It is not a deployed URL until that workflow succeeds.

The workflow builds using the origin and base path returned by GitHub’s official Pages action. It also supports a project repository such as `/academic-website/` without broken asset paths. Its permissions are limited to reading source and deploying the generated Pages artifact. No personal access token needs to be added.

A public repository makes the source and committed content public. The site contains no phone number, residential address, GPA, or other private details from the brief.

### Custom domain later

**kollaikalrupesh.com** is the recommended personal domain if available. Its availability and registration price were not established, and no domain was purchased.

1. Register a domain you choose, or use a domain you already own.
2. Verify ownership in GitHub account settings, following [GitHub’s verification instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
3. Set the domain in this repository’s **Settings → Pages → Custom domain**.
4. Configure the apex and `www` DNS records using [GitHub’s current custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). `www` points to `kollaikal-rupesh.github.io`, not to a repository path.
5. Enable **Enforce HTTPS** after certificate provisioning. GitHub handles the redirect between correctly configured apex and `www` domains.
6. Rerun the deployment workflow after changing the domain so canonical URLs, social metadata, and the sitemap use the new origin.

For the Actions deployment used here, configure the custom domain in Pages settings. Do not add an unowned domain or a speculative CNAME file.

Official references: [Pages availability and custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Vercel alternative

1. Push the project to a GitHub repository and import it into Vercel.
2. Select the Next.js framework. `vercel.json` sets `npm run build`, output `out`, and trailing slashes.
3. Set **NEXT_PUBLIC_SITE_URL** to your actual production origin, such as `https://your-project.vercel.app` or your verified custom domain. Leave **NEXT_PUBLIC_BASE_PATH** empty.
4. Deploy and confirm the production URL. After changing domains, update the variable and redeploy.
5. In Vercel’s Domains settings, add your apex and `www` domains and choose one as the primary; redirect the other to it.

Without an explicit origin, the project defaults to `https://kollaikal-rupesh.github.io`. `.env.example` documents the two optional build-time settings. No runtime secrets are necessary. GitHub Pages publishing is controlled by the included workflow. Vercel remains an optional alternative.

## Updating content

- `data/profile.ts`: biography links, research interests, optional portrait path. Use only a real supplied portrait; otherwise the layout needs no image.
- `data/research.ts` and `data/mini.ts`: project descriptions and claims. Every numerical claim includes a checkpoint, benchmark version, source, evaluation date (or explicitly unknown date), verification status, and verification date. Only `verified` claims render.
- `data/publications.ts` and `data/primary-publication.ts`: titles, full ordered author lists, dates, status, original URLs, and BibTeX. Unverified entries do not render or enter the sitemap.
- `data/experience.ts` and `data/education.ts`: user-supplied background.
- `data/contributions.ts`: links to verified merged pull requests.
- `data/updates.ts`: factual dated news. The homepage hides updates until at least three entries exist.
- `components/Recognition.tsx`: documented external citations/integrations, kept separate from authored publications.

After content changes, run `npm run check` and inspect the affected pages. Keep claims scoped to the exact model version and evaluation population. A newer benchmark is not interchangeable with an older one.

## Adding the supplied academic CV

Place the genuine PDF at:

```text
public/cv/kollaikal-rupesh-cv.pdf
```

Rebuild and deploy. The `/cv/` page automatically exposes **View CV** (new tab) and **Download CV** only when the file exists at build time. Replacing the file preserves its public URL. No academic PDF has been fabricated. Until a PDF is provided, the page offers an email request link and a background summary. Reconcile role dates/titles with that CV before a final application submission.

## QA and editorial review

See `VERIFICATION.md` for source evidence, omitted claims, version distinctions, and remaining factual questions; see `QA.md` for performed checks and limitations. Internal links use native navigation, so the static export does not depend on host-specific React Server Component rewrites. The exported HTML remains readable without JavaScript. Only the optional citation-copy interaction requires client JavaScript. System fonts avoid external font requests. SEO includes unique titles/descriptions, canonicals, Open Graph/Twitter images, a sitemap, robots.txt, Person data, and ScholarlyArticle data for verified publication pages.

The source is provided for the owner’s use. Third-party research/model licenses remain those specified by their original repositories.

### Command-line upload after creating the empty GitHub repository

If starting from the source ZIP, initialize and commit first:

```bash
git init -b main
git add .
git commit -m "Build academic research website"
```

Then connect the repository and push (skip `remote add` if `origin` already exists):

```bash
git remote add origin https://github.com/kollaikal-rupesh/kollaikal-rupesh.github.io.git
git push -u origin main
```

Use your normal GitHub authentication flow. No credentials belong in the source files or remote URL. Enable GitHub Actions as the Pages source as described above.
