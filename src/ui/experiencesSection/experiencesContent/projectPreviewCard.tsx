import Image from "next/image";
import Link from "next/link";

import Icon from "@/ui/icon/icon";

import styles from "./projectPreviewCard.module.css";

interface ProjectPreviewCardProps {
  externalLink: string | null;
  githubLink: string[] | null;
  preview: string;
}

export default function ProjectPreviewCard({
  externalLink,
  githubLink,
  preview,
}: ProjectPreviewCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={preview}
          className={
            !externalLink && !githubLink ? styles.noLink : styles.previewImage
          }
          alt={`${preview?.split("/").pop()} preview`}
          fill
        />
      </div>

      {(externalLink || githubLink) && (
        <div className={styles.linkContainer}>
          {externalLink && (
            <Link
              href={externalLink}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="link-external" size={20} />
            </Link>
          )}
          {githubLink &&
            githubLink.map((link) => (
              <Link
                key={link}
                href={link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github-mark" size={20} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
