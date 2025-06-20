"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import styles from "./emergingElements.module.css";

interface EmergingElementProps {
  children: React.ReactNode;
  initialScale?: number;
}

enum ElementState {
  HIDDEN = "hidden",
  SHRINKED = "shrinked",
  GROWING = "growing",
  NORMAL = "normal",
}

export default function EmergingElement({
  children,
  initialScale = 0.9,
}: EmergingElementProps) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [elementState, setElementState] = useState<ElementState>(
    ElementState.HIDDEN
  );

  const [ref, inView] = useInView({
    threshold: [0, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    onChange: (inView, entry) => {
      setIntersectionRatio(entry.intersectionRatio);
      setElementState(
        entry.intersectionRatio === 0
          ? ElementState.HIDDEN
          : entry.intersectionRatio < 0.5
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
                initialScale +
                ((intersectionRatio - 0.5) * (1 - initialScale)) / 0.5
              }) translateY(0)`
            : undefined,
      }}
    >
      {children}
    </div>
  );
}
