import React from "react";

const SkillPill = ({ text }) => {
  return (
    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
      {text}
    </span>
  );
};

export default SkillPill;
