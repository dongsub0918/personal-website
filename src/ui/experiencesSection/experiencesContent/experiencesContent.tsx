import experiences from "@lib/content/experiences";

import styles from "./experiencesContent.module.css";

interface ExperiencesContentProps {
  activeTab: string;
}

export default function ExperiencesContent({
  activeTab,
}: ExperiencesContentProps) {
  const experience = experiences[activeTab];

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
      </div>
      <div className={styles.subHeader}>
        <span>
          {experience.start} - {experience.end}
        </span>
        <span>{experience.location}</span>
      </div>

      {/* description */}
      <div className={styles.description}>{experience.description}</div>
    </div>
  );
}
