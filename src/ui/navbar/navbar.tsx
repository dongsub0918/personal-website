"use client";

import ThemeSelector from "../themeSelector/themeSelector";
import styles from "./navbar.module.css";
import Icon from "@ui/icon/icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollTo } from "@/lib/hooks/useScrollTo";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTo = useScrollTo();

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollTo(sectionId);
  };

  return (
    <nav className={`${styles.container} ${isHidden ? styles.hidden : ""}`}>
      <div className={styles.socialLinks}>
        <Link
          href="https://www.linkedin.com/in/aiden-dongsub-kim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin-mark" size={25} />
        </Link>
        <Link
          href="https://github.com/dongsub0918"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github-mark" size={25} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="#home" onClick={(e) => handleNavClick(e, "home")}>
          Home
        </Link>
        <Link href="#about" onClick={(e) => handleNavClick(e, "about")}>
          About
        </Link>
        <Link
          href="#experiences"
          onClick={(e) => handleNavClick(e, "experiences")}
        >
          Experiences
        </Link>
        <Link href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
          Projects
        </Link>
        <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
          Contact me
        </Link>
      </div>
      <ThemeSelector />
    </nav>
  );
}
