"use client";

import SectionHeader from "@ui/sectionHeader/sectionHeader";
import EmergingElement from "@ui/emergingElements/emergingElements";

import MiniNav from "./miniNav/miniNav";
import styles from "./skillsSection.module.css";
import SkillScroller from "./skillScroller/skillScroller";

import { useState } from "react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className={styles.container} id="about">
      <SectionHeader title="Skills" />
      <EmergingElement>
        <div className={styles.contentContainer}>
          <MiniNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <SkillScroller activeTab={activeTab} />
        </div>
      </EmergingElement>
    </section>
  );
}
