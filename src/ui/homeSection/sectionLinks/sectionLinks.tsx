"use client";

import Icon from "@/ui/icon/icon";
import styles from "./sectionLinks.module.css";
import { useScrollTo } from "@/lib/hooks/useScrollTo";

export default function SectionLinks() {
  const scrollTo = useScrollTo();

  return (
    <div className={styles.container}>
      <button onClick={() => scrollTo("about")}>
        <span>About me</span>
        <div>
          <Icon name="right-up-arrow" size={21} />
        </div>
      </button>
      <button onClick={() => scrollTo("experiences")}>
        <span>Experiences</span>
        <div>
          <Icon name="right-up-arrow" size={21} />
        </div>
      </button>
      <button onClick={() => scrollTo("projects")}>
        <span>Projects</span>
        <div>
          <Icon name="right-up-arrow" size={21} />
        </div>
      </button>
    </div>
  );
}
