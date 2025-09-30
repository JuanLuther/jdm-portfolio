import { ProjectCard2 } from "../common/cards/ProjectCard2.jsx";
import { SectionHeader } from "../common/headers/SectionHeader.jsx";
import projects from "../data/projects.js";
export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Animated Header */}
        <SectionHeader
          title="My Projects"
          caption="Here are some of my recent projects that showcase my skills and passion
        for web development."
        />

        {/* Animated Project Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Project Card Iteration */}
          {projects
            .filter((project) => project.display)
            .map((project, index) => (
              <ProjectCard2 project={project} index={index} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
