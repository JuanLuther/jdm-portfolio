import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../data/FramerMotions.js";
import Button from "../buttons/Button.jsx";
import TechPill from "../pills/TechPill.jsx";

export const ProjectCard = ({ project, index }) => {
  return (
    <div
      key={index}
      className="card shadow-xl h-full border border-base-content/20"
    >
      {/* Project Image */}
      <figure className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 "
        />
      </figure>
      {/* Project Details */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="card-body "
      >
        <motion.h4 variants={itemVariants} className="card-title">
          {project.title}
        </motion.h4>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-3 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="flex  flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <TechPill key={index} text={tech} />
          ))}
        </div>
        {/* Buttons */}
        <div className="card-actions flex flex-col sm:flex-row space-x-3 mt-4 gap-2">
          <Link
            to={project.link}
            className={`btn  btn-primary`}
            target="_blank"
          >
            <i className={`fas fa-desktop mr-2`}></i>
            {"Demo"}
          </Link>
          <Link
            to={project.repository}
            className={`btn  btn-primary btn-outline`}
            target="_blank"
          >
            <i className={"fa-brands fa-github mr-2"}></i>
            {"View Code"}
          </Link>
          {/* <Button
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
            /> */}
        </div>
      </motion.div>
    </div>
  );
};
