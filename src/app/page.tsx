import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Hero } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Theme toggle in the top right corner */}
      <header className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </header>
      
      {/* Hero section */}
      <Hero />
      
      {/* Philosophy section */}
      <PhilosophySection />
    </div>
  );
}
