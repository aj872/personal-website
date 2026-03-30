export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <p className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in-up">
          Researcher &middot; Engineer &middot; Builder
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-purple-400">
            Atharv Jayprakash
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Computational biology researcher and software engineer at Rutgers University.
          I work at the intersection of AI/ML, microbial evolution, and environmental health
          &mdash; from NASA Ames to Columbia to hackathon stages.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)] rounded-lg font-medium transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
