import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { LatestEpisode } from "./components/LatestEpisode";
import { Pillars } from "./components/Pillars";
import { RecentEpisodes } from "./components/RecentEpisodes";
import { Quote } from "./components/Quote";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-dark-bg text-dark-text" : "bg-cream text-ink"}`}>
      {/* Skip navigation link for keyboard/screen reader users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Hero darkMode={darkMode} />
      <Navigation darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />

      {/* Main content landmark */}
      <main id="main-content">
        <LatestEpisode darkMode={darkMode} />
        <Pillars darkMode={darkMode} />
        <RecentEpisodes darkMode={darkMode} />
        <Quote />
        <Newsletter darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
