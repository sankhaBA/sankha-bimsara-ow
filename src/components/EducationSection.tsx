import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div>
        <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
          Education
        </h2>
        
        <div className="space-y-6 mb-8">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors"
            >
              <div className="text-sm text-[var(--gh-fg-muted)] mb-2">{edu.period}</div>
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                {edu.degree}
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-3">{edu.institution}, {edu.location}</p>
              <p className="text-sm text-[var(--gh-fg-muted)]">
                {edu.gpa && `CGPA: ${edu.gpa}`}
                {edu.gpa && edu.achievements && edu.achievements.length > 0 && " • "}
                {edu.achievements && edu.achievements.join(" • ")}
                {edu.focus && `${edu.focus}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
