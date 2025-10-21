import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "@/components/data/FramerMotions.js";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        {/* Hero Image - Apply image animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              effect="blur"
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden card-shadow border-4 bg-clip-border border-transparent bg-gradient-to-r from-primary to-secondary "
            >
              <img
                src="images/profile2.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative elements - They will inherit the image animation */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Hero Content - Apply container animation */}
        <motion.div
          className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Animated text elements */}
              <motion.h6 variants={itemVariants}>
                Full Stack Developer
              </motion.h6>
              <h1>
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
                  Jerick
                </span>
              </h1>
            </div>

            <motion.p variants={itemVariants}>
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies.
            </motion.p>

            {/* Animated buttons container */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <Link to={"/projects"} className={`btn btn-lg btn-primary`}>
                <i className={`fas fa-code mr-2`}></i>
                {"View My Work"}
              </Link>
              <Link
                to={"/contact"}
                className={`btn btn-lg btn-primary btn-outline`}
              >
                <i className={`fas fa-envelope mr-2`}></i>
                {"Get in Touch"}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
