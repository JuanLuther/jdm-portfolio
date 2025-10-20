import { motion } from "framer-motion";
import {
  itemVariants,
  leftVariants,
  rightVariants,
  itemRevealVariants,
} from "@/components/data/FramerMotions.js";
import skills from "@/components/data/skills.js";
import Section from "@/components/common/containers/Section";
import SectionDark from "@/components/common/containers/SectionDark";
import SkillPill from "../common/pills/SkillPill";
import TechPill from "../common/pills/TechPill";

export const About = () => {
  return (
    <Section title="About Me">
      {/* Animated Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Introduction Card */}
        <motion.div className="lg:col-span-2" variants={leftVariants}>
          <div className="card shadow-xl h-full border border-base-content/20">
            <div className="card-body">
              <h3 className="card-title">Introduction</h3>
              <p className="">
                I'm a passionate web developer focused on building maintainable,
                scalable applications with JavaScript, PHP, Python and clean MVC
                architecture. I love turning complex ideas into simple,
                user-friendly solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div className="lg:col-span-2" variants={rightVariants}>
          <div className="card shadow-xl bg-base-100  h-full  border border-base-content/20">
            <div className="card-body">
              <h3 className="card-title">
                <i className="fas fa-graduation-cap mr-2"></i>
                Education
              </h3>
              <h5>Bachelor of Science in Computer Engineering</h5>
              <p>Ateneo de Zamboanga University</p>
              <p>
                <i className="fas fa-calendar-alt mr-2"></i>2012 - 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section (Container for Skill Categories) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="h-full">
            <motion.h3 variants={itemVariants}>
              <i className="fas fa-code mr-3 text-slate"></i>Technical Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Skill Category Cards - Staggered Child Animation for each category */}
              {Object.keys(skills).map((category, index) => (
                <motion.div
                  variants={itemRevealVariants}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.3 }}
                  key={index}
                  className="card shadow-xl h-full  border border-base-content/20"
                >
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
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
                        <TechPill key={index} text={lang} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
