const collabForm = document.querySelector(".collab-form");
const validationNote = document.getElementById("validation-note");
const originPageField = document.getElementById("origin-page");
const loadedAtField = document.getElementById("loaded-at");
const FORM_MIN_SUBMIT_MS = 4000;
const MAX_LINK_COUNT = 5;
const ALLOWED_PROJECT_TYPES = new Set([
  "promotion",
  "product-collaboration",
  "singing-collaboration",
  "voice-acting",
  "thumbnail-art",
  "other"
]);

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function looksGeneric(value) {
  const lowered = value.toLowerCase();
  const blockedPhrases = [
    "asdf",
    "qwerty",
    "test",
    "hello",
    "hi",
    "random",
    "idk",
    "n/a"
  ];

  return blockedPhrases.some((phrase) => lowered === phrase || lowered.includes(`${phrase}${phrase}`));
}

function hasSuspiciousUrlCount(value) {
  const matches = value.match(/https?:\/\//gi);
  return matches ? matches.length > 5 : false;
}

function validateLinksField(field) {
  const value = normalizeWhitespace(field.value);
  if (!value) {
    field.setCustomValidity("");
    return;
  }

  const links = value.split(/\s+/);
  const allValid = links.every((link) => /^https?:\/\/\S+$/i.test(link));
  if (links.length > MAX_LINK_COUNT) {
    field.setCustomValidity(`Please keep reference links to ${MAX_LINK_COUNT} or fewer.`);
    return;
  }
  field.setCustomValidity(
    allValid ? "" : "Reference links must be full URLs starting with http:// or https://"
  );
}

function setValidationMessage(message) {
  if (validationNote) {
    validationNote.textContent = message;
  }
}

function validateSummaryField(field) {
  const value = normalizeWhitespace(field.value);
  if (value.length < 40) {
    field.setCustomValidity("Project summary must be at least 40 characters long.");
    return;
  }

  if (looksGeneric(value)) {
    field.setCustomValidity("Please describe the project with more specific detail.");
    return;
  }

  if (hasSuspiciousUrlCount(value)) {
    field.setCustomValidity("Please keep the summary focused and move links to the reference links field.");
    return;
  }

  field.setCustomValidity("");
}

function validateNameLikeField(field, minLength, message) {
  const value = normalizeWhitespace(field.value);
  if (!value) {
    field.setCustomValidity("");
    return;
  }

  if (value.length < minLength || looksGeneric(value)) {
    field.setCustomValidity(message);
    return;
  }

  field.setCustomValidity("");
}

function validateProjectTypeField(field) {
  if (!field) {
    return;
  }

  const value = normalizeWhitespace(field.value);
  field.setCustomValidity(
    !value || ALLOWED_PROJECT_TYPES.has(value)
      ? ""
      : "Please choose a valid project type from the list."
  );
}

if (collabForm) {
  const formLoadedAt = Date.now();
  const summaryField = collabForm.querySelector('textarea[name="summary"]');
  const linksField = collabForm.querySelector('textarea[name="links"]');
  const projectTypeField = collabForm.querySelector('select[name="project_type"]');
  const nameField = collabForm.querySelector('input[name="name"]');
  const companyField = collabForm.querySelector('input[name="company"]');
  const budgetField = collabForm.querySelector('input[name="budget"]');
  const timelineField = collabForm.querySelector('input[name="timeline"]');
  const submitButton = collabForm.querySelector('button[type="submit"]');
  const honeypotFields = [
    collabForm.querySelector('input[name="_gotcha"]'),
    collabForm.querySelector('input[name="website"]')
  ];

  if (originPageField) {
    originPageField.value = window.location.pathname;
  }

  if (loadedAtField) {
    loadedAtField.value = String(formLoadedAt);
  }

  nameField?.addEventListener("input", () => {
    validateNameLikeField(
      nameField,
      2,
      "Please enter your name or artist name."
    );
    setValidationMessage("");
  });

  companyField?.addEventListener("input", () => {
    validateNameLikeField(
      companyField,
      2,
      "Please enter a real artist, company, or collective name."
    );
    setValidationMessage("");
  });

  projectTypeField?.addEventListener("change", () => {
    validateProjectTypeField(projectTypeField);
    setValidationMessage("");
  });

  budgetField?.addEventListener("input", () => {
    const value = normalizeWhitespace(budgetField.value);
    if (!value) {
      budgetField.setCustomValidity("");
      setValidationMessage("");
      return;
    }
    budgetField.setCustomValidity(
      looksGeneric(value) ? "Please enter a real budget or budget note." : ""
    );
    setValidationMessage("");
  });

  timelineField?.addEventListener("input", () => {
    const value = normalizeWhitespace(timelineField.value);
    if (!value) {
      timelineField.setCustomValidity("");
      setValidationMessage("");
      return;
    }
    timelineField.setCustomValidity(
      looksGeneric(value) ? "Please enter a real timeline or deadline." : ""
    );
    setValidationMessage("");
  });

  summaryField?.addEventListener("input", () => {
    validateSummaryField(summaryField);
    setValidationMessage("");
  });
  linksField?.addEventListener("input", () => {
    validateLinksField(linksField);
    setValidationMessage("");
  });

  collabForm.addEventListener("submit", (event) => {
    if (nameField) {
      validateNameLikeField(nameField, 2, "Please enter your name or artist name.");
    }
    if (companyField) {
      validateNameLikeField(
        companyField,
        2,
        "Please enter a real artist, company, or collective name."
      );
    }
    if (summaryField) {
      validateSummaryField(summaryField);
    }
    if (projectTypeField) {
      validateProjectTypeField(projectTypeField);
    }
    if (linksField) {
      validateLinksField(linksField);
    }

    const filledTrap = honeypotFields.some((field) => field && normalizeWhitespace(field.value));
    if (filledTrap) {
      event.preventDefault();
      setValidationMessage("Submission blocked.");
      return;
    }

    if (Date.now() - formLoadedAt < FORM_MIN_SUBMIT_MS) {
      event.preventDefault();
      setValidationMessage("Please take a moment to complete the form before submitting.");
      return;
    }

    if (!collabForm.checkValidity()) {
      event.preventDefault();
      const firstInvalid = collabForm.querySelector(":invalid");
      setValidationMessage(
        firstInvalid?.validationMessage || "Please fix the highlighted form fields."
      );
      collabForm.reportValidity();
      firstInvalid?.focus();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    setValidationMessage("");
  });
}
