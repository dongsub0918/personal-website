import styles from "./skillScroller.module.css";
import processSkills from "@lib/utils/processSkills";
import { SkillCategory } from "@lib/types/skills";
import Icon from "@ui/icon/icon";

interface SkillScrollerProps {
  activeTab: string;
}

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  const processedSkillsByCategory = processSkills();
  const currentCategorySkills =
    processedSkillsByCategory[activeTab as SkillCategory] || [];

  return (
    <div className={styles.container}>
      <div className={styles.zigzagGrid}>
        {currentCategorySkills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            {skill === null ? (
              <div className={styles.skillBlock} />
            ) : (
              // Crossfades on hover to show where the skill was used
              <div className={styles.skillInner}>
                <div className={`${styles.skillBlock} ${styles.front}`}>
                  <span className={styles.skillIcon}>
                    <Icon name={skill.iconPath} size={45} preventInvert={true} />
                  </span>
                  <div className={styles.skillDetails}>
                    <p className={styles.skillName}>{skill.name}</p>
                    {/* Touch devices can't hover, so show usedIn inline */}
                    <p className={styles.usedInInline}>
                      {skill.usedIn.join(" · ")}
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.skillBlock} ${styles.back}`}
                  aria-hidden="true"
                >
                  <p className={styles.usedInLabel}>Used in</p>
                  <p className={styles.usedInItems}>
                    {skill.usedIn.join(" · ")}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
