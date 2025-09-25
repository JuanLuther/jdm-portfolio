import React from "react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-teal mb-4">
            About Me
          </h2>
          <div className="section-divider"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto text-balance">
            Passionate about creating exceptional digital experiences through
            clean code and thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img
                  src="images/about-profile.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-lavender rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-cream rounded-2xl p-8 card-hover">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-4">
                Introduction
              </h3>
              <p className="text-slate leading-relaxed text-lg">
                I'm a passionate web developer focused on building maintainable,
                scalable applications with vanilla JavaScript, PHP, and clean
                MVC architecture. I love turning complex ideas into simple,
                user-friendly solutions. Currently looking for opportunities to
                grow as a junior developer.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 card-shadow card-hover border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center">
                <i className="fas fa-graduation-cap mr-3 text-slate"></i>
                Education
              </h3>
              <div className="border-l-4 border-lavender pl-6">
                <h4 className="text-xl font-semibold text-dark-teal mb-2">
                  Bachelor of Science in Computer Engineering
                </h4>
                <p className="text-slate font-medium mb-1">
                  Ateneo de Zamboanga University
                </p>
                <p className="text-gray-500 flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>2012 - 2024
                </p>
                <p className="mt-4 text-slate leading-relaxed italic text-sm">
                  Extended timeline was leveraged to gain significant practical
                  experience and focus on independent project development.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 card-shadow card-hover border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-dark-teal mb-6 flex items-center">
                <i className="fas fa-code mr-3 text-slate"></i>Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      JavaScript
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Python
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Java
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      PHP
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      C#
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      HTML5 & CSS3
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Vue.js
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Node.js
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Express.js
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      MySQL
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      PostgreSQL
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Flask
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate text-lg border-b-2 border-lavender pb-2">
                    Tools & Others
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Git & GitHub
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      VS Code
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Docker
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Android Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
