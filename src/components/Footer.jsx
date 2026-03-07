import { styles } from "../styles";
import { AnimSection } from "./AnimSection";

export function Footer() {
  return (
    <AnimSection delay={0.3}>
      <div style={styles.footer}>
        Открыт к офферам · Junior / Middle Frontend · Remote / Almaty
      </div>
    </AnimSection>
  );
}
