import { ImgHTMLAttributes } from "react";
import styles from "./icon.module.css";

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  size?: number;
}

export default function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <img
      src={`/${name}.svg`}
      width={size}
      height={size}
      alt={`${name} icon`}
      className={styles.icon}
      {...props}
    />
  );
}
