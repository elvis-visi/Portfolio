function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openInNewTab(url) {
  if (event.button === 1) {
    // Check if the middle mouse button (button number 1) is clicked
    window.open(url, "_blank");
  }
}
