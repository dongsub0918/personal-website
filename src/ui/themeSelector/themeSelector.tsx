"use client";

import { useTheme } from "@lib/context/themeContext";
import styles from "./themeSelector.module.css";

export default function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
