import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  containerVariants,
  itemVariants,
  itemRevealVariants,
} from "../FramerMotions.js";

export const ProjectCard2 = ({ project, index }) => {
  return (
    <div className="project-card group cursor-pointer h-full" key={index}>
      <div className="bg-white rounded-2xl card-shadow card-hover overflow-hidden border border-gray-100">
        {/* Project Image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        {/* Project Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="p-6"
        >
          <motion.h3
            variants={itemVariants}
            className="font-display text-2xl font-semibold mb-3 text-dark-teal group-hover:text-slate transition-colors"
          >
            {project.title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
            className="text-slate mb-6 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                variants={itemVariants}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg text-sm font-medium border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-colors cursor-default text-xs"
                key={index}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex space-x-3 mt-4">
            <Link
              to={project.link}
              target="_blank"
              className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-desktop mr-2"></i>Demo
            </Link>
            <Link
              to={project.repository}
              target="_blank"
              className="flex-1 bg-white text-slate-800 py-3 px-4 rounded-lg font-semibold border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="fab fa-github mr-2"></i>View Code
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
