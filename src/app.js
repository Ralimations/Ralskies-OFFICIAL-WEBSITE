const fallbackContent = {
  featuredSection: {
    eyebrow: "Featured Works",
    title: "Curated highlights that show range, collaborators, and the strongest entry points.",
    description: "This section is curated as a portfolio layer, not a feed. Each piece is here because it shows a different angle of the work: current standard, collaboration value, and character-led range."
  },
  releasesSection: {
    eyebrow: "Releases & Timeline",
    title: "Browse featured playlists by category.",
    description: "Switch through releases, collaborations, and voice acting highlights without leaving the page."
  },
  proofSection: {
    eyebrow: "Proof & Testimonials",
    title: "References, reputation signals, and the clearest reasons collaborators take the work seriously.",
    description: "Testimonials shown here are manually reviewed before being added. Nothing submitted through the site is published automatically.",
    note: "Submitted testimonials are reviewed before being published.",
    links: [
      { label: "Add A Testimonial", href: "https://forms.gle/ri7N54YHTj716EUN9" }
    ]
  },
  footerSection: {
    brand: {
      eyebrow: "Ralskies",
      title: "Music, covers, collaborations, and community.",
      description: "Built as a direct home for listeners, collaborators, artists, and supporters who want to keep up with the work or reach out with something real."
    },
    columns: [
      {
        label: "Platforms",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/channel/UCIt8eA8uvrDVbpta0pgIc5Q" },
          { label: "Spotify", href: "https://open.spotify.com/artist/6jNlrnxeDiFy1rC8kViie8?nd=1&dlsi=41715c668e97408b" },
          { label: "TikTok", href: "https://www.tiktok.com/@ralskies" },
          { label: "Discord", href: "https://discord.gg/5yyhHJxfS2" }
        ]
      },
      {
        label: "Support",
        links: [
          { label: "Request A Song", href: "https://ko-fi.com/ralskies" },
          { label: "Support On Ko-fi", href: "https://ko-fi.com/ralskies" },
          { label: "Fan Art", href: "#art" },
          { label: "Contact Form", href: "#collab" }
        ]
      }
    ],
    note: "Ralskies official website."
  },
  heroSection: {
    eyebrow: "Online Musician • Vocalist • Digital Creator",
    title: "Ralskies turns covers and collaborations into character-driven vocal performances.",
    description: "Known for transformative covers, theatrical delivery, and emotionally charged arrangements, Ralskies blends online music culture with performance-first vocals. This page is for collaborators, mixers, producers, and fellow creators looking for a singer who brings personality to the track instead of just repeating the original.",
    links: [
      { label: "Hear Latest Work", href: "https://www.youtube.com/channel/UCIt8eA8uvrDVbpta0pgIc5Q" },
      { label: "Collaborate", href: "#collab" },
      { label: "Request A Song", href: "#support" }
    ],
    panel: {
      label: "Known For",
      title: "Theatrical covers, genderbent arrangements, Disney-style reinventions, and collaborative duets.",
      points: [
        "Modern internet-native musicals and animation soundtracks",
        "Male-key reworks and story-driven reinterpretations",
        "Direct audience connection through YouTube and Discord"
      ]
    }
  },
  latestYoutube: {
    eyebrow: "Latest Release",
    sectionTitle: "The current release carrying the strongest snapshot of the sound.",
    sectionDescription: "A direct entry point for visitors who want the most current featured performance first.",
    title: "Latest Release",
    description: "This is the featured release currently representing Ralskies' strongest work on the site.",
    videoId: "TteKHjCsF-0",
    videoUrl: "https://www.youtube.com/watch?v=TteKHjCsF-0&list=PLsjrSGMbKS6cFI7RYZA8RMmSR47TUOpIz",
    playlistId: "PLsjrSGMbKS6cFI7RYZA8RMmSR47TUOpIz",
    fallbackVideoIds: ["TteKHjCsF-0"],
    embedUrl: "https://www.youtube-nocookie.com/embed/TteKHjCsF-0",
    thumbnailUrl: "https://i.ytimg.com/vi/TteKHjCsF-0/hqdefault.jpg",
    publishedAt: null,
    ctaLabel: "Watch Release"
  },
  aboutSection: {
    items: [
      {
        eyebrow: "About",
        title: "A rising online musician with a voice built for emotion, story, and character.",
        description: "Ralskies is a vocalist and digital content creator who has built a dedicated online community through YouTube, Discord, and highly interactive music content. Recording from a home studio with accessible tools and reliable XLR gear, he focuses on the performance itself: phrasing, feeling, and a strong point of view on every song."
      },
      {
        eyebrow: "Why It Works",
        description: "The strongest collaborations come from creators who want more than a clean take. If the song needs theatrical expression, harmonies, emotional lift, or a reimagined angle, that is where the fit is strongest. Include the genre, references, timeline, budget, and the kind of vocal role you need.",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/channel/UCIt8eA8uvrDVbpta0pgIc5Q" },
          { label: "Spotify", href: "https://open.spotify.com/artist/6jNlrnxeDiFy1rC8kViie8?nd=1&dlsi=41715c668e97408b" },
          { label: "Collaboration Form", href: "#collab" }
        ]
      }
    ]
  },
  platformsSection: {
    eyebrow: "Platforms",
    title: "Where to listen, watch, and keep up.",
    items: [
      {
        label: "YouTube",
        title: "Ralskies on YouTube",
        description: "Watch featured covers, showcases, and current uploads on the channel.",
        links: [
          { label: "Visit Channel", href: "https://www.youtube.com/channel/UCIt8eA8uvrDVbpta0pgIc5Q" },
          { label: "Best Of Playlist", href: "https://www.youtube.com/playlist?list=PLsjrSGMbKS6fVfxLAC6X4iT58GuSmzNAw" }
        ]
      },
      {
        label: "Spotify",
        title: "Ralskies on Spotify",
        description: "Listen to official releases and artist updates on Spotify.",
        links: [
          { label: "Open Spotify", href: "https://open.spotify.com/artist/6jNlrnxeDiFy1rC8kViie8?nd=1&dlsi=41715c668e97408b" },
          { label: "Join Discord", href: "https://discord.gg/5yyhHJxfS2" }
        ]
      },
      {
        label: "TikTok",
        title: "Ralskies on TikTok",
        description: "Short-form content, clips, and updates from the Ralskies side of the internet.",
        links: [
          { label: "Open TikTok", href: "https://www.tiktok.com/@ralskies" }
        ]
      }
    ]
  },
  genreSection: {
    eyebrow: "Genres & Niches",
    title: "The styles and specialties that define the sound.",
    items: [
      {
        label: "Theatrical",
        title: "Musical theatre, show tunes, Broadway-inspired writing, and character-led songs.",
        description: "Best for material that needs acting-through-song, dramatic pacing, and vocals that feel like they belong to a character or a scene instead of a neutral take."
      },
      {
        label: "Reimagined Covers",
        title: "Genderbent arrangements, Disney-fied renditions, and story-driven reinterpretations.",
        description: "Strong for songs that deserve a new perspective, especially female-led tracks adapted into male-key arrangements or contemporary songs transformed into bigger, cinematic performances."
      },
      {
        label: "Pop, Indie, K-pop & J-pop",
        title: "Polished melodic vocals for internet-native, emotionally bright, or collaboration-heavy tracks.",
        description: "A good fit for hooks, duet parts, harmony-heavy covers, and songs influenced by idol-pop, indie-pop, acoustic rearrangements, or animation-adjacent music culture."
      }
    ]
  },
  fitSection: {
    eyebrow: "Those Who Wish To Collaborate",
    title: "Bring a real concept and a part worth performing.",
    items: [
      {
        label: "Open To",
        title: "Duets, featured vocals, covers, originals, themed projects, and selective promotions.",
        description: "Ralskies is open to projects from producers, mixers, animators, vocalists, VTubers, and online creators who want a vocal performance with identity. The strongest projects usually have a demo, references, deadline, and a clear idea of the role."
      },
      {
        label: "Vocal Profile",
        title: "Warm, expressive, studio-ready vocals for both contemporary and theatrical styles.",
        description: "Best suited for theatrical expression, harmonization, emotional leads, and collaborative arrangements. If you know the exact voice type or target range you need, include it in your pitch so the part can be evaluated properly."
      }
    ]
  },
  fanArtSection: {
    eyebrow: "Want To Make Art For Ralskies?",
    title: "Fan art, illustrations, edits, and visual tributes are always appreciated.",
    description: "If you create art inspired by Ralskies, there is a place for it here too. Whether it is stylized fan art, thumbnails, edits, or other visual work, the support and creativity are genuinely valued.",
    items: [
      {
        label: "What To Send",
        title: "Fan art, edits, concepts, posters, or tribute visuals.",
        description: "Finished pieces, work-in-progress previews, and stylized concepts are all welcome as long as they are respectful and clearly inspired by the music, persona, or content."
      },
      {
        label: "Where To Share",
        title: "Use Discord or the contact form to send your work.",
        description: "If you want the best chance of the art being seen, share it through the Discord community or send it directly through the form with links to the artwork.",
        links: [
          { label: "Share On Discord", href: "https://discord.gg/5yyhHJxfS2" },
          { label: "Use Contact Form", href: "#collab" }
        ]
      }
    ]
  },
  fanArtGallery: [
    {
      title: "Discord Tribute Spotlight",
      artistName: "Community Artist",
      description: "Curated fan art can be spotlighted here with artist credit and a direct source link.",
      imageUrl: "https://i.ytimg.com/vi/TteKHjCsF-0/hqdefault.jpg",
      href: "https://discord.gg/5yyhHJxfS2",
      ctaLabel: "View Source",
      thumbnailAlt: "Placeholder artwork spotlight for the fan art gallery"
    }
  ],
  collabSection: {
    eyebrow: "Contact & Inquiries",
    title: "Send a clear pitch, request, or project inquiry.",
    description: "Use this for singing collaborations, voice acting, promotions, product inquiries, thumbnail art, fan projects, or any proposal with a clear idea and direction."
  },
  supportSection: {
    eyebrow: "Support",
    title: "Request a song or support future covers.",
    description: "If you want to hear a specific song from Ralskies or support future music, use the options below. Requests with a clear idea or emotional angle are easier to prioritize.",
    items: [
      {
        label: "Request A Song",
        title: "Send a song idea, theme, or concept worth reimagining.",
        description: "Best for covers, male-key versions, theatrical reworks, Disney-style reinterpretations, or songs that would fit the voice and style well.",
        links: [
          { label: "Request On Ko-fi", href: "https://ko-fi.com/ralskies" },
          { label: "Use Contact Form", href: "#collab" }
        ]
      },
      {
        label: "Support / Donate",
        title: "Help fund future covers, collaborations, and recording work.",
        description: "Support helps fund future releases, covers, and better production. If you want to back the music directly, Ko-fi is the easiest way to do it.",
        links: [
          { label: "Support On Ko-fi", href: "https://ko-fi.com/ralskies" },
          { label: "Join Discord", href: "https://discord.gg/5yyhHJxfS2" }
        ]
      }
    ]
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
  releases: [
    {
      label: "Release",
      title: "Proud Covers",
      description: "Cycle through the core covers and featured release playlist directly inside the card.",
      meta: "Current era",
      href: "https://www.youtube.com/playlist?list=PLsjrSGMbKS6fVfxLAC6X4iT58GuSmzNAw",
      ctaLabel: "Open Playlist",
      playlistId: "PLsjrSGMbKS6fVfxLAC6X4iT58GuSmzNAw",
      startVideoId: "TteKHjCsF-0",
      fallbackVideoIds: ["TteKHjCsF-0"],
      startIndex: 0
    },
    {
      label: "Collaboration",
      title: "Collaborations & Features",
      description: "Move through collaboration uploads, duets, and creator projects from one playlist.",
      meta: "Featured vocal",
      href: "https://www.youtube.com/playlist?list=PLsjrSGMbKS6e4HAV7pizKUeirpHA5yIEe",
      ctaLabel: "Open Playlist",
      playlistId: "PLsjrSGMbKS6e4HAV7pizKUeirpHA5yIEe",
      startVideoId: "CtJegGMrZX0",
      fallbackVideoIds: ["CtJegGMrZX0"],
      startIndex: 2
    },
    {
      label: "Voice Acting",
      title: "Voice Acting & Character Roles",
      description: "Flip through voice acting appearances and character-driven performances from the playlist.",
      meta: "Character performance",
      href: "https://www.youtube.com/playlist?list=PLsjrSGMbKS6eQ0TO_aONiNAhxq6dUOXwg",
      ctaLabel: "Open Playlist",
      playlistId: "PLsjrSGMbKS6eQ0TO_aONiNAhxq6dUOXwg",
      startVideoId: "ueKqiJ15mP8",
      fallbackVideoIds: ["ueKqiJ15mP8"],
      startIndex: 0
    }
  ],
  gearSection: {
    eyebrow: "Gear",
    title: "Budget setup, real results.",
    description: "The work is recorded from a home setup built around accessible gear and a performance-first approach.",
    items: [
      {
        label: "Microphone",
        title: "Sennheiser XS-1",
        description: "A simple, budget-friendly mic setup used to capture the vocal takes behind the channel."
      },
      {
        label: "Microphone",
        title: "Maono AU-A04",
        description: "Another accessible mic in the recording setup, used as part of the channel's budget-friendly home studio workflow."
      },
      {
        label: "Interface",
        title: "M-Track DUO",
        description: "Clean home-recording workflow built around accessible gear instead of expensive studio-only hardware."
      }
    ]
  },
  testimonials: [
    {
      quote: "Working with Ralskies means getting more than a clean take. He brings character, phrasing, and intent that immediately makes the part feel more alive.",
      name: "Featured Collaborator",
      role: "Producer and Creative Partner",
      highlight: true
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
  const spotlight = document.getElementById("testimonial-spotlight");
  if (!list || !spotlight) {
    return;
  }

  const safeTestimonials = Array.isArray(testimonials) && testimonials.length
    ? testimonials
    : fallbackContent.testimonials;

  const highlighted = safeTestimonials.find((item) => item.highlight) || safeTestimonials[0];
  const supporting = safeTestimonials.filter((item) => item !== highlighted);

  spotlight.innerHTML = `
    <p class="card-label">Featured Testimonial</p>
    <blockquote class="spotlight-quote">"${escapeHtml(highlighted.quote || "")}"</blockquote>
    <p class="testimonial-meta">${escapeHtml(highlighted.name || "Anonymous")}${highlighted.role ? ` • ${escapeHtml(highlighted.role)}` : ""}</p>
  `;

  const listItems = supporting.length ? supporting : [highlighted];

  list.innerHTML = listItems.map((item) => {
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

function resolveHref(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return fallback;
  }

  if (trimmed.startsWith("#")) {
    return trimmed;
  }

  return sanitizeExternalUrl(trimmed, fallback);
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

function buildYoutubeThumbnail(videoId, fallback) {
  if (typeof videoId !== "string" || !videoId.trim()) {
    return fallback;
  }

  const safeVideoId = encodeURIComponent(videoId.trim());
  return `https://i.ytimg.com/vi/${safeVideoId}/hqdefault.jpg`;
}

function normalizeVideoIds(values, fallbackVideoId = "") {
  const list = Array.isArray(values) ? values : [];
  const normalized = list
    .map((value) => typeof value === "string" ? value.trim() : "")
    .filter(Boolean);

  if (!normalized.length && fallbackVideoId) {
    return [fallbackVideoId];
  }

  return normalized;
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

function renderReleases(releases) {
  const list = document.getElementById("releases-list");
  if (!list) {
    return;
  }

  const safeReleases = Array.isArray(releases) && releases.length
    ? releases
    : fallbackContent.releases;

  list.innerHTML = safeReleases.map((item, index) => {
    const label = escapeHtml(item.label || "Release");
    const title = escapeHtml(item.title || "Untitled Release");
    const description = escapeHtml(item.description || "");
    const meta = escapeHtml(item.meta || "");
    const href = sanitizeExternalUrl(item.href, "https://www.youtube.com/");
    const ctaLabel = escapeHtml(item.ctaLabel || "Open Release");
    const playlistId = escapeHtml(item.playlistId || "");
    const startVideoId = escapeHtml(item.startVideoId || "");
    const fallbackVideoIds = normalizeVideoIds(item.fallbackVideoIds, startVideoId);
    const fallbackVideoIdsAttr = escapeHtml(fallbackVideoIds.join(","));
    const startIndex = Number.isFinite(item.startIndex) ? item.startIndex : 0;
    const playerId = `release-player-${index + 1}`;
    const cardId = `release-card-${index + 1}`;
    const initialVideoId = startVideoId || "TteKHjCsF-0";
    const initialThumb = `https://i.ytimg.com/vi/${initialVideoId}/hqdefault.jpg`;

    return `
      <article class="release-card" id="${cardId}">
        <p class="card-label">${label}</p>
        <h3>${title}</h3>
        ${meta ? `<p class="latest-release-meta">${meta}</p>` : ""}
        <button
          type="button"
          class="playlist-thumb"
          id="${cardId}-thumb"
          data-video-id="${initialVideoId}"
          aria-label="Play ${title}"
        >
          <img
            id="${cardId}-image"
            src="${initialThumb}"
            alt="${title} playlist thumbnail"
            loading="lazy"
          >
          <span class="playlist-thumb-index" id="${cardId}-counter">${String(startIndex + 1).padStart(2, "0")}</span>
        </button>
        <div
          class="playlist-player playlist-player-hidden"
          id="${playerId}"
          data-playlist-id="${playlistId}"
          data-start-video-id="${initialVideoId}"
          data-fallback-video-ids="${fallbackVideoIdsAttr}"
          data-start-index="${startIndex}"
          data-card-id="${cardId}"
          aria-hidden="true"
        ></div>
        <p class="muted">${description}</p>
        <div class="link-row compact-links playlist-controls">
          <button
            type="button"
            class="button button-tertiary playlist-control"
            data-action="prev-video"
            data-target="${playerId}"
          >
            Prev
          </button>
          <button
            type="button"
            class="button button-secondary playlist-control"
            data-action="next-video"
            data-target="${playerId}"
          >
            Next
          </button>
          <a
            class="button button-primary"
            href="${href}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${ctaLabel}
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function renderFeaturedSection(featuredSection) {
  const safeSection = featuredSection
    ? featuredSection
    : fallbackContent.featuredSection;

  setText("featured-eyebrow", safeSection.eyebrow || fallbackContent.featuredSection.eyebrow);
  setText("featured-title", safeSection.title || fallbackContent.featuredSection.title);
  setText("featured-description", safeSection.description || fallbackContent.featuredSection.description);
}

function renderReleasesSection(releasesSection) {
  const safeSection = releasesSection
    ? releasesSection
    : fallbackContent.releasesSection;

  setText("releases-eyebrow", safeSection.eyebrow || fallbackContent.releasesSection.eyebrow);
  setText("releases-title", safeSection.title || fallbackContent.releasesSection.title);
  setText("releases-description", safeSection.description || fallbackContent.releasesSection.description);
}

function renderLatestRelease(latestYoutube) {
  const safeRelease = latestYoutube
    ? latestYoutube
    : fallbackContent.latestYoutube;

  setText("latest-release-eyebrow", safeRelease.eyebrow || fallbackContent.latestYoutube.eyebrow);
  setText("latest-release-title", safeRelease.sectionTitle || fallbackContent.latestYoutube.sectionTitle);
  setText(
    "latest-release-description",
    safeRelease.sectionDescription || fallbackContent.latestYoutube.sectionDescription
  );
  setText("latest-release-name", safeRelease.title || fallbackContent.latestYoutube.title);
  setText("latest-release-copy", safeRelease.description || fallbackContent.latestYoutube.description);

  const releaseUrl = sanitizeExternalUrl(
    safeRelease.videoUrl,
    fallbackContent.latestYoutube.videoUrl
  );
  const latestFallbackIds = normalizeVideoIds(
    safeRelease.fallbackVideoIds,
    safeRelease.videoId || fallbackContent.latestYoutube.videoId
  );
  const latestVideoId = latestFallbackIds[0] || fallbackContent.latestYoutube.videoId;
  const thumbnailFallback = buildYoutubeThumbnail(
    latestVideoId,
    fallbackContent.latestYoutube.thumbnailUrl
  );
  const thumbnailUrl = sanitizeImageUrl(
    safeRelease.thumbnailUrl || thumbnailFallback,
    fallbackContent.latestYoutube.thumbnailUrl
  );

  const image = document.getElementById("latest-release-image");
  if (image) {
    image.src = thumbnailUrl;
    image.alt = safeRelease.title
      ? `Thumbnail for ${safeRelease.title}`
      : "Thumbnail for the latest featured release";
    image.dataset.videoId = latestVideoId;
  }

  const releaseLink = document.getElementById("latest-release-link");
  if (releaseLink) {
    releaseLink.href = `https://www.youtube.com/watch?v=${encodeURIComponent(latestVideoId)}`;
    releaseLink.dataset.playlistId = safeRelease.playlistId || "";
    releaseLink.dataset.videoIds = latestFallbackIds.join(",");
  }

  const releaseCta = document.getElementById("latest-release-cta");
  if (releaseCta) {
    releaseCta.href = releaseUrl;
    releaseCta.textContent = safeRelease.ctaLabel || fallbackContent.latestYoutube.ctaLabel;
  }

  const publishedAt = formatSyncDate(safeRelease.publishedAt);
  setText(
    "latest-release-meta",
    publishedAt || "Most recent featured highlight"
  );
}

function renderProofSection(proofSection) {
  const safeSection = proofSection
    ? proofSection
    : fallbackContent.proofSection;

  setText("proof-eyebrow", safeSection.eyebrow || fallbackContent.proofSection.eyebrow);
  setText("proof-title", safeSection.title || fallbackContent.proofSection.title);
  setText("proof-description", safeSection.description || fallbackContent.proofSection.description);
  setText("proof-note", safeSection.note || fallbackContent.proofSection.note);

  const link = document.getElementById("proof-link-1");
  const linkConfig = safeSection.links?.[0] || fallbackContent.proofSection.links[0];
  if (link && linkConfig) {
    link.textContent = linkConfig.label || link.textContent;
    link.href = resolveHref(linkConfig.href, link.getAttribute("href") || "#");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
}

function renderGearSection(gearSection) {
  const safeSection = gearSection && Array.isArray(gearSection.items) && gearSection.items.length
    ? gearSection
    : fallbackContent.gearSection;

  setText("gear-eyebrow", safeSection.eyebrow || fallbackContent.gearSection.eyebrow);
  setText("gear-title", safeSection.title || fallbackContent.gearSection.title);
  setText("gear-description", safeSection.description || fallbackContent.gearSection.description);

  safeSection.items.slice(0, 3).forEach((item, index) => {
    const card = document.getElementById(`gear-card-${index + 1}`);
    if (!card) {
      return;
    }

    const label = card.querySelector(".card-label");
    const title = card.querySelector("h3");
    const description = card.querySelector(".muted");

    if (label) {
      label.textContent = item.label || "";
    }
    if (title) {
      title.textContent = item.title || "";
    }
    if (description) {
      description.textContent = item.description || "";
    }
  });
}

function renderSupportSection(supportSection) {
  const safeSection = supportSection && Array.isArray(supportSection.items) && supportSection.items.length
    ? supportSection
    : fallbackContent.supportSection;

  setText("support-eyebrow", safeSection.eyebrow || fallbackContent.supportSection.eyebrow);
  setText("support-title", safeSection.title || fallbackContent.supportSection.title);
  setText("support-description", safeSection.description || fallbackContent.supportSection.description);

  safeSection.items.slice(0, 2).forEach((item, index) => {
    const card = document.getElementById(`support-card-${index + 1}`);
    if (!card) {
      return;
    }

    const label = card.querySelector(".card-label");
    const title = card.querySelector("h3");
    const description = card.querySelector(".muted");

    if (label) {
      label.textContent = item.label || "";
    }
    if (title) {
      title.textContent = item.title || "";
    }
    if (description) {
      description.textContent = item.description || "";
    }

    const links = Array.isArray(item.links) ? item.links : [];
    links.slice(0, 2).forEach((link, linkIndex) => {
      const anchor = document.getElementById(`support-card-${index + 1}-link-${linkIndex + 1}`);
      if (!anchor) {
        return;
      }

      anchor.textContent = link.label || anchor.textContent;
      const href = resolveHref(link.href, anchor.getAttribute("href") || "#");
      anchor.href = href;

      if (href.startsWith("#")) {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      } else {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
}

function renderFanArtSection(fanArtSection) {
  const safeSection = fanArtSection && Array.isArray(fanArtSection.items) && fanArtSection.items.length
    ? fanArtSection
    : fallbackContent.fanArtSection;

  setText("fan-art-eyebrow", safeSection.eyebrow || fallbackContent.fanArtSection.eyebrow);
  setText("fan-art-title", safeSection.title || fallbackContent.fanArtSection.title);
  setText("fan-art-description", safeSection.description || fallbackContent.fanArtSection.description);

  safeSection.items.slice(0, 2).forEach((item, index) => {
    const card = document.getElementById(`fan-art-card-${index + 1}`);
    if (!card) {
      return;
    }

    const label = card.querySelector(".card-label");
    const title = card.querySelector("h3");
    const description = card.querySelector(".muted");

    if (label) {
      label.textContent = item.label || "";
    }
    if (title) {
      title.textContent = item.title || "";
    }
    if (description) {
      description.textContent = item.description || "";
    }

    const links = Array.isArray(item.links) ? item.links : [];
    links.slice(0, 2).forEach((link, linkIndex) => {
      const anchor = document.getElementById(`fan-art-card-${index + 1}-link-${linkIndex + 1}`);
      if (!anchor) {
        return;
      }

      anchor.textContent = link.label || anchor.textContent;
      const href = resolveHref(link.href, anchor.getAttribute("href") || "#");
      anchor.href = href;

      if (href.startsWith("#")) {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      } else {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
}

function renderFanArtGallery(fanArtGallery) {
  const gallery = document.getElementById("fan-art-gallery");
  if (!gallery) {
    return;
  }

  const safeItems = Array.isArray(fanArtGallery) && fanArtGallery.length
    ? fanArtGallery
    : fallbackContent.fanArtGallery;

  gallery.innerHTML = safeItems.map((item, index) => {
    const title = escapeHtml(item.title || "Fan Art Spotlight");
    const artistName = escapeHtml(item.artistName || "Community Artist");
    const description = escapeHtml(item.description || "");
    const href = sanitizeExternalUrl(item.href, "https://discord.gg/5yyhHJxfS2");
    const ctaLabel = escapeHtml(item.ctaLabel || "View Source");
    const imageUrl = sanitizeImageUrl(
      item.imageUrl,
      fallbackContent.fanArtGallery[0]?.imageUrl || ""
    );
    const thumbnailAlt = escapeHtml(item.thumbnailAlt || item.title || "Fan art spotlight");
    const rank = String(index + 1).padStart(2, "0");

    return `
      <article class="catalog-card fan-art-piece">
        <a
          class="fan-art-thumb"
          href="${href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${ctaLabel}: ${title}"
        >
          <img src="${imageUrl}" alt="${thumbnailAlt}" loading="lazy">
          <span class="fan-art-index">${rank}</span>
        </a>
        <div class="fan-art-body">
          <p class="card-label">Fan Art Spotlight</p>
          <h3>${title}</h3>
          <p class="fan-art-credit">By ${artistName}</p>
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

function renderGenreSection(genreSection) {
  const safeSection = genreSection && Array.isArray(genreSection.items) && genreSection.items.length
    ? genreSection
    : fallbackContent.genreSection;

  setText("genre-eyebrow", safeSection.eyebrow || fallbackContent.genreSection.eyebrow);
  setText("genre-title", safeSection.title || fallbackContent.genreSection.title);

  safeSection.items.slice(0, 3).forEach((item, index) => {
    const card = document.getElementById(`genre-card-${index + 1}`);
    if (!card) {
      return;
    }

    const label = card.querySelector(".card-label");
    const title = card.querySelector("h3");
    const description = card.querySelector(".muted");

    if (label) {
      label.textContent = item.label || "";
    }
    if (title) {
      title.textContent = item.title || "";
    }
    if (description) {
      description.textContent = item.description || "";
    }
  });
}

function renderFitSection(fitSection) {
  const safeSection = fitSection && Array.isArray(fitSection.items) && fitSection.items.length
    ? fitSection
    : fallbackContent.fitSection;

  setText("fit-eyebrow", safeSection.eyebrow || fallbackContent.fitSection.eyebrow);
  setText("fit-title", safeSection.title || fallbackContent.fitSection.title);

  safeSection.items.slice(0, 2).forEach((item, index) => {
    const card = document.getElementById(`fit-card-${index + 1}`);
    if (!card) {
      return;
    }

    const label = card.querySelector(".card-label");
    const title = card.querySelector("h3");
    const description = card.querySelector(".muted");

    if (label) {
      label.textContent = item.label || "";
    }
    if (title) {
      title.textContent = item.title || "";
    }
    if (description) {
      description.textContent = item.description || "";
    }
  });
}

function renderPlatformsSection(platformsSection, youtubeChannel, spotify) {
  const safeSection = platformsSection && Array.isArray(platformsSection.items) && platformsSection.items.length
    ? platformsSection
    : fallbackContent.platformsSection;

  setText("platforms-eyebrow", safeSection.eyebrow || fallbackContent.platformsSection.eyebrow);
  setText("platforms-title", safeSection.title || fallbackContent.platformsSection.title);

  const youtubeItem = safeSection.items[0] || fallbackContent.platformsSection.items[0];
  const spotifyItem = safeSection.items[1] || fallbackContent.platformsSection.items[1];
  const tiktokItem = safeSection.items[2] || fallbackContent.platformsSection.items[2];

  const setCardLabel = (cardId, labelText) => {
    const card = document.getElementById(cardId);
    const label = card?.querySelector(".card-label");
    if (label) {
      label.textContent = labelText || "";
    }
  };

  const setAnchor = (id, link) => {
    const anchor = document.getElementById(id);
    if (!anchor || !link) {
      return;
    }

    anchor.textContent = link.label || anchor.textContent;
    const href = resolveHref(link.href, anchor.getAttribute("href") || "#");
    anchor.href = href;

    if (href.startsWith("#")) {
      anchor.removeAttribute("target");
      anchor.removeAttribute("rel");
    } else {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    }
  };

  setCardLabel("platform-card-1", youtubeItem.label);
  setText("youtube-channel-name", youtubeChannel.name || youtubeItem.title || fallbackContent.youtubeChannel.name);
  setText("youtube-sync-status", youtubeItem.description || "Watch featured covers, showcases, and current uploads on the channel.");
  setHref("youtube-channel-link", youtubeChannel.channelUrl || youtubeItem.links?.[0]?.href || fallbackContent.youtubeChannel.channelUrl);
  setAnchor("platform-card-1-link-2", youtubeItem.links?.[1]);

  setCardLabel("platform-card-2", spotifyItem.label);
  setText("spotify-artist-name", spotify.artistName || spotifyItem.title || fallbackContent.spotify.artistName);
  setText("spotify-status", spotifyItem.description || spotify.status || fallbackContent.spotify.status);
  setHref("spotify-link", spotify.artistUrl || spotifyItem.links?.[0]?.href || fallbackContent.spotify.artistUrl);
  setAnchor("platform-card-2-link-2", spotifyItem.links?.[1]);

  setCardLabel("platform-card-3", tiktokItem.label);
  setText("platform-card-3-title", tiktokItem.title || fallbackContent.platformsSection.items[2].title);
  setText("platform-card-3-description", tiktokItem.description || fallbackContent.platformsSection.items[2].description);
  setAnchor("platform-card-3-link-1", tiktokItem.links?.[0]);
}

function renderHeroSection(heroSection, youtubeChannel) {
  const safeSection = heroSection
    ? heroSection
    : fallbackContent.heroSection;

  setText("hero-eyebrow", safeSection.eyebrow || fallbackContent.heroSection.eyebrow);
  setText("hero-title", safeSection.title || fallbackContent.heroSection.title);
  setText("hero-description", safeSection.description || fallbackContent.heroSection.description);
  setText("hero-panel-label", safeSection.panel?.label || fallbackContent.heroSection.panel.label);
  setText("hero-panel-title", safeSection.panel?.title || fallbackContent.heroSection.panel.title);

  const points = Array.isArray(safeSection.panel?.points) ? safeSection.panel.points : fallbackContent.heroSection.panel.points;
  points.slice(0, 3).forEach((point, index) => {
    setText(`hero-point-${index + 1}`, point || "");
  });

  const setAction = (id, link) => {
    const anchor = document.getElementById(id);
    if (!anchor || !link) {
      return;
    }

    anchor.textContent = link.label || anchor.textContent;
    const href = id === "hero-cta-1"
      ? resolveHref(youtubeChannel.channelUrl || link.href, anchor.getAttribute("href") || "#")
      : resolveHref(link.href, anchor.getAttribute("href") || "#");
    anchor.href = href;

    if (href.startsWith("#")) {
      anchor.removeAttribute("target");
      anchor.removeAttribute("rel");
    } else {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    }
  };

  setAction("hero-cta-1", safeSection.links?.[0] || fallbackContent.heroSection.links[0]);
  setAction("hero-cta-2", safeSection.links?.[1] || fallbackContent.heroSection.links[1]);
  setAction("hero-cta-3", safeSection.links?.[2] || fallbackContent.heroSection.links[2]);
}

function renderAboutSection(aboutSection) {
  const safeSection = aboutSection && Array.isArray(aboutSection.items) && aboutSection.items.length
    ? aboutSection
    : fallbackContent.aboutSection;

  const firstCard = safeSection.items[0] || fallbackContent.aboutSection.items[0];
  const secondCard = safeSection.items[1] || fallbackContent.aboutSection.items[1];

  setText("about-card-1-eyebrow", firstCard.eyebrow || fallbackContent.aboutSection.items[0].eyebrow);
  setText("about-card-1-title", firstCard.title || fallbackContent.aboutSection.items[0].title);
  setText("about-card-1-description", firstCard.description || fallbackContent.aboutSection.items[0].description);

  setText("about-card-2-eyebrow", secondCard.eyebrow || fallbackContent.aboutSection.items[1].eyebrow);
  setText("about-card-2-description", secondCard.description || fallbackContent.aboutSection.items[1].description);

  const collabLink = document.getElementById("about-card-2-link-3");
  const collabConfig = secondCard.links?.[2];
  if (collabLink && collabConfig) {
    collabLink.textContent = collabConfig.label || collabLink.textContent;
    collabLink.href = resolveHref(collabConfig.href, collabLink.getAttribute("href") || "#");
    if (collabLink.href.startsWith("#")) {
      collabLink.removeAttribute("target");
      collabLink.removeAttribute("rel");
    }
  }
}

function renderFooterSection(footerSection) {
  const safeSection = footerSection
    ? footerSection
    : fallbackContent.footerSection;

  setText("footer-brand-eyebrow", safeSection.brand?.eyebrow || fallbackContent.footerSection.brand.eyebrow);
  setText("footer-brand-title", safeSection.brand?.title || fallbackContent.footerSection.brand.title);
  setText("footer-brand-description", safeSection.brand?.description || fallbackContent.footerSection.brand.description);
  setText("footer-note", safeSection.note || fallbackContent.footerSection.note);

  const columns = Array.isArray(safeSection.columns) ? safeSection.columns : fallbackContent.footerSection.columns;
  columns.slice(0, 2).forEach((column, columnIndex) => {
    setText(`footer-column-${columnIndex + 1}-label`, column.label || "");

    const links = Array.isArray(column.links) ? column.links : [];
    links.slice(0, 4).forEach((link, linkIndex) => {
      const anchor = document.getElementById(`footer-column-${columnIndex + 1}-link-${linkIndex + 1}`);
      if (!anchor) {
        return;
      }

      anchor.textContent = link.label || anchor.textContent;
      const href = resolveHref(link.href, anchor.getAttribute("href") || "#");
      anchor.href = href;

      if (href.startsWith("#")) {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
      } else {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
}

function renderCollabSection(collabSection) {
  const safeSection = collabSection
    ? collabSection
    : fallbackContent.collabSection;

  setText("collab-eyebrow", safeSection.eyebrow || fallbackContent.collabSection.eyebrow);
  setText("collab-title", safeSection.title || fallbackContent.collabSection.title);
  setText("collab-description", safeSection.description || fallbackContent.collabSection.description);
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
    const href = resolveHref(value, fallback);
    node.href = href;

    if (href.startsWith("#")) {
      node.removeAttribute("target");
      node.removeAttribute("rel");
    } else if (node.tagName === "A") {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
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

function setupScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  const revealTargets = document.querySelectorAll([
    ".section-heading",
    ".bio-card",
    ".offer-card",
    ".catalog-card",
    ".featured-work-card",
    ".testimonial-spotlight",
    ".hero-panel",
    ".section-accent"
  ].join(", "));

  revealTargets.forEach((node) => node.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.18
  });

  revealTargets.forEach((node) => observer.observe(node));
}

function setupActiveNav() {
  const navLinks = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  if (!navLinks.length) {
    return;
  }

  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href) {
        return null;
      }

      const section = document.querySelector(href);
      if (!section) {
        return null;
      }

      return { link, section, href };
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const header = document.querySelector(".site-nav");

  const setActiveHref = (href) => {
    sections.forEach(({ link, href: currentHref }) => {
      link.classList.toggle("is-active", currentHref === href);
      if (currentHref === href) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let ticking = false;

  const updateActiveNav = () => {
    const headerOffset = (header?.offsetHeight || 0) + 120;
    const currentPosition = window.scrollY + headerOffset;

    let currentSection = sections[0];
    for (const item of sections) {
      if (item.section.offsetTop <= currentPosition) {
        currentSection = item;
      } else {
        break;
      }
    }

    setActiveHref(currentSection.href);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateActiveNav);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActiveNav();
}

function setupMobileNav() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("site-nav-links");

  if (!nav || !toggle || !navLinks) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-menu-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      closeMenu();
    }
  });
}

const playlistPlayers = new Map();
const playlistState = new Map();
let youtubeIframeApiPromise;

function loadYoutubeIframeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeIframeApiPromise) {
    return youtubeIframeApiPromise;
  }

  youtubeIframeApiPromise = new Promise((resolve) => {
    const existingScript = document.querySelector('script[data-youtube-iframe-api="true"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.setAttribute("data-youtube-iframe-api", "true");
      document.head.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  });

  return youtubeIframeApiPromise;
}

function setupReleasePlaylists() {
  const playerNodes = Array.from(document.querySelectorAll(".playlist-player[data-playlist-id]"));
  if (!playerNodes.length) {
    return;
  }

  loadYoutubeIframeApi().then((YT) => {
    playerNodes.forEach((node) => {
      const playlistId = node.getAttribute("data-playlist-id");
      const startIndex = Number(node.getAttribute("data-start-index")) || 0;
      const startVideoId = node.getAttribute("data-start-video-id");
      const fallbackVideoIds = normalizeVideoIds(
        (node.getAttribute("data-fallback-video-ids") || "").split(","),
        startVideoId || ""
      );
      const playerKey = node.id;
      const cardId = node.getAttribute("data-card-id");

      if (!playlistId || playlistPlayers.has(playerKey)) {
        return;
      }

      const player = new YT.Player(playerKey, {
        width: 1,
        height: 1,
        host: "https://www.youtube-nocookie.com",
        events: {
          onReady: () => {
            if (typeof player.mute === "function") {
              player.mute();
            }

            if (typeof player.cuePlaylist === "function") {
              player.cuePlaylist({
                listType: "playlist",
                list: playlistId,
                index: startIndex
              });
            }

            const trySyncPlaylist = (attempt = 0) => {
              const playlist = typeof player.getPlaylist === "function" ? player.getPlaylist() : null;
              const items = Array.isArray(playlist) ? playlist : [];

              if (items.length) {
              const currentIndex = Math.min(Math.max(startIndex, 0), items.length - 1);
                playlistState.set(cardId, { items, currentIndex, startVideoId, fallbackVideoIds });
                syncPlaylistCard(cardId);
                return;
              }

              if (attempt < 10) {
                window.setTimeout(() => trySyncPlaylist(attempt + 1), 250);
                return;
              }

              playlistState.set(cardId, {
                items: fallbackVideoIds,
                currentIndex: 0,
                startVideoId,
                fallbackVideoIds
              });
              syncPlaylistCard(cardId);
            };

            trySyncPlaylist();
          }
        }
      });

      playlistPlayers.set(playerKey, player);
    });
  }).catch(() => {
    // Leave the playlist links available if the iframe API cannot load.
  });

  document.querySelectorAll(".playlist-control").forEach((button) => {
    if (button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const action = button.getAttribute("data-action");
      const player = targetId ? playlistPlayers.get(targetId) : null;
      const cardId = document.getElementById(targetId)?.getAttribute("data-card-id");
      const state = cardId ? playlistState.get(cardId) : null;

      if (!cardId) {
        return;
      }

      if (!state?.items?.length) {
        const fallbackVideoId = document.getElementById(`${cardId}-thumb`)?.dataset.videoId;
        if (!fallbackVideoId) {
          return;
        }

        playlistState.set(cardId, {
          items: [fallbackVideoId],
          currentIndex: 0,
          startVideoId: fallbackVideoId,
          fallbackVideoIds: [fallbackVideoId]
        });
      }

      const safeState = playlistState.get(cardId);
      if (!safeState?.items?.length) {
        return;
      }

      if (action === "prev-video") {
        safeState.currentIndex = (safeState.currentIndex - 1 + safeState.items.length) % safeState.items.length;
        syncPlaylistCard(cardId);
      }

      if (action === "next-video") {
        safeState.currentIndex = (safeState.currentIndex + 1) % safeState.items.length;
        syncPlaylistCard(cardId);
      }
    });
  });
}

function syncPlaylistCard(cardId) {
  const state = cardId ? playlistState.get(cardId) : null;
  if (!cardId) {
    return;
  }

  const videoId = state?.items?.length
    ? state.items[state.currentIndex]
    : state?.startVideoId;

  if (!videoId) {
    return;
  }

  const thumbLink = document.getElementById(`${cardId}-thumb`);
  const thumbImage = document.getElementById(`${cardId}-image`);
  const counter = document.getElementById(`${cardId}-counter`);

  if (thumbLink) {
    thumbLink.dataset.videoId = videoId;
  }

  if (thumbImage) {
    thumbImage.src = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
  }

  if (counter && state?.items?.length) {
    counter.textContent = String(state.currentIndex + 1).padStart(2, "0");
  }
}

function setupVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  if (!modal || !iframe) {
    return;
  }

  const closeModal = () => {
    iframe.src = "";
    modal.hidden = true;
    document.body.classList.remove("is-video-modal-open");
  };

  document.querySelectorAll("[data-close-video-modal]").forEach((node) => {
    if (node.dataset.bound === "true") {
      return;
    }

    node.dataset.bound = "true";
    node.addEventListener("click", closeModal);
  });

  document.querySelectorAll(".playlist-thumb").forEach((button) => {
    if (button.dataset.modalBound === "true") {
      return;
    }

    button.dataset.modalBound = "true";
    button.addEventListener("click", () => {
      const videoId = button.dataset.videoId;
      if (!videoId) {
        return;
      }

      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
      modal.hidden = false;
      document.body.classList.add("is-video-modal-open");
    });
  });

  if (modal.dataset.escapeBound !== "true") {
    modal.dataset.escapeBound = "true";
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });
  }
}

function setupLatestReleasePlaylist() {
  const releaseLink = document.getElementById("latest-release-link");
  const releaseImage = document.getElementById("latest-release-image");
  if (!releaseLink || !releaseImage) {
    return;
  }

  const playlistId = releaseLink.dataset.playlistId;
  const fallbackVideoIds = normalizeVideoIds(
    (releaseLink.dataset.videoIds || "").split(","),
    releaseImage.dataset.videoId || ""
  );

  if (!playlistId || !fallbackVideoIds.length) {
    return;
  }

  loadYoutubeIframeApi().then((YT) => {
    const hiddenHostId = "latest-release-hidden-player";
    let host = document.getElementById(hiddenHostId);
    if (!host) {
      host = document.createElement("div");
      host.id = hiddenHostId;
      host.className = "playlist-player playlist-player-hidden";
      host.setAttribute("aria-hidden", "true");
      document.body.appendChild(host);
    }

    if (playlistPlayers.has(hiddenHostId)) {
      return;
    }

    const player = new YT.Player(hiddenHostId, {
      width: 1,
      height: 1,
      host: "https://www.youtube-nocookie.com",
      events: {
        onReady: () => {
          if (typeof player.mute === "function") {
            player.mute();
          }

          if (typeof player.cuePlaylist === "function") {
            player.cuePlaylist({
              listType: "playlist",
              list: playlistId,
              index: 0
            });
          }

          const trySync = (attempt = 0) => {
            const playlist = typeof player.getPlaylist === "function" ? player.getPlaylist() : null;
            const items = Array.isArray(playlist) ? playlist : [];
            const videoId = items[0] || fallbackVideoIds[0];

            if (videoId) {
              releaseLink.href = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
              releaseImage.src = buildYoutubeThumbnail(videoId, releaseImage.src);
              releaseImage.dataset.videoId = videoId;
              return;
            }

            if (attempt < 10) {
              window.setTimeout(() => trySync(attempt + 1), 250);
            }
          };

          trySync();
        }
      }
    });

    playlistPlayers.set(hiddenHostId, player);
  }).catch(() => {
    // Keep fallback thumbnail and link if the live playlist cannot be read.
  });
}

function renderContent(content) {
  const latestYoutube = content.latestYoutube || fallbackContent.latestYoutube;
  const heroSection = content.heroSection || fallbackContent.heroSection;
  const aboutSection = content.aboutSection || fallbackContent.aboutSection;
  const featuredSection = content.featuredSection || fallbackContent.featuredSection;
  const releasesSection = content.releasesSection || fallbackContent.releasesSection;
  const proofSection = content.proofSection || fallbackContent.proofSection;
  const collabSection = content.collabSection || fallbackContent.collabSection;
  const footerSection = content.footerSection || fallbackContent.footerSection;
  const platformsSection = content.platformsSection || fallbackContent.platformsSection;
  const youtubeChannel = content.youtubeChannel || fallbackContent.youtubeChannel;
  const genreSection = content.genreSection || fallbackContent.genreSection;
  const fitSection = content.fitSection || fallbackContent.fitSection;
  const spotify = content.spotify || fallbackContent.spotify;
  const featuredWorks = content.featuredWorks || fallbackContent.featuredWorks;
  const releases = content.releases || fallbackContent.releases;
  const supportSection = content.supportSection || fallbackContent.supportSection;
  const gearSection = content.gearSection || fallbackContent.gearSection;
  const fanArtSection = content.fanArtSection || fallbackContent.fanArtSection;
  const fanArtGallery = content.fanArtGallery || fallbackContent.fanArtGallery;
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

  renderLatestRelease(latestYoutube);
  renderHeroSection(heroSection, youtubeChannel);
  renderAboutSection(aboutSection);
  renderFeaturedSection(featuredSection);
  renderReleasesSection(releasesSection);
  renderProofSection(proofSection);
  renderCollabSection(collabSection);
  renderPlatformsSection(platformsSection, youtubeChannel, spotify);
  renderGenreSection(genreSection);
  renderFitSection(fitSection);
  renderFeaturedWorks(featuredWorks);
  renderReleases(releases);
  setupReleasePlaylists();
  setupLatestReleasePlaylist();
  setupVideoModal();
  renderSupportSection(supportSection);
  renderGearSection(gearSection);
  renderFanArtSection(fanArtSection);
  renderFanArtGallery(fanArtGallery);
  renderTestimonials(testimonials);
  renderFooterSection(footerSection);
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
setupScrollReveal();
setupActiveNav();
setupMobileNav();
