import Image from "next/image";
import Link from "next/link";

import Icon from "@/ui/icon/icon";

import styles from "./projectPreviewCard.module.css";

interface ProjectPreviewCardProps {
  externalLink: string;
  preview: string;
}

export default function ProjectPreviewCard({
  externalLink,
  preview,
}: ProjectPreviewCardProps) {
  return (
    <Link
      href={externalLink}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.container}>
        <Image
          src={preview}
          className={styles.previewImage}
          alt={`${preview?.split("/").pop()} preview`}
          fill
        />
        <div className={styles.hoverOverlay}>
          <span className={styles.hoverText}>View Project</span>
          <Icon name="link-external" size={20} />
        </div>
      </div>
    </Link>
  );
}
