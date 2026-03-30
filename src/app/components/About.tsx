export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2">
          About Me
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          A little bit about myself
        </h3>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Profile photo placeholder */}
          <div className="w-48 h-48 md:w-full md:h-64 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center mx-auto md:mx-0">
            <span className="text-[var(--color-text-muted)] text-sm">Your Photo</span>
          </div>

          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I&apos;m a senior at <strong className="text-white">Rutgers University</strong> studying
              Cell Biology &amp; Neuroscience and Data Science (Chemistry concentration), graduating May 2026
              with a 3.7 GPA.
            </p>
            <p>
              My research spans computational biology, predictive evolution, and environmental health.
              I currently work with <strong className="text-white">NASA Ames Research Center</strong> studying
              microbial evolution in microgravity, and have led work at Rutgers&apos; QEM Lab that contributed
              to a $1.3M NIH grant. Previously, I applied AI/ML to environmental epidemiology
              at <strong className="text-white">Columbia University&apos;s MAK Lab</strong>.
            </p>
            <p>
              Beyond research, I&apos;ve interned at <strong className="text-white">Commvault Systems</strong> as
              a software engineer, worked on climate and health policy with the <strong className="text-white">American
              Public Health Association</strong> alongside the White House, EPA, and USDA, and done independent
              consulting for Fortune 500 companies on sustainable supply chain management.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Python", "R", "Java", "PyTorch", "TensorFlow", "HuggingFace", "HPC", "ArcGIS", "BioPython", "Bayesian Stats", "Causal Inference", "GWAS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
