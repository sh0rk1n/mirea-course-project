document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-btn");
  const menu = document.querySelector(".nav-menu");

  const backdrop = document.createElement("div");
  backdrop.classList.add("menu-backdrop");
  document.body.appendChild(backdrop);

  const toggleMenu = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  };

  burger.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", toggleMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      toggleMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && menu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
