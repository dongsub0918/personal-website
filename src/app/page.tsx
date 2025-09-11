import HomeSection from "@/ui/homeSection/homeSection";
import AboutSection from "@/ui/aboutSection/aboutSection";
import ExperiencesSection from "@/ui/experiencesSection/experiencesSection";
import ContactSection from "@/ui/contactSection/contactSection";
import SkillsSection from "@/ui/skillsSection/skillsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ContactSection />
    </main>
  );
}
