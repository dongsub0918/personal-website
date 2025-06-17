import HomeSection from "@/ui/homeSection/homeSection";
import AboutSection from "@/ui/aboutSection/aboutSection";
import ExperiencesSection from "@/ui/experiencesSection/experiencesSection";
import ProjectsSection from "@/ui/projectsSection/projectsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <HomeSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
    </section>
  );
}
