const projects = [
  {
    title: "Eisenhower Task Prioritizer",
    description:
      "A single-page app to organize, prioritize, and manage daily tasks efficiently.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "assets/images/portfolio.jpg",
    link: "https://task-prioritizer-nu.vercel.app/",
  },
  {
    title: "Architecture Website",
    description:
      "A modern architecture website showcasing innovative designs, project portfolios, and industry insights.",
    technologies: [
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      // "MongoDB",
    ],
    image: "assets/images/hero-image.jpg",
    link: "https://ae-architect.vercel.app/",
  },
];

const loadProjects = () => {
  const projectsGrid = document.querySelector(".projects-grid");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // Make the entire card clickable
    projectCard.addEventListener("click", () => {
      window.open(project.link, "_blank");
    });
    projectCard.style.cursor = "pointer";

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
    console.log("Project card created:", project.title);
  });
};
export default loadProjects;
