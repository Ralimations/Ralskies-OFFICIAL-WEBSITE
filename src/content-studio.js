import "./content-studio.css";

const CONTENT_URL = "/data/content.json";

const emptyFeaturedWork = () => ({
  label: "Featured Work",
  title: "",
  description: "",
  tags: [],
  href: "",
  ctaLabel: "Open Feature",
  thumbnailUrl: "",
  thumbnailAlt: ""
});

const emptyRelease = () => ({
  label: "Release",
  title: "",
  description: "",
  meta: "",
  href: "",
  ctaLabel: "Open Release"
});

const emptyTestimonial = () => ({
  quote: "",
  name: "",
  role: "",
  highlight: false
});

const emptyFanArt = () => ({
  title: "",
  artistName: "",
  description: "",
  imageUrl: "",
  href: "",
  ctaLabel: "View Source",
  thumbnailAlt: ""
});

const state = {
  content: null,
  fileHandle: null
};

const elements = {
  featuredWorks: document.getElementById("featured-works-editor"),
  testimonials: document.getElementById("testimonials-editor"),
  fanArt: document.getElementById("fan-art-editor"),
  status: document.getElementById("studio-status"),
  saveFile: document.getElementById("save-file")
};

function setStatus(message) {
  elements.status.textContent = message;
}

function ensureContentShape(content) {
  const nextContent = structuredClone(content || {});
  nextContent.featuredWorks = Array.isArray(nextContent.featuredWorks) ? nextContent.featuredWorks : [];
  nextContent.testimonials = Array.isArray(nextContent.testimonials) ? nextContent.testimonials : [];
  nextContent.fanArtGallery = Array.isArray(nextContent.fanArtGallery) ? nextContent.fanArtGallery : [];
  return nextContent;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function summarizeItem(item, keys) {
  for (const key of keys) {
    const value = item?.[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "Untitled";
}

function renderFeaturedWorksEditor() {
  const list = state.content.featuredWorks;
  if (!list.length) {
    elements.featuredWorks.innerHTML = '<div class="empty-state">No featured works yet. Add the first portfolio highlight here.</div>';
    return;
  }

  elements.featuredWorks.innerHTML = list.map((item, index) => `
    <article class="editor-card" data-section="featuredWorks" data-index="${index}">
      <div class="editor-card-header">
        <div>
          <h3 class="editor-card-title">${escapeHtml(summarizeItem(item, ["title", "label"]))}</h3>
          <p class="editor-card-meta">Showcase card ${index + 1}</p>
        </div>
        <div class="editor-card-actions">
          <button type="button" class="studio-button" data-action="move-up">Move Up</button>
          <button type="button" class="studio-button" data-action="move-down">Move Down</button>
          <button type="button" class="studio-button" data-action="remove">Remove</button>
        </div>
      </div>
      <div class="editor-grid">
        <label class="field">
          <span>Label</span>
          <input type="text" data-field="label" value="${escapeHtml(item.label || "")}">
        </label>
        <label class="field">
          <span>CTA Label</span>
          <input type="text" data-field="ctaLabel" value="${escapeHtml(item.ctaLabel || "")}">
        </label>
        <label class="field full-width">
          <span>Title</span>
          <input type="text" data-field="title" value="${escapeHtml(item.title || "")}">
        </label>
        <label class="field full-width">
          <span>Description</span>
          <textarea rows="4" data-field="description">${escapeHtml(item.description || "")}</textarea>
        </label>
        <label class="field full-width">
          <span>Tags</span>
          <input type="text" data-field="tags" value="${escapeHtml(Array.isArray(item.tags) ? item.tags.join(", ") : "")}">
        </label>
        <label class="field">
          <span>Destination URL</span>
          <input type="url" data-field="href" value="${escapeHtml(item.href || "")}">
        </label>
        <label class="field">
          <span>Thumbnail URL</span>
          <input type="url" data-field="thumbnailUrl" value="${escapeHtml(item.thumbnailUrl || "")}">
        </label>
        <label class="field full-width">
          <span>Thumbnail Alt</span>
          <input type="text" data-field="thumbnailAlt" value="${escapeHtml(item.thumbnailAlt || "")}">
        </label>
      </div>
    </article>
  `).join("");
}

function renderTestimonialsEditor() {
  const list = state.content.testimonials;
  if (!list.length) {
    elements.testimonials.innerHTML = '<div class="empty-state">No testimonials yet. Add curated proof here and mark one as the spotlight.</div>';
    return;
  }

  elements.testimonials.innerHTML = list.map((item, index) => `
    <article class="editor-card" data-section="testimonials" data-index="${index}">
      <div class="editor-card-header">
        <div>
          <h3 class="editor-card-title">${escapeHtml(summarizeItem(item, ["name", "role", "quote"]))}</h3>
          <p class="editor-card-meta">Reference ${index + 1}${item.highlight ? " • Spotlight" : ""}</p>
        </div>
        <div class="editor-card-actions">
          <button type="button" class="studio-button" data-action="move-up">Move Up</button>
          <button type="button" class="studio-button" data-action="move-down">Move Down</button>
          <button type="button" class="studio-button" data-action="remove">Remove</button>
        </div>
      </div>
      <div class="editor-grid">
        <label class="field">
          <span>Name</span>
          <input type="text" data-field="name" value="${escapeHtml(item.name || "")}">
        </label>
        <label class="field">
          <span>Role</span>
          <input type="text" data-field="role" value="${escapeHtml(item.role || "")}">
        </label>
        <label class="field full-width">
          <span>Quote</span>
          <textarea rows="5" data-field="quote">${escapeHtml(item.quote || "")}</textarea>
        </label>
        <label class="toggle-row full-width">
          <input type="checkbox" data-field="highlight" ${item.highlight ? "checked" : ""}>
          Use as the featured testimonial spotlight
        </label>
      </div>
    </article>
  `).join("");
}

function renderFanArtEditor() {
  const list = state.content.fanArtGallery;
  if (!list.length) {
    elements.fanArt.innerHTML = '<div class="empty-state">No fan art spotlights yet. Add curated community work here.</div>';
    return;
  }

  elements.fanArt.innerHTML = list.map((item, index) => `
    <article class="editor-card" data-section="fanArtGallery" data-index="${index}">
      <div class="editor-card-header">
        <div>
          <h3 class="editor-card-title">${escapeHtml(summarizeItem(item, ["title", "artistName"]))}</h3>
          <p class="editor-card-meta">Fan art spotlight ${index + 1}</p>
        </div>
        <div class="editor-card-actions">
          <button type="button" class="studio-button" data-action="move-up">Move Up</button>
          <button type="button" class="studio-button" data-action="move-down">Move Down</button>
          <button type="button" class="studio-button" data-action="remove">Remove</button>
        </div>
      </div>
      <div class="editor-grid">
        <label class="field">
          <span>Artwork Title</span>
          <input type="text" data-field="title" value="${escapeHtml(item.title || "")}">
        </label>
        <label class="field">
          <span>Artist Credit</span>
          <input type="text" data-field="artistName" value="${escapeHtml(item.artistName || "")}">
        </label>
        <label class="field full-width">
          <span>Description</span>
          <textarea rows="4" data-field="description">${escapeHtml(item.description || "")}</textarea>
        </label>
        <label class="field">
          <span>Image URL</span>
          <input type="url" data-field="imageUrl" value="${escapeHtml(item.imageUrl || "")}">
        </label>
        <label class="field">
          <span>Destination URL</span>
          <input type="url" data-field="href" value="${escapeHtml(item.href || "")}">
        </label>
        <label class="field">
          <span>CTA Label</span>
          <input type="text" data-field="ctaLabel" value="${escapeHtml(item.ctaLabel || "")}">
        </label>
        <label class="field">
          <span>Image Alt</span>
          <input type="text" data-field="thumbnailAlt" value="${escapeHtml(item.thumbnailAlt || "")}">
        </label>
      </div>
    </article>
  `).join("");
}

function renderEditors() {
  renderFeaturedWorksEditor();
  renderTestimonialsEditor();
  renderFanArtEditor();
  elements.saveFile.disabled = !state.fileHandle;
}

function normalizeFieldValue(section, field, value) {
  if (field === "tags") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  if (section === "testimonials" && field === "highlight") {
    return value;
  }

  return value;
}

function moveItem(section, index, direction) {
  const list = state.content[section];
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= list.length) {
    return;
  }

  [list[index], list[targetIndex]] = [list[targetIndex], list[index]];
}

function updateHighlight(index, checked) {
  state.content.testimonials = state.content.testimonials.map((item, itemIndex) => ({
    ...item,
    highlight: checked ? itemIndex === index : false
  }));
}

function downloadJson() {
  const json = JSON.stringify(state.content, null, 2);
  const blob = new Blob([`${json}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "content.json";
  link.click();
  URL.revokeObjectURL(url);
  setStatus("Downloaded updated content.json.");
}

async function copyJson() {
  const json = JSON.stringify(state.content, null, 2);
  await navigator.clipboard.writeText(`${json}\n`);
  setStatus("Copied updated JSON to the clipboard.");
}

async function loadFromUrl() {
  const response = await fetch(CONTENT_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${CONTENT_URL}: ${response.status}`);
  }

  const content = await response.json();
  state.content = ensureContentShape(content);
  state.fileHandle = null;
  renderEditors();
  setStatus("Loaded the current site content from public/data/content.json.");
}

async function openLocalFile() {
  if (!("showOpenFilePicker" in window)) {
    setStatus("This browser cannot open local files directly here. Use Download JSON instead.");
    return;
  }

  const [handle] = await window.showOpenFilePicker({
    multiple: false,
    types: [
      {
        description: "JSON files",
        accept: { "application/json": [".json"] }
      }
    ]
  });
  const file = await handle.getFile();
  const content = JSON.parse(await file.text());
  state.content = ensureContentShape(content);
  state.fileHandle = handle;
  renderEditors();
  setStatus(`Loaded local file: ${file.name}. You can now save back to it directly.`);
}

async function saveBackToFile() {
  if (!state.fileHandle) {
    setStatus("Open a local content.json file first, or use Download JSON.");
    return;
  }

  const writable = await state.fileHandle.createWritable();
  await writable.write(`${JSON.stringify(state.content, null, 2)}\n`);
  await writable.close();
  setStatus("Saved changes back to the selected local content.json file.");
}

function addItem(section) {
  if (section === "featuredWorks") {
    state.content.featuredWorks.push(emptyFeaturedWork());
  } else if (section === "testimonials") {
    state.content.testimonials.push(emptyTestimonial());
  } else if (section === "fanArtGallery") {
    state.content.fanArtGallery.push(emptyFanArt());
  }

  renderEditors();
}

function handleEditorInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
    return;
  }

  const card = target.closest(".editor-card");
  if (!card) {
    return;
  }

  const section = card.getAttribute("data-section");
  const index = Number(card.getAttribute("data-index"));
  const field = target.getAttribute("data-field");

  if (!section || Number.isNaN(index) || !field) {
    return;
  }

  if (section === "testimonials" && field === "highlight" && target instanceof HTMLInputElement) {
    updateHighlight(index, target.checked);
    renderEditors();
  } else {
    const nextValue = normalizeFieldValue(
      section,
      field,
      target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value
    );
    state.content[section][index][field] = nextValue;
  }
}

function handleEditorClick(event) {
  const button = event.target.closest("[data-action]");
  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  const card = button.closest(".editor-card");
  if (!card) {
    return;
  }

  const section = card.getAttribute("data-section");
  const index = Number(card.getAttribute("data-index"));
  const action = button.getAttribute("data-action");
  if (!section || Number.isNaN(index) || !action) {
    return;
  }

  if (action === "remove") {
    state.content[section].splice(index, 1);
  }

  if (action === "move-up") {
    moveItem(section, index, "up");
  }

  if (action === "move-down") {
    moveItem(section, index, "down");
  }

  renderEditors();
}

document.getElementById("reload-content")?.addEventListener("click", () => {
  loadFromUrl().catch((error) => {
    setStatus(error.message);
  });
});

document.getElementById("open-file")?.addEventListener("click", () => {
  openLocalFile().catch((error) => {
    setStatus(error.message);
  });
});

document.getElementById("save-file")?.addEventListener("click", () => {
  saveBackToFile().catch((error) => {
    setStatus(error.message);
  });
});

document.getElementById("download-json")?.addEventListener("click", downloadJson);

document.getElementById("copy-json")?.addEventListener("click", () => {
  copyJson().catch((error) => {
    setStatus(error.message);
  });
});

document.getElementById("add-featured-work")?.addEventListener("click", () => addItem("featuredWorks"));
document.getElementById("add-testimonial")?.addEventListener("click", () => addItem("testimonials"));
document.getElementById("add-fan-art")?.addEventListener("click", () => addItem("fanArtGallery"));

elements.featuredWorks.addEventListener("input", handleEditorInput);
elements.featuredWorks.addEventListener("click", handleEditorClick);
elements.testimonials.addEventListener("input", handleEditorInput);
elements.testimonials.addEventListener("click", handleEditorClick);
elements.fanArt.addEventListener("input", handleEditorInput);
elements.fanArt.addEventListener("click", handleEditorClick);

loadFromUrl().catch((error) => {
  state.content = ensureContentShape({});
  renderEditors();
  setStatus(`${error.message}. You can still open a local content.json file and work from there.`);
});
