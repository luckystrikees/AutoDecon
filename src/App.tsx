import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { LatestEpisode } from "./components/LatestEpisode";
import { Pillars } from "./components/Pillars";
import { RecentEpisodes } from "./components/RecentEpisodes";
import { Quote } from "./components/Quote";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <Navigation />
      <LatestEpisode />
      <Pillars />
      <RecentEpisodes />
      <Quote />
      <Newsletter />
      <Footer />
    </div>
  );
}
