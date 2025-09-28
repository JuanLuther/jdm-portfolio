import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-20 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Hero Content  */}
        <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-slate font-medium tracking-wide uppercase text-sm">
                Full Stack Developer
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-dark-teal leading-tight">
                Hi, I'm <span className="gradient-text">Jerick</span>
              </h1>
            </div>

            <p className="text-slate text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance">
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies. Passionate about building innovative
              solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                to="/projects"
                className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                <i className="fas fa-code mr-2"></i>View My Work
              </Link>
              <Link
                to="/contact"
                className="btn-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden card-shadow border-4 border-white">
              <img
                src="images/profile2.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
