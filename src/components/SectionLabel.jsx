import { styles } from "../styles";

export function SectionLabel({ children }) {
  return (
    <div style={styles.sectionLabel}>
      {children}
      <div style={styles.sectionLine} />
    </div>
  );
}
