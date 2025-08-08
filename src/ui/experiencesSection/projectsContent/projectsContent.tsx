import experiences from "@lib/content/experiences";
import Icon from "@/ui/icon/icon";
import { useEffect, useState } from "react";

import styles from "./projectsContent.module.css";
import ProjectCard from "./projectCard";
export default function ProjectsContent({
  activeTab,
  showProjects,
  setShowProjects,
}: {
  activeTab: string;
  showProjects: boolean;
  setShowProjects: (showProjects: boolean) => void;
}) {
  const projects = experiences[activeTab].projects;
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (showProjects) {
      // Small delay to ensure DOM element is rendered before animation
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [showProjects]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowProjects(!showProjects)}
        className={`${styles.button} ${showProjects ? styles.active : ""}`}
      >
        <span>{showProjects ? "Hide Projects" : "Show Projects"}</span>
        {showProjects ? (
          <Icon name="up-arrow" size={27} />
        ) : (
          <Icon name="down-arrow" size={27} />
        )}
      </button>
      {showProjects && (
        <div
          className={`${styles.projectsContainer} ${
            shouldAnimate ? styles.show : ""
          }`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
