const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.innerHTML = `<i class="fas fa-bars">`;
  } else {
    menu.classList.add("active");
    toggle.innerHTML = `<i class="fas fa-times"></i>`;
  }
}

toggle.addEventListener("click", toggleMenu, false);
