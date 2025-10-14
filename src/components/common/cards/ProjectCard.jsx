import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../data/FramerMotions.js";
import Button from "../buttons/Button.jsx";

export const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card group cursor-pointer h-full" key={index}>
      <div className="bg-white rounded-2xl card-shadow card-hover overflow-hidden border border-gray-100">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 "
          />
        </div>
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
          <div className="flex  flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                variants={itemVariants}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg font-medium border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-colors cursor-default text-xs"
                key={index}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-x-3 mt-4 gap-2">
            <Button
              text={"Demo"}
              type={"primary"}
              target="_blank"
              icon={"fas fa-desktop"}
              size={"small"}
              href={project.link}
            />
            <Button
              isDisabled={!project.repository}
              type={"secondary"}
              text={"View Code"}
              target="_blank"
              icon={"fab fa-github"}
              size={"small"}
              href={project.repository}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
