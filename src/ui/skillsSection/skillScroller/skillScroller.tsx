import styles from "./skillScroller.module.css";
import processSkills from "@lib/utils/processSkills";
import Icon from "@ui/icon/icon";
import LevelGauge from "./levelGauge";

interface SkillScrollerProps {
  activeTab: string;
}

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  const processedSkillsByCategory = processSkills();
  const currentCategorySkills = processedSkillsByCategory[activeTab] || [];

  return (
    <div className={styles.container}>
      <div className={styles.zigzagGrid}>
        {currentCategorySkills.map((skill, index) => (
          <div key={index} className={styles.skillBlock}>
            {skill.iconPath && (
              <Icon name={skill.iconPath} size={45} preventInvert={true} />
            )}
            <div className={styles.skillDetails}>
              <p className={styles.skillName}>{skill.name}</p>
              {skill.level > 0 && (
                <LevelGauge level={skill.level} category={skill.category} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
