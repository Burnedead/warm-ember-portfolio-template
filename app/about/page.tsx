import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { ExperienceEducationSection } from "@/components/sections/experience-education";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";

const title = "About";
const description =
  "Read the complete biography configured in the portfolio profile data.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function AboutPage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <AboutSection />
      <ExperienceEducationSection preview />
    </PortfolioDetailPage>
  );
}
