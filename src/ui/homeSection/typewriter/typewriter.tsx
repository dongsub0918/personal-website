"use client";

import { useState, useEffect } from "react";
import styles from "./typewriter.module.css";
import typewriterPhrases from "@/lib/content/typewriterPhrases";

export default function Typewriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === baseText) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }

    if (displayText === fullText) {
      setIsPaused(true);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentPhraseIndex, isDeleting, isPaused, hasStarted]);

  return (
    <span>
      <code className={styles.typewriter}>{displayText}</code>
    </span>
  );
}
