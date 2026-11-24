export type SocialLinkKind = "linkedin" | "github" | "portfolio" | "other";

export interface SocialLink {
  id: string;
  kind: SocialLinkKind;
  label: string;
  url: string;
}

export interface SocialLinksData {
  email: string;
  introduction: string;
  links: SocialLink[];
}

export const socialLinksData: SocialLinksData = {
  email: "",
  introduction: "",
  links: [],
};
