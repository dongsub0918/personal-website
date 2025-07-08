"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import styles from "./emergingElements.module.css";

interface EmergingElementProps {
  children: React.ReactNode;
  threshold?: number;
}

enum ElementState {
  HIDDEN = "hidden",
  SHRINKED = "shrinked",
  GROWING = "growing",
  NORMAL = "normal",
}

export default function EmergingElement({
  children,
  threshold = 0.5,
}: EmergingElementProps) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [elementState, setElementState] = useState<ElementState>(
    ElementState.HIDDEN
  );

  let thresholdList = [0, threshold];
  for (let i = threshold + 0.05; i <= 1; i += 0.05) {
    thresholdList.push(i);
  }

  const [ref, inView] = useInView({
    threshold: thresholdList,
    onChange: (inView, entry) => {
      setIntersectionRatio(entry.intersectionRatio);
      setElementState(
        entry.intersectionRatio === 0
          ? ElementState.HIDDEN
          : entry.intersectionRatio < threshold
          ? ElementState.SHRINKED
          : entry.intersectionRatio < 0.9
          ? ElementState.GROWING
          : ElementState.NORMAL
      );
    },
  });

  return (
    <div
      ref={ref}
      className={`${styles.emergingElement} ${styles[elementState]}`}
      style={{
        transform:
          elementState === ElementState.GROWING
            ? `scale(${
                0.9 + ((intersectionRatio - 0.5) * (1 - 0.9)) / 0.5
              }) translateY(0)`
            : undefined,
      }}
    >
      {children}
    </div>
  );
}
