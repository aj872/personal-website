const experiences = [
  {
    role: "Research Intern",
    company: "NASA Ames Research Center — Lee Lab, Space Biosciences",
    period: "Aug 2025 — Present",
    description:
      "Leading a cross-institution collaboration between NASA Ames and Rutgers' QEM Lab to investigate how microgravity shapes microbial evolutionary trajectories. Developing spatially aware consumer resource models to simulate nutrient transport, growth, and evolutionary dynamics under reduced gravity.",
  },
  {
    role: "Researcher",
    company: "QEM Laboratory, Rutgers University",
    period: "Jan 2023 — Present",
    description:
      "Led design and execution of experimental and computational frameworks for assessing mutant fitness effects in diverse environments. Work contributed to a $1.3M NIH Grant (PAR-23-145) awarded to the lab.",
  },
  {
    role: "RAD Collaboratory Fellow",
    company: "Rutgers AQ Lab — AI & Data Science Collaboratory",
    period: "Jun 2025 — Aug 2025",
    description:
      "Selected as 1 of 15 from 300+ applicants for founding cohort. Developed ML pipelines to improve spatio-temporal PM2.5 estimations attributed to wildfire smoke in the United States.",
  },
  {
    role: "Research Assistant",
    company: "MAK Lab, Columbia University",
    period: "Sep 2023 — Mar 2025",
    description:
      "Applied AI/ML methods in geospatial environmental epidemiology to estimate PM2.5 air pollution health effects and urban community severance.",
  },
  {
    role: "Public Health & Policy Intern",
    company: "American Public Health Association — Center for Climate Change & Health Equity",
    period: "Sep 2024 — Present",
    description:
      "Reviewed and wrote climate and health policy with the White House, EPA, and USDA. Researched funding and resilience strategies for the UN Race to Resilience climate mental health initiative.",
  },
  {
    role: "Independent Technology Consultant",
    company: "Fortune 500 Clients (Stryker, McKesson, AstraZeneca, Cardinal Health, etc.)",
    period: "Various",
    description:
      "Provided consulting on sustainable supply chain management platforms for major medical and pharmaceutical companies. Interfaced with C-suite stakeholders on technology strategy and large-scale supply chain operations.",
  },
  {
    role: "Software Engineering Intern",
    company: "Commvault Systems",
    period: "Jan 2022 — Jun 2022",
    description:
      "Developed software in Python using the Datadog API to automate devlog data extraction, improving development speed by 15%. Built an interactive dashboard with JavaScript and HTML for developer insights.",
  },
  {
    role: "Research Assistant",
    company: "Ahmed Lab, Rutgers Institute for Health",
    period: "Dec 2022 — Sep 2023",
    description:
      "Investigated the genomic link between cardiovascular and oral disease via computational methods including GWAS, polygenic risk scoring, random forest regression, and Mendelian Randomization on the Rutgers HPC Cluster.",
  },
  {
    role: "B.S. Cell Biology & Neuroscience, Data Science",
    company: "Rutgers University",
    period: "2022 — 2026",
    description:
      "GPA: 3.7/4.0. Core areas: Computational Biology, Predictive Evolution, AI/ML methods in precision medicine, environmental health.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2">
          Experience
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Where I&apos;ve worked &amp; studied
        </h3>

        <div className="relative pl-8">
          <div className="timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)]" />

                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <span className="text-sm text-[var(--color-text-muted)]">{exp.period}</span>
                  </div>
                  <p className="text-[var(--color-accent)] text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
