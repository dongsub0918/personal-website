import styles from "./aboutSection.module.css";
import FloatingElement from "@ui/floatingElements";
export default function AboutSection() {
  return (
    <section className={styles.container} id="about">
      <FloatingElement delay={0.2}>
        <h1 className={styles.title}>About Me</h1>
      </FloatingElement>
    </section>
  );
}
