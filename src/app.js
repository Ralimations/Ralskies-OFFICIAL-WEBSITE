const fallbackContent = {
  youtubeChannel: {
    name: "Your YouTube Channel",
    channelUrl: "https://www.youtube.com/",
    lastSyncedAt: null
  },
  spotify: {
    artistName: "Your Spotify Artist Profile",
    artistUrl: "https://open.spotify.com/",
    status: "Spotify sync can be added in a later phase."
  },
  featuredWorks: [
    {
      label: "Current Showcase",
      title: "Featured Release",
      description: "The clearest snapshot of the current standard, style, and vocal direction.",
      tags: ["Cover", "Current Era", "Theatrical"],
      href: "https://www.youtube.com/watch?v=TteKHjCsF-0",
      ctaLabel: "Watch Showcase",
      thumbnailUrl: "https://i.ytimg.com/vi/TteKHjCsF-0/hqdefault.jpg",
      thumbnailAlt: "Thumbnail for the current featured release"
    }
  ],
  testimonials: [
    {
      quote: "Curated testimonials and collaborator references can be added here over time.",
      name: "Future Reference",
      role: "Approved manually"
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTestimonials(testimonials) {
  const list = document.getElementById("testimonial-list");
  if (!list) {
    return;
  }

  const safeTestimonials = Array.isArray(testimonials) && testimonials.length
    ? testimonials
    : fallbackContent.testimonials;

  list.innerHTML = safeTestimonials.map((item) => {
    const quote = escapeHtml(item.quote || "");
    const name = escapeHtml(item.name || "Anonymous");
    const role = escapeHtml(item.role || "");

    return `
      <article class="catalog-card testimonial-card">
        <p class="card-label">Reference</p>
        <p class="testimonial-quote">"${quote}"</p>
        <p class="testimonial-meta">${name}${role ? ` • ${role}` : ""}</p>
      </article>
    `;
  }).join("");
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function sanitizeImageUrl(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }

  try {
    const url = new URL(value, window.location.href);
    const isSameOrigin = url.origin === window.location.origin;
    const isSafeExternal = url.protocol === "https:";

    if (isSameOrigin || isSafeExternal) {
      return url.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

function renderFeaturedWorks(featuredWorks) {
  const list = document.getElementById("featured-works-list");
  if (!list) {
    return;
  }

  const safeWorks = Array.isArray(featuredWorks) && featuredWorks.length
    ? featuredWorks
    : fallbackContent.featuredWorks;

  list.innerHTML = safeWorks.map((item, index) => {
    const label = escapeHtml(item.label || "Featured Work");
    const title = escapeHtml(item.title || "Untitled Feature");
    const description = escapeHtml(item.description || "");
    const href = sanitizeExternalUrl(item.href, "https://www.youtube.com/");
    const ctaLabel = escapeHtml(item.ctaLabel || "Open Feature");
    const thumbFallback = fallbackContent.featuredWorks[0]?.thumbnailUrl || "";
    const thumbnailUrl = sanitizeImageUrl(item.thumbnailUrl, thumbFallback);
    const thumbnailAlt = escapeHtml(item.thumbnailAlt || item.title || "Featured work thumbnail");
    const tags = Array.isArray(item.tags) ? item.tags.slice(0, 4) : [];
    const rank = String(index + 1).padStart(2, "0");

    return `
      <article class="catalog-card featured-work-card">
        <a
          class="featured-work-thumb"
          href="${href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${ctaLabel}: ${title}"
        >
          <img src="${thumbnailUrl}" alt="${thumbnailAlt}" loading="lazy">
          <span class="featured-work-index">${rank}</span>
        </a>
        <div class="featured-work-body">
          <p class="card-label">${label}</p>
          <h3>${title}</h3>
          <div class="tag-row">
            ${tags.map((tag) => `<span class="work-tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <p class="muted">${description}</p>
          <div class="link-row compact-links">
            <a
              class="button button-primary"
              href="${href}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${ctaLabel}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function sanitizeExternalUrl(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }

  try {
    const url = new URL(value, window.location.href);
    const isSameOrigin = url.origin === window.location.origin;
    const isSafeExternal = url.protocol === "https:";

    if (isSameOrigin || isSafeExternal) {
      return url.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

function setHref(id, value) {
  const node = document.getElementById(id);
  if (node) {
    const fallback = node.getAttribute("data-fallback-href") || "https://www.youtube.com/";
    node.href = sanitizeExternalUrl(value, fallback);
  }
}

function formatSyncDate(value) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Last sync timestamp unavailable.";
  }

  return `Last synced ${date.toLocaleString()}`;
}

function setupPointerMotion() {
  const root = document.documentElement;

  window.addEventListener("pointermove", (event) => {
    const xRatio = event.clientX / window.innerWidth;
    const yRatio = event.clientY / window.innerHeight;
    const motionX = ((xRatio - 0.5) * 36).toFixed(2);
    const motionY = ((yRatio - 0.5) * 28).toFixed(2);

    root.style.setProperty("--pointer-x", `${(xRatio * 100).toFixed(2)}%`);
    root.style.setProperty("--pointer-y", `${(yRatio * 100).toFixed(2)}%`);
    root.style.setProperty("--motion-x", `${motionX}px`);
    root.style.setProperty("--motion-y", `${motionY}px`);
  }, { passive: true });
}

function renderContent(content) {
  const youtubeChannel = content.youtubeChannel || fallbackContent.youtubeChannel;
  const spotify = content.spotify || fallbackContent.spotify;
  const featuredWorks = content.featuredWorks || fallbackContent.featuredWorks;
  const testimonials = content.testimonials || fallbackContent.testimonials;

  setText("youtube-channel-name", youtubeChannel.name || fallbackContent.youtubeChannel.name);
  setHref(
    "youtube-channel-link",
    youtubeChannel.channelUrl || fallbackContent.youtubeChannel.channelUrl
  );
  setHref(
    "youtube-channel-link-hero",
    youtubeChannel.channelUrl || fallbackContent.youtubeChannel.channelUrl
  );
  const syncStatus = formatSyncDate(youtubeChannel.lastSyncedAt);
  if (syncStatus) {
    setText("youtube-sync-status", syncStatus);
  }

  setText("spotify-artist-name", spotify.artistName || fallbackContent.spotify.artistName);
  setText("spotify-status", spotify.status || fallbackContent.spotify.status);
  setHref("spotify-link", spotify.artistUrl || fallbackContent.spotify.artistUrl);
  setHref("spotify-link-hero", spotify.artistUrl || fallbackContent.spotify.artistUrl);

  renderFeaturedWorks(featuredWorks);
  renderTestimonials(testimonials);
}

fetch("/data/content.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load content.json: ${response.status}`);
    }
    return response.json();
  })
  .then((content) => renderContent(content))
  .catch(() => renderContent(fallbackContent));

setupPointerMotion();
