"use client";

import SectionHeader from "@ui/sectionHeader/sectionHeader";
import EmergingElement from "@ui/emergingElements/emergingElements";
import MiniNav from "@ui/navbar/miniNav";
import experiences from "@lib/content/experiences";

import styles from "./experiencesSection.module.css";
import ExperiencesContent from "./experiencesContent/experiencesContent";
import ProjectsContent from "./projectsContent/projectsContent";

import { useEffect, useState } from "react";

export default function ExperiencesSection() {
  const tabs = Object.keys(experiences);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showProjects, setShowProjects] = useState(false);

  // useEffect(() => {
  //   setShowProjects(false);
  // }, [activeTab]);

  return (
    <section className={styles.container} id="experiences">
      <SectionHeader title="Experiences" />
      <div className={styles.contentContainer}>
        <MiniNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <ExperiencesContent activeTab={activeTab} />
      </div>
      <ProjectsContent
        activeTab={activeTab}
        showProjects={showProjects}
        setShowProjects={setShowProjects}
      />
      {/* <EmergingElement threshold={0.7} inactiveMaxPixel={800}>
      </EmergingElement> */}
    </section>
  );
}
