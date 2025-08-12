interface CardContent {
  internalLink: string | null;
  preview: string | null;
  externalLink: string | null;
  githubLink: string[] | null;
}

interface ProjectSkill {
  name: string;
  iconPath: string;
}

interface Project {
  title: string;
  descriptions: string[];
  skills: ProjectSkill[];
  cardContent: CardContent;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  description: string;
  projects: Project[];
}

interface Experiences {
  [key: string]: Experience;
}

export type { Experiences, Project, CardContent, ProjectSkill };
