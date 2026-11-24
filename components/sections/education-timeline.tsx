import { ArrowUpRight } from "lucide-react";
import type { Education } from "@/lib/data/education";
import { ViewMoreLink } from "@/components/ui/view-more-link";
import { CardRouteLink } from "@/components/ui/card-route-link";

interface EducationTimelineProps {
  education: Education[];
  headingLevel?: "h2" | "h3";
  scrollable?: boolean;
  viewMoreHref?: string;
}

function getDateRange(item: Education) {
  const endDate = item.currentlyStudying ? "Present" : item.endDate;
  return [item.startDate, endDate].filter(Boolean).join(" — ");
}

export function EducationTimeline({
  education,
  headingLevel = "h3",
  scrollable = false,
  viewMoreHref,
}: EducationTimelineProps) {
  const Heading = headingLevel;
  const entries =
    education.length === 0 ? (
      <p className="journey-empty" data-journey-empty>
        Education entries added to <code>lib/data/education.ts</code> will
        appear here.
      </p>
    ) : (
      <div className="journey-timeline">
        {education.map((item) => {
          const dateRange = getDateRange(item);
          const qualification = [item.degree, item.fieldOfStudy]
            .filter(Boolean)
            .join(" · ");

          return (
            <article
              className="journey-entry"
              data-journey-item
              key={item.id}
            >
              <CardRouteLink
                href="/education"
                label={`View ${item.institution} education entry`}
              />
              {dateRange && <p className="journey-date">{dateRange}</p>}
              {qualification && (
                <h4 className="journey-entry-title">{qualification}</h4>
              )}
              {item.institution && (
                <p className="journey-organization">
                  {item.institutionWebsite ? (
                    <a
                      href={item.institutionWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.institution}
                    </a>
                  ) : (
                    item.institution
                  )}
                </p>
              )}
              {item.description && (
                <p className="journey-description">{item.description}</p>
              )}
              {item.achievements.length > 0 && (
                <ul className="journey-detail-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              {item.credentialUrl && (
                <a
                  className="journey-credential-link"
                  href={item.credentialUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Supporting document
                  <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    );

  return (
    <section
      aria-labelledby="education-heading"
      className={
        scrollable
          ? "journey-panel journey-education journey-panel-scrollable"
          : "journey-panel journey-education"
      }
      id="education"
    >
      <header className="journey-panel-heading">
        <span aria-hidden="true" className="journey-panel-number">
          02
        </span>
        <Heading id="education-heading">Education</Heading>
      </header>

      {scrollable ? (
        <div
          aria-label="Education entries"
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
          ariaLabel="View all education entries"
          href={viewMoreHref}
        />
      )}
    </section>
  );
}
