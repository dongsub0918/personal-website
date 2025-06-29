import styles from "./skillScroller.module.css";

interface SkillScrollerProps {
  activeTab: string;
}

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  return (
    <div className={styles.container}>
      <h2>{activeTab}</h2>
      <div className={styles.colorExplanationContainer}>
        <p>Color explanation</p>
      </div>
    </div>
  );
}
