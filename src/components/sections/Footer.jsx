import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate text-cream text-center border-t border-dark-teal/20">
      <div className="container-custom">
        <p className="mb-2 font-medium">
          &copy; 2024 Jerick Dale A. Mendoza. All rights reserved.
        </p>
        <p hidden className="text-sm text-cream/70">
          Built with ❤️ using modern web technologies
        </p>
      </div>
    </footer>
  );
};
