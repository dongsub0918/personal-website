import { Skill, SkillCategory, SKILL_CATEGORIES } from "@lib/types/skills";
import skills from "@lib/content/skills";

// null renders as an empty placeholder block
type SkillTile = Skill | null;

export type { SkillTile };

export default function processSkills(): Record<SkillCategory, SkillTile[]> {
  const createEmptySkills = (count: number): SkillTile[] =>
    Array(count).fill(null);

  // Group skills by category, keeping their order from the content file
  const processedSkillsByCategory = {} as Record<SkillCategory, SkillTile[]>;

  SKILL_CATEGORIES.forEach((category) => {
    const currentSkills = skills.filter((skill) => skill.category === category);

    // 1. Make count a multiple of 3 by adding placeholders
    const targetCount = Math.ceil(currentSkills.length / 3) * 3;
    const placeholdersNeeded = targetCount - currentSkills.length;

    // 2. Add 3 empty skills at start and end
    processedSkillsByCategory[category] = [
      ...createEmptySkills(3),
      ...currentSkills,
      ...createEmptySkills(placeholdersNeeded),
      ...createEmptySkills(3),
    ];
  });

  return processedSkillsByCategory;
}
