// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const link = document.getElementById("main-nav-list");

button.addEventListener("click",() => {
  link.classList.toggle('toggled');
})

// Thumb Navigation Toggle

const seemoreButton = document.getElementById("thumb-nav-primary");

const thumbLink = getElementById("thumb-nav-secondary");

seemoreButton.addEventListener("click", () => {
thumbLink.classList.toggle("toggled");
})
