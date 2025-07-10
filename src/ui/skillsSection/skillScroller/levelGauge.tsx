import styles from "./levelGauge.module.css";

interface LevelGaugeProps {
  level: number;
}

export default function LevelGauge({ level }: LevelGaugeProps) {
  return (
    <div className={styles.levelGauge}>
      <div
        className={styles.gaugeBox}
        style={{
          background: level >= 1 ? "var(--foreground)" : "transparent",
        }}
      ></div>
      <div
        className={styles.gaugeBox}
        style={{
          background: level >= 2 ? "var(--foreground)" : "transparent",
        }}
      ></div>
      <div
        className={styles.gaugeBox}
        style={{
          background: level >= 3 ? "var(--foreground)" : "transparent",
        }}
      ></div>
    </div>
  );
}
