"use client";

import styles from "./footer.module.css";
import Link from "next/link";
import { useScrollTo } from "@/lib/hooks/useScrollTo";

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.footerBio}>
          <h2>About this website</h2>
          <p>
            As a full stack engineer who started off with mostly backend
            development, I started styling my websites with tailwindcss. So,
            although very light in React, I wanted to style this website only
            using pure css, and without any external libraries.
            <br /> <br />
            For those who are interested, source code for this website is
            available{" "}
            <a href="https://github.com/dongsub0918/personal-website">here</a>.
          </p>
        </div>
        <div className={styles.linksContainer}>
          <h2>Quick Links</h2>
          <div className={styles.links}>
            <Link href="#home" onClick={() => scrollTo("home")}>
              Home
            </Link>
            <Link href="#about" onClick={() => scrollTo("about")}>
              About
            </Link>
            <Link href="#skills" onClick={() => scrollTo("skills")}>
              Skills
            </Link>
            <Link href="#experiences" onClick={() => scrollTo("experiences")}>
              Experiences
            </Link>
            <Link href="#contact" onClick={() => scrollTo("contact")}>
              Contact me
            </Link>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <h2>Social</h2>
          <div className={styles.links}>
            <Link
              href="https://www.linkedin.com/in/aiden-dongsub-kim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
            <Link
              href="https://github.com/dongsub0918"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Dongsub Kim. All rights reserved.
      </p>
    </footer>
  );
}
