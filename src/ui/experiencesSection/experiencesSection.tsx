"use client";

import SectionHeader from "@ui/sectionHeader/sectionHeader";
import EmergingElement from "@ui/emergingElements/emergingElements";
import MiniNav from "@ui/navbar/miniNav";
import experiences from "@lib/content/experiences";

import styles from "./experiencesSection.module.css";
import ExperiencesContent from "./experiencesContent/experiencesContent";

import { useState } from "react";

export default function ExperiencesSection() {
  const tabs = Object.keys(experiences);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className={styles.container} id="experiences">
      <SectionHeader title="Experiences" />
      <div className={styles.contentContainer}>
        <div className={styles.stickyNavContainer}>
          <MiniNav
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <ExperiencesContent activeTab={activeTab} />
      </div>
      {/* <EmergingElement threshold={0.7} inactiveMaxPixel={800}>
      </EmergingElement> */}
    </section>
  );
}
