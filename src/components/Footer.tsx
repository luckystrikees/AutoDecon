import { motion } from "framer-motion";
import { useReducedMotion } from "../utils/useReducedMotion";

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  const reduced = useReducedMotion();

  return (
    <footer id="about" className={`py-16 px-6 border-t ${darkMode ? "border-white/[0.06]" : "border-ink/[0.06]"}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={reduced ? undefined : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={reduced ? undefined : { once: true }}
          transition={reduced ? undefined : { duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="#5a7a64" strokeWidth="1" opacity="0.4" />
                    <circle cx="16" cy="16" r="8" stroke="#5a7a64" strokeWidth="1" opacity="0.6" />
                    <circle cx="16" cy="16" r="3" fill="#5a7a64" />
                  </svg>
                </div>
                <span className={`font-serif text-lg font-semibold tracking-tight ${darkMode ? "text-dark-text" : "text-ink"}`}>
                  Autism, Deconstructed
                </span>
              </div>
              <p className={`text-xs leading-relaxed max-w-xs ${darkMode ? "text-dark-text-muted" : "text-ink-muted"}`}>
                Exploring autism through biology, energy, and lived experience.
                Honest conversations, real science, actual autistic&nbsp;voices.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className={`text-xs font-medium tracking-[0.12em] uppercase mb-4 ${darkMode ? "text-dark-text-muted" : "text-ink-muted"}`}>
                Explore
              </h4>
              <div className="flex flex-col gap-2.5">
                {["Episodes", "Lived Experience", "The Science", "Everyday Life", "About"].map((link) => (
                  <a key={link} href="#" className={`text-sm transition-colors duration-200 ${
                    darkMode ? "text-dark-text-muted hover:text-dark-text" : "text-ink-muted hover:text-ink"
                  }`}>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Listen */}
            <div>
              <h4 className={`text-xs font-medium tracking-[0.12em] uppercase mb-4 ${darkMode ? "text-dark-text-muted" : "text-ink-muted"}`}>
                Listen
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { name: "Spotify", url: "https://open.spotify.com" },
                  { name: "Apple Podcasts", url: "#" },
                  { name: "RSS Feed", url: "#" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target={platform.url.startsWith("http") ? "_blank" : undefined}
                    rel={platform.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode ? "text-dark-text-muted hover:text-dark-text" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {platform.name}
                    {platform.url.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? "border-white/[0.06]" : "border-ink/[0.06]"}`}>
            <p className={`text-xs ${darkMode ? "text-dark-text-muted/60" : "text-ink-muted/60"}`}>
              © {new Date().getFullYear()} Autism, Deconstructed. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className={`${darkMode ? "text-dark-text-muted/40 hover:text-dark-text-muted" : "text-ink-muted/40 hover:text-ink-muted"} transition-colors`} aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className={`${darkMode ? "text-dark-text-muted/40 hover:text-dark-text-muted" : "text-ink-muted/40 hover:text-ink-muted"} transition-colors`} aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
