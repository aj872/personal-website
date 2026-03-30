const projects = [
  {
    title: "AutoCRISPR",
    description:
      '"Cursor for CRISPR" — Semi-autonomous agents that take natural language and implement a full CRISPR risk assessment, gRNA design, and optimal protocol. 1st place at Soma Capital AI Hackathon.',
    tags: ["TypeScript", "AI Agents", "CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/aj872/auto-crispy",
  },
  {
    title: "Beagle",
    description:
      "AI-powered microbial fitness analysis web app for computational biology research workflows.",
    tags: ["Python", "TypeScript", "AI/ML"],
    liveUrl: null,
    githubUrl: "https://github.com/aj872/beagle-web",
  },
  {
    title: "Oracle CLI",
    description:
      "Command line interface for real-time prediction market data with arbitrage screening across platforms.",
    tags: ["Python", "TypeScript", "CLI"],
    liveUrl: null,
    githubUrl: "https://github.com/aj872/oracle-cli",
  },
  {
    title: "Sisyphus",
    description:
      "Physics-integrated world models for robot RL environments. Upload images, robots learn to organize. Built at Neo 2025 Hackathon.",
    tags: ["Python", "JavaScript", "RL", "Physics Sim"],
    liveUrl: null,
    githubUrl: "https://github.com/ShreshthRajan/sisyphus",
  },
  {
    title: "Rocky",
    description:
      "Discord superconnector that gets to know everyone in your server and makes great intros between members.",
    tags: ["Discord Bot", "AI"],
    liveUrl: "https://www.sundai.club/projects/ec08876c-6122-4308-a21c-e004415b210e",
    githubUrl: "https://github.com/aj872/rocky",
  },
  {
    title: "microPLM",
    description:
      "A zero-dependency protein language model for computational biology applications.",
    tags: ["Python", "ML", "Bioinformatics"],
    liveUrl: null,
    githubUrl: "https://github.com/aj872/microPLM",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2">
          Projects
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Things I&apos;ve built
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:border-[var(--color-accent)]/30 transition-all hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-[var(--color-bg-secondary)] flex items-center justify-center border-b border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)] text-sm">Screenshot</span>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
