export interface Education {
  id: string;
  institution: string;
  institutionWebsite: string | null;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  currentlyStudying: boolean;
  description: string;
  achievements: string[];
  credentialUrl: string | null;
}

// Duplicate this object and replace every DEMO ONLY value to add an education entry.
export const education: Education[] = [
  {
    id: "demo-education",
    institution: "DEMO ONLY: Example institution",
    institutionWebsite: null,
    degree: "DEMO ONLY: Example degree",
    fieldOfStudy: "DEMO ONLY: Field of study",
    startDate: "DEMO ONLY: Start date",
    endDate: "DEMO ONLY: Graduation date",
    currentlyStudying: false,
    description:
      "DEMO ONLY: Fictional education description. Replace with your own details.",
    achievements: ["DEMO ONLY: Example achievement"],
    credentialUrl: null,
  },
];
