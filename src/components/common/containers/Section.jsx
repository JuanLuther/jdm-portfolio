import React from "react";
import { SectionHeader } from "../headers/SectionHeader";
import { motion } from "framer-motion";
import { containerVariants } from "../../data/FramerMotions";

const Section = ({ title, caption, children }) => {
  return (
    <section className="container mx-auto px-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader title={title} caption={caption} />
        <main className="">{children}</main>
      </motion.div>
    </section>
  );
};

export default Section;
