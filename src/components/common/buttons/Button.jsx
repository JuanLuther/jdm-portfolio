import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  icon,
  href,
  type,
  size,
  target,
  isDisabled = false,
}) => {
  const disabledClass = isDisabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";
  const className = `btn-${type} ${
    size == "small" ? "px-6 py-2" : "px-8 py-3"
  } rounded-lg font-semibold inline-flex items-center justify-center ${disabledClass} w-full text-nowrap`;
  return (
    <Link target={target} to={href} className={`btn btn-lg btn-${type} btn-sm`}>
      <i className={`${icon} mr-2`}></i>
      {text}
    </Link>
  );
};

export default Button;
