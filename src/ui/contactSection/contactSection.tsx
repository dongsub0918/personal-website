"use client";
import React, { useState } from "react";
import styles from "./contactSection.module.css";
import SectionHeader from "@ui/sectionHeader/sectionHeader";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "c348648d-7b3a-4778-b92c-151097ec8a29");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.container} id="contact">
      <SectionHeader title="Contact me" />
      <h2 className={styles.subTitle}>
        Thanks for checking out my website. <br /> <br />
        If you have any questions or just want to say hi, feel free to contact
        me. If you leave your email, I'll be able to get back to you.
      </h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            id="title"
            name="subject"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </section>
  );
}
