"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

export interface ProjectDetails {
  title: string;
  description: string;
  fullDescription: string;
  year: string;
  association: string;
  technologies: string[];
  skills: string[];
  features?: string[];
  screenshots: number;
  screenshotBasePath: string;
  embeddedVideo?: string;
  links?: {
    github?: string;
    download?: string;
    demo?: string;
  };
  note?: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsVideoPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const screenshotArray = Array.from({ length: project.screenshots }, (_, i) => i + 1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[var(--gh-canvas-default)] border-b border-[var(--gh-border-default)]">
          <div>
            <h2 className="text-2xl font-bold text-[var(--gh-fg-default)]">
              {project.title}
            </h2>
            <p className="text-sm text-[var(--gh-fg-muted)]">
              {project.year} • {project.association}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--gh-fg-muted)] hover:text-[var(--gh-fg-default)] hover:bg-[var(--gh-canvas-subtle)] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              About
            </h3>
            <div className="text-[var(--gh-fg-muted)] leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[var(--gh-fg-muted)]"
                  >
                    <span className="text-[var(--gh-accent-fg)]">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-muted)] border border-[var(--gh-border-default)] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-default)] border border-[var(--gh-border-default)] rounded-lg hover:border-[var(--gh-accent-emphasis)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
                {project.links.download && (
                  <a
                    href={project.links.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-accent-emphasis)] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gh-canvas-subtle)] text-[var(--gh-fg-default)] border border-[var(--gh-border-default)] rounded-lg hover:border-[var(--gh-accent-emphasis)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
              {project.note && (
                <p className="mt-3 text-sm text-[var(--gh-fg-muted)] italic">
                  Note: {project.note}
                </p>
              )}
            </div>
          )}

          {/* Embedded Video */}
          {project.embeddedVideo && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Gameplay Video
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-black">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Video thumbnail/preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gh-canvas-subtle)] to-[var(--gh-canvas-default)]" />
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 flex items-center justify-center w-20 h-20 bg-[var(--gh-accent-emphasis)] rounded-full hover:scale-110 transition-transform shadow-lg"
                      aria-label="Play video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <p className="absolute bottom-4 text-[var(--gh-fg-muted)] text-sm">
                      Click to play gameplay video
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={project.embeddedVideo}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="autoplay"
                    title={`${project.title} gameplay video`}
                  />
                )}
              </div>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-3">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshotArray.map((num) => (
                  <div
                    key={num}
                    className="relative aspect-video rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-[var(--gh-canvas-subtle)]"
                  >
                    <Image
                      src={`${project.screenshotBasePath}/${num}.png`}
                      alt={`${project.title} screenshot ${num}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
