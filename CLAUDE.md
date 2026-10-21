# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Dev server on http://localhost:3000
- `npm run build` — Production build into `build/`
- `npm test` — Jest + React Testing Library in watch mode. **No test files exist yet**; the first test added also needs a `src/setupTests.js` importing `@testing-library/jest-dom` (the dep is installed but the setup file was deleted).
- `npm test -- --watchAll=false src/path/To.test.js` — Run a single test file non-interactively
- `npm run deploy` — `predeploy` builds, then `gh-pages -d build` pushes `build/` to the `gh-pages` branch

Linting is CRA's built-in ESLint (`react-app` + `react-app/jest` config in package.json); it runs as part of `npm start` / `npm run build`, there is no separate lint script.

## Architecture

Single-page personal portfolio site. Create React App (react-scripts 5) + React 18 + react-router-dom v6 + Tailwind CSS 3.

It is one scrolling page — hero → work → about → experience → contact — not a multi-route app.

- **All résumé content lives in `src/data/resume.js`.** Bio, roles, education, skills, pipeline stages and the nav list are exported from there; components only render. Content changes are data edits — never hard-code a fact into JSX.
- `src/index.js` → `src/components/App.js`, which owns the fixed nav and composes the five sections from `src/components/sections/`.
- **`HashRouter` is retained** even though there's one real route, so GitHub Pages (no server-side rewrite) keeps working. A catch-all `<Route path="*">` redirects previously shared links like `/#/about` to `/`.
- **Nav links cannot be `href="#id"` anchors** — HashRouter owns the URL hash and would read a fragment as a route. All in-page navigation goes through `src/lib/scrollToSection.js`, which also offsets the 64px nav and honours `prefers-reduced-motion`.
- Shared pieces worth reusing before writing new code: `common/Section.js` (anchor id + scroll reveal + eyebrow/heading), `common/SocialLinks.js`, `hooks/useInView.js`, `hooks/useScrollSpy.js`, `lib/emphasize.js` (renders `**bold**` in résumé bullets).
- Assets live in `src/assets/` and are `import`ed so CRA fingerprints them — never reference them by path from `public/`.
- **Do not publish the phone number or postal code** from the résumé PDF. This builds to a public, indexed site; email and city only, by the owner's decision.

## Styling

All styling is Tailwind utilities — there are no CSS modules. The design system lives in two files:

- `tailwind.config.js` — the dark palette (`dark-primary`/`dark-secondary`/`dark-surface`, `accent` gold `#e8b84b`, `text-primary`/`text-secondary`/`text-muted`), the `inter` font family, and a `hero` font size. Use these tokens instead of raw hex or arbitrary values.
- `src/index.css` — `@layer base` sets the dark body background and link transitions; `@layer components` defines `.btn-primary`, `.focus-ring` (the keyboard affordance, applied to every interactive element) and `.nav-link`. Below the layers sit the plain-CSS `.reveal` and `.pipeline-*` rules, plus a `prefers-reduced-motion` block that must be extended whenever new motion is added. Shared visual patterns belong here, not copy-pasted utility strings.

Inter is loaded from Google Fonts in `public/index.html`, which also sets the page title, description, and `theme-color`.

## Deployment

- `develop` is the working branch; `gh-pages` serves the built site. There is no `main`/`master` branch.
- Deploy by running `npm run deploy` locally. `.github/workflows/workflow.yaml` triggers on pushes to `master`, which doesn't exist — it never fires and is effectively dead config.
- `homepage` in package.json (`https://arushansinnadurai.github.io/react-pages`) sets the asset base path; changing the repo name requires updating it.

## Known gaps

- **Two competing deploy paths.** Normal deploys are manual: `npm run deploy` from `develop`. But `.github/workflows/workflow.yaml` also deploys to `gh-pages` on any push to `master` — and `origin/master` still exists, two years stale. Pushing it would overwrite the live site with old code. Delete the branch or retarget the workflow.
- `public/og-image.jpg` is a copy of the profile photo, so link previews are square where platforms want ~1200×630.
