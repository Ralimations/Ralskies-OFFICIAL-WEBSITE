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
  }
};

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function setHref(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.href = value;
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
    return "Awaiting first automated sync.";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Last sync timestamp unavailable.";
  }

  return `Last synced ${date.toLocaleString()}`;
}

function renderContent(content) {
  const latestYoutube = content.latestYoutube || fallbackContent.latestYoutube;
  const youtubeChannel = content.youtubeChannel || fallbackContent.youtubeChannel;
  const spotify = content.spotify || fallbackContent.spotify;

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
    "youtube-channel-link-hero",
    youtubeChannel.channelUrl || fallbackContent.youtubeChannel.channelUrl
  );
  setText(
    "youtube-sync-status",
    formatSyncDate(youtubeChannel.lastSyncedAt)
  );

  setText("spotify-artist-name", spotify.artistName || fallbackContent.spotify.artistName);
  setText("spotify-status", spotify.status || fallbackContent.spotify.status);
  setHref("spotify-link", spotify.artistUrl || fallbackContent.spotify.artistUrl);
  setHref("spotify-link-hero", spotify.artistUrl || fallbackContent.spotify.artistUrl);
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
