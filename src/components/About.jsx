import { data } from "../data/portfolio";
import { styles } from "../styles";
import { AnimSection } from "./AnimSection";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <AnimSection delay={0.1}>
      <div style={styles.section}>
        <SectionLabel>О себе</SectionLabel>
        <p style={styles.aboutText}>
          {data.about.map((chunk, i) =>
            chunk.bold
              ? <strong key={i} style={{ color: "#fff", fontWeight: 600 }}>{chunk.text}</strong>
              : <span key={i}>{chunk.text}</span>
          )}
        </p>
      </div>
    </AnimSection>
  );
}
