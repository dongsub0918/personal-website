import { ImgHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./icon.module.css";

type IconProps = {
  name: string;
  size?: number;
  preventInvert?: boolean;
  reverseInvert?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height">;

export default function Icon({
  name,
  size = 24,
  preventInvert = false,
  reverseInvert = false,
  ...props
}: IconProps) {
  return (
    <Image
      src={`/${name}.svg`}
      width={size}
      height={size}
      alt={`${name} icon`}
      className={`${styles.icon} ${
        preventInvert
          ? styles.iconNoInvert
          : reverseInvert
          ? styles.iconReverseInvert
          : ""
      }`}
      priority={name === "linkedin-mark" || name === "github-mark"}
      {...props}
    />
  );
}
