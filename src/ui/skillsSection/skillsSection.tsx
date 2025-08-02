"use client";

import SectionHeader from "@ui/sectionHeader/sectionHeader";
import EmergingElement from "@ui/emergingElements/emergingElements";
import processSkills from "@/lib/utils/processSkills";

import styles from "./skillsSection.module.css";
import SkillScroller from "./skillScroller/skillScroller";
import MiniNav from "@ui/navbar/miniNav";

import { useState } from "react";

export default function SkillsSection() {
  const tabs = Object.keys(processSkills());
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className={styles.container} id="skills">
      <EmergingElement threshold={0.7} inactiveMaxPixel={800}>
        <SectionHeader title="Skills" />
        <div className={styles.contentContainer}>
          <MiniNav
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SkillScroller activeTab={activeTab} />
        </div>
      </EmergingElement>
    </section>
  );
}
