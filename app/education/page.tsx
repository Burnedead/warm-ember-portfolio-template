import type { Metadata } from "next";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";
import { education } from "@/lib/data/education";

const title = "Education";
const description =
  "View every education entry currently listed in the portfolio data.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function EducationPage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <section className="journey-section" id="education-page">
        <div className="journey-container">
          <EducationTimeline education={education} headingLevel="h2" />
        </div>
      </section>
    </PortfolioDetailPage>
  );
}
