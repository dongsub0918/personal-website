"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./emergingElements.module.css";

interface EmergingElementProps {
  children: React.ReactNode;
  threshold?: number;
  inactiveMaxPixel?: number;
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
  inactiveMaxPixel = 750,
}: EmergingElementProps) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [elementState, setElementState] = useState<ElementState>(
    ElementState.HIDDEN
  );
  const [viewportWidth, setViewportWidth] = useState(0);

  // Track viewport width
  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial width
    updateViewportWidth();

    // Add event listener for resize
    window.addEventListener("resize", updateViewportWidth);

    // Cleanup
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const thresholdList = [0, threshold];
  for (let i = threshold + 0.05; i <= 1; i += 0.05) {
    thresholdList.push(i);
  }

  const [ref, _inView] = useInView({
    threshold: thresholdList,
    onChange: (_inView, entry) => {
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

  // Only apply transforms if viewport is larger than inactiveMaxPixel
  const shouldApplyTransforms = viewportWidth > inactiveMaxPixel;

  return (
    <div
      ref={ref}
      className={`${styles.emergingElement} ${styles[elementState]} ${
        !shouldApplyTransforms ? styles.noTransforms : ""
      }`}
      style={{
        transform:
          shouldApplyTransforms && elementState === ElementState.GROWING
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
