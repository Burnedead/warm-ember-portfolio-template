import type { Metadata } from "next";
import { CertificatesSection } from "@/components/sections/certificates";
import { PortfolioDetailPage } from "@/components/layout/portfolio-detail-page";

const title = "Certificates";
const description =
  "Browse all certificates and credentials currently listed in the portfolio data.";

export const metadata: Metadata = {
  title: `${title} | Personal Portfolio`,
  description,
};

export default function CertificatesPage() {
  return (
    <PortfolioDetailPage title={title} description={description}>
      <CertificatesSection />
    </PortfolioDetailPage>
  );
}
