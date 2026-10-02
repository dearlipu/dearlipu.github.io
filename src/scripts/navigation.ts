const header = document.getElementById("header");
const trigger = document.getElementById("menuBtn");
const triggerText = document.getElementById("menuBtnText");
const icon = document.getElementById("menuIcon");
const panel = document.getElementById("menuPanel");
const backdrop = document.getElementById("menuBackdrop");

if (
  header instanceof HTMLElement &&
  trigger instanceof HTMLButtonElement &&
  triggerText instanceof HTMLElement &&
  icon instanceof SVGElement &&
  panel instanceof HTMLElement &&
  backdrop instanceof HTMLElement
) {
  let isOpen = false;

  const setOpen = (nextOpen: boolean, restoreFocus = false) => {
    isOpen = nextOpen;
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    triggerText.textContent = isOpen ? "Close" : "Menu";
    icon.classList.toggle("is-open", isOpen);
    panel.setAttribute("aria-hidden", String(!isOpen));
    panel.toggleAttribute("inert", !isOpen);
    panel.classList.toggle("is-open", isOpen);
    backdrop.classList.toggle("is-open", isOpen);
    header.classList.toggle("menu-is-open", isOpen);

    if (isOpen) {
      panel.querySelector("a")?.focus();
    } else if (restoreFocus) {
      trigger.focus();
    }
  };

  trigger.addEventListener("click", () => setOpen(!isOpen));
  backdrop.addEventListener("click", () => setOpen(false));

  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      isOpen &&
      event.target instanceof Node &&
      !panel.contains(event.target) &&
      !trigger.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false, true);
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = Array.from(panel.querySelectorAll<HTMLAnchorElement>("a[href]"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      if (isOpen && window.scrollY > 24) setOpen(false);
    },
    { passive: true },
  );
}
