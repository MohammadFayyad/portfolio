import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
