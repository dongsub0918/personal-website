import styles from "./levelGauge.module.css";

interface LevelGaugeProps {
  level: number;
  category: string;
}

export default function LevelGauge({ level, category }: LevelGaugeProps) {
  // Colors for the gauge boxes
  let colorRef = {
    Frontend: "var(--primary)",
    Backend: "var(--secondary)",
    Tools: "var(--accent)",
    Languages: "var(--foreground)",
  };

  return (
    <div className={styles.levelGauge}>
      <div
        className={styles.gaugeBox}
        style={{
          background:
            level >= 1
              ? colorRef[category as keyof typeof colorRef]
              : "transparent",
          border: `2px solid ${colorRef[category as keyof typeof colorRef]}`,
        }}
      ></div>
      <div
        className={styles.gaugeBox}
        style={{
          background:
            level >= 2
              ? colorRef[category as keyof typeof colorRef]
              : "transparent",
          border: `2px solid ${colorRef[category as keyof typeof colorRef]}`,
        }}
      ></div>
      <div
        className={styles.gaugeBox}
        style={{
          background:
            level >= 3
              ? colorRef[category as keyof typeof colorRef]
              : "transparent",
          border: `2px solid ${colorRef[category as keyof typeof colorRef]}`,
        }}
      ></div>
    </div>
  );
}
