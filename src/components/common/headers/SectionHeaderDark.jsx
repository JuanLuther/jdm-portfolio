import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../data/FramerMotions.js";

export const SectionHeaderDark = ({ title, caption }) => {
  return (
    <motion.div
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={itemVariants}
        className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="w-60 h-3 bg-lavender mx-auto rounded-full mb-4"
      ></motion.div>
      <motion.p
        variants={itemVariants}
        className="text-cream text-lg max-w-2xl mx-auto text-balance"
      >
        {caption}
      </motion.p>
    </motion.div>
  );
};
