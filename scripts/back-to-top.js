document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function getShowAfterPx() {
    const width = window.innerWidth;

    if (width <= 768) {
      return 3500;
    }
    if (width <= 1024) {
      return 2500;
    }
    if (width <= 1920) {
      return 2250;
    }
    return 2200;
  }

  let showAfterPx = getShowAfterPx();

  window.addEventListener("resize", () => {
    showAfterPx = getShowAfterPx();
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > showAfterPx) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  if (window.scrollY > showAfterPx) {
    btn.classList.add("visible");
  }
});
