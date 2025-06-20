import styles from "./aboutSection.module.css";
import EmergingElement from "@ui/emergingElements/emergingElements";

export default function AboutSection() {
  return (
    <section className={styles.container} id="about">
      <EmergingElement>
        <h1 className={styles.title}>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </EmergingElement>
    </section>
  );
}
