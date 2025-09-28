import React from "react";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../common/LoadingScreen";
// Import motion from framer-motion
import { motion } from "framer-motion";

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

  // 1. Define variants for the project grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for each project card
      },
    },
  };

  // 2. Define variants for individual project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4">
            My Projects
          </h2>
          <div className="section-divider"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto text-balance">
            Here are some of my recent projects that showcase my skills and
            passion for web development.
          </p>
        </motion.div>

        {/* Animated Project Grid */}
        <motion.div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when the grid comes into view
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Project Card Iteration */}
          {projects
            .filter((project) => project.display)
            .map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group cursor-pointer h-full"
                key={index}
                variants={cardVariants} // Apply animation to each card
              >
                <div className="bg-white rounded-2xl card-shadow card-hover overflow-hidden border border-gray-100">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
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
