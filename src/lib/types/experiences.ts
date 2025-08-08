interface Project {
  title: string;
  externallink: string | null;
  link: string | null;
  preview: string | null;
  descriptions: string[];
  skills: string[];
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

export type { Experiences, Project };
