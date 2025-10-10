import React from "react";

const AboutCard = () => {
  return (
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
  );
};

export default AboutCard;
