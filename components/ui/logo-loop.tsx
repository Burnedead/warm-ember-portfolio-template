"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Skill } from "@/lib/data/skills";
import styles from "./logo-loop.module.css";

interface LogoLoopProps {
  items: readonly Skill[];
  ariaLabel: string;
  direction?: "left" | "right";
  speed?: number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
}

type LogoLoopStyle = CSSProperties & {
  "--logo-loop-duration": string;
  "--logo-loop-gap": string;
  "--logo-loop-height": string;
  "--logo-loop-direction": "normal" | "reverse";
};

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.icon) {
    const Icon = skill.icon;

    return <Icon aria-hidden="true" className={styles.icon} />;
  }

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={styles.image}
      fill
      sizes="80px"
      src={skill.logo}
    />
  );
}

export function LogoLoop({
  items,
  ariaLabel,
  direction = "left",
  speed = 70,
  logoHeight = 36,
  gap = 48,
  pauseOnHover = true,
  scaleOnHover = true,
}: LogoLoopProps) {
  const groupRef = useRef<HTMLUListElement>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const group = groupRef.current;

    if (!group || items.length === 0 || speed <= 0) {
      return;
    }

    const updateDuration = () => {
      const width = group.getBoundingClientRect().width;

      if (width > 0) {
        setDuration(width / speed);
      }
    };

    updateDuration();

    const resizeObserver = new ResizeObserver(updateDuration);
    resizeObserver.observe(group);

    return () => resizeObserver.disconnect();
  }, [gap, items, logoHeight, speed]);

  if (items.length === 0) {
    return null;
  }

  const className = [
    styles.viewport,
    pauseOnHover && styles.pauseOnHover,
    scaleOnHover && styles.scaleOnHover,
  ]
    .filter(Boolean)
    .join(" ");

  const loopStyle: LogoLoopStyle = {
    "--logo-loop-duration": duration ? `${duration}s` : "60s",
    "--logo-loop-gap": `${gap}px`,
    "--logo-loop-height": `${logoHeight}px`,
    "--logo-loop-direction": direction === "left" ? "normal" : "reverse",
  };

  return (
    <div className={className} style={loopStyle}>
      <div className={styles.track}>
        <ul aria-label={ariaLabel} className={styles.group} ref={groupRef}>
          {items.map((skill) => (
            <li
              className={styles.item}
              key={skill.id}
              style={skill.brandColor ? { color: skill.brandColor } : undefined}
            >
              <span className={styles.srOnly}>{skill.name}</span>
              <span className={styles.logo}>
                <SkillLogo skill={skill} />
              </span>
            </li>
          ))}
        </ul>
        <ul
          aria-hidden="true"
          className={`${styles.group} ${styles.duplicate}`}
        >
          {items.map((skill) => (
            <li
              className={styles.item}
              key={`duplicate-${skill.id}`}
              style={skill.brandColor ? { color: skill.brandColor } : undefined}
            >
              <span className={styles.logo}>
                <SkillLogo skill={skill} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
