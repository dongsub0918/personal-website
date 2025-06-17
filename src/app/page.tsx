import HomeSection from "@/ui/homeSection/homeSection";
import AboutSection from "@/ui/aboutSection/aboutSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <HomeSection />
      <AboutSection />
    </section>
  );
}
