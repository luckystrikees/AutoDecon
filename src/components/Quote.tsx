import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-navy text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #5a7a64 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #c4956a 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <div className="mb-8 flex justify-center">
          <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.2 0-2.326-.559-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.2 0-2.326-.559-2.917-1.179z"/>
          </svg>
        </div>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-400 italic leading-relaxed text-white/80 tracking-tight">
          Autism isn't a processing error. It's a different operating system — one that
          runs on precision, depth, and a kind of honesty the world isn't always ready&nbsp;for.
        </blockquote>
        <div className="mt-8 w-12 h-px bg-sage/40 mx-auto" />
        <p className="mt-5 text-sm text-white/40 font-medium tracking-wide">
          — Autism, Deconstructed
        </p>
      </motion.div>
    </section>
  );
}
