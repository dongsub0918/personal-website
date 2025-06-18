import styles from "./homeSection.module.css";
import Typewriter from "./typewriter/typewriter";
import SectionLinks from "./sectionLinks/sectionLinks";

export default function HomeSection() {
  return (
    <section className={styles.container} id="home">
      <h1 className={styles.title}>
        Hi there, my name is <br className={styles.break} /> Dongsub Kim.
      </h1>
      <Typewriter />
      <SectionLinks />
    </section>
  );
}
