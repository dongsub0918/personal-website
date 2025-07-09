interface Skill {
  name: string;
  level: 0 | 1 | 2 | 3;
  iconPath: string;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
}

export type { Skill };
