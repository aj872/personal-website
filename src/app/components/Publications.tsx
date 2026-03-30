const publications = [
  {
    authors: 'Duenas, S., McGee, Z., Mhatre, I., ..., Jayprakash, A., et al.',
    title: 'Computational approaches to investigate the relationship between periodontitis and cardiovascular diseases for precision medicine',
    journal: 'Hum Genomics 18, 116 (2024)',
    url: 'https://doi.org/10.1186/s40246-024-00685-7',
  },
  {
    authors: 'Kumar, V., Wu, X., Jayprakash, A., Kioumourtzoglou, M A.',
    title: 'The impact of differential exposure measurement error on the PM₂.₅ to preterm birth association: A simulation study',
    journal: 'Manuscript in preparation, Columbia University, 2025',
    url: null,
  },
];

const presentations = [
  'Jayprakash, A., Benavides, J., Kioumourtzoglou, M A. "Estimating Community Severance in Four Major US Cities." Poster at ISES-ISEE 2025, Atlanta GA.',
  'Jayprakash, A., Sant, D., Manhart, M. "Climate Change Stressors Reduce Fitness Cost of Antibiotic Resilience." Oral presentation at Rutgers Microbiome Retreat, Apr 2025.',
  'Jayprakash, A., Sant, D., Manhart, M. "Does Climate Change Promote Antibiotic Resilience?" CABM STARS Seminar, Aug 2024. First undergraduate speaker selected in series.',
  'Sant, D G., Grudny, T., Jayprakash, A., et al. "The Effect of Cross-Feeding Interactions on Mutant Fitness in E. coli." ASM Microbe 2024, Atlanta GA.',
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2">
          Publications &amp; Presentations
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Research output
        </h3>

        {/* Papers */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold text-white mb-6">Papers</h4>
          <div className="space-y-6">
            {publications.map((pub, i) => (
              <div key={i} className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-6">
                <p className="text-sm text-[var(--color-text-muted)] mb-1">{pub.authors}</p>
                <p className="text-white font-medium mb-1">
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] italic">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Presentations */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Selected Presentations</h4>
          <ul className="space-y-4">
            {presentations.map((pres, i) => (
              <li key={i} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4 border-l-2 border-[var(--color-accent)]/30">
                {pres}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
