import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="bg-white/95 backdrop-blur-custom shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Brand */}
        <a
          href="/"
          className="text-xl font-display font-semibold text-dark-teal flex items-center space-x-3 hover:text-dark-teal transition"
        >
          <img src="logo.svg" alt="Logo" className="h-10" />
          <p>Jerick Dale A. Mendoza</p>
        </a>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-slate font-medium items-center py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav-link hover:text-dark-teal ${
                  location.pathname === link.href ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="documents/Jerick Dale Mendoza-Full Stack Developer.pdf"
              target="_blank"
              className="block btn-primary px-6 py-2 rounded-lg font-semibold text-center border border-slate hover:bg-white hover:text-slate transition-all duration-300"
            >
              <i className="fas fa-file-alt mr-2"></i>Resume
            </Link>
          </li>
        </ul>
        {/* Hamburger Button */}
        <div
          id="hamburger"
          className="md:hidden cursor-pointer group"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <span
            className={`block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal 
      ${isMobileMenuOpen ? "rotate-45 translate-y-[5.7px]" : ""} 
    `}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-slate transition-all duration-300 my-[4px] group-hover:bg-dark-teal 
      ${isMobileMenuOpen ? "opacity-0" : ""} 
    `}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal 
      ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5.7px]" : ""} 
    `}
          ></span>{" "}
        </div>
      </nav>

      {/* Mobile Nav Links */}
      <ul
        id="mobile-menu"
        className={`flex-col space-y-4 px-6 pb-6 text-slate font-medium md:hidden bg-white/95 backdrop-blur-custom ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              // onClick={() => setIsMobileMenuOpen(false)}
              className={
                "nav-link block hover:text-dark-teal transition py-2 w-fit" +
                (location.pathname === link.href ? " active" : "")
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="documents/Jerick Dale Mendoza-Full Stack Developer.pdf"
            // onClick={() => setIsMobileMenuOpen(false)}
            target="_blank"
            className="w-fit block btn-secondary px-6 py-2 rounded-lg font-semibold text-center border border-lavender hover:bg-lavender hover:text-white transition-all duration-300"
          >
            <i className="fas fa-file-alt mr-2"></i>Resume
          </Link>
        </li>
      </ul>
    </header>
  );
};
