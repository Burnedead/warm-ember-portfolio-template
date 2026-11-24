"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CertificateGallery } from "@/components/ui/certificate-gallery";
import {
  certificateIntroduction,
  certificates,
} from "@/lib/data/certificates";
import { previewLimits } from "@/lib/data/preview-limits";
import { ViewMoreLink } from "@/components/ui/view-more-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CertificatesSection({
  preview = false,
}: {
  preview?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const displayedCertificates = preview
    ? certificates.slice(0, Math.max(0, previewLimits.certificates))
    : certificates;

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const hoverCleanups: Array<() => void> = [];

        gsap.from("[data-certificates-heading]", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-certificates-heading]",
            start: "top 82%",
            once: true,
          },
        });

        const visuals = gsap.utils.toArray<HTMLElement>(
          "[data-certificate-visual]",
        );
        if (visuals.length > 0) {
          gsap.fromTo(
            visuals,
            { clipPath: "inset(0 0 100% 0)", y: 14 },
            {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "[data-certificate-gallery]",
                start: "top 84%",
                once: true,
              },
            },
          );
        }

        const cards = gsap.utils.toArray<HTMLElement>(
          "[data-certificate-card]",
        );
        if (cards.length > 0) {
          gsap.from("[data-certificate-info]", {
            y: 18,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-certificate-gallery]",
              start: "top 84%",
              once: true,
            },
          });
        }

        cards.forEach((card) => {
          const visual = card.querySelector<HTMLElement>(
            "[data-certificate-visual]",
          );
          if (!visual) return;

          const enter = () => {
            gsap.to(visual, {
              scale: 1.03,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });
          };
          const leave = () => {
            gsap.to(visual, {
              scale: 1,
              duration: 0.5,
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
            gsap.killTweensOf(visual);
            gsap.set(visual, { clearProps: "transform" });
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
      aria-labelledby="certificates-title"
      className="certificates-section"
      id="certificates"
      ref={sectionRef}
    >
      <div className="certificates-container">
        <header className="certificates-heading" data-certificates-heading>
          <p className="eyebrow">CERTIFICATIONS &amp; CREDENTIALS</p>
          <h2 className="certificates-title" id="certificates-title">
            Learning Never Stops.
          </h2>
          {certificateIntroduction && (
            <p className="certificates-introduction">
              {certificateIntroduction}
            </p>
          )}
        </header>
        <CertificateGallery certificates={displayedCertificates} />
        {preview && (
          <ViewMoreLink
            ariaLabel="View all certificates and credentials"
            href="/certificates"
          />
        )}
      </div>
    </section>
  );
}
