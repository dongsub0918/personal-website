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
      <div className={styles.headerContainer}>
        <div className={styles.companyContainer}>
          <h3 className={styles.headerFont}>{experience.company}</h3>
        </div>
        <p className={styles.subheaderFont}>
          {experience.title} | {experience.start} - {experience.end} |{" "}
          {experience.location}
        </p>
        <p className={styles.subheaderFont}>{experience.description}</p>
      </div>

      {/* projects */}

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.title}>
            <div className={styles.projectContainer}>
              <div className={styles.projectContent}>
                {/* project title */}
                <p className={`${styles.subheaderFont} ${styles.highlight}`}>
                  {project.title}
                </p>

                {/* project descriptions */}
                {project.descriptions.map((description) => (
                  <p key={description} className={styles.bulletPointFont}>
                    {description}
                  </p>
                ))}

                {/* project skills */}
                <div className={styles.projectSkillsWideView}>
                  <ProjectSkills skills={project.skills} />
                </div>
              </div>

              {project.cardContent.preview && (
                <ProjectPreviewCard
                  externalLink={project.cardContent.externalLink}
                  githubLink={project.cardContent.githubLink}
                  preview={project.cardContent.preview}
                />
              )}
            </div>

            <div className={styles.projectSkillsSmallView}>
              <ProjectSkills skills={project.skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
