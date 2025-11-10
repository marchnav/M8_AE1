// M8_AE1 — JS mínimo para menú móvil y año del footer
document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Menú móvil
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (btn && menu) {
    const toggleMenu = () => {
      const isOpen = menu.classList.toggle("show");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    btn.addEventListener("click", toggleMenu);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Cierra el menú al hacer click en un enlace
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      })
    );

    // Cierra al hacer click fuera
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
