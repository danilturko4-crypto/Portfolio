import { useState } from "react";
import { data } from "../data/portfolio";
import { styles } from "../styles";
import { AnimSection } from "./AnimSection";

export function Header() {
  const [hoveredContact, setHoveredContact] = useState(null);

  return (
    <AnimSection delay={0}>
      <div className="resume-header" style={styles.header}>
        <div>
          <div className="resume-name" style={styles.name}>
            Турко <span style={styles.nameAccent}>Данил</span>
          </div>
          <div style={styles.titleMono}>{data.title}</div>
        </div>
        <div className="resume-contacts" style={styles.contacts}>
          {data.contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.contactItem,
                color: hoveredContact === i ? "#4f8ef7" : "#6b7694",
              }}
              onMouseEnter={() => setHoveredContact(i)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <div style={styles.dot(c.color)} />
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </AnimSection>
  );
}
