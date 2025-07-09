import styles from "./skillScroller.module.css";
import processSkills from "@lib/utils/processSkills";

interface SkillScrollerProps {
  activeTab: string;
}

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  const processedSkillsByCategory = processSkills();
  const currentCategorySkills = processedSkillsByCategory[activeTab] || [];

  console.log(processedSkillsByCategory);
  return (
    <div className={styles.container}>
      <div className={styles.zigzagGrid}>
        {currentCategorySkills.map((skill, index) => (
          <div key={index} className={styles.skillBlockBase}>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.colorExplanationContainer}>
        <p>Color explanation</p>
        <p>Color explanation</p>
        <p>Color explanation</p>
      </div>
    </div>
  );
}
