export interface Experience {
  id: string;
  position: string;
  company: string;
  companyWebsite: string | null;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const journeyIntroduction = "";

// Duplicate this object and replace every DEMO ONLY value to add an experience.
export const experiences: Experience[] = [
  {
    id: "demo-experience",
    position: "DEMO ONLY: Example position",
    company: "DEMO ONLY: Example company",
    companyWebsite: null,
    employmentType: "DEMO ONLY: Employment type",
    location: "DEMO ONLY: Location",
    startDate: "DEMO ONLY: Start date",
    endDate: "DEMO ONLY: End date",
    currentlyWorking: false,
    description:
      "DEMO ONLY: Fictional role description. Replace with your own experience.",
    responsibilities: ["DEMO ONLY: Example responsibility"],
    technologies: ["DEMO ONLY: Example skill"],
  },
  {
    id: "demo-experience",
    position: "DEMO ONLY: Example position",
    company: "DEMO ONLY: Example company",
    companyWebsite: null,
    employmentType: "DEMO ONLY: Employment type",
    location: "DEMO ONLY: Location",
    startDate: "DEMO ONLY: Start date",
    endDate: "DEMO ONLY: End date",
    currentlyWorking: false,
    description:
      "DEMO ONLY: Fictional role description. Replace with your own experience.",
    responsibilities: ["DEMO ONLY: Example responsibility"],
    technologies: ["DEMO ONLY: Example skill"],
  },
];
