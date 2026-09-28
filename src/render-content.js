export function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

function safeUrl(value) {
  if (typeof value !== "string") throw new Error("Missing content URL");
  if (value.startsWith("/") && !value.startsWith("//") && !value.includes("\\"))
    return escapeHtml(value);
  const url = new URL(value);
  if (url.protocol !== "https:")
    throw new Error(`Unsupported content URL: ${value}`);
  return escapeHtml(url.href);
}

export function renderContent(html, content) {
  const playlists = content.playlists
    .map((item, index) => {
      if (!/^PL[\w-]+$/.test(item.id))
        throw new Error(`Invalid playlist ID: ${item.id}`);
      if (item.externalOnly)
        return `<a class="playlist-youtube-link" href="https://www.youtube.com/playlist?list=${item.id}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)} on YouTube ↗</a>`;
      return `<button type="button" data-playlist="${item.id}" data-title="${escapeHtml(item.title)}" data-description="${escapeHtml(item.description)}" data-image="${safeUrl(item.image)}" data-image-alt="${escapeHtml(item.imageAlt)}" aria-pressed="${index === 0}">${escapeHtml(item.title)}</button>`;
    })
    .join("\n");
  const playlistLinks = content.playlists
    .map(
      (item) =>
        `<a href="https://www.youtube.com/playlist?list=${item.id}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)} ↗</a>`,
    )
    .join("\n");
  const testimonials = content.testimonials
    .map(
      (item) =>
        `<figure class="testimonial"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${escapeHtml(item.quote)}</blockquote><figcaption>${item.href ? `<a href="${safeUrl(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.name)} ↗</a>` : escapeHtml(item.name)}<span>${escapeHtml(item.role)}</span></figcaption></figure>`,
    )
    .join("\n");
  const fanart = content.fanArtGallery
    .map(
      (item) =>
        `<figure><a href="${safeUrl(item.href || item.imageUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(item.title)} artwork"><img src="${safeUrl(item.thumbnailUrl || item.imageUrl)}" alt="${escapeHtml(item.thumbnailAlt)}" width="600" height="600" loading="lazy" decoding="async"></a><figcaption>${escapeHtml(item.title)}${item.artistName ? `<span>by ${escapeHtml(item.artistName)}</span>` : ""}</figcaption></figure>`,
    )
    .join("\n");
  const socials = content.socials
    .map(
      (item) =>
        `<a href="${safeUrl(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)} ↗</a>`,
    )
    .join("\n");
  const replacements = {
    PLAYLISTS: playlists,
    PLAYLIST_LINKS: playlistLinks,
    TESTIMONIALS: testimonials,
    FANART: fanart,
    SOCIALS: socials,
    YEAR: new Date().getFullYear(),
  };
  return html.replace(
    /%(PLAYLISTS|PLAYLIST_LINKS|TESTIMONIALS|FANART|SOCIALS|YEAR)%/g,
    (_, key) => replacements[key],
  );
}
