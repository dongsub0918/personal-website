"use client";

import { useTheme } from "@lib/context/themeContext";
import styles from "./themeSelector.module.css";
import Icon from "@/ui/icon/icon";

export default function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <Icon name={theme === "light" ? "light-mode" : "dark-mode"} size={25} />
    </button>
  );
}
