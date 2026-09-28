# Ralskies artist website

A responsive static portfolio for the Iligan City singer and performer. The site keeps its original animated indigo, electric-blue, and gold visual identity while making performance bookings, collaborations, and brand inquiries easier to find.

## Run locally

```powershell
npm ci
npm run dev
npm test
npm run build
npm run preview
```

## Content and artwork

- `index.html` contains site copy, service descriptions, artist biography, and inquiry form.
- `public/data/content.json` supplies the five playlists, social links, testimonials, and fan-art gallery.
- `src/render-content.js` safely renders data into static HTML during development and production builds.
- `public/photos/` stores supplied performer photos; `public/fanart/` stores original community artwork and smaller gallery previews; `public/designs/` stores the original design artwork and optimized playlist thumbnails.
- The remaining archive in `All Ralskies Fanart and Photos/` is the source ZIP. Its individual photos, fan art, and designs have been moved into their public asset folders.

Keep the thumbnail entries in `public/data/fanart.json` linked to the full original in `public/fanart/`. Artist credits remain blank unless the provided material gives a clear name. Edit copy directly in `index.html`; edit playlists and links in `public/data/content.json`.

`npm run sync-content` refreshes fan art and testimonials from their JSON files. `npm run push-content` is a publishing helper that stages content, builds, commits, and pushes. Review its Git changes before using it.

## Media and inquiries

The selector lazy-loads one YouTube playlist at a time and keeps direct playlist links available. Playlist artwork uses the supplied blue-and-gold designs. The Spotify player also loads only when requested.

The page follows the navigation order: About, Music, Community, Donate, and Work with me. The donation section links directly to https://ko-fi.com/ralskies. About combines the artist introduction and Kimusikero/Kuya Kim mentorship details. Playlist covers retain their square proportions; loaded videos use a widescreen player. Community art uses a native scrolling carousel with buttons and keyboard controls. Content syncing omits exact duplicate artwork while keeping the original files.

The supplied contour image is a design reference only and is not rendered on the page. The backdrop uses animated SVG contours and CSS gradients, respects reduced motion, and pauses animation in hidden tabs. The original portrait is displayed with soft CSS edges; it has not been replaced by a generated face or a transparent cutout.

The form uses the existing Formspree endpoint, `https://formspree.io/f/xbdqlryk`. The receiving account has not been verified here. Confirm it routes to the intended inbox before relying on it. The visible email fallback is `ralskiesartist@gmail.com`. Rates, availability, travel, and equipment requirements are discussed individually.

## Deployment

Build with `npm run build` and publish `dist` with Vercel or Netlify. Their security policies allow the YouTube and Spotify embeds and Formspree submission. Search indexing is enabled. Set the build environment variable `SITE_URL` to the live site origin to add its canonical URL, social-preview URL, and absolute social image URL.
