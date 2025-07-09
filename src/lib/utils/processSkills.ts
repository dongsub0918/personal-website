import { Skill } from "@lib/types/skills";
import skills from "@lib/content/skills";

export default function processSkills(): { [key: string]: Skill[] } {
  const categories = ["Frontend", "Backend", "Tools", "Languages"];

  // Sort skills by category order defined in categories array
  const sortedSkills = [...skills].sort((a, b) => {
    const categoryIndexA = categories.indexOf(a.category);
    const categoryIndexB = categories.indexOf(b.category);
    return categoryIndexA - categoryIndexB;
  });

  // Group skills by category
  const skillsByCategory: { [key: string]: Skill[] } = {};
  categories.forEach((category) => {
    skillsByCategory[category] = sortedSkills.filter(
      (skill) => skill.category === category
    );
  });

  // Helper function to create empty skill
  const createEmptySkill = (category: string): Skill => ({
    name: "",
    level: 0,
    iconPath: "",
    category: category as "Frontend" | "Backend" | "Tools" | "Languages",
  });

  // Process each category
  const processedSkillsByCategory: { [key: string]: Skill[] } = {};

  categories.forEach((category) => {
    const categorySkills = skillsByCategory[category];
    let currentSkills = [...categorySkills];

    // 1. Make count a multiple of 3 by adding placeholders
    const currentCount = currentSkills.length;
    const targetCount = Math.ceil(currentCount / 3) * 3;
    const placeholdersNeeded = targetCount - currentCount;

    // Add placeholders at deterministic positions (excluding first and last)
    for (let i = 0; i < placeholdersNeeded; i++) {
      // Use deterministic placement: alternate between middle positions
      const availablePositions = currentSkills.length - 1; // Exclude first and last
      const positionIndex = i % availablePositions;
      const insertIndex = positionIndex + 1; // +1 to skip first position
      currentSkills.splice(insertIndex, 0, createEmptySkill(category));
    }

    // 2. Add 3 empty skills at start and end
    const startPlaceholders = Array(3)
      .fill(null)
      .map(() => createEmptySkill(category));
    const endPlaceholders = Array(3)
      .fill(null)
      .map(() => createEmptySkill(category));

    const finalCategorySkills = [
      ...startPlaceholders,
      ...currentSkills,
      ...endPlaceholders,
    ];
    processedSkillsByCategory[category] = finalCategorySkills;
  });

  return processedSkillsByCategory;
}
