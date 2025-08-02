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
        <p>
          {experience.company} <br />
        </p>
      </div>

      <p>{experience.location}</p>
      <p>{experience.start}</p>
      <p>{experience.end}</p>
      <p>{experience.description}</p>
      {experience.projects.map((project) => (
        <div key={project.title}>
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
