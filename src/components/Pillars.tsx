import { motion } from "framer-motion";

const pillars = [
  {
    title: ["Lived", "Experience"],
    description:
      "Understanding autism from the inside — sensory life, attention, masking, burnout, and the realities many autistic people navigate every day.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
    color: "sage",
    bgClass: "bg-sage-light",
    textClass: "text-sage-dark",
    borderHover: "hover:border-sage/30",
  },
  {
    title: ["Relevant", "Science"],
    description:
      "What biology and research actually show about autism — energy use, perception, cognition, and the science behind autistic differences.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4L4 24l20 20 20-20Z" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 12L12 24l12 12 12-12Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M24 20L20 24l4 4 4-4Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: "amber",
    bgClass: "bg-amber-light",
    textClass: "text-amber",
    borderHover: "hover:border-amber/30",
  },
  {
    title: ["Everyday", "Life"],
    description:
      "How autistic people interact with the world around them — work, relationships, environments, and the expectations that shape daily reality.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M4 44h40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 4a20 20 0 0 0-20 20v20h40V24a20 20 0 0 0-20-20z" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 14a10 10 0 0 0-10 10v20h20V24a10 10 0 0 0-10-10z" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <circle cx="24" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
    color: "navy",
    bgClass: "bg-navy/[0.06]",
    textClass: "text-navy-light",
    borderHover: "hover:border-navy/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Pillars() {
  return (
    <section
      id="explore"
      className="py-24 sm:py-32 px-6 bg-warm-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-ink/20" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted">
              Three Lenses
            </span>
            <div className="w-8 h-px bg-ink/20" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-600 text-ink tracking-tight leading-tight">
            Understanding autism
            <br />
            <span className="italic font-400 text-ink-light">from every angle</span>
          </h2>
          <p className="mt-5 text-ink-muted text-[15px] max-w-md mx-auto leading-relaxed">
            Each episode weaves together these three perspectives to build a more complete,
            honest picture of the autistic experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title.join("")}
              variants={cardVariants}
              className={`group relative bg-cream rounded-2xl border border-ink/[0.06] ${pillar.borderHover} p-8 transition-all duration-500 hover:shadow-xl hover:shadow-ink/[0.04] hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${pillar.textClass} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-600 text-ink leading-tight tracking-tight mb-4">
                {pillar.title[0]}
                <br />
                <span className="italic font-400 text-ink-light">{pillar.title[1]}</span>
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-ink-muted mb-6">
                {pillar.description}
              </p>

              {/* CTA */}
              <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${pillar.textClass} transition-all duration-300 group-hover:gap-2.5`}>
                Explore
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
