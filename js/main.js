const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    // add menu icon
    toggle.innerHTML = `<i class="fas fa-bars">`;
  } else {
    menu.classList.add("active");

    // add x (close menu) icon
    toggle.innerHTML = `<i class="fas fa-times"></i>`;
  }
}

toggle.addEventListener("click", toggleMenu, false);
