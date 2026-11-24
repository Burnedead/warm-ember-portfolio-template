import type { Metadata } from "next";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";
import { ProjectsSection } from "@/components/sections/projects";

const title = "Projects";
const description =
  "Browse all projects currently listed in the portfolio data.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function ProjectsPage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <ProjectsSection />
    </PortfolioDetailPage>
  );
}
