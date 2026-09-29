// Tab order in the Skills section follows this array
const SKILL_CATEGORIES = [
  "Web",
  "Mobile & 3D",
  "Backend & Cloud",
  "AI & Dev Tools",
  "Languages",
] as const;

type SkillCategory = (typeof SKILL_CATEGORIES)[number];

interface Skill {
  name: string;
  category: SkillCategory;
  iconPath: string;
  // Where the skill was used, shown on the back of the tile (1-3 short entries)
  usedIn: [string] | [string, string] | [string, string, string];
}

export { SKILL_CATEGORIES };
export type { Skill, SkillCategory };
