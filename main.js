const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
  document.getElementById("menu").classList.add("open");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  document.getElementById("menu").classList.remove("open");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
