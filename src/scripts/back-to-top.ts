const backToTop = document.getElementById("back-to-top");

if (backToTop instanceof HTMLButtonElement) {
  const updateVisibility = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 320);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
}
