document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = 1; // Keep it visible
    section.style.transition = "opacity 1s ease-in-out";
  });
});
