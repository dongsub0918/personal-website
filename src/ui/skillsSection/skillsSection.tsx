"use client";

import SectionHeader from "@ui/sectionHeader/sectionHeader";
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
      <SectionHeader title="Skills" />
      <div className={styles.contentContainer}>
        <MiniNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SkillScroller activeTab={activeTab} />
      </div>
    </section>
  );
}
