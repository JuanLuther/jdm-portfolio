import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/data/FramerMotions";

const TechPill = ({ text }) => {
  return (
    <motion.span
      variants={itemVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
      //   className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg font-medium border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-colors cursor-default text-xs"
      className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg font-medium border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-colors cursor-default text-xs"
    >
      {text}
    </motion.span>
  );
};

export default TechPill;
