export interface PreviewLimits {
  aboutBiographyParagraphs: number;
  projects: number;
  certificates: number;
}

// Adjust these values to change how much content the homepage previews show.
export const previewLimits: PreviewLimits = {
  aboutBiographyParagraphs: 1,
  projects: 3,
  certificates: 3,
};
