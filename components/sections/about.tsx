"use client";

import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/lib/data/profile";
import { previewLimits } from "@/lib/data/preview-limits";
import { ViewMoreLink } from "@/components/ui/view-more-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutSection({ preview = false }: { preview?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const biography = preview
    ? profile.biography.slice(
        0,
        Math.max(0, previewLimits.aboutBiographyParagraphs),
      )
    : profile.biography;

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-about-heading]", {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-heading]",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from("[data-about-photo]", {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "[data-about-photo]",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from("[data-about-copy]", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-copy]",
            start: "top 84%",
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
      aria-labelledby="about-title"
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">
        <header className="about-heading" data-about-heading>
          <p className="eyebrow">ABOUT ME</p>
          <h2 className="about-title" id="about-title">
            The person
            <br />
            behind the work.
          </h2>
        </header>

        <div className="about-grid">
          <div
            aria-label={
              profile.profileImage
                ? undefined
                : "Profile photograph placeholder"
            }
            className={`about-photo${profile.profileImage ? "" : " about-photo-empty"}`}
            data-about-photo
            role={profile.profileImage ? undefined : "img"}
          >
            {profile.profileImage ? (
              <Image
                alt={profile.profileImageAlt || "Profile photograph"}
                className="about-photo-image"
                fill
                priority={false}
                sizes="(max-width: 760px) 100vw, 42vw"
                src={profile.profileImage}
              />
            ) : (
              <div aria-hidden="true" className="about-photo-prompt">
                <span className="about-photo-icon">
                  <ImagePlus />
                </span>
                <span>PROFILE PHOTOGRAPH</span>
                <span className="about-photo-hint">
                  Add an image in lib/data/profile.ts
                </span>
              </div>
            )}
          </div>

          <div className="about-copy" data-about-copy>
            <p className="about-copy-label">A LITTLE INTRODUCTION</p>
            {biography.length > 0 ? (
              <div className="about-biography">
                {biography.map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="about-empty-state">
                Your biography will appear here once you add it to{" "}
                <code>lib/data/profile.ts</code>.
              </p>
            )}
            <span aria-hidden="true" className="about-copy-rule" />
            {preview && (
              <ViewMoreLink
                ariaLabel="View the complete about page"
                href="/about"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
