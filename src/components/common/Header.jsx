import React from "react";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-custom shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Brand  */}
        <a
          href="#home"
          className="text-xl font-display font-semibold text-dark-teal flex items-center space-x-3 hover:text-dark-teal transition"
        >
          <img src="logo.svg" alt="Logo" className="h-10" />
          <p>Jerick Dale A. Mendoza</p>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-slate font-medium items-center py-2">
          <li>
            <a href="#home" className="nav-link hover:text-dark-teal">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link hover:text-dark-teal">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link hover:text-dark-teal">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link hover:text-dark-teal">
              Contact
            </a>
          </li>
          <li>
            <a
              href="documents/Jerick Dale Mendoza-Full Stack Developer.pdf"
              target="_blank"
              className="block btn-primary px-6 py-2 rounded-lg font-semibold text-center border border-slate hover:bg-white hover:text-slate transition-all duration-300"
            >
              <i className="fas fa-file-alt mr-2"></i>Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          id="hamburger"
          className="md:hidden flex flex-col space-y-1 cursor-pointer group"
        >
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
        </div>
      </nav>

      {/* Mobile Nav Links */}
      <ul
        id="mobile-menu"
        className="hidden flex-col space-y-4 px-6 pb-6 text-slate font-medium md:hidden bg-white/95 backdrop-blur-custom"
      >
        <li>
          <a
            href="#home"
            className="block hover:text-dark-teal transition py-2"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block hover:text-dark-teal transition py-2"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block hover:text-dark-teal transition py-2"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block hover:text-dark-teal transition py-2"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/180L8PZz5Eq0fmlWTeSVC-uAKvN8MuBdJ/view?usp=drive_link"
            target="_blank"
            className="block btn-secondary px-6 py-2 rounded-lg font-semibold text-center border border-lavender hover:bg-lavender hover:text-white transition-all duration-300"
          >
            <i className="fas fa-file-alt mr-2"></i>Resume
          </a>
        </li>
      </ul>
    </header>
  );
};
