interface CountUpOptions {
  duration?: number;
  threshold?: number;
}

export function observeCountUp(
  counter: HTMLElement,
  { duration = 1300, threshold = 0.5 }: CountUpOptions = {},
) {
  const target = Number(counter.dataset.target || 0);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let frameId: number | undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (prefersReducedMotion) {
            counter.textContent = target.toString();
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(target * eased).toString();

            if (progress < 1) {
              frameId = requestAnimationFrame(tick);
            } else {
              counter.textContent = target.toString();
            }
          };

          counter.textContent = "0";
          frameId = requestAnimationFrame(tick);
        } else {
          if (frameId !== undefined) cancelAnimationFrame(frameId);
          frameId = undefined;
          counter.textContent = "0";
        }
      });
    },
    { threshold },
  );

  observer.observe(counter);
  return () => observer.disconnect();
}
