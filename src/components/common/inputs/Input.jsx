import React from "react";

const Input = ({ id, text, placeholder, type }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm font-medium text-cream block">
        {text}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
        />
      ) : (
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
        />
      )}
    </>
  );
};

export default Input;
