"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { previewSkills, skillsData } from "@/lib/data/skills";
import { LogoLoop } from "@/components/ui/logo-loop";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const skills = previewSkills;

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-skills-heading]", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-skills-heading]",
            start: "top 82%",
            once: true,
          },
        });

      });

      return () => motion.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      aria-labelledby="skills-title"
      className="skills-section"
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-container">
        <header className="skills-heading" data-skills-heading>
          <p className="eyebrow">MY EXPERTISE</p>
          <h2 className="skills-title" id="skills-title">
            Skills &amp; Technologies
          </h2>
          {skillsData.introduction ? (
            <p className="skills-introduction">{skillsData.introduction}</p>
          ) : skills.length === 0 ? (
            <p className="skills-introduction skills-empty-state">
              Add technologies with SVG icons or local logo paths in{" "}
              <code>lib/data/skills.ts</code>.
            </p>
          ) : null}
        </header>

        {skills.length > 0 && (
          <LogoLoop
            ariaLabel="Technology logos"
            direction="left"
            gap={48}
            items={skills}
            logoHeight={36}
            pauseOnHover
            scaleOnHover
            speed={70}
          />
        )}
      </div>
    </section>
  );
}
