import { AboutSection } from "@/components/sections/about";
import { CertificatesSection } from "@/components/sections/certificates";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceEducationSection } from "@/components/sections/experience-education";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <main id="home" className="home-shell">
        <div className="home-intro">
          <p className="eyebrow">PERSONAL PORTFOLIO TEMPLATE</p>
          <h1>A thoughtful space<br />for your work.</h1>
          <p className="home-note">
            Your portfolio structure is ready to be made your own.
          </p>
        </div>
      </main>
      <AboutSection preview />
      <SkillsSection />
      <ProjectsSection preview />
      <CertificatesSection preview />
      <ExperienceEducationSection preview />
      <ContactSection />
    </>
  );
}
