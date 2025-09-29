import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../common/FramerMotions.js";
import { ProjectCard2 } from "../common/cards/ProjectCard2.jsx";
import { SectionHeader } from "../common/headers/SectionHeader.jsx";
export const Projects = () => {
  const projects = [
    {
      title: "Eisenhower Task Prioritizer",
      description:
        "A single-page app to organize, prioritize, and manage daily tasks efficiently using the Eisenhower Matrix methodology.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "images/task-prioritizer.jpg",
      link: "https://task-prioritizer-nu.vercel.app/",
      repository: "https://github.com/JuanLuther/task-prioritizer",
      display: true,
    },
    {
      title: "Lovey",
      description:
        "A dedication platform for my beloved girlfriend, showcasing our journey and special moments together.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "images/us.jfif",
      link: "https://lovey-ten.vercel.app/",
      repository: "https://github.com/JuanLuther/lovey",
      display: false,
    },
    {
      title: "Architecture Website",
      description:
        "A modern architecture website showcasing innovative designs, project portfolios, and industry insights with responsive design.",
      technologies: [
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
      ],
      image: "images/ae-architect.jpg",
      link: "https://ae-architect.vercel.app/",
      repository: "https://github.com/JuanLuther/ae-architect",
      display: true,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Animated Header */}
        <SectionHeader
          title="My Projects"
          caption="Here are some of my recent projects that showcase my skills and passion
        for web development."
        />

        {/* Animated Project Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Project Card Iteration */}
          {projects
            .filter((project) => project.display)
            .map((project, index) => (
              <ProjectCard2 project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
