"use client";

import styles from "./aboutSection.module.css";
import EmergingElement from "@ui/emergingElements/emergingElements";
import Icon from "@ui/icon/icon";
import BioCard from "./bioCard/bioCard";
import { useState } from "react";
import bioCardsData from "@lib/content/bioCard";
import BioDescription from "./bioDescription/bioDescription";
import SectionHeader from "@ui/sectionHeader/sectionHeader";
export default function AboutSection() {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [descMount, setDescMount] = useState<boolean>(false);

  const handleCardClick = (title: string) => {
    if (selectedCard === "") {
      // Case 1: No card selected -> select the card
      setSelectedCard(title);
      setDescMount(true);
    } else if (selectedCard === title) {
      // Case 2: Card selected -> deselect the same card
      setSelectedCard("");
      setTimeout(() => {
        setDescMount(false);
      }, 500);
    } else {
      // Case 3: Card selected -> select different card
      setSelectedCard("");
      setTimeout(() => {
        setSelectedCard(title);
      }, 500);
    }
  };

  return (
    <section className={styles.container} id="about">
      <SectionHeader title="About Me" resumeButton={true} />
      <EmergingElement>
        <div className={styles.bioCards}>
          {bioCardsData.map((card) => (
            <BioCard
              key={card.title}
              icon={card.icon}
              iconSize={32}
              title={card.title}
              selected={selectedCard === card.title}
              onClick={() => handleCardClick(card.title)}
            />
          ))}
        </div>
        {descMount && (
          <BioDescription
            description={
              bioCardsData.find((card) => card.title === selectedCard)
                ?.description
            }
          />
        )}
      </EmergingElement>
    </section>
  );
}
