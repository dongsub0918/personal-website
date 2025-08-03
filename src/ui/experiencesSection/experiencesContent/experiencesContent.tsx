import experiences from "@lib/content/experiences";
import Icon from "@/ui/icon/icon";

import styles from "./experiencesContent.module.css";

import { useState, useEffect } from "react";

interface ExperiencesContentProps {
  activeTab: string;
}

export default function ExperiencesContent({
  activeTab,
}: ExperiencesContentProps) {
  const experience = experiences[activeTab];
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowProjects(false);
  }, [activeTab]);

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

      {/* projects */}
      <button
        className={styles.projectsButton}
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>{showProjects ? "Hide Projects" : "Show Projects"}</span>
        {showProjects ? (
          <Icon name="up-arrow" size={21} />
        ) : (
          <Icon name="down-arrow" size={21} />
        )}
      </button>

      {showProjects &&
        experience.projects.map((project) => (
          <div key={project.title} className={styles.project}>
            <h4>{project.title}</h4>
            <p>{project.externallink}</p>
            <p>{project.link}</p>
            {project.descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
            {project.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        ))}
    </div>
  );
}
