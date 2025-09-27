import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animation configurations
// Parent container for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Item animation: Fade up from bottom
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Card animation: Slide in from left/right
const cardSlide = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
});

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

  // Ref for the main content block
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });

  // Ref for the skill grid block
  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef, { once: true, amount: 0.1 });

  return (
    <section id="about" className="section-padding bg-white">
      {/* SECTION HEADER */}
      <motion.div
        className="container-custom"
        ref={contentRef}
        variants={containerVariants}
        initial="hidden"
        animate={isContentInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="section-divider"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-slate text-lg max-w-2xl mx-auto text-balance"
            variants={itemVariants}
          >
            Passionate about creating exceptional digital experiences through
            clean code and thoughtful design.
          </motion.p>
        </div>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Image (Hidden - Keeping original structure for layout) */}
          <div hidden className="lg:col-span-2">
            {/* Keeping the image structure here in case you want to unhide it later */}
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
          </div>
          {/* Introduction Card (Slides in from Left) */}
          <motion.div className="lg:col-span-2" variants={cardSlide("left")}>
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
          {/* Education Card (Slides in from Right) */}
          <motion.div className="lg:col-span-2" variants={cardSlide("right")}>
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

          {/* Skills Grid (Bounce Fade-In) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="h-full">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center">
                <i className="fas fa-code mr-3 text-slate"></i>Technical Skills
              </h3>
              <motion.div
                ref={skillRef}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isSkillInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              >
                {Object.keys(skills).map((category, index) => (
                  // Individual skill categories also use an item variant
                  <motion.div
                    key={index}
                    className="rounded-2xl p-8 space-y-4  bg-white card-shadow card-hover border border-gray-100"
                    variants={itemVariants} // Use itemVariants for a subtle fade-up within the skills grid
                  >
                    <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
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
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
