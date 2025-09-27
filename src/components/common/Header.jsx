import React, { useEffect, useState } from "react";

export const Header = () => {
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const anchors = document.querySelectorAll('a[href^="#"]');

    // Define the handler function here (to maintain a stable reference)
    const scrollHandler = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        mobileMenu.classList.add("hidden");
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // 1. ATTACH the listener using the stable reference
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", scrollHandler);
    });

    return () => {
      // 2. DETACH the listener using the SAME stable reference
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", scrollHandler);
      });
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link hover:text-dark-teal">
                {link.name}
              </a>
            </li>
          ))}
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
          <span className="block w-6 h-0.5 bg-slate transition-all duration-300 group-hover:bg-dark-teal"></span>
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
            <a
              href={link.href}
              className="block hover:text-dark-teal transition py-2"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="documents/Jerick Dale Mendoza-Full Stack Developer.pdf"
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
