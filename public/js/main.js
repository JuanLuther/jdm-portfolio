// Sample Projects Data
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with shopping cart, user authentication, and payment integration.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "images/projects/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "images/projects/task-manager.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    image: "images/projects/portfolio.jpg",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather and forecasts using OpenWeather API.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    image: "images/projects/weather.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A content management system for creating and managing blog posts.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "images/projects/blog.jpg",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with user rooms and private messaging.",
    technologies: ["Socket.io", "Node.js", "Express", "MongoDB"],
    image: "images/projects/chat.jpg",
  },
];

// Function to download and save image
const downloadImage = async (imageUrl, localPath) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to fetch image");

    const blob = await response.blob();
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        const base64data = reader.result;
        localStorage.setItem(localPath, base64data);
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error downloading image:", error);
    return null;
  }
};

// Function to download image to device
const downloadImageToDevice = async (imageUrl, fileName) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to fetch image");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error downloading image:", error);
    alert("Failed to download image. Please try again.");
  }
};

// Function to get image (either from localStorage or download)
const getImage = async (project) => {
  const storedImage = localStorage.getItem(project.image);
  if (storedImage) {
    return storedImage;
  }

  const downloadedImage = await downloadImage(project.image, project.image);
  return downloadedImage || project.image; // Fallback to URL if download fails
};

// Navigation functionality
const initNavigation = () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    hamburger.classList.toggle("active");
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};

// Projects functionality
const loadProjects = () => {
  const projectsGrid = document.querySelector(".projects-grid");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
            <div class="image-container">
                <img src="${project.image}" alt="${
      project.title
    }" loading="lazy">
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies
                  .map((tech) => `<span>${tech}</span>`)
                  .join("")}
            </div>
        `;
    projectsGrid.appendChild(projectCard);
  });
};

// Contact form functionality
const initContactForm = () => {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
};

// Initialize all functionality
const init = () => {
  initNavigation();
  loadProjects();
  initContactForm();
};

// Start the application when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
