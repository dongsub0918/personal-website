import { useEffect, useState } from "react";
import styles from "./bioDescription.module.css";

interface BioDescriptionProps {
  description?: string;
}

export default function BioDescription({ description }: BioDescriptionProps) {
  const [revealed, setRevealed] = useState(false);
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    if (description) {
      setDisplayText(description);
      setRevealed(true);
    } else {
      setRevealed(false);
      setTimeout(() => {
        setDisplayText("");
      }, 450);
    }
  }, [description]);

  return (
    <div className={styles.container}>
      <p className={`${styles.description} ${revealed ? styles.revealed : ""}`}>
        {displayText}
      </p>
    </div>
  );
}
