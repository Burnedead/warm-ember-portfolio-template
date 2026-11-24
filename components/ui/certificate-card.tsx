import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { CardRouteLink } from "@/components/ui/card-route-link";
import type { Certificate } from "@/lib/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const imageLabel = `Open certificate image: ${certificate.title} (opens in a new tab)`;
  const pdfLabel = `Open certificate PDF: ${certificate.title} (opens in a new tab)`;

  return (
    <article className="certificate-card" data-certificate-card>
      <CardRouteLink
        href="/certificates"
        label={`View ${certificate.title} on the Certificates page`}
      />
      <div className="certificate-preview">
        {certificate.image ? (
          <a
            aria-label={imageLabel}
            className="certificate-preview-link"
            href={certificate.image}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt={`${certificate.title} certificate`}
              className="certificate-preview-visual"
              data-certificate-visual
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
              src={certificate.image}
            />
            <span aria-hidden="true" className="certificate-preview-hint">
              VIEW IMAGE
            </span>
          </a>
        ) : certificate.pdfUrl ? (
          <a
            aria-label={pdfLabel}
            className="certificate-preview-link certificate-pdf-preview"
            href={certificate.pdfUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              aria-hidden="true"
              className="certificate-pdf-art"
              data-certificate-visual
            >
              <FileText />
              <span>PDF</span>
            </span>
            <span className="certificate-preview-hint">OPEN CERTIFICATE</span>
          </a>
        ) : (
          <div
            aria-label="Certificate preview placeholder"
            className="certificate-preview-placeholder"
            role="img"
          >
            <span aria-hidden="true" className="certificate-placeholder-mark">
              C
            </span>
            <span className="certificate-preview-hint">CERTIFICATE PREVIEW</span>
          </div>
        )}
      </div>

      <div className="certificate-info" data-certificate-info>
        <div className="certificate-meta">
          {certificate.issuer && <span>{certificate.issuer}</span>}
          {certificate.issueDate && <span>{certificate.issueDate}</span>}
        </div>
        <h3 className="certificate-title">{certificate.title}</h3>
        {certificate.credentialId && (
          <p className="certificate-id">
            <span>Credential ID</span>
            <code>{certificate.credentialId}</code>
          </p>
        )}
        {(certificate.credentialUrl || certificate.pdfUrl) && (
          <div className="certificate-links">
            {certificate.credentialUrl && (
              <a
                aria-label={`View ${certificate.title} credential (opens in a new tab)`}
                href={certificate.credentialUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View credential <ArrowUpRight aria-hidden="true" />
              </a>
            )}
            {certificate.pdfUrl && (
              <a
                aria-label={`Open ${certificate.title} PDF (opens in a new tab)`}
                href={certificate.pdfUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open PDF <FileText aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
