import React, { useRef } from "react";
// 1. Import motion and useInView
import { motion, useInView } from "framer-motion";

// Animation configuration for the main grid container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each project card animation
    },
  },
};

// Animation configuration for individual project cards (fade up)
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Animation configuration for the section header elements (staggered fade up)
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
};

export const Projects = () => {
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
    {
      title: "Lovey",
      description:
        "A dedication platform for my beloved girlfriend, showcasing our journey and special moments together.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "images/us.jfif",
      link: "https://lovey-ten.vercel.app/",
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
      image: "images/hero-image.jpg",
      link: "https://ae-architect.vercel.app/",
      display: true,
    },
  ];

  // Ref for the main project grid
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  // New Ref for the section header
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* SECTION HEADER - Now animated */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={containerVariants} // Reusing containerVariants for header children stagger
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4"
            variants={headerVariants}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="section-divider"
            variants={headerVariants}
          ></motion.div>
          <motion.p
            className="text-slate text-lg max-w-2xl mx-auto text-balance"
            variants={headerVariants}
          >
            Here are some of my recent projects that showcase my skills and
            passion for web development.
          </motion.p>
        </motion.div>

        {/* PROJECTS GRID - Apply container animation */}
        <motion.div
          id="projects-grid"
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {/* Project Card Example */}
          {projects
            .filter((project) => project.display)
            .map((project, index) => (
              // Apply item animation to each card
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group cursor-pointer h-full"
                key={index}
                variants={itemVariants}
              >
                <div className="bg-white rounded-2xl card-shadow card-hover overflow-hidden border border-gray-100">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark-teal/0 group-hover:bg-dark-teal/10 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <i className="fas fa-external-link-alt text-slate text-sm"></i>
                    </div>
                  </div>
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold mb-3 text-dark-teal group-hover:text-slate transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          className="skill-tag px-3 py-1 rounded-full text-xs font-medium mb-6"
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
