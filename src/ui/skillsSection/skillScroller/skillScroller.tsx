import styles from "./skillScroller.module.css";
import processSkills from "@lib/utils/processSkills";
import { SkillCategory } from "@lib/types/skills";
import Icon from "@ui/icon/icon";

import { useEffect, useRef, useState } from "react";

interface SkillScrollerProps {
  activeTab: string;
}

// Minimum time a tile stays pressed, so quick clicks (e.g. trackpad taps) still show the press
const MIN_PRESS_MS = 120;

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  const processedSkillsByCategory = processSkills();
  const currentCategorySkills =
    processedSkillsByCategory[activeTab as SkillCategory] || [];

  // Tile currently showing its "used in" side (one at a time)
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);

  const toggleReveal = (index: number) =>
    setRevealedIndex(revealedIndex === index ? null : index);

  useEffect(() => {
    setRevealedIndex(null);
  }, [activeTab]);

  // Tile currently drawn pressed down
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const pressStart = useRef(0);
  const releaseTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const press = (index: number) => {
    clearTimeout(releaseTimer.current);
    pressStart.current = Date.now();
    setPressedIndex(index);
  };

  const release = () => {
    const remaining = MIN_PRESS_MS - (Date.now() - pressStart.current);
    clearTimeout(releaseTimer.current);
    releaseTimer.current = setTimeout(
      () => setPressedIndex(null),
      Math.max(0, remaining)
    );
  };

  useEffect(() => () => clearTimeout(releaseTimer.current), []);

  return (
    <div className={styles.container}>
      <p className={styles.hint}>
        <span className={styles.hintPointer}>Click</span>
        <span className={styles.hintTouch}>Tap</span> a skill to see where I
        used it
      </p>
      <div className={styles.zigzagGrid}>
        {currentCategorySkills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            {skill === null ? (
              <div className={styles.skillBlock} />
            ) : (
              // Crossfades on click/tap to show where the skill was used
              <div
                className={`${styles.skillInner} ${
                  revealedIndex === index ? styles.revealed : ""
                } ${pressedIndex === index ? styles.pressed : ""}`}
                role="button"
                tabIndex={0}
                aria-pressed={revealedIndex === index}
                aria-label={`${skill.name}, used in ${skill.usedIn.join(", ")}`}
                onClick={() => toggleReveal(index)}
                onPointerDown={() => press(index)}
                onPointerUp={release}
                onPointerLeave={release}
                onPointerCancel={release}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    press(index);
                    release();
                    toggleReveal(index);
                  }
                }}
              >
                <div className={`${styles.skillBlock} ${styles.front}`}>
                  <span className={styles.skillIcon}>
                    <Icon name={skill.iconPath} size={45} preventInvert={true} />
                  </span>
                  <div className={styles.skillDetails}>
                    <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </div>
                <div
                  className={`${styles.skillBlock} ${styles.back}`}
                  aria-hidden="true"
                >
                  <p className={styles.usedInLabel}>Used in</p>
                  <p className={styles.usedInItems}>
                    {skill.usedIn.join(" · ")}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
