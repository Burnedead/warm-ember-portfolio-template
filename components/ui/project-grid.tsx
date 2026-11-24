import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/lib/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div aria-live="polite" className="projects-empty-state" role="status">
        <span aria-hidden="true" className="projects-empty-count">
          00
        </span>
        <div className="projects-empty-copy">
          <span className="projects-empty-label">SELECTED WORK</span>
          <p>
            Projects added to <code>lib/data/projects.ts</code> will appear here.
          </p>
        </div>
        <span aria-hidden="true" className="projects-empty-rule" />
      </div>
    );
  }

  return (
    <div aria-label="Selected projects" className="project-grid" data-project-grid>
      {projects.map((project, index) => (
        <ProjectCard index={index} key={project.id} project={project} />
      ))}
    </div>
  );
}
