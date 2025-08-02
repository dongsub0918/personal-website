interface Skill {
  name: string;
  level: 0 | 1 | 2 | 3;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
  iconPath: string;
}

export type { Skill };
