import Image from "next/image";
import type { Skill } from "@/lib/data/skills";
import { skillsData } from "@/lib/data/skills";

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.icon) {
    const Icon = skill.icon;
    return <Icon aria-hidden="true" />;
  }

  return (
    <Image
      alt=""
      aria-hidden="true"
      className="skills-page-logo-image"
      fill
      sizes="36px"
      src={skill.logo}
    />
  );
}

export function SkillsPageSection() {
  const categories = skillsData.categories.filter(
    (category) => category.skills.length > 0,
  );

  return (
    <section
      aria-label="Technical skills and technologies"
      className="skills-page-section"
    >
      <div className="skills-page-container">
        {categories.length > 0 ? (
          <div className="skills-page-categories">
            {categories.map((category, index) => (
              <section
                aria-labelledby={`skills-category-${category.id}`}
                className="skills-page-category"
                key={category.id}
              >
                <header className="skills-page-category-heading">
                  <span
                    aria-hidden="true"
                    className="skills-page-category-number"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`skills-category-${category.id}`}>
                    {category.name}
                  </h2>
                </header>

                <ul className="skills-page-grid">
                  {category.skills.map((skill) => (
                    <li className="skills-page-item" key={skill.id}>
                      <span
                        className="skills-page-logo"
                        style={
                          skill.brandColor
                            ? { color: skill.brandColor }
                            : undefined
                        }
                      >
                        <SkillLogo skill={skill} />
                      </span>
                      <span className="skills-page-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <p className="skills-page-empty">
            Add technologies and local SVG logos to{" "}
            <code>lib/data/skills.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
