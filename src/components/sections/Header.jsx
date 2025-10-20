import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navLinks from "@/components/data/navLinks";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeLight, setIsThemeLight] = useState(true);
  return (
    <header className="bg-base-100 sticky top-0 z-50 container mx-auto">
      <nav className="navbar">
        {/* Brand */}
        <div className="navbar-start">
          <a
            href="/"
            className="text-xl font-display font-semibold text-dark-teal flex items-center space-x-3 hover:text-dark-teal transition"
          >
            <img src="logo.svg" alt="Logo" className="h-10" />
            <p className="text-nowrap select-none ">Jerick Dale A. Mendoza</p>
          </a>
        </div>
        {/* Desktop Nav Links */}
        <div className="navbar-end">
          <ul className="hidden md:flex  gap-2">
            {navLinks.map((link) => (
              <li key={link.href} className="tabs tabs-border" role="tablist">
                <Link
                  to={link.href}
                  role="tab"
                  className={`tab  ${
                    location.pathname === link.href
                      ? "tab-active text-primary border-primary"
                      : ""
                  }`}
                >
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="documents/Jerick Dale Mendoza-Full Stack Developer.pdf"
                target="_blank"
                className="btn btn-primary  "
              >
                <i className="fas fa-file-alt mr-2"></i>Resume
              </Link>
            </li>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                checked={!isThemeLight}
                onChange={() => {
                  setIsThemeLight(!isThemeLight);
                  const body = document.body;
                  body.dataset["theme"] = isThemeLight ? "fantasy" : "sunset";
                }}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </ul>
        </div>
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
