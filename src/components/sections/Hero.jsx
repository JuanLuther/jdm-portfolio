import React from "react";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";

// Animation configuration
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Time between each child's animation start
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.5, // Start image animation after the text
    },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-20 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Hero Content - Use motion.div and apply containerVariants */}
        <motion.div
          className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Use motion for staggered items */}
              <motion.p
                className="text-slate font-medium tracking-wide uppercase text-sm"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.p>
              <motion.h1
                className="font-display text-5xl lg:text-6xl font-bold text-dark-teal leading-tight"
                variants={itemVariants}
              >
                Hi, I'm <span className="gradient-text">Jerick</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-slate text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance"
              variants={itemVariants}
            >
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies. Passionate about building innovative
              solutions that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                <i className="fas fa-code mr-2"></i>View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image - Use motion.div and apply imageVariants */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden card-shadow border-4 border-white">
              <img
                src="images/profile2.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements (You could animate these too if you like!) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate rounded-full opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
