"use client";

import { useState, useEffect } from "react";
import styles from "./typewriter.module.css";
import typewriterPhrases from "@/lib/content/typewriterPhrases";

export default function Typewriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Global delay before starting
    if (!hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const baseText = "I'm a ";
    const currentPhrase = typewriterPhrases[currentPhraseIndex];
    const fullText = baseText + currentPhrase;

    // Every step is scheduled, so state only changes inside timeouts
    let step: () => void;
    let delay: number;

    if (isDeleting) {
      delay = 50;
      if (displayText === baseText) {
        // Done deleting: move on to the next phrase
        step = () => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        };
      } else {
        step = () => setDisplayText(displayText.slice(0, -1));
      }
    } else if (displayText === fullText) {
      // Pause on the full phrase before deleting
      delay = 5000;
      step = () => setIsDeleting(true);
    } else {
      delay = 100;
      step = () => setDisplayText(fullText.slice(0, displayText.length + 1));
    }

    const timeout = setTimeout(step, delay);
    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting, hasStarted]);

  return (
    <span>
      <code className={styles.typewriter}>{displayText}</code>
    </span>
  );
}
