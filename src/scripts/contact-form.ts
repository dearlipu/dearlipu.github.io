const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton =
  contactForm?.querySelector<HTMLButtonElement>('button[type="submit"]');
const planField = document.getElementById("selectedPlan") as HTMLInputElement | null;
const selectedPlanWrapper = document.getElementById("selectedPlanWrapper");
const timelineBudgetGroup = document.getElementById("timelineBudgetGroup");
const timelineField = document.getElementById("timeline") as HTMLSelectElement | null;
const budgetField = document.getElementById("budget") as HTMLSelectElement | null;

function setPlanSelectionState(hasPlan: boolean) {
  selectedPlanWrapper?.classList.toggle("hidden", !hasPlan);
  timelineBudgetGroup?.classList.toggle("hidden", hasPlan);
}

function showFormStatus(message: string, type: "success" | "error") {
  if (!formStatus) return;

  formStatus.textContent = message;
  formStatus.className = `mt-4 rounded-md border px-3 py-2 text-sm ${
    type === "success"
      ? "border-green-200 bg-green-50 text-green-700"
      : "border-red-200 bg-red-50 text-red-700"
  }`;
}

function hideFormStatus() {
  formStatus?.classList.add("hidden");
}

setPlanSelectionState(false);

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!(event.currentTarget instanceof HTMLFormElement)) return;

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const originalText = submitButton?.textContent || "Submit Project Brief";
  hideFormStatus();

  if (submitButton) {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      showFormStatus(
        data.message || "Something went wrong. Please try again.",
        "error",
      );
      return;
    }

    showFormStatus("Thanks! Your inquiry has been sent. I’ll reply soon.", "success");
    form.reset();
    if (planField) planField.value = "";
    setPlanSelectionState(false);
  } catch {
    showFormStatus(
      "Something went wrong. Please try again or use WhatsApp.",
      "error",
    );
  } finally {
    if (submitButton) {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }
});

window.addEventListener("pricing-plan-selected", (event) => {
  const payload =
    (event as CustomEvent<{ plan?: string; mode?: string }>).detail || {};
  const plan = String(payload.plan || "").trim();
  const mode = String(payload.mode || "project").trim();

  if (!plan || !contactForm) return;

  const modeLabel = mode === "monthly" ? "Monthly Retainer" : "Per Project";
  const budgetPrefill =
    plan === "Quick Start"
      ? "₹1k–₹3k (Basic)"
      : plan === "Growth"
        ? "₹3k–₹10k (Standard)"
        : "₹10k–₹25k (Advanced)";
  const timelinePrefill =
    mode === "monthly" ? "Flexible / No deadline" : "Standard (4–7 days)";

  if (planField) planField.value = `${plan} (${modeLabel})`;
  if (timelineField && !timelineField.value) {
    timelineField.value = timelinePrefill;
  }
  if (budgetField && !budgetField.value) budgetField.value = budgetPrefill;
  setPlanSelectionState(true);

  contactForm.classList.remove("contact-card-plan-selected");
  window.requestAnimationFrame(() => {
    contactForm.classList.add("contact-card-plan-selected");
  });
});
