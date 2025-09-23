const projects = [
  {
    title: "Eisenhower Task Prioritizer",
    description:
      "A single-page app to organize, prioritize, and manage daily tasks efficiently using the Eisenhower Matrix methodology.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "images/portfolio.jpg",
    link: "https://task-prioritizer-nu.vercel.app/",
    display: true,
  },
  // {
  //   title: "Lovey",
  //   description:
  //     "A dedication platform for my beloved girlfriend, showcasing our journey and special moments together.",
  //   technologies: ["HTML5", "CSS3", "JavaScript"],
  //   image: "images/us.jfif",
  //   link: "https://lovey-ten.vercel.app/",
  //   display: false,
  // },
  {
    title: "Architecture Website",
    description:
      "A modern architecture website showcasing innovative designs, project portfolios, and industry insights with responsive design.",
    technologies: [
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    image: "images/hero-image.jpg",
    link: "https://ae-architect.vercel.app/",
    display: true,
  },
];

const loadProjects = () => {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid) {
    console.error('Element with id "projects-grid" not found.');
    return;
  }

  projects.forEach((project) => {
    if (!project.display) return; // Skip projects not marked for display
    const projectCard = document.createElement("div");
    projectCard.className = "project-card group cursor-pointer ";

    // Make the entire card clickable
    projectCard.addEventListener("click", () => {
      window.open(project.link, "_blank");
    });
    projectCard.style.cursor = "pointer";

    projectCard.innerHTML = `
  <div class="bg-white rounded-2xl card-shadow card-hover overflow-hidden border border-gray-100">
    <!-- Image -->
    <div class="relative overflow-hidden">
      <img src="${project.image}" alt="${
      project.title
    }" loading="lazy" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
    <div
                  class="absolute inset-0 bg-dark-teal/0 group-hover:bg-dark-teal/10 transition-all duration-300"
                ></div>
                <div
                  class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <i class="fas fa-external-link-alt text-slate text-sm"></i>
                </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="font-display text-2xl font-semibold mb-3 text-dark-teal group-hover:text-slate transition-colors">${
        project.title
      }</h3>
      <p class="text-slate mb-6 leading-relaxed">${project.description}</p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        ${project.technologies
          .map(
            (tech) =>
              `<span class="skill-tag px-3 py-1 rounded-full text-xs font-medium mb-6">${tech}</span>`
          )
          .join("")}
      </div>
      <div
                  class="flex items-center text-slate font-semibold group-hover:text-dark-teal transition-colors"
                >
                  <span class="mr-2">View Project</span>
                  <i
                    class="fas fa-arrow-right transition-transform group-hover:translate-x-1"
                  ></i>
                </div>
    </div>
  </div>

        `;
    projectsGrid.appendChild(projectCard);
    console.log("Project card created:", project.title);
  });
};
export default loadProjects;
