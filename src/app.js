document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#navigation");
const navigation = document.querySelector(".site-nav");
const mobile = window.matchMedia("(max-width: 640px)");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-menu-open");
  menu.classList.remove("is-open");
  menu.inert = mobile.matches;
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-menu-open", open);
  menu.classList.toggle("is-open", open);
  menu.inert = !open && mobile.matches;
});
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
mobile.addEventListener("change", closeMenu);
closeMenu();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
const motionStage = document.querySelector(".contour-stage");
document.addEventListener("visibilitychange", () => {
  document.documentElement.toggleAttribute("data-page-hidden", document.hidden);
});
if (!reducedMotion.matches && finePointer.matches) {
  let pointerEvent;
  let pointerFrame = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      if (reducedMotion.matches || document.hidden) return;
      pointerEvent = event;
      if (pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = 0;
        const x = (pointerEvent.clientX / window.innerWidth - 0.5) * 36;
        const y = (pointerEvent.clientY / window.innerHeight - 0.5) * 28;
        motionStage.style.setProperty("--motion-x", `${x.toFixed(1)}px`);
        motionStage.style.setProperty("--motion-y", `${y.toFixed(1)}px`);
      });
    },
    { passive: true },
  );
}

const playerHost = document.querySelector("#playlist-player");
const playlistButtons = [...document.querySelectorAll("[data-playlist]")];
const watchLink = document.querySelector("#playlist-external");
const playButton = document.querySelector("#load-playlist");
const cover = document.querySelector("#playlist-cover");
let selected = playlistButtons[0];
function loadPlaylist() {
  playerHost.closest(".music-feature").classList.add("is-playing");
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/videoseries?listType=playlist&list=${encodeURIComponent(selected.dataset.playlist)}&rel=0`;
  frame.title = `${selected.dataset.title} — Ralskies on YouTube`;
  frame.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  playerHost.replaceChildren(frame);
  playerHost.hidden = false;
  cover.hidden = true;
  playButton.hidden = true;
  document.querySelector("#player-status").textContent =
    `${selected.dataset.title} player loaded. If playback is unavailable, use the YouTube link below.`;
  frame.focus();
}
playlistButtons.forEach((button) =>
  button.addEventListener("click", () => {
    selected = button;
    playlistButtons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    document.querySelector("#playlist-title").textContent =
      button.dataset.title;
    document.querySelector("#playlist-description").textContent =
      button.dataset.description;
    watchLink.href = `https://www.youtube.com/playlist?list=${encodeURIComponent(button.dataset.playlist)}`;
    watchLink.setAttribute(
      "aria-label",
      `Open ${button.dataset.title} on YouTube`,
    );
    cover.src = button.dataset.image;
    cover.alt = button.dataset.imageAlt;
    playerHost.replaceChildren();
    playerHost.closest(".music-feature").classList.remove("is-playing");
    playerHost.hidden = true;
    cover.hidden = false;
    playButton.hidden = false;
    playButton.setAttribute(
      "aria-label",
      `Load ${button.dataset.title} playlist`,
    );
    document.querySelector("#player-status").textContent =
      `${button.dataset.title} selected. Press play to load the playlist.`;
  }),
);
playButton.addEventListener("click", loadPlaylist);

// Native scrolling keeps the gallery usable with touch, a mouse, or a keyboard.
const gallery = document.querySelector("#fanart-gallery");
const cards = [...gallery.querySelectorAll("figure")];
const previousArt = document.querySelector("#fanart-previous");
const nextArt = document.querySelector("#fanart-next");
const artStatus = document.querySelector("#fanart-status");
document.querySelector(".gallery-controls").hidden = false;
function updateGallery() {
  const end = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
  previousArt.disabled = gallery.scrollLeft <= 2;
  nextArt.disabled = gallery.scrollLeft >= end - 2;
  const visible = cards.map((card, index) => ({ card, index })).filter(({ card }) =>
    card.offsetLeft + card.offsetWidth > gallery.scrollLeft + 5 &&
    card.offsetLeft < gallery.scrollLeft + gallery.clientWidth - 5,
  );
  if (visible.length) {
    const first = visible[0].index + 1;
    const last = visible[visible.length - 1].index + 1;
    artStatus.textContent = `${first === last ? first : `${first}–${last}`} of ${cards.length} artworks`;
  }
}
function browseArt(direction) {
  const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : gallery.clientWidth;
  gallery.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? "instant" : "smooth" });
}
previousArt.addEventListener("click", () => browseArt(-1));
nextArt.addEventListener("click", () => browseArt(1));
gallery.addEventListener("keydown", (event) => {
  if (event.target !== gallery) return;
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    browseArt(event.key === "ArrowRight" ? 1 : -1);
  } else if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    gallery.scrollTo({ left: event.key === "Home" ? 0 : gallery.scrollWidth, behavior: "instant" });
  }
});
let galleryUpdate;
gallery.addEventListener("scroll", () => {
  window.clearTimeout(galleryUpdate);
  galleryUpdate = window.setTimeout(updateGallery, 100);
}, { passive: true });
if ("ResizeObserver" in window) new ResizeObserver(updateGallery).observe(gallery);
else window.addEventListener("resize", updateGallery);
updateGallery();
document.querySelector("#load-spotify").addEventListener("click", () => {
  const frame = document.createElement("iframe");
  frame.src =
    "https://open.spotify.com/embed/artist/6jNlrnxeDiFy1rC8kViie8?utm_source=generator&theme=0";
  frame.title = "Ralskies releases on Spotify";
  frame.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  frame.height = "352";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  document.querySelector("#spotify-player").replaceChildren(frame);
  frame.focus();
});
const legacySections = {
  collab: "contact",
  credits: "music",
  releases: "music",
  "latest-release": "music",
  catalog: "follow",
  offers: "services",
  fit: "services",
  art: "community",
  support: "community",
  gear: "about",
  testimonials: "voices",
};
const legacyTarget = legacySections[window.location.hash.slice(1)];
if (legacyTarget) document.getElementById(legacyTarget)?.scrollIntoView();
