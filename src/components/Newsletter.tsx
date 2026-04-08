import { motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "../utils/useReducedMotion";

interface NewsletterProps {
  darkMode: boolean;
}

export function Newsletter({ darkMode }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const reduced = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to real newsletter service (Buttondown, Substack, etc.)
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className={`py-24 sm:py-28 px-6 ${darkMode ? "bg-dark-surface" : "bg-warm-white"}`}>
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 30 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={reduced ? undefined : { once: true, margin: "-80px" }}
        transition={reduced ? undefined : { duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <div className="w-12 h-12 mx-auto mb-6 text-sage">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <rect x="4" y="10" width="40" height="28" rx="3" />
            <path d="M4 14l20 14 20-14" />
          </svg>
        </div>

        <h2 className={`font-serif text-2xl sm:text-3xl font-semibold tracking-tight ${darkMode ? "text-dark-text" : "text-ink"}`}>
          Stay in the loop
        </h2>
        <p className={`mt-3 text-sm leading-relaxed ${darkMode ? "text-dark-text-muted" : "text-ink-muted"}`}>
          Get notified when new episodes drop — no spam, no fluff,
          just thoughtful content about autism.
        </p>

        {submitted ? (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.95 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            className="mt-8 p-4 rounded-xl bg-sage-light border border-sage/20"
          >
            <p className="text-sm text-sage-dark font-medium">
              ✓ You&apos;re in! We&apos;ll be in touch.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
              className={`flex-1 px-4 py-3 rounded-full text-sm transition-all duration-300 ${
                darkMode
                  ? "bg-dark-bg border-white/[0.08] text-dark-text placeholder:text-dark-text-muted/50 focus:border-sage/40 focus:ring-2 focus:ring-sage/10"
                  : "bg-cream border-ink/[0.08] text-ink placeholder:text-ink-muted/50 focus:border-sage/40 focus:ring-2 focus:ring-sage/10"
              } border focus:outline-none`}
            />
            <button
              type="submit"
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 shrink-0 ${
                darkMode
                  ? "bg-dark-text text-dark-bg hover:bg-dark-text/90 hover:shadow-lg hover:shadow-dark-text/10"
                  : "bg-ink hover:bg-ink-light text-white hover:shadow-lg hover:shadow-ink/10"
              }`}
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
