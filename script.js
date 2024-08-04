let navItems = document.getElementById("nav-items");
let menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  navItems.classList.toggle("nav-visible");
});
