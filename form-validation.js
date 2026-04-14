const collabForm = document.querySelector(".collab-form");
const validationNote = document.getElementById("validation-note");

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

function validateLinksField(field) {
  const value = normalizeWhitespace(field.value);
  if (!value) {
    field.setCustomValidity("");
    return;
  }

  const links = value.split(/\s+/);
  const allValid = links.every((link) => /^https?:\/\/\S+$/i.test(link));
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

if (collabForm) {
  const summaryField = collabForm.querySelector('textarea[name="summary"]');
  const linksField = collabForm.querySelector('textarea[name="links"]');
  const nameField = collabForm.querySelector('input[name="name"]');
  const companyField = collabForm.querySelector('input[name="company"]');
  const budgetField = collabForm.querySelector('input[name="budget"]');
  const timelineField = collabForm.querySelector('input[name="timeline"]');

  nameField?.addEventListener("input", () => {
    validateNameLikeField(
      nameField,
      2,
      "Please enter a real full name."
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
      validateNameLikeField(nameField, 2, "Please enter a real full name.");
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
    if (linksField) {
      validateLinksField(linksField);
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

    setValidationMessage("");
  });
}
