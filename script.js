const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
    sidebar.classList.remove("-translate-x-full");

    overlay.classList.remove("opacity-0", "invisible");
}

function closeMenu() {
    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("opacity-0", "invisible");
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
