import { useState } from "react";
import { data } from "../data/portfolio";
import { styles } from "../styles";
import { AnimSection } from "./AnimSection";
import { SectionLabel } from "./SectionLabel";

const demoLinkStyle = {
  fontFamily: "'DM Mono', monospace",
  fontSize: 10,
  color: "#7dd3a8",
  background: "rgba(125,211,168,0.08)",
  border: "1px solid rgba(125,211,168,0.25)",
  borderRadius: 4,
  padding: "3px 8px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  display: "inline-block",
  marginTop: 8,
  transition: "background 0.2s",
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      style={styles.projectCard(hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div style={styles.projectName}>{project.name}</div>
        <div style={styles.projectDesc}>{project.desc}</div>
        <div style={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} style={styles.tag}>{t}</span>
          ))}
        </div>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={demoLinkStyle}
            onClick={(e) => e.stopPropagation()}
          >
            Live ↗
          </a>
        )}
      </div>
      <div style={styles.projectBadge}>{project.badge}</div>
    </div>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }
  return inner;
}

export function Projects() {
  return (
    <AnimSection delay={0.2}>
      <div style={styles.section}>
        <SectionLabel>Проекты</SectionLabel>
        <div style={styles.projectsList}>
          {data.projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </AnimSection>
  );
}