import React from "react";

const SkillPill = ({ text }) => {
  return (
    <p className="px-3 py-1 rounded-full text-sm font-medium border-secondary border text-secondary">
      {text}
    </p>
  );
};

export default SkillPill;
