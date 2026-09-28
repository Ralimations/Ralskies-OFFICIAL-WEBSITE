const form = document.querySelector("#inquiry-form");
const type = form.elements.project_type;
const status = document.querySelector("#form-status");
const submit = form.querySelector('[type="submit"]');
function updateFields() {
  document.querySelectorAll("[data-inquiry-fields]").forEach((group) => {
    const active = group.dataset.inquiryFields === type.value;
    group.hidden = !active;
    group.disabled = !active;
  });
}
type.addEventListener("change", updateFields);
updateFields();
document.querySelectorAll("[data-inquiry]").forEach((link) => {
  link.addEventListener("click", () => {
    type.value = link.dataset.inquiry;
    updateFields();
  });
});
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (String(data.get("_gotcha") || "").trim()) return;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  submit.disabled = true;
  submit.textContent = "Sending…";
  form.setAttribute("aria-busy", "true");
  status.textContent = "";
  status.classList.remove("is-error");
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    updateFields();
    status.textContent =
      "Thank you! Your inquiry has been sent. Ralskies will reply to the email you provided. An inquiry does not confirm a booking.";
  } catch {
    status.classList.add("is-error");
    status.textContent =
      "We could not confirm delivery. Your message is still here. Please retry or email ralskiesartist@gmail.com directly.";
  } finally {
    window.clearTimeout(timeout);
    submit.disabled = false;
    submit.textContent = "Send inquiry";
    form.removeAttribute("aria-busy");
    status.focus();
  }
});
