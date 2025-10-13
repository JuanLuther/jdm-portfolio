import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../data/FramerMotions.js";

export const SectionHeader = ({ title, caption }) => {
  return (
    <motion.div
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="section-divider"
      ></motion.div>
      <p
        variants={itemVariants}
        className="text-slate text-lg max-w-2xl mx-auto text-balance"
      >
        {caption}
      </p>
    </motion.div>
  );
};
