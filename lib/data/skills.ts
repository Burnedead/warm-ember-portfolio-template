import type { ComponentType, SVGProps } from "react";

type SkillBase = {
  id: string;
  name: string;
  brandColor?: string;
};

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = SkillBase &
  (
    | { icon: SkillIcon; logo?: never }
    | { logo: string; icon?: never }
  );

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  introduction: string;
  categories: SkillCategory[];
}

export const skillsData: SkillsData = {
  introduction: "",
  categories: [
    // Add an SVG icon component or a local SVG path, plus an optional brand color.
    {
      id: "frontend",
      name: "Frontend Development",
      skills: [
        {
          id: "nextjs",
          name: "Next.js",
          logo: "/icons/technologies/nextjs.svg",
        },
        {
          id: "react",
          name: "React",
          logo: "/icons/technologies/react.svg",
        },
        {
          id: "typescript",
          name: "TypeScript",
          logo: "/icons/technologies/typescript.svg",
        },
        {
          id: "tailwind-css",
          name: "Tailwind CSS",
          logo: "/icons/technologies/tailwind-css.svg",
        },
      ],
    },
    { id: "backend", name: "Backend Development", skills: [] },
    { id: "database", name: "Database & Data", skills: [] },
    { id: "design", name: "UI/UX & Design", skills: [] },
    { id: "ecommerce", name: "E-commerce & CMS", skills: [] },
    {
      id: "tools",
      name: "Development Tools",
      skills: [
        { id: "gsap", name: "GSAP", logo: "/icons/technologies/gsap.svg" },
        { id: "lenis", name: "Lenis", logo: "/icons/technologies/lenis.svg" },
        {
          id: "lucide-react",
          name: "Lucide React",
          logo: "/icons/technologies/lucide.svg",
        },
      ],
    },
  ],
};
