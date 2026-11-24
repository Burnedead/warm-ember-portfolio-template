import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { CardRouteLink } from "@/components/ui/card-route-link";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const aspect =
    project.imageAspect ?? (index % 3 === 1 ? "portrait" : "landscape");
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card" data-project-card>
      <CardRouteLink
        href="/projects"
        label={`View ${project.title} on the Projects page`}
      />
      <div
        className="project-media"
        data-aspect={aspect}
        data-project-media
      >
        {project.image ? (
          <Image
            alt={project.imageAlt || `${project.title} project preview`}
            className="project-media-visual"
            data-project-image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 45vw"
            src={project.image}
          />
        ) : (
          <div
            aria-label={`${project.title} preview image placeholder`}
            className="project-media-placeholder"
            data-project-image
            role="img"
          >
            <span aria-hidden="true" className="project-placeholder-number">
              {projectNumber}
            </span>
            <span className="project-placeholder-label">PROJECT PREVIEW</span>
          </div>
        )}
        <span aria-hidden="true" className="project-media-index">
          {projectNumber}
        </span>
      </div>

      <div className="project-info" data-project-info>
        <div className="project-meta">
          {project.category && <span>{project.category}</span>}
          {project.year && <span>{project.year}</span>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        {project.technologies.length > 0 && (
          <ul aria-label={`${project.title} technologies`} className="project-technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        {(project.liveUrl || project.githubUrl) && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                aria-label={`Visit ${project.title} live website (opens in a new tab)`}
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Live site <ArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                aria-label={`View ${project.title} source repository (opens in a new tab)`}
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source <Github aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
