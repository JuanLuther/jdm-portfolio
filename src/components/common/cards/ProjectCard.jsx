import React from "react";
import { Monitor, Github, Calendar, Users, TrendingUp } from "lucide-react";

export default function ProjectCard() {
  const project = {
    title: "Architecture Website",
    description:
      "A modern architecture website showcasing innovative designs, project portfolios, and industry insights with responsive design.",
    image: "images/portfolio.jpg",
    status: "Completed",
    progress: 100,
    date: "Sep 2025",
    team: 4,
    tags: ["Tailwind CSS", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-lg w-full transform hover:shadow-2xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            {project.description}
          </p>

          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-slate-700">
                  Project Progress
                </span>
              </div>
              <span className="text-sm font-bold text-green-600">
                {project.progress}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-700 shadow-sm"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">
                {project.team} Members
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg text-sm font-medium border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <Monitor className="w-5 h-5" />
              Demo
            </button>
            <button className="flex-1 bg-white text-slate-800 py-3 px-4 rounded-lg font-semibold border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
