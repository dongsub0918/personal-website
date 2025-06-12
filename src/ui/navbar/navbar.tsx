"use client";

import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    // TODO: differ css class for scrolling down and up

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.container} ${isHidden ? styles.hidden : ""}`}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Experiences</a>
      <a href="/contact">Projects</a>
      <a href="/contact">Contact me</a>
    </nav>
  );
}
