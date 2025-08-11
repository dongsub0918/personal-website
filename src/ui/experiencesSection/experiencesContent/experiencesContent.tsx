import experiences from "@lib/content/experiences";

import styles from "./experiencesContent.module.css";
import ProjectPreviewCard from "./projectPreviewCard";
interface ExperiencesContentProps {
  activeTab: string;
}

export default function ExperiencesContent({
  activeTab,
}: ExperiencesContentProps) {
  const experience = experiences[activeTab];
  const projects = experience.projects;

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <div className={styles.subHeader}>
          <span>
            {experience.start} - {experience.end}
          </span>
          <span>{experience.location}</span>
        </div>
      </div>

      {/* description */}
      <p className={styles.description}>{experience.description}</p>

      {projects.length > 0 && (
        <h4 className={styles.projectsHeader}>Projects</h4>
      )}

      {/* projects */}
      {projects.map((project) => (
        <div key={project.title} className={styles.projectContainer}>
          <div className={styles.projectContent}>
            <p className={styles.projectTitle}>{project.title}</p>
            {project.descriptions.map((description) => (
              <p className={styles.description} key={description}>
                {description}
              </p>
            ))}
          </div>

          {project.cardContent.preview && project.cardContent.externalLink && (
            <ProjectPreviewCard
              externalLink={project.cardContent.externalLink}
              preview={project.cardContent.preview}
            />
          )}
        </div>
      ))}
    </div>
  );
}
