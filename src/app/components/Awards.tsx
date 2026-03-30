const awards = [
  { title: "Soma Capital AI Hackathon Winner — AutoCRISPR", year: "2025", description: "Created CRISPR protocol automation via AI agents. Awarded 1st place." },
  { title: "NASA NJ Space Grant Consortium Research Award", year: "2025", description: "Funded for predictive microbial evolution project under microgravity with NASA Ames." },
  { title: "CornellTech Health In Climate Hackathon Winner — Verdant", year: "2025", description: "Developed app to predict Scope 3 emissions of healthcare products with AI." },
  { title: "HackRU Sustainability Track Winner — REV", year: "2025", description: "Built an EV charging locator system for Rutgers University." },
  { title: "Emerging Leaders Fellow, Physicians for Social Responsibility", year: "2024–2025", description: null },
  { title: "Rutgers IDEA Grant Recipient ($1,500)", year: "2024", description: "Competitive university grant supporting campus diversity projects." },
  { title: "Xerox Award for Innovation & Information Technology", year: "2022", description: "University of Rochester." },
  { title: "PennApps XXII — Best Sustainability Hack, Top 10 Hack", year: "2021", description: null },
  { title: "National Merit Commended Scholar", year: "2020", description: null },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2">
          Awards &amp; Fellowships
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Recognition
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <div key={i} className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-accent)]/30 transition-colors">
              <span className="text-xs text-[var(--color-accent)] font-medium">{award.year}</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">{award.title}</h4>
              {award.description && (
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
