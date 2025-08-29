// Toggle Menu
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

cancelBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});

// Sticky Navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 50);

  // Show scroll to top button
  document.querySelector(".scroll-button a").style.display =
    window.scrollY > 300 ? "block" : "none";
});
