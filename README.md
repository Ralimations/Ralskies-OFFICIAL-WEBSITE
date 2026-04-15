# ACCA Phase 1

This repository contains a lightweight vanilla Vite portfolio site for Ralskies plus automation paths for keeping the latest YouTube release in sync.

## What is included

- Vanilla Vite portfolio homepage with latest release slots and a collaboration form
- Formspree-ready contact form in `index.html`
- Local media data file at `public/data/content.json`
- Python sync script at `scripts/fetch_youtube_latest.py`
- Nightly GitHub Actions workflow at `.github/workflows/sync-youtube.yml`
- Local publish script at `scripts/publish_youtube_update.ps1`
- Windows Task Scheduler helper at `scripts/register_youtube_sync_task.ps1`
- Static-host config for Netlify and Vercel
- Security headers and safer embed defaults for static hosting

## Project structure

- `index.html`: Vite HTML entry
- `src/`: front-end source files (`main.js`, `app.js`, `form-validation.js`, `styles.css`)
- `public/`: static files copied directly into the production build
- `public/data/content.json`: latest YouTube/content payload used by the site
- `scripts/`: local sync and publishing helpers
- `.github/workflows/`: GitHub automation for scheduled YouTube syncing

## Setup

1. Create a GitHub repository and place these files inside it.
2. Deploy the site to Netlify or Vercel as a Vite static build.
   - Netlify will use `netlify.toml`.
   - Vercel will use `vercel.json`.
3. Create a Formspree form and replace `https://formspree.io/f/your-form-id` in `index.html` with your real endpoint.
4. Create a YouTube Data API v3 key in Google Cloud.
5. Find your YouTube channel ID.
6. Add these GitHub Actions secrets:
   - `YOUTUBE_API_KEY`
   - `YOUTUBE_CHANNEL_ID`
7. Enable GitHub Actions for the repository if billing is working, or use the local scheduled-task fallback below.
8. In Formspree, enable reCAPTCHA or Formspree spam filtering if available on your plan.

## Deploy now

1. Import this repository into Netlify or Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the publish directory.
4. Confirm the first deployment succeeds.
5. After each push to `main`, the host should redeploy automatically.

## Local run

Install dependencies once:

```powershell
npm install
```

Start the Vite dev server:

```powershell
npm run dev
```

Vite will print the local URL, typically `http://localhost:5173/`.

Create a production build locally:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

Run the sync script locally:

```powershell
$env:YOUTUBE_API_KEY="your-api-key"
$env:YOUTUBE_CHANNEL_ID="your-channel-id"
py -3 scripts/fetch_youtube_latest.py
```

Or use the PowerShell helper:

```powershell
$env:YOUTUBE_API_KEY="your-api-key"
$env:YOUTUBE_CHANNEL_ID="your-channel-id"
powershell -ExecutionPolicy Bypass -File .\scripts\update_youtube.ps1
```

You can also pass the values directly:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\update_youtube.ps1 `
  -ApiKey "your-api-key" `
  -ChannelId "your-channel-id"
```

Update and push the refreshed YouTube data:

```powershell
$env:YOUTUBE_API_KEY="your-api-key"
$env:YOUTUBE_CHANNEL_ID="your-channel-id"
powershell -ExecutionPolicy Bypass -File .\scripts\publish_youtube_update.ps1
```

Register a daily Windows scheduled task:

```powershell
[Environment]::SetEnvironmentVariable("YOUTUBE_API_KEY", "your-api-key", "User")
[Environment]::SetEnvironmentVariable("YOUTUBE_CHANNEL_ID", "your-channel-id", "User")
powershell -ExecutionPolicy Bypass -File .\scripts\register_youtube_sync_task.ps1 -Time "12:00AM"
```

## Notes

- The workflow runs at `0 16 * * *`, which is midnight in Manila converted to UTC.
- The site reads from `public/data/content.json`, so any static host rebuild will pick up the latest release content.
- Spotify sync, Google Sheets logging, summary emails, and auto-response can be added in Phase 2 without changing the basic structure.
- YouTube embeds use `youtube-nocookie.com` to reduce third-party tracking.

## Security checklist

- Add only repository secrets in GitHub Actions. Do not hardcode API keys in source files.
- Replace the placeholder Formspree endpoint before publishing.
- Keep Formspree spam protection enabled. Do not disable captcha/spam checks in the form markup.
- Review workflow runs after the first manual sync to confirm only `public/data/content.json` is changing.
- If you later add Google Sheets or auto-response logic, isolate those credentials in GitHub Actions secrets or Google Apps Script properties.
- Turn on Formspree's built-in spam filtering and any reCAPTCHA/Turnstile option available in your Formspree dashboard.

## Automation fallback options

- Local fallback: Run `scripts/update_youtube.ps1` manually or through Windows Task Scheduler. This is the simplest no-billing option, but your machine must be on when the task runs.
- Local publish fallback: Run `scripts/publish_youtube_update.ps1` manually or on a daily scheduled task. This updates `public/data/content.json` and pushes to GitHub so your host can redeploy.
- Google Apps Script: Google supports installable time-driven triggers for standalone scripts, which can run on a schedule without your machine staying on.
- Cloudflare Workers: Cloudflare supports Cron Triggers, and as of April 14, 2026 the Workers Free plan includes 100,000 requests per day. This is viable, but it requires moving the sync logic into a Worker and storing secrets there.
- Open-source/self-hosted tools like n8n exist, but n8n's own docs say self-hosting requires server, security, and operations knowledge. That is usually too heavy for this project unless you already want to run infrastructure.
