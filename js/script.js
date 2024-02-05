// Togel = itu ada dan tidak ada

const navbarNav = document.querySelector(".navbar-nav");
// Ketika di klik menu

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar untuk mengkilangkan nav

const menuikon = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menuikon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
