import React from "react";
// Import motion from framer-motion
import { motion } from "framer-motion";

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

  // 1. Define variants for the main section content
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger animation between major content blocks
      },
    },
  };

  // 2. Define variants for individual card/block elements
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  // 3. Define variants for the skill tags (fading in)
  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4">
            About Me
          </h2>
          <div className="section-divider"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto text-balance">
            Passionate about creating exceptional digital experiences through
            clean code and thoughtful design.
          </p>
        </motion.div>

        {/* Animated Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" // Animate when the element comes into view
          viewport={{ once: true, amount: 0.2 }} // Only animate once
        >
          {/* About Image */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            style={{ display: "none" }} // Retaining 'hidden' prop behavior via style
          >
            <div className="h-full relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img
                  src="images/about-profile.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-lavender rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Introduction Card */}
          <motion.div className="lg:col-span-2" variants={cardVariants}>
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
          <motion.div className="lg:col-span-2" variants={cardVariants}>
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
            <motion.div
              className="h-full"
              variants={cardVariants} // Apply the same card animation for the whole skills block
            >
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center">
                <i className="fas fa-code mr-3 text-slate"></i>Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Skill Category Cards - Staggered Child Animation for each category */}
                {Object.keys(skills).map((category, index) => (
                  <motion.div
                    key={index}
                    className="rounded-2xl p-8 space-y-4 bg-white card-shadow card-hover border border-gray-100"
                    variants={cardVariants} // Apply card animation to each category
                  >
                    <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                      {category}
                    </h4>
                    <motion.div
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
                        <motion.span
                          className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
                          key={index}
                          variants={skillTagVariants}
                        >
                          {lang}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
