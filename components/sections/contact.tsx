"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { socialLinksData } from "@/lib/data/social-links";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function getMailtoHref(email: string) {
  const trimmedEmail = email.trim();
  const match = /^([^\s@]+)@([^\s@]+\.[^\s@]+)$/.exec(trimmedEmail);
  if (!match) return null;

  const [, localPart, domain] = match;
  return `mailto:${encodeURIComponent(localPart)}@${encodeURIComponent(domain)}`;
}

function getExternalUrl(value: string) {
  const trimmedValue = value.trim();
  if (!trimmedValue || !URL.canParse(trimmedValue)) return null;

  const url = new URL(trimmedValue);
  return url.protocol === "https:" || url.protocol === "http:"
    ? url.href
    : null;
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mailtoHref = getMailtoHref(socialLinksData.email);
  const validLinks = socialLinksData.links.flatMap((link) => {
    const url = getExternalUrl(link.url);
    const label = link.label.trim();
    return url && link.id.trim() && label ? [{ ...link, label, url }] : [];
  });

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const cta = sectionRef.current?.querySelector<HTMLElement>(
          "[data-contact-cta]",
        );

        gsap.from("[data-contact-heading]", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-heading]",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from("[data-contact-content]", {
          y: 22,
          opacity: 0,
          duration: 0.7,
          delay: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-contact-content]",
            start: "top 86%",
            once: true,
          },
        });

        if (!cta) return;

        const enter = () => {
          gsap.to(cta, {
            scale: 1.025,
            duration: 0.32,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        const leave = () => {
          gsap.to(cta, {
            scale: 1,
            duration: 0.32,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        cta.addEventListener("mouseenter", enter);
        cta.addEventListener("mouseleave", leave);
        cta.addEventListener("focusin", enter);
        cta.addEventListener("focusout", leave);

        return () => {
          cta.removeEventListener("mouseenter", enter);
          cta.removeEventListener("mouseleave", leave);
          cta.removeEventListener("focusin", enter);
          cta.removeEventListener("focusout", leave);
          gsap.killTweensOf(cta);
          gsap.set(cta, { clearProps: "transform" });
        };
      });

      return () => motion.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">
        <div className="contact-layout">
          <header className="contact-heading" data-contact-heading>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 className="contact-title" id="contact-title">
              Let&apos;s Create
              <br />
              Something Meaningful.
            </h2>
            {socialLinksData.introduction && (
              <p className="contact-introduction">
                {socialLinksData.introduction}
              </p>
            )}
          </header>

          <div className="contact-content" data-contact-content>
            {mailtoHref && (
              <a
                aria-label={`Send an email to ${socialLinksData.email}`}
                className="contact-cta"
                data-contact-cta
                href={mailtoHref}
              >
                <span className="contact-cta-copy">
                  <span className="contact-cta-label">SEND AN EMAIL</span>
                  <span className="contact-cta-address">
                    {socialLinksData.email.trim()}
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            )}

            {validLinks.length > 0 ? (
              <div className="contact-socials">
                <p className="contact-social-label">ELSEWHERE</p>
                <ul>
                  {validLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : !mailtoHref ? (
              <p className="contact-empty-state">
                Add an email or social link in{" "}
                <code>lib/data/social-links.ts</code> to make contact details
                appear here.
              </p>
            ) : null}
          </div>
        </div>

        <div aria-hidden="true" className="contact-bottom-line">
          <span />
          <span>CONTACT</span>
        </div>
      </div>
    </section>
  );
}
