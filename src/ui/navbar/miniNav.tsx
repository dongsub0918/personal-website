import styles from "./miniNav.module.css";

interface MiniNavProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MiniNav({
  tabs,
  activeTab,
  setActiveTab,
}: MiniNavProps) {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <h2
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => {
            setActiveTab(tab);
          }}
        >
          {tab}
        </h2>
      ))}
    </div>
  );
}
