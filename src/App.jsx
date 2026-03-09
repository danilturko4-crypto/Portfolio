import { useEffect } from "react";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { WorkStyle } from "./components/WorkStyle";
import { Footer } from "./components/Footer";
import { notifyVisitor } from "./utils/notify";

export default function App() {
  useEffect(() => {
    notifyVisitor();
  }, []);

  return (
    <div style={styles.root}>
      <div style={styles.page}>
        <Header />
        <About />
        <Stack />
        <Projects />
        <WorkStyle />
        <Footer />
      </div>
    </div>
  );
}