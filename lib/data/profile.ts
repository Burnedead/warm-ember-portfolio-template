export interface ProfileData {
  fullName: string;
  professionalTitle: string;
  shortIntroduction: string;
  profileImage: string | null;
  profileImageAlt: string;
  biography: string[];
}

export const profile: ProfileData = {
  // Replace every DEMO ONLY value with your own profile details.
  fullName: "DEMO ONLY: Your Name",
  professionalTitle: "DEMO ONLY: Professional title",
  shortIntroduction: "DEMO ONLY: Replace with a short introduction.",
  profileImage: null,
  profileImageAlt: "DEMO ONLY: Your profile photograph",
  biography: [
    "DEMO ONLY: This fictional biography shows where your own introduction belongs. Replace it with your story.",
  ],
};
