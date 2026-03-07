import { data } from "../data/portfolio";
import { styles } from "../styles";
import { AnimSection } from "./AnimSection";
import { SectionLabel } from "./SectionLabel";

export function Stack() {
  return (
    <AnimSection delay={0.15}>
      <div style={styles.section}>
        <SectionLabel>Стек</SectionLabel>
        <div style={styles.stackGrid}>
          {data.stack.map((s) => (
            <div key={s.group} style={styles.stackGroup}>
              <div style={styles.stackGroupTitle(s.color)}>{s.group}</div>
              <div style={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimSection>
  );
}
