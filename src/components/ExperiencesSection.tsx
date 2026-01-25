import { experiences } from "@/data/experiences";

export default function ExperiencesSection() {
  return (
    <section id="experience"  className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
        Professional Experiences
      </h2>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[var(--gh-border-default)]"></div>
        
        <div className="space-y-12">
          {experiences.map((highlight, index) => (
            <div key={highlight.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-[var(--gh-accent-emphasis)] rounded-full border-4 border-[var(--gh-canvas-default)] z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
              </div>
              
              <div className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="text-sm text-[var(--gh-fg-muted)] mb-2">{highlight.period}</div>
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-1 group-hover:text-[var(--gh-accent-fg)] transition-colors">
                    {highlight.role}
                  </h3>
                  <p className="text-[var(--gh-fg-muted)] mb-3 font-medium">{highlight.company}</p>
                  {highlight.achievements && highlight.achievements.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {highlight.achievements.map((achievement, idx) => (
                        <div 
                          key={idx} 
                          className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''} items-start gap-2 bg-[var(--gh-canvas-subtle)] rounded-md px-3 py-2 border border-[var(--gh-border-default)] hover:border-[var(--gh-accent-emphasis)] transition-colors`}
                        >
                          <svg className="w-4 h-4 text-[var(--gh-success-fg)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-[var(--gh-fg-default)] leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
              
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
