import Icon from "@/ui/icon/icon";
import styles from "./projectSkills.module.css";
import { ProjectSkill } from "@lib/types/experiences";

interface ProjectSkillsProps {
  skills: ProjectSkill[];
}

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.skill}>
          <span>{skill.name}</span>
          <div className={styles.iconWideView}>
            <Icon name={skill.iconPath} size={30} preventInvert={true} />
          </div>
          <div className={styles.iconSmallView}>
            <Icon name={skill.iconPath} size={20} preventInvert={true} />
          </div>
        </div>
      ))}
    </div>
  );
}
