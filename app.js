const fallbackContent = {
  latestYoutube: {
    title: "Latest upload will appear here",
    description: "Run the sync script after configuring your API key and channel ID.",
    videoUrl: "https://www.youtube.com/",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    publishedAt: null
  },
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
    const fallback = node.getAttribute("data-fallback-href") || fallbackContent.latestYoutube.videoUrl;
    node.href = sanitizeExternalUrl(value, fallback);
  }
}

function setIframeSrc(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.src = sanitizeEmbedUrl(value);
  }
}

function sanitizeEmbedUrl(value) {
  if (typeof value !== "string") {
    return fallbackContent.latestYoutube.embedUrl;
  }

  try {
    const url = new URL(value, window.location.href);
    const allowedHosts = new Set(["www.youtube-nocookie.com"]);
    if (url.protocol === "https:" && allowedHosts.has(url.hostname)) {
      return url.toString();
    }
  } catch {
    return fallbackContent.latestYoutube.embedUrl;
  }

  return fallbackContent.latestYoutube.embedUrl;
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
  const latestYoutube = content.latestYoutube || fallbackContent.latestYoutube;
  const youtubeChannel = content.youtubeChannel || fallbackContent.youtubeChannel;
  const spotify = content.spotify || fallbackContent.spotify;
  const testimonials = content.testimonials || fallbackContent.testimonials;

  setText("latest-video-title", latestYoutube.title || fallbackContent.latestYoutube.title);
  setText(
    "latest-video-description",
    latestYoutube.description || fallbackContent.latestYoutube.description
  );
  setHref("latest-video-link", latestYoutube.videoUrl || fallbackContent.latestYoutube.videoUrl);
  setHref(
    "latest-video-embed-link",
    sanitizeEmbedUrl(latestYoutube.embedUrl || fallbackContent.latestYoutube.embedUrl)
  );
  setIframeSrc(
    "latest-video-embed",
    latestYoutube.embedUrl || fallbackContent.latestYoutube.embedUrl
  );

  setText("youtube-channel-name", youtubeChannel.name || fallbackContent.youtubeChannel.name);
  setHref(
    "youtube-channel-link",
    youtubeChannel.channelUrl || fallbackContent.youtubeChannel.channelUrl
  );
  setHref(
    "youtube-channel-link-alt",
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
  setHref("spotify-link-alt", spotify.artistUrl || fallbackContent.spotify.artistUrl);
  setHref("spotify-link-hero", spotify.artistUrl || fallbackContent.spotify.artistUrl);

  renderTestimonials(testimonials);
}

fetch("./data/content.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load content.json: ${response.status}`);
    }
    return response.json();
  })
  .then((content) => renderContent(content))
  .catch(() => renderContent(fallbackContent));

setupPointerMotion();
