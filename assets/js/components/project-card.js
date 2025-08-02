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
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
  <!-- Image -->
  <div class="w-full h-48 overflow-hidden">
    <img src="${project.image}" alt="${
      project.title
    }" loading="lazy" class="w-full h-full object-cover">
  </div>

  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2 text-gray-900">${project.title}</h3>
    <p class="text-gray-700 mb-4">${project.description}</p>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2">
      ${project.technologies
        .map(
          (tech) =>
            `<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">${tech}</span>`
        )
        .join("")}
    </div>
  </div>
</div>

        `;
    projectsGrid.appendChild(projectCard);
    console.log("Project card created:", project.title);
  });
};
export default loadProjects;
