import styles from "./skillScroller.module.css";

interface SkillScrollerProps {
  activeTab: string;
}

// Sample skill data - you can replace this with your actual skill data
const skills = [
  { name: "AWS", level: "", category: "Tools" },
  { name: "C", level: "", category: "Languages" },
  { name: "C++", level: "", category: "Languages" },
  { name: "CSS", level: "", category: "Frontend" },
  { name: "Python Flask", level: "", category: "Backend" },
  { name: "HTML", level: "", category: "Frontend" },
  { name: "JavaScript", level: "", category: "Languages" },
  { name: "JSCAD", level: "", category: "Frontend" },
  { name: "Jupyter", level: "", category: "Tools" },
  { name: "MySQL", level: "", category: "Backend" },
  { name: "Next.js", level: "", category: "Frontend" },
  { name: "NumPy", level: "", category: "Tools" },
  { name: "Pandas", level: "", category: "Tools" },
  { name: "Prolog", level: "", category: "Languages" },
  { name: "PyTorch", level: "", category: "Tools" },
  { name: "Python", level: "", category: "Languages" },
  { name: "React Native", level: "", category: "Frontend" },
  { name: "SEO", level: "", category: "Tools" },
  { name: "Scheme", level: "", category: "Languages" },
  { name: "SQL", level: "", category: "Languages" },
  { name: "Tailwind CSS", level: "", category: "Frontend" },
  { name: "TensorFlow", level: "", category: "Tools" },
  { name: "Three.js", level: "", category: "Frontend" },
  { name: "TypeScript", level: "", category: "Languages" },
  { name: "Web Crawling", level: "", category: "Tools" },
  { name: "WebSocket", level: "", category: "Backend" },
  { name: "NextAuth", level: "", category: "Tools" },
  { name: "Google API", level: "", category: "Tools" },
  { name: "Firebase", level: "", category: "Tools" },
  { name: "AWS SDK", level: "", category: "Tools" },
  { name: "React", level: "", category: "Frontend" },
];

export default function SkillScroller({ activeTab }: SkillScrollerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.zigzagGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillLevel}>{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.colorExplanationContainer}>
        <p>Color explanation</p>
        <p>Color explanation</p>
        <p>Color explanation</p>
      </div>
    </div>
  );
}
