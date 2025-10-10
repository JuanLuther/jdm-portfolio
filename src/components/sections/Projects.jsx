import { ProjectCard2 } from "@/components/common/cards/ProjectCard2.jsx";
import { SectionHeader } from "@/components/common/headers/SectionHeader.jsx";
import projects from "@/components/data/projects.js";
import Section from "@/components/common/containers/Section";
import SectionDark from "../common/containers/SectionDark";
export const Projects = () => {
  return (
    <>
      <Section
        title="My Projects"
        caption="Here are some of my recent projects that showcase my skills and passion
        for web development."
      >
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
      </Section>
    </>
  );
};
