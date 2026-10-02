import { featureData } from "../data/pricing";

let currentMode: "project" | "monthly" = "project";

const perBtn = document.getElementById("perProjectBtn") as HTMLButtonElement | null;
const monthlyBtn = document.getElementById("monthlyBtn") as HTMLButtonElement | null;
const slider = document.getElementById("toggleSlider");
const prices = document.querySelectorAll<HTMLElement>(".price");
const features = document.querySelectorAll<HTMLElement>(".features");
const buttons = document.querySelectorAll<HTMLButtonElement>(".email-btn");

function setMode(mode: "project" | "monthly") {
  currentMode = mode;

  prices.forEach((price, index) => {
    price.style.opacity = "0.2";
    window.setTimeout(() => {
      price.textContent =
        mode === "monthly"
          ? (price.dataset.monthly ?? "")
          : (price.dataset.project ?? "");
      price.style.opacity = "1";
    }, 120);

    const list = featureData[mode][index];
    const featureList = features[index];
    if (!featureList || !list) return;

    featureList.innerHTML = list
      .map(
        (item) => `
          <li class="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="mt-[0.15em] block h-5 w-5 shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
            <span>${item}</span>
          </li>
        `,
      )
      .join("");
  });

  const isMonthly = mode === "monthly";
  if (!slider || !perBtn || !monthlyBtn) return;

  slider.style.transform = isMonthly ? "translateX(100%)" : "translateX(0)";
  perBtn.classList.toggle("toggle-btn-active", !isMonthly);
  monthlyBtn.classList.toggle("toggle-btn-active", isMonthly);
  perBtn.setAttribute("aria-pressed", String(!isMonthly));
  monthlyBtn.setAttribute("aria-pressed", String(isMonthly));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    window.dispatchEvent(
      new CustomEvent("pricing-plan-selected", {
        detail: { plan: button.dataset.plan || "", mode: currentMode },
      }),
    );
    contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

perBtn?.addEventListener("click", () => setMode("project"));
monthlyBtn?.addEventListener("click", () => setMode("monthly"));
setMode("project");
