import SectionHeader from "../sectionHeader/sectionHeader";
import EmergingElement from "@/ui/floatingElements/floatingElements";
import styles from "./skillsSection.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.container} id="about">
      <EmergingElement>
        <SectionHeader title="Skills" />
      </EmergingElement>
    </section>
  );
}
