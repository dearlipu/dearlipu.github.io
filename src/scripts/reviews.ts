import { observeCountUp } from "./animate-counter";

const slider = document.getElementById("reviewSlider");
const dotsContainer = document.getElementById("reviewDots");
const satisfactionCounter = document.getElementById("satisfactionCounter");

if (satisfactionCounter instanceof HTMLElement) {
  observeCountUp(satisfactionCounter);
}

if (slider && dotsContainer) {
  const reviewSlider = slider;
  const reviewDots = dotsContainer;
  const total = reviewSlider.children.length;
  let index = 0;
  let timer: number | undefined;

  function updateSlider() {
    reviewSlider.style.transform = `translateX(-${index * 100}%)`;
    reviewDots
      .querySelectorAll<HTMLButtonElement>(".review-dot")
      .forEach((dot, dotIndex) => {
        dot.classList.toggle("review-dot-active", dotIndex === index);
        dot.setAttribute("aria-pressed", String(dotIndex === index));
      });
  }

  function startAutoRotate() {
    window.clearInterval(timer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = window.setInterval(() => {
      index = (index + 1) % total;
      updateSlider();
    }, 3500);
  }

  reviewDots.replaceChildren();
  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `review-dot ${i === 0 ? "review-dot-active" : ""}`;
    dot.setAttribute("aria-label", `Go to review ${i + 1}`);
    dot.setAttribute("aria-pressed", String(i === index));
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
      startAutoRotate();
    });
    reviewDots.appendChild(dot);
  }

  reviewSlider.addEventListener("mouseenter", () => window.clearInterval(timer));
  reviewSlider.addEventListener("mouseleave", startAutoRotate);
  updateSlider();
  startAutoRotate();
}
