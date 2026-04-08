import { motion } from "framer-motion";
import { useReducedMotion } from "../utils/useReducedMotion";

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

interface RecentEpisodesProps {
  darkMode: boolean;
}

export function RecentEpisodes({ darkMode }: RecentEpisodesProps) {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={reduced ? undefined : { once: true, margin: "-80px" }}
          transition={reduced ? undefined : { duration: 0.6 }}
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
                initial={reduced ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={reduced ? undefined : { once: true, margin: "-40px" }}
                transition={reduced ? undefined : { duration: 0.5, delay: i * 0.1 }}
                className={`group block py-7 border-b first:border-t transition-colors duration-300 -mx-4 px-4 rounded-lg ${
                  darkMode
                    ? "border-white/[0.06] hover:bg-white/[0.015]"
                    : "border-ink/[0.06] hover:bg-ink/[0.015]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                  <div className="flex items-center gap-3 sm:w-28 shrink-0">
                    <span className={`text-xs font-medium tracking-wide uppercase ${darkMode ? "text-dark-text-muted" : "text-ink-muted"}`}>
                      {ep.number}
                    </span>
                    <span className={`text-xs hidden sm:inline ${darkMode ? "text-white/20" : "text-ink/20"}`}>·</span>
                    <span className={`text-xs hidden sm:inline ${darkMode ? "text-dark-text-muted/60" : "text-ink-muted/60"}`}>{ep.duration}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-300 ${
                          darkMode
                            ? "text-dark-text group-hover:text-sage"
                            : "text-ink group-hover:text-sage-dark"
                        }`}>
                          {ep.title}
                        </h3>
                        <p className={`mt-1.5 text-sm leading-relaxed line-clamp-2 ${darkMode ? "text-dark-text-muted/80" : "text-ink-muted/80"}`}>
                          {ep.description}
                        </p>
                      </div>
                      <div className={`shrink-0 mt-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        darkMode
                          ? "border-white/[0.08] group-hover:border-sage/30 group-hover:bg-sage-light"
                          : "border-ink/[0.08] group-hover:border-sage/30 group-hover:bg-sage-light"
                      }`}>
                        <svg
                          className={`w-3.5 h-3.5 transition-all duration-300 translate-x-0 group-hover:translate-x-0.5 ${
                            darkMode ? "text-dark-text-muted group-hover:text-sage" : "text-ink-muted group-hover:text-sage-dark"
                          }`}
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
            initial={reduced ? undefined : { opacity: 0 }}
            whileInView={reduced ? undefined : { opacity: 1 }}
            viewport={reduced ? undefined : { once: true }}
            transition={reduced ? undefined : { duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-6 py-2.5 border text-sm font-medium rounded-full transition-all duration-300 ${
                darkMode
                  ? "border-white/[0.1] hover:border-white/20 text-dark-text-muted hover:text-dark-text"
                  : "border-ink/[0.1] hover:border-ink/20 text-ink-muted hover:text-ink"
              }`}
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
