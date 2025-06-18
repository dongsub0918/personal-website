import styles from "./homeSection.module.css";
import Typewriter from "./typewriter/typewriter";
import SectionLinks from "./sectionLinks/sectionLinks";
import FloatingElement from "@ui/floatingElements";

export default function HomeSection() {
  return (
    <section className={styles.container} id="home">
      <FloatingElement>
        <h1 className={styles.title}>
          Hi there, my name is <br className={styles.break} /> Dongsub Kim.
        </h1>
      </FloatingElement>

      <FloatingElement delay={0.5}>
        <Typewriter />
      </FloatingElement>

      <FloatingElement delay={1}>
        <SectionLinks />
      </FloatingElement>
    </section>
  );
}
