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
    {
      id: "languages",
      name: "Programming Languages",
      skills: [
        {
          id: "typescript",
          name: "TypeScript",
          logo: "/icons/technologies/typescript.svg",
        },
      ],
    },
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
          id: "tailwind-css",
          name: "Tailwind CSS",
          logo: "/icons/technologies/tailwind-css.svg",
        },
      ],
    },
    {
      id: "ui-animation",
      name: "UI, Styling & Animation",
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

const previewSkillIds = [
  "nextjs",
  "react",
  "typescript",
  "tailwind-css",
  "gsap",
  "lenis",
  "lucide-react",
] as const;

export const previewSkills: Skill[] = skillsData.categories
  .flatMap((category) => category.skills)
  .filter(
    (skill, index, allSkills) =>
      allSkills.findIndex((candidate) => candidate.id === skill.id) === index &&
      previewSkillIds.includes(
        skill.id as (typeof previewSkillIds)[number],
      ),
  );
