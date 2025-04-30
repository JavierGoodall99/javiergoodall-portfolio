import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Hero } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProjectsSection } from "@/components/projects-section";

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
      
      {/* Projects section */}
      <ProjectsSection />
    </div>
  );
}
