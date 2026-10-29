// Smooth scrolling link active state handling
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => (l.style.color = "#8b949e"));
      this.style.color = "#58a6ff";
    });
  });
});
