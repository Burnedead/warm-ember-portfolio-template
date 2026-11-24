import { CertificateCard } from "@/components/ui/certificate-card";
import type { Certificate } from "@/lib/data/certificates";

interface CertificateGalleryProps {
  certificates: Certificate[];
}

export function CertificateGallery({
  certificates,
}: CertificateGalleryProps) {
  if (certificates.length === 0) {
    return (
      <div
        aria-live="polite"
        className="certificates-empty-state"
        role="status"
      >
        <span aria-hidden="true" className="certificates-empty-count">
          00
        </span>
        <div className="certificates-empty-copy">
          <span className="certificates-empty-label">CREDENTIAL ARCHIVE</span>
          <p>
            Certificates added to <code>lib/data/certificates.ts</code> will
            appear here.
          </p>
        </div>
        <span aria-hidden="true" className="certificates-empty-rule" />
      </div>
    );
  }

  return (
    <div
      aria-label="Certificates and credentials"
      className="certificate-gallery"
      data-certificate-gallery
      role="region"
    >
      {certificates.map((certificate) => (
        <CertificateCard certificate={certificate} key={certificate.id} />
      ))}
    </div>
  );
}
