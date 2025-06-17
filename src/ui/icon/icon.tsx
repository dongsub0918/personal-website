import { ImgHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./icon.module.css";

type IconProps = {
  name: string;
  size?: number;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height">;

export default function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <Image
      src={`/${name}.svg`}
      width={size}
      height={size}
      alt={`${name} icon`}
      className={styles.icon}
      priority={name === "linkedin-mark" || name === "github-mark"}
      {...props}
    />
  );
}
