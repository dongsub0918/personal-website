import styles from "./sectionHeader.module.css";
import Icon from "@ui/icon/icon";

interface SectionHeaderProps {
  title: string;
  resumeButton?: boolean;
}

export default function SectionHeader({
  title,
  resumeButton = false,
}: SectionHeaderProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Dongsub_Kim_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.headerContainer}>
      <p className={styles.title}>{title}</p>
      {resumeButton && (
        <button className={styles.button} onClick={handleDownload}>
          <span className={styles.buttonText}>Resume</span>
          <span className={styles.buttonIcon}>
            <Icon name="download" size={35} />
          </span>
        </button>
      )}
    </div>
  );
}
