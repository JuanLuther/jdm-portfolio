import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  formVariants,
  leftVariants,
  rightVariants,
  bottomVariants,
} from "../common/FramerMotions.js";

export const About = () => {
  const skills = {
    "Programming Languages": [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "PHP",
      "C#",
    ],
    "Frontend Development": [
      "HTML5 & CSS3",
      "React.js",
      "Vue.js",
      "Tailwind CSS",
    ],
    "Backend Development": [
      "Node.js",
      "Express.js",
      "MySQL",
      "PostgreSQL",
      "Flask",
    ],
    "Tools & Technologies": [
      "Git & GitHub",
      "VS Code",
      "Docker",
      "Android Studio",
    ],
  };

  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="section-divider"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-slate text-lg max-w-2xl mx-auto text-balance"
          >
            Passionate about creating exceptional digital experiences through
            clean code and thoughtful design.
          </motion.p>
        </motion.div>

        {/* Animated Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Introduction Card */}
          <motion.div className="lg:col-span-2" variants={leftVariants}>
            <div className="h-full bg-cream rounded-2xl p-8 card-hover">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-4">
                Introduction
              </h3>
              <p className="text-slate leading-relaxed text-lg">
                I'm a passionate web developer focused on building maintainable,
                scalable applications with vanilla JavaScript, PHP, and clean
                MVC architecture. I love turning complex ideas into simple,
                user-friendly solutions. Currently looking for opportunities to
                grow as a junior developer.
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div className="lg:col-span-2" variants={rightVariants}>
            <div className="h-full bg-white rounded-2xl p-8 card-shadow card-hover border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center">
                <i className="fas fa-graduation-cap mr-3 text-slate"></i>
                Education
              </h3>
              <div className="border-l-4 border-lavender pl-6">
                <h4 className="text-xl font-semibold text-dark-teal mb-2">
                  Bachelor of Science in Computer Engineering
                </h4>
                <p className="text-slate font-medium mb-1">
                  Ateneo de Zamboanga University
                </p>
                <p className="text-gray-500 flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>2012 - 2024
                </p>
                <p className="mt-4 text-slate leading-relaxed italic text-sm">
                  Extended timeline was leveraged to gain significant practical
                  experience and focus on independent project development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section (Container for Skill Categories) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="h-full">
              <motion.h3
                variants={itemVariants}
                className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center"
              >
                <i className="fas fa-code mr-3 text-slate"></i>Technical Skills
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Skill Category Cards - Staggered Child Animation for each category */}
                {Object.keys(skills).map((category, index) => (
                  <motion.div
                    variants={bottomVariants}
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                    className="rounded-2xl p-8 space-y-4 bg-white card-shadow card-hover border border-gray-100"
                  >
                    <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                      {category}
                    </h4>
                    <div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {/* Individual Skill Tags Animation */}
                      {skills[category].map((lang, index) => (
                        <span
                          className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
                          key={index}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
