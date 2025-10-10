import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../data/FramerMotions";
import { SectionHeaderDark } from "../headers/SectionHeaderDark";

const SectionDark = ({ title, caption, children }) => {
  return (
    <section className="min-h-screen section-padding bg-dark-teal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--lavender) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <main className="container-custom relative z-10">
          <SectionHeaderDark title={title} caption={caption} />
          {children}
        </main>
      </motion.div>
    </section>
  );
};

export default SectionDark;
