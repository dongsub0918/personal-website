import experiences from "@lib/content/experiences";

import styles from "./experiencesContent.module.css";
import ProjectPreviewCard from "./projectPreviewCard";
import ProjectSkills from "./projectSkills";

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
        <div className={styles.temp}>
          <h3>{experience.title}</h3>
          <span>
            {experience.start} - {experience.end}
          </span>
        </div>
        <p>{experience.company}</p>
        <div className={styles.subHeader}>
          {/* <span>{experience.location}</span> */}
        </div>
        <p className={styles.description}>{experience.description}</p>
      </div>

      {/* description */}

      {/* projects */}
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.title} className={styles.projectContainer}>
            <div className={styles.projectContent}>
              {/* project title */}
              <p className={styles.projectTitle}>{project.title}</p>

              {/* project descriptions */}
              <div className={styles.description}>
                {project.descriptions.map((description) => (
                  <p key={description}>{description}</p>
                ))}
              </div>

              {/* project skills */}
              <ProjectSkills skills={project.skills} />

              {/* project links */}
            </div>

            {project.cardContent.preview && (
              <ProjectPreviewCard
                externalLink={project.cardContent.externalLink}
                preview={project.cardContent.preview}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
