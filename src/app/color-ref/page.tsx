import styles from "./page.module.css";

export default function ColorRefPage() {
  return (
    <section className={styles.container}>
      <h1>Color Palette</h1>
      <div className={styles.colorCell}>
        <div className={styles.primaryDark}>Primary Dark</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.primary}>Primary</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.primaryLight}>Primary Light</div>
      </div>
      <br />
      <div className={styles.colorCell}>
        <div className={styles.secondaryDark}>Secondary Dark</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.secondary}>Secondary</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.secondaryLight}>Secondary Light</div>
      </div>
      <br />
      <div className={styles.colorCell}>
        <div className={styles.accentDark}>Accent Dark</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.accent}>Accent</div>
      </div>
      <div className={styles.colorCell}>
        <div className={styles.accentLight}>Accent Light</div>
      </div>
    </section>
  );
}
