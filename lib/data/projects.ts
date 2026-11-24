export type ProjectImageAspect = "landscape" | "portrait" | "square";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string | null;
  imageAlt: string;
  imageAspect?: ProjectImageAspect;
  technologies: string[];
  year: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

export const projectIntroduction = "";

// Duplicate this object and replace every DEMO ONLY value to add a project.
export const projects: Project[] = [
  {
    id: "demo-project",
    title: "DEMO ONLY: Sample Project",
    description:
      "DEMO ONLY: Fictional project description. Replace with a summary of your work.",
    category: "DEMO ONLY: Project category",
    image: null,
    imageAlt: "DEMO ONLY: Sample project preview",
    imageAspect: "landscape",
    technologies: [
      "DEMO ONLY: Technology one",
      "DEMO ONLY: Technology two",
    ],
    year: "DEMO ONLY: YYYY",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "demo-project",
    title: "DEMO ONLY: Sample Project",
    description:
      "DEMO ONLY: Fictional project description. Replace with a summary of your work.",
    category: "DEMO ONLY: Project category",
    image: null,
    imageAlt: "DEMO ONLY: Sample project preview",
    imageAspect: "landscape",
    technologies: [
      "DEMO ONLY: Technology one",
      "DEMO ONLY: Technology two",
    ],
    year: "DEMO ONLY: YYYY",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "demo-project",
    title: "DEMO ONLY: Sample Project",
    description:
      "DEMO ONLY: Fictional project description. Replace with a summary of your work.",
    category: "DEMO ONLY: Project category",
    image: null,
    imageAlt: "DEMO ONLY: Sample project preview",
    imageAspect: "landscape",
    technologies: [
      "DEMO ONLY: Technology one",
      "DEMO ONLY: Technology two",
    ],
    year: "DEMO ONLY: YYYY",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "demo-project",
    title: "DEMO ONLY: Sample Project",
    description:
      "DEMO ONLY: Fictional project description. Replace with a summary of your work.",
    category: "DEMO ONLY: Project category",
    image: null,
    imageAlt: "DEMO ONLY: Sample project preview",
    imageAspect: "landscape",
    technologies: [
      "DEMO ONLY: Technology one",
      "DEMO ONLY: Technology two",
    ],
    year: "DEMO ONLY: YYYY",
    liveUrl: null,
    githubUrl: null,
  },
];
