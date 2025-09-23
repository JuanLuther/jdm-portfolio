import loadProjects from "./public/js/project-card.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  loadProjects();
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        mobileMenu.classList.add("hidden");
      }
    });
  });

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });

  // Form submission feedback
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("contact-feedback");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    button.disabled = true;

    // Simulate sending (replace with real API if needed)
    setTimeout(() => {
      feedback.textContent =
        "Thank you for reaching out! I'll get back to you soon.";
      button.innerHTML = '<i class="fas fa-paper-plane"></i>Send Message';
      button.disabled = false;
      form.reset();
    }, 1800);
  });
});
