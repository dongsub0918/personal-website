import styles from "./homeSection.module.css";
import Typewriter from "./typewriter";
export default function HomeSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Hi there, my name is <br className={styles.break} /> Dongsub Kim.
      </h1>
      <Typewriter />
    </section>
  );
}
