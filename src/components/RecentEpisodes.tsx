import { motion } from "framer-motion";

const episodes = [
  {
    title: "The Physics of Social Fatigue",
    number: "Episode 1",
    description: "Why social interaction costs autistic people more energy — and what physics can teach us about it.",
    duration: "42 min",
  },
  {
    title: "Energetic Precision and Social Cognition",
    number: "Episode 2",
    description: "How the autistic brain processes social information with extraordinary precision — and the energy cost.",
    duration: "38 min",
  },
  {
    title: "The Economics of Masking",
    number: "Episode 3",
    description: "What happens when you spend decades performing neurotypicality — the hidden debt of autistic masking.",
    duration: "45 min",
  },
];

export function RecentEpisodes() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-sage">
              Recent Episodes
            </span>
          </div>

          <div className="space-y-0">
            {episodes.map((ep, i) => (
              <motion.a
                key={ep.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block py-7 border-b border-ink/[0.06] first:border-t transition-colors duration-300 hover:bg-ink/[0.015] -mx-4 px-4 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                  <div className="flex items-center gap-3 sm:w-28 shrink-0">
                    <span className="text-xs font-medium text-ink-muted tracking-wide uppercase">
                      {ep.number}
                    </span>
                    <span className="text-xs text-ink/20 hidden sm:inline">·</span>
                    <span className="text-xs text-ink-muted/60 hidden sm:inline">{ep.duration}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl font-600 text-ink group-hover:text-sage-dark transition-colors duration-300 tracking-tight">
                          {ep.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-ink-muted/80 leading-relaxed line-clamp-2">
                          {ep.description}
                        </p>
                      </div>
                      <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-ink/[0.08] group-hover:border-sage/30 group-hover:bg-sage-light flex items-center justify-center transition-all duration-300">
                        <svg
                          className="w-3.5 h-3.5 text-ink-muted group-hover:text-sage-dark transition-all duration-300 translate-x-0 group-hover:translate-x-0.5"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-ink/[0.1] hover:border-ink/20 text-sm font-medium text-ink-muted hover:text-ink rounded-full transition-all duration-300"
            >
              View All Episodes
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
