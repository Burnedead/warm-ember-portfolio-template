import Link from "next/link";
import type { ReactNode } from "react";

interface PortfolioDetailPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PortfolioDetailPage({
  title,
  description,
  children,
}: PortfolioDetailPageProps) {
  return (
    <main className="portfolio-detail-page">
      <header className="portfolio-detail-header">
        <nav aria-label="Breadcrumb" className="portfolio-detail-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <p className="eyebrow">PORTFOLIO</p>
        <h1 className="portfolio-detail-title">{title}</h1>
        <p className="portfolio-detail-description">{description}</p>
      </header>
      {children}
    </main>
  );
}
