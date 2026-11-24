import type { Experience } from "@/lib/data/experience";
import { ViewMoreLink } from "@/components/ui/view-more-link";
import { CardRouteLink } from "@/components/ui/card-route-link";

interface ExperienceTimelineProps {
  experiences: Experience[];
  headingLevel?: "h2" | "h3";
  scrollable?: boolean;
  viewMoreHref?: string;
}

function getDateRange(item: Experience) {
  const endDate = item.currentlyWorking ? "Present" : item.endDate;
  return [item.startDate, endDate].filter(Boolean).join(" — ");
}

export function ExperienceTimeline({
  experiences,
  headingLevel = "h3",
  scrollable = false,
  viewMoreHref,
}: ExperienceTimelineProps) {
  const Heading = headingLevel;
  const entries =
    experiences.length === 0 ? (
      <p className="journey-empty" data-journey-empty>
        Experience entries added to <code>lib/data/experience.ts</code> will
        appear here.
      </p>
    ) : (
      <div className="journey-timeline">
        {experiences.map((item) => {
          const dateRange = getDateRange(item);

          return (
            <article
              className="journey-entry"
              data-journey-item
              key={item.id}
            >
              <CardRouteLink
                href="/about#experience"
                label={`View ${item.position} in the About page experience section`}
              />
              {dateRange && <p className="journey-date">{dateRange}</p>}
              <h4 className="journey-entry-title">{item.position}</h4>
              {item.company && (
                <p className="journey-organization">
                  {item.companyWebsite ? (
                    <a
                      href={item.companyWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
              )}
              {(item.employmentType || item.location) && (
                <p className="journey-entry-meta">
                  {[item.employmentType, item.location]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
              {item.description && (
                <p className="journey-description">{item.description}</p>
              )}
              {item.responsibilities.length > 0 && (
                <ul className="journey-detail-list">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              )}
              {item.technologies.length > 0 && (
                <div className="journey-tags">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    );

  return (
    <section
      aria-labelledby="experience-heading"
      className={
        scrollable
          ? "journey-panel journey-panel-scrollable"
          : "journey-panel"
      }
      id="experience"
    >
      <header className="journey-panel-heading">
        <span aria-hidden="true" className="journey-panel-number">
          01
        </span>
        <Heading id="experience-heading">Experience</Heading>
      </header>

      {scrollable ? (
        <div
          aria-label="Experience entries"
          className="journey-scroll-container"
          data-journey-scroll
          data-lenis-prevent=""
          role="region"
          tabIndex={0}
        >
          {entries}
        </div>
      ) : (
        entries
      )}
      {viewMoreHref && (
        <ViewMoreLink
          ariaLabel="View all experience entries"
          href={viewMoreHref}
        />
      )}
    </section>
  );
}
