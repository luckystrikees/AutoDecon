import { useState, useEffect } from "react";

/**
 * Detects whether the user has requested reduced motion via their OS/browser settings.
 * Returns `true` if animations/transitions should be disabled.
 *
 * NeuroDesign mandate: Respect prefers-reduced-motion for vestibular and cognitive accessibility.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return reduced;
}
