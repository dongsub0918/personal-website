import { useEffect, useState } from "react";
import styles from "./bioDescription.module.css";

interface BioDescriptionProps {
  description?: string;
}

export default function BioDescription({ description }: BioDescriptionProps) {
  // Text kept on screen while the curtain closes after description is cleared
  const [lingeringText, setLingeringText] = useState("");
  const [prevDescription, setPrevDescription] = useState(description);

  if (description !== prevDescription) {
    setPrevDescription(description);
    if (!description) setLingeringText(prevDescription ?? "");
  }

  useEffect(() => {
    if (description) return;
    const timeout = setTimeout(() => {
      setLingeringText("");
    }, 450);
    return () => clearTimeout(timeout);
  }, [description]);

  const revealed = Boolean(description);
  const displayText = description || lingeringText;

  return (
    <div className={styles.container}>
      <p className={`${styles.description} ${revealed ? styles.revealed : ""}`}>
        {displayText}
      </p>
    </div>
  );
}
