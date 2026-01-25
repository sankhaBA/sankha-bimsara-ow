"use client";

import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--gh-border-default)]">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-[var(--gh-fg-muted)] max-w-3xl">
          Showcasing award-winning solutions and innovative applications across IoT, SaaS, and full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors"
          >
            {/* Title and Winner Badge Row */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-2">
                {/* Status Icon */}
                {project.status === "Completed" && (
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {project.status === "In Progress" && (
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)]">
                  {project.title}
                </h3>
              </div>
              {project.isWinner && project.winnerBadge && (
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              {project.category && (
                <span className="inline-block px-2 py-1 text-xs bg-[var(--gh-accent-emphasis)] text-white rounded mb-3">
                  {project.category}
                </span>
              )}
              {project.affiliation && (
                <p className="text-sm text-[var(--gh-fg-muted)] mb-2">
                  <span className="font-medium text-[var(--gh-fg-default)]">Affiliation:</span> {project.affiliation}
                </p>
              )}
              {project.isWinner && project.winnerBadge && (
                <p className="text-sm text-[var(--gh-accent-fg)] font-medium mb-2">
                  🏆 {project.winnerBadge}
                </p>
              )}
            </div>

            <p className="text-[var(--gh-fg-muted)] mb-4 text-sm line-clamp-3">
              {project.description}
            </p>

            {project.achievements && project.achievements.length > 0 && (
              <ul className="space-y-1 text-sm text-[var(--gh-fg-muted)] mb-4">
                {project.achievements.slice(0, 2).map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--gh-accent-fg)] mt-0.5">•</span>
                    <span className="line-clamp-2">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
