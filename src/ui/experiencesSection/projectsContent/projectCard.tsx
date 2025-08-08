import { Project } from "@lib/types/experiences";
import styles from "./projectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{project.title}</div>
        {project.externallink && (
          <a
            href={project.externallink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.externallink}
          </a>
        )}
      </div>
    </div>
  );
}
