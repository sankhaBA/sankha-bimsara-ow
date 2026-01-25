import { awards } from "@/data/awards";
import { certificates } from "@/data/certificates";

export default function AchievementsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
        Achievements & Certifications
      </h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">
          Honors & Awards
        </h3>
        <div className="space-y-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[var(--gh-attention-fg)] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--gh-fg-default)] mb-1">
                  {award.title}
                </h4>
                <p className="text-sm text-[var(--gh-fg-muted)]">
                  {award.event} • {award.year}
                </p>
                {award.level && (
                  <p className="text-xs text-[var(--gh-fg-muted)] mt-1">
                    {award.level}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[var(--gh-accent-emphasis)] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--gh-fg-default)] mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-[var(--gh-fg-muted)]">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
