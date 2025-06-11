import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.colorCell}>
        <p>Primary Dark</p>
        <div className={styles.primaryDark}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Primary</p>
        <div className={styles.primary}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Primary Light</p>
        <div className={styles.primaryLight}></div>
      </div>
      <br />
      <div className={styles.colorCell}>
        <p>Secondary Dark</p>
        <div className={styles.secondaryDark}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Secondary</p>
        <div className={styles.secondary}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Secondary Light</p>
        <div className={styles.secondaryLight}></div>
      </div>
      <br />
      <div className={styles.colorCell}>
        <p>Accent Dark</p>
        <div className={styles.accentDark}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Accent</p>
        <div className={styles.accent}></div>
      </div>
      <div className={styles.colorCell}>
        <p>Accent Light</p>
        <div className={styles.accentLight}></div>
      </div>
    </section>
  );
}
