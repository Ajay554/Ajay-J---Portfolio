const hambtn = document.querySelector(".ham-menu");

const navbar = document.querySelectorAll(".ham-menu-items")[0];

hambtn.addEventListener("click",() => {
  navbar.classList.toggle("active");
});