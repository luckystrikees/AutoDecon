import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../utils/useReducedMotion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Episodes", href: "#latest" },
  { label: "Concepts", href: "#explore" },
  { label: "The Experience", href: "#explore" },
  { label: "The Facts", href: "#explore" },
  { label: "Everyday Life", href: "#explore" },
  { label: "About", href: "#about" },
];

interface NavigationProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export function Navigation({ darkMode, onToggleDark }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={reduced ? undefined : { y: -80 }}
        animate={reduced ? undefined : { y: 0 }}
        transition={reduced ? undefined : { duration: 0.6, delay: 1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-dark-surface/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
              : "bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : darkMode
              ? "bg-dark-surface"
              : "bg-cream"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className={`font-serif text-lg font-semibold tracking-tight ${darkMode ? "text-dark-text" : "text-ink"}`}>
            Autism<span className={darkMode ? "text-dark-text-muted" : "text-ink-muted"}>, </span>Decon
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                  darkMode
                    ? "text-dark-text-muted hover:text-dark-text hover:bg-white/[0.04]"
                    : "text-ink-muted hover:text-ink hover:bg-ink/[0.04]"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Dark mode toggle button */}
            <button
              onClick={onToggleDark}
              className={`ml-2 p-2 rounded-md transition-colors duration-200 ${
                darkMode
                  ? "text-dark-text-muted hover:text-dark-text hover:bg-white/[0.04]"
                  : "text-ink-muted hover:text-ink hover:bg-ink/[0.04]"
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                /* Sun icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                /* Moon icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              className={`p-2 rounded-md transition-colors ${
                darkMode ? "text-dark-text-muted hover:text-dark-text" : "text-ink-muted hover:text-ink"
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 -mr-2 transition-colors ${
                darkMode ? "text-dark-text-muted hover:text-dark-text" : "text-ink-muted hover:text-ink"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" />
                ) : (
                  <>
                    <path d="M3 6h14" />
                    <path d="M3 10h14" />
                    <path d="M3 14h14" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, height: 0 }}
            animate={reduced ? undefined : { opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={reduced ? undefined : { duration: 0.3 }}
            className={`md:hidden sticky top-14 z-40 backdrop-blur-xl border-b overflow-hidden ${
              darkMode
                ? "bg-dark-surface/95 border-white/10"
                : "bg-cream/95 border-ink/5"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                    darkMode
                      ? "text-dark-text-muted hover:text-dark-text hover:bg-white/[0.04]"
                      : "text-ink-muted hover:text-ink hover:bg-ink/[0.04]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
