import { data } from "../data/portfolio";
import { styles } from "../styles";
import { AnimSection } from "./AnimSection";
import { SectionLabel } from "./SectionLabel";

export function WorkStyle() {
  return (
    <AnimSection delay={0.25}>
      <div style={styles.section}>
        <SectionLabel>Как работаю</SectionLabel>
        <div className="skills-cols" style={styles.skillsCols}>
          {data.workStyle.map((s) => (
            <div key={s} style={styles.skillLine}>
              <span style={styles.arrow}>→</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </AnimSection>
  );
}
