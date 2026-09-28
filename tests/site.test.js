import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { JSDOM } from "jsdom";
import { renderContent } from "../src/render-content.js";

const read = (path) =>
  readFileSync(new URL(path, import.meta.url), "utf8").replace(/^\uFEFF/, "");
const content = JSON.parse(read("../public/data/content.json"));
const html = renderContent(read("../index.html"), content);
function setup({ mobile = false, fetch = async () => ({ ok: true }) } = {}) {
  const dom = new JSDOM(html, {
    url: "https://example.com/",
    runScripts: "outside-only",
  });
  dom.window.matchMedia = () => ({ matches: mobile, addEventListener() {} });
  dom.window.fetch = fetch;
  dom.window.eval(read("../src/app.js"));
  dom.window.eval(read("../src/form-validation.js"));
  return dom;
}
function validForm(window) {
  const form = window.document.querySelector("form");
  form.elements.name.value = "José Peña";
  form.elements.email.value = "client@example.com";
  form.elements.project_type.value = "live";
  form.elements.project_type.dispatchEvent(new window.Event("change"));
  form.elements.message.value = "A performance at Café Iligan, please.";
  form.elements.budget.value = "₱5,000–₱10,000";
  return form;
}

test("built content exposes all supplied playlists, social links, and contact without JavaScript", () => {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  assert.equal(document.querySelectorAll("[data-playlist]").length, 4);
  const allCovers = document.querySelector(".playlist-selector").lastElementChild;
  assert.equal(allCovers.tagName, "A");
  assert.equal(allCovers.href, "https://www.youtube.com/playlist?list=PLsjrSGMbKS6cFI7RYZA8RMmSR47TUOpIz");
  assert.equal(allCovers.previousElementSibling.textContent, "Collaborations");
  assert.equal(allCovers.querySelector("img"), null);
  for (const item of content.playlists)
    assert.ok(
      document.querySelector(
        `a[href="https://www.youtube.com/playlist?list=${item.id}"]`,
      ),
    );
  for (const item of content.socials)
    assert.ok(
      [...document.querySelectorAll("a")].some((a) => a.href === item.href),
    );
  assert.ok(
    document.querySelector('a[href="mailto:ralskiesartist@gmail.com"]'),
  );
  assert.equal(document.querySelectorAll(".testimonial").length, 2);
  assert.equal(document.querySelectorAll(".fanart-grid figure").length, content.fanArtGallery.length);
  assert.deepEqual([...document.querySelectorAll("#navigation a")].map(a => a.hash), ["#about", "#music", "#community", "#donate", "#services"]);
  assert.equal(document.querySelector("main section").id, "about");
  assert.equal(document.querySelector(".brand-artwork"), null);
  assert.match(document.querySelector(".artist-credentials").textContent, /Kimusikero/);
  assert.equal(document.querySelectorAll("iframe").length, 0);
  assert.ok(!/%[A-Z_]+%/.test(html));
  assert.ok(!html.includes("Update this description"));
  const ids = [...document.querySelectorAll("[id]")].map((node) => node.id);
  assert.equal(ids.length, new Set(ids).size);
  for (const link of document.querySelectorAll('a[href^="#"]'))
    assert.ok(document.getElementById(link.hash.slice(1)), link.href);
  for (const img of document.querySelectorAll("img")) {
    assert.ok(img.hasAttribute("alt"));
    if (!img.alt) assert.ok(img.closest('[aria-label], [aria-hidden="true"]'));
    assert.ok(
      existsSync(
        new URL(`../public${img.getAttribute("src")}`, import.meta.url),
      ),
      img.src,
    );
  }
  dom.window.close();
});

test("playlist switching unloads previous media, updates its fallback, and loads the selected playlist", () => {
  const dom = setup();
  const doc = dom.window.document;
  doc.querySelector("#load-playlist").click();
  assert.equal(doc.querySelector(".music-feature").classList.contains("is-playing"), true);
  assert.equal(
    new URL(doc.querySelector("iframe").src).searchParams.get("list"),
    content.playlists[0].id,
  );
  const buttons = doc.querySelectorAll("[data-playlist]");
  for (let index = 1; index < buttons.length; index++) {
    buttons[index].click();
    assert.equal(doc.querySelector(".music-feature").classList.contains("is-playing"), false);
    assert.equal(doc.querySelectorAll("iframe").length, 0);
    assert.equal(doc.querySelectorAll('[aria-pressed="true"]').length, 1);
    assert.equal(
      doc.querySelector("#playlist-title").textContent,
      content.playlists[index].title,
    );
    assert.equal(
      new URL(doc.querySelector("#playlist-external").href).searchParams.get(
        "list",
      ),
      content.playlists[index].id,
    );
    doc.querySelector("#load-playlist").click();
    assert.equal(
      new URL(doc.querySelector("iframe").src).searchParams.get("list"),
      content.playlists[index].id,
    );
  }
  doc.querySelector("#load-spotify").click();
  assert.ok(
    doc
      .querySelector("#spotify-player iframe")
      .src.includes("6jNlrnxeDiFy1rC8kViie8"),
  );
  dom.window.close();
});

test("mobile menu removes closed links from interaction and closes on Escape", () => {
  const dom = setup({ mobile: true });
  const doc = dom.window.document;
  const button = doc.querySelector(".menu-toggle");
  const menu = doc.querySelector("#navigation");
  assert.equal(menu.inert, true);
  button.click();
  assert.equal(menu.inert, false);
  assert.equal(button.getAttribute("aria-expanded"), "true");
  doc.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "Escape" }));
  assert.equal(menu.inert, true);
  assert.equal(doc.activeElement, button);
  dom.window.close();
});

test("fan art arrows and keyboard scroll within bounds and respect reduced motion", () => {
  const dom = setup({ mobile: true });
  const { document: doc } = dom.window;
  const gallery = doc.querySelector("#fanart-gallery");
  const cards = [...gallery.querySelectorAll("figure")];
  Object.defineProperties(gallery, {
    clientWidth: { value: 400 },
    scrollWidth: { value: cards.length * 220 - 20 },
  });
  cards.forEach((card, index) => Object.defineProperties(card, {
    offsetLeft: { value: index * 220 },
    offsetWidth: { value: 200 },
  }));
  const movements = [];
  const move = (left, behavior) => {
    movements.push(behavior);
    gallery.scrollLeft = Math.max(0, Math.min(left, gallery.scrollWidth - gallery.clientWidth));
    dom.window.dispatchEvent(new dom.window.Event("resize"));
  };
  gallery.scrollBy = ({ left, behavior }) => move(gallery.scrollLeft + left, behavior);
  gallery.scrollTo = ({ left, behavior }) => move(left, behavior);
  dom.window.dispatchEvent(new dom.window.Event("resize"));
  const previous = doc.querySelector("#fanart-previous");
  const next = doc.querySelector("#fanart-next");
  assert.equal(previous.disabled, true);
  assert.equal(next.disabled, false);
  next.click();
  assert.equal(gallery.scrollLeft, 220);
  assert.equal(previous.disabled, false);
  assert.match(doc.querySelector("#fanart-status").textContent, /^2–3 of/);
  gallery.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "End" }));
  assert.equal(next.disabled, true);
  gallery.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "Home" }));
  assert.equal(gallery.scrollLeft, 0);
  assert.equal(previous.disabled, true);
  assert.ok(movements.every(behavior => behavior === "instant"));
  dom.window.close();
});

test("service links choose the right inquiry and inactive fields are excluded from submission", () => {
  const dom = setup();
  const doc = dom.window.document;
  for (const kind of ["live", "creative", "brand"]) {
    doc.querySelector(`[data-inquiry="${kind}"]`).click();
    assert.equal(doc.querySelector("select").value, kind);
    for (const group of doc.querySelectorAll("fieldset")) {
      assert.equal(group.disabled, group.dataset.inquiryFields !== kind);
      assert.equal(group.hidden, group.dataset.inquiryFields !== kind);
    }
  }
  const form = validForm(dom.window);
  assert.ok(
    form.checkValidity(),
    "Filipino names and peso budgets must be accepted",
  );
  const data = new dom.window.FormData(form);
  assert.ok(data.has("venue"));
  assert.ok(!data.has("brand"));
  assert.ok(!data.has("creative_brief"));
  dom.window.close();
});

test("successful submission shows confirmation and resets fields without a real network request", async () => {
  let sent;
  const dom = setup({
    fetch: async (url, options) => {
      sent = { url, options };
      return { ok: true };
    },
  });
  const form = validForm(dom.window);
  form.dispatchEvent(new dom.window.Event("submit", { cancelable: true }));
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(sent.url, "https://formspree.io/f/xbdqlryk");
  assert.equal(sent.options.body.get("name"), "José Peña");
  assert.equal(sent.options.body.get("budget"), "₱5,000–₱10,000");
  assert.match(
    dom.window.document.querySelector("#form-status").textContent,
    /has been sent/,
  );
  assert.equal(form.elements.message.value, "");
  assert.equal(form.querySelector('[type="submit"]').disabled, false);
  dom.window.close();
});

test("failed submission preserves the message and provides a direct-email recovery path", async () => {
  for (const response of ["http", "network"]) {
    const dom = setup({
      fetch: async () => {
        if (response === "network") throw new Error("offline");
        return { ok: false };
      },
    });
    const form = validForm(dom.window);
    form.dispatchEvent(new dom.window.Event("submit", { cancelable: true }));
    await new Promise((resolve) => setImmediate(resolve));
    assert.match(form.elements.message.value, /Café Iligan/);
    assert.match(
      dom.window.document.querySelector("#form-status").textContent,
      /ralskiesartist@gmail.com/,
    );
    assert.equal(form.querySelector('[type="submit"]').disabled, false);
    dom.window.close();
  }
});

test("content rendering escapes quotes and rejects script URLs", () => {
  const edited = structuredClone(content);
  edited.testimonials[0].quote = '<script>alert("bad")</script>';
  const result = renderContent("%TESTIMONIALS%", edited);
  assert.ok(!result.includes("<script>"));
  assert.ok(result.includes("&lt;script&gt;"));
  edited.socials[0].href = "javascript:alert(1)";
  assert.throws(() => renderContent("%SOCIALS%", edited), /Unsupported/);
});

test("both deployment policies permit the actual embedded players and form endpoint", () => {
  const vercel = JSON.parse(read("../vercel.json")).headers[0].headers.find(
    (h) => h.key === "Content-Security-Policy",
  ).value;
  const netlify = /Content-Security-Policy = "([^"]+)"/.exec(
    read("../netlify.toml"),
  )[1];
  assert.equal(vercel, netlify);
  assert.match(vercel, /connect-src 'self' https:\/\/formspree.io/);
  assert.match(
    vercel,
    /frame-src https:\/\/www.youtube-nocookie.com https:\/\/www.youtube.com https:\/\/open.spotify.com/,
  );
});
