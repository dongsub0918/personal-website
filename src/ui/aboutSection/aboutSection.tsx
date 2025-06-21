"use client";

import styles from "./aboutSection.module.css";
import EmergingElement from "@ui/emergingElements/emergingElements";
import Icon from "@ui/icon/icon";
export default function AboutSection() {
  const handleDownload = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // This will look for resume.pdf in the public directory
    link.download = "Dongsub_Kim_Resume.pdf"; // This sets the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.container} id="about">
      <EmergingElement>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>About Me</h1>
          <button className={styles.button} onClick={handleDownload}>
            <span className={styles.buttonText}>Resume</span>
            <span className={styles.buttonIcon}>
              <Icon name="download" size={35} />
            </span>
          </button>
        </div>
      </EmergingElement>
    </section>
  );
}
