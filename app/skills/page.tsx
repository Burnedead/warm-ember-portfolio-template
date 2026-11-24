import type { Metadata } from "next";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";
import { SkillsPageSection } from "@/components/sections/skills-page";
import { skillsData } from "@/lib/data/skills";

const title = "Skills & Technologies";
const description =
  skillsData.introduction ||
  "A categorized overview of the technologies and tools used in this portfolio.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function SkillsPage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <SkillsPageSection />
    </PortfolioDetailPage>
  );
}
