interface CardContentWithPreview {
  internalLink: string | null;
  preview: string; // non-nullable
  externalLink: string; // non-nullable
  githubLink: string[] | null;
}

interface CardContentWithoutPreview {
  internalLink: string | null;
  preview: null;
  externalLink: string | null;
  githubLink: string[] | null;
}

type CardContent = CardContentWithPreview | CardContentWithoutPreview;

interface Project {
  title: string;
  descriptions: string[];
  skills: string[];
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

export type {
  Experiences,
  Project,
  CardContent,
  CardContentWithPreview,
  CardContentWithoutPreview,
};
