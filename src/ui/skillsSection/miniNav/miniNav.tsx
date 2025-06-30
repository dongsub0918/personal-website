import styles from "./miniNav.module.css";

interface MiniNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MiniNav({ activeTab, setActiveTab }: MiniNavProps) {
  const tabs = ["Frontend", "Backend", "Tools", "Languages"];

  const handleTabClick = (tab: string) => {
    // animate the underline closing animation first

    // then animate the underline opening animation for the clicked tab

    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <h2
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </h2>
      ))}
    </div>
  );
}
