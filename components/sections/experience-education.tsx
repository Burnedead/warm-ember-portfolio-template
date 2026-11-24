"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { education } from "@/lib/data/education";
import {
  experiences,
  journeyIntroduction,
} from "@/lib/data/experience";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExperienceEducationSection({
  preview = false,
}: {
  preview?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-journey-heading]", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-journey-heading]",
            start: "top 82%",
            once: true,
          },
        });

        gsap.utils
          .toArray<HTMLElement>("[data-journey-item], [data-journey-empty]")
          .forEach((item) => {
            const scroller =
              item.closest<HTMLElement>("[data-journey-scroll]") ?? window;

            gsap.from(item, {
              y: 18,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                scroller,
                start: "top 88%",
                once: true,
              },
            });
          });
      });

      return () => motion.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      aria-labelledby="journey-title"
      className="journey-section"
      id="journey"
      ref={sectionRef}
    >
      <div className="journey-container">
        <header className="journey-heading" data-journey-heading>
          <p className="eyebrow">MY JOURNEY</p>
          <h2 className="journey-title" id="journey-title">
            The Path So Far.
          </h2>
          {journeyIntroduction && (
            <p className="journey-introduction">{journeyIntroduction}</p>
          )}
        </header>

        <div className="journey-grid" data-journey-grid>
          <ExperienceTimeline
            experiences={experiences}
            scrollable={preview}
            viewMoreHref={preview ? "/about#experience" : undefined}
          />
          <EducationTimeline
            education={education}
            scrollable={preview}
            viewMoreHref={preview ? "/about#education" : undefined}
          />
        </div>
      </div>
    </section>
  );
}
