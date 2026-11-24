"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/components/layout/smooth-scroll";
import { socialLinksData } from "@/lib/data/social-links";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const lenis = useSmoothScroll();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = socialLinksData.links.flatMap((link) => {
    const urlValue = link.url.trim();
    const label = link.label.trim();
    if (!link.id.trim() || !label || !URL.canParse(urlValue)) return [];

    const url = new URL(urlValue);
    if (url.protocol !== "https:" && url.protocol !== "http:") return [];

    return [{ ...link, label, url: url.href }];
  });

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo("top");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <Link
            aria-label="Your name, back to home"
            className="footer-wordmark"
            href="/#home"
          >
            YOUR NAME
          </Link>

          <nav aria-label="Footer navigation" className="footer-navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {socialLinks.length > 0 && (
            <div className="footer-socials">
              <p>ELSEWHERE</p>
              <ul>
                {socialLinks.map((link) => (
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
          )}
        </div>

        <div className="footer-bottom">
          <p>
            © <time suppressHydrationWarning>{year}</time> YOUR NAME. All rights
            reserved.
          </p>
          <button className="footer-back-to-top" onClick={scrollToTop} type="button">
            Back to top <ArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
