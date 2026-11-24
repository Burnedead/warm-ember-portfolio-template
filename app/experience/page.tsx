import type { Metadata } from "next";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { experiences } from "@/lib/data/experience";

const title = "Experience";
const description =
  "View every professional experience entry currently listed in the portfolio data.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function ExperiencePage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <section className="journey-section" id="experience">
        <div className="journey-container">
          <ExperienceTimeline experiences={experiences} headingLevel="h2" />
        </div>
      </section>
    </PortfolioDetailPage>
  );
}
