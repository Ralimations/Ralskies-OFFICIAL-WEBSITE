# ACCA Phase 1

This repository contains a lightweight static portfolio site plus a serverless automation path for keeping the latest YouTube release in sync.

## What is included

- Static portfolio homepage with latest release slots and a collaboration form
- Formspree-ready contact form in `index.html`
- Local media data file at `data/content.json`
- Python sync script at `scripts/fetch_youtube_latest.py`
- Nightly GitHub Actions workflow at `.github/workflows/sync-youtube.yml`
- Static-host config for Netlify and Vercel
- Security headers and safer embed defaults for static hosting

## Setup

1. Create a GitHub repository and place these files inside it.
2. Deploy the site to Netlify or Vercel as a static site.
   - Netlify will use `netlify.toml`.
   - Vercel will use `vercel.json`.
3. Create a Formspree form and replace `https://formspree.io/f/your-form-id` in `index.html` with your real endpoint.
4. Create a YouTube Data API v3 key in Google Cloud.
5. Find your YouTube channel ID.
6. Add these GitHub Actions secrets:
   - `YOUTUBE_API_KEY`
   - `YOUTUBE_CHANNEL_ID`
7. Enable GitHub Actions for the repository.
8. In Formspree, enable reCAPTCHA or Formspree spam filtering if available on your plan.

## Local run

Serve the site with any static file server, then open the root page.

Run the sync script locally:

```powershell
$env:YOUTUBE_API_KEY="your-api-key"
$env:YOUTUBE_CHANNEL_ID="your-channel-id"
py -3 scripts/fetch_youtube_latest.py
```

## Notes

- The workflow runs at `0 16 * * *`, which is midnight in Manila converted to UTC.
- The site reads from `data/content.json`, so any static host rebuild will pick up the latest release content.
- Spotify sync, Google Sheets logging, summary emails, and auto-response can be added in Phase 2 without changing the basic structure.
- YouTube embeds use `youtube-nocookie.com` to reduce third-party tracking.

## Security checklist

- Add only repository secrets in GitHub Actions. Do not hardcode API keys in source files.
- Replace the placeholder Formspree endpoint before publishing.
- Keep Formspree spam protection enabled.
- Review workflow runs after the first manual sync to confirm only `data/content.json` is changing.
- If you later add Google Sheets or auto-response logic, isolate those credentials in GitHub Actions secrets or Google Apps Script properties.
