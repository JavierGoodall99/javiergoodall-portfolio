import { Hero } from "@/components/hero-section";
import { AboutMeSection } from "@/components/about-me-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { FeaturedSection } from "@/components/featured-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero section */}
      <Hero />
      
      {/* About Me section with video */}
      <AboutMeSection />
      
      {/* Philosophy section */}
      <PhilosophySection />
      
      {/* Featured interactive section */}
      <FeaturedSection />
      
      {/* Projects section */}
      <ProjectsSection />
      
      {/* Contact section */}
      <ContactSection />
    </div>
  );
}
