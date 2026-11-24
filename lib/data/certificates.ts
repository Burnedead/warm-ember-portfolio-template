export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string | null;
  credentialUrl: string | null;
  image: string | null;
  pdfUrl: string | null;
}

export const certificateIntroduction = "";

// Duplicate this object and replace every DEMO ONLY value to add a certificate.
export const certificates: Certificate[] = [
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
  {
    id: "demo-certificate",
    title: "DEMO ONLY: Sample Certificate",
    issuer: "DEMO ONLY: Example organization",
    issueDate: "DEMO ONLY: Month YYYY",
    credentialId: "DEMO ONLY: Credential ID",
    credentialUrl: null,
    image: null,
    pdfUrl: null,
  },
];
