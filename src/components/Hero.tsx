import { motion } from "framer-motion";
import { useReducedMotion } from "../utils/useReducedMotion";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const reduced = useReducedMotion();

  // Animation config: disabled when user prefers reduced motion
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" as const },
      };

  const bgAnim = reduced
    ? {}
    : {
        animate: { scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] },
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <header className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-navy text-white">
      {/* Animated background circles — disabled when prefers-reduced-motion */}
      <div className="absolute inset-0 overflow-hidden">
        {reduced ? (
          <>
            <div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]"
              style={{ background: "radial-gradient(circle, #5a7a64 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, #c4956a 0%, transparent 70%)" }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-[0.04]"
              style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
            />
          </>
        ) : (
          <>
            <motion.div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]"
              style={{ background: "radial-gradient(circle, #5a7a64 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, #c4956a 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.15, 1], x: [0, -25, 0], y: [0, 15, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-[0.04]"
              style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-3xl mx-auto text-center">
        {/* Logo mark */}
        <motion.div
          initial={anim.initial}
          animate={anim.animate}
          transition={anim.transition}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto">
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="38" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <circle cx="40" cy="40" r="26" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <circle cx="40" cy="40" r="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="4" fill="#5a7a64" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={reduced ? undefined : { duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Autism,{" "}
          <span className="italic font-normal text-white/80">Deconstructed</span>
        </motion.h1>

        <motion.div
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={reduced ? undefined : { duration: 1, delay: 0.6 }}
          className="mt-6 w-12 h-px bg-sage mx-auto"
        />

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={reduced ? undefined : { duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-white/60 font-light leading-relaxed max-w-lg"
        >
          A podcast exploring autism through biology, energy, and lived experience.
        </motion.p>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={reduced ? undefined : { duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#latest"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
          >
            Listen Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            Explore Topics
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden when prefers-reduced-motion */}
      {!reduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
