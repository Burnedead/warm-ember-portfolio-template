"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectGrid } from "@/components/ui/project-grid";
import { projectIntroduction, projects } from "@/lib/data/projects";
import { previewLimits } from "@/lib/data/preview-limits";
import { ViewMoreLink } from "@/components/ui/view-more-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ProjectsSection({ preview = false }: { preview?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const displayedProjects = preview
    ? projects.slice(0, Math.max(0, previewLimits.projects))
    : projects;

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const hoverCleanups: Array<() => void> = [];

        gsap.from("[data-project-heading]", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-project-heading]",
            start: "top 82%",
            once: true,
          },
        });

        const projectMedia = gsap.utils.toArray<HTMLElement>(
          "[data-project-image]",
        );
        if (projectMedia.length > 0) {
          gsap.fromTo(
            projectMedia,
            { clipPath: "inset(0 0 100% 0)", y: 18 },
            {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "[data-project-grid]",
                start: "top 84%",
                once: true,
              },
            },
          );
        }

        const projectInfo = gsap.utils.toArray<HTMLElement>(
          "[data-project-info]",
        );
        if (projectInfo.length > 0) {
          gsap.from(projectInfo, {
            y: 20,
            opacity: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-project-grid]",
              start: "top 84%",
              once: true,
            },
          });
        }

        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
        cards.forEach((card) => {
          const image = card.querySelector<HTMLElement>("[data-project-image]");
          if (!image) return;

          const enter = () => {
            gsap.to(image, {
              scale: 1.035,
              duration: 0.55,
              ease: "power2.out",
              overwrite: "auto",
            });
          };
          const leave = () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.55,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);
          card.addEventListener("focusin", enter);
          card.addEventListener("focusout", leave);
          hoverCleanups.push(() => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
            card.removeEventListener("focusin", enter);
            card.removeEventListener("focusout", leave);
            gsap.killTweensOf(image);
            gsap.set(image, { clearProps: "transform" });
          });
        });

        return () => hoverCleanups.forEach((cleanup) => cleanup());
      });

      return () => motion.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      aria-labelledby="projects-title"
      className="projects-section"
      id="projects"
      ref={sectionRef}
    >
      <div className="projects-container">
        <header className="projects-heading" data-project-heading>
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="projects-title" id="projects-title">
            Things I&apos;ve Built.
          </h2>
          {projectIntroduction && (
            <p className="projects-introduction">{projectIntroduction}</p>
          )}
        </header>
        <ProjectGrid projects={displayedProjects} />
        {preview && (
          <ViewMoreLink
            ariaLabel="View all projects"
            href="/projects"
          />
        )}
      </div>
    </section>
  );
}
