"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="wordmark" href="/#home" onClick={() => setMenuOpen(false)}>
          YOUR NAME
        </Link>
        <div className="nav-content">
          <ul className="nav-links" data-open={menuOpen} id="main-navigation">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  aria-current={
                    href === "/#home"
                      ? pathname === "/"
                        ? "page"
                        : undefined
                      : href.startsWith("/#")
                        ? undefined
                        : pathname === href
                          ? "page"
                          : undefined
                  }
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
