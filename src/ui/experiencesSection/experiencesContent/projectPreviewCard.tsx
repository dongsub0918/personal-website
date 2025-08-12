import Image from "next/image";
import Link from "next/link";

import Icon from "@/ui/icon/icon";

import styles from "./projectPreviewCard.module.css";
import { div } from "framer-motion/client";

interface ProjectPreviewCardProps {
  externalLink: string | null;
  preview: string;
}

export default function ProjectPreviewCard({
  externalLink,
  preview,
}: ProjectPreviewCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={preview}
          className={styles.previewImage}
          alt={`${preview?.split("/").pop()} preview`}
          fill
        />
      </div>
      {externalLink && (
        <Link
          href={externalLink}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Project</span>
          <Icon name="link-external" size={20} />
        </Link>
      )}
    </div>
  );
}
