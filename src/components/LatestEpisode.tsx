import { motion } from "framer-motion";

export function LatestEpisode() {
  return (
    <section id="latest" className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-sage">
              Latest Episode
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            {/* Text content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-600 text-ink leading-tight tracking-tight">
                It's Not What
                <br />
                <span className="italic font-400 text-ink-light">You Think</span>
              </h2>

              <div className="mt-6 w-10 h-px bg-amber" />

              <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
                In this episode of Autism Deconstructed, hosts Maya and Ben explore why Gen X autistics
                are leaving the workforce. They dive into the science of what's really happening —
                the neurological load, the cumulative cost of decades of masking, and why traditional
                workplace structures aren't designed for autistic sustainability.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://open.spotify.com/episode/1g6kyFAEwEldJvmUaUIKqu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink hover:bg-ink-light text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Player embed */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-ink/[0.03] p-1">
                <iframe
                  src="https://open.spotify.com/embed/episode/1g6kyFAEwEldJvmUaUIKqu?theme=0"
                  width="100%"
                  height="352"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="rounded-xl"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-sage/10 rounded-2xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
