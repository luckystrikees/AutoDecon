import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 sm:py-28 px-6 bg-warm-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <div className="w-12 h-12 mx-auto mb-6 text-sage">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <rect x="4" y="10" width="40" height="28" rx="3" />
            <path d="M4 14l20 14 20-14" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-600 text-ink tracking-tight">
          Stay in the loop
        </h2>
        <p className="mt-3 text-sm text-ink-muted leading-relaxed">
          Get notified when new episodes drop — no spam, no fluff,
          just thoughtful content about autism.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-4 rounded-xl bg-sage-light border border-sage/20"
          >
            <p className="text-sm text-sage-dark font-medium">
              ✓ You're in! We'll be in touch.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-full bg-cream border border-ink/[0.08] text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-sage/40 focus:ring-2 focus:ring-sage/10 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-ink hover:bg-ink-light text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-ink/10 shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
