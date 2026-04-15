# Ralskies Official Website

This repository contains the vanilla Vite portfolio site for Ralskies. The site is now managed as a static front end with manually curated content stored in `public/data/content.json`.

## What is included

- Vanilla Vite portfolio homepage
- Formspree-backed collaboration/contact form
- Centralized site content in `public/data/content.json`
- Static-host config for Vercel and Netlify
- Security headers for static deployment

## Project structure

- `index.html`: Vite HTML entry
- `src/`: front-end source files (`main.js`, `app.js`, `form-validation.js`, `styles.css`)
- `public/`: static assets copied into the production build
- `public/data/content.json`: centralized content source for hero, sections, links, and featured work
- `vercel.json`: Vercel build settings and security headers
- `netlify.toml`: Netlify build settings and security headers

## Setup

1. Install dependencies:

```powershell
npm install
```

2. Start the Vite dev server:

```powershell
npm run dev
```

3. Build the site for production:

```powershell
npm run build
```

4. Preview the production build locally:

```powershell
npm run preview
```

## Content editing

- Update visible site copy, links, featured works, platforms, support options, and other section content in `public/data/content.json`
- Rebuild locally with `npm run build` after content edits
- Push changes to the branch that your host uses for deployment

## Deployment

1. Import the repository into Vercel or Netlify.
2. Use `npm run build` as the build command.
3. Use `dist` as the output/publish directory.
4. Confirm the first deployment succeeds.
5. Push future content or code changes to your production branch to trigger redeploys.

## Notes

- The site is a static build. There is no active YouTube API sync or scheduled content automation in this repository.
- The contact form posts to Formspree. Keep the configured endpoint current in `index.html`.
- YouTube embeds use `youtube-nocookie.com` to reduce third-party tracking.

## Security checklist

- Do not hardcode secrets or API keys in the repo.
- Keep Formspree spam protection enabled.
- Review external links in `public/data/content.json` before deploying.
- Keep the repository private if you no longer need public source visibility.
