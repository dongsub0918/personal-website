import { useEffect, useState } from "react";
import styles from "./bioDescription.module.css";

interface BioDescriptionProps {
  description?: string;
}

export default function BioDescription({ description }: BioDescriptionProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (description) {
      setRevealed(true);
    } else {
      setRevealed(false);
    }
    console.log(description, revealed);
  }, [description]);

  return (
    <div className={styles.container}>
      <span
        className={`${styles.description} ${revealed ? styles.revealed : ""}`}
      >
        {description}
      </span>
    </div>
  );
}
