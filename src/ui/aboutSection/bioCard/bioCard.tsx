import styles from "./bioCard.module.css";
import Icon from "@ui/icon/icon";

interface BioCardProps {
  icon: string;
  iconSize: number;
  title: string;
  onClick: () => void;
  selected: boolean;
}

export default function BioCard({
  icon,
  iconSize,
  title,
  onClick,
  selected,
}: BioCardProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <Icon name={icon} size={iconSize} />
      <p className={`${styles.title} ${selected ? styles.selected : ""}`}>
        {title}
      </p>
    </div>
  );
}
