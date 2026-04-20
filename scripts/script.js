const btnOpenMenu = document.getElementById("btn-responsive");
const menu = document.getElementById("header-mobile");
const btnCloseMenu = document.getElementById("cierre-menu");

const navLinks = [
  { id: "inicioBtn", target: "#inicio" },
  { id: "serviciosBtn", target: "#servicios" },
  { id: "nosotrosBtn", target: "#nosotros" },
  { id: "contactoBtn", target: "#contacto" },
];

navLinks.forEach(({ id, target }) => {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    const targetEl = document.querySelector(target);
    menu.classList.remove("open");
    document.body.style.overflow = "";
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
btnOpenMenu.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.style.overflow = "hidden";
});

btnCloseMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.style.overflow = "";
});
