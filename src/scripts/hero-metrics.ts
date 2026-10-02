import { observeCountUp } from "./animate-counter";

const heroCounters = document.querySelectorAll(".hero-counter");

heroCounters.forEach((counter) => {
  if (counter instanceof HTMLElement) observeCountUp(counter);
});
