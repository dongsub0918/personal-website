import { Skill } from "@lib/types/skills";

// Skills render in array order within each category
const skills: Skill[] = [
  // Web
  {
    name: "React",
    iconPath: "skills/React",
    category: "Web",
    usedIn: ["Aurora", "HELLOMED", "KISA"],
  },
  {
    name: "Next.js",
    iconPath: "skills/Next.js",
    category: "Web",
    usedIn: ["HELLOMED", "KISA", "This website"],
  },
  {
    name: "Vite",
    iconPath: "skills/Vite",
    category: "Web",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "Tailwind CSS",
    iconPath: "skills/Tailwind CSS",
    category: "Web",
    usedIn: ["HELLOMED", "KISA"],
  },
  {
    name: "HTML",
    iconPath: "skills/HTML5",
    category: "Web",
    usedIn: ["HELLOMED", "KISA", "UMTRI"],
  },
  {
    name: "CSS",
    iconPath: "skills/CSS3",
    category: "Web",
    usedIn: ["HELLOMED", "KISA", "This website"],
  },
  {
    name: "NextAuth",
    iconPath: "skills/nextauth",
    category: "Web",
    usedIn: ["HELLOMED", "KISA"],
  },
  {
    name: "SEO",
    iconPath: "skills/SEO",
    category: "Web",
    usedIn: ["HELLOMED"],
  },

  // Mobile & 3D
  {
    name: "React Native",
    iconPath: "skills/React",
    category: "Mobile & 3D",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "Expo",
    iconPath: "skills/Expo",
    category: "Mobile & 3D",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "RealityKit",
    iconPath: "skills/Apple",
    category: "Mobile & 3D",
    usedIn: ["UMTRI"],
  },
  {
    name: "Three.js",
    iconPath: "skills/Three.js",
    category: "Mobile & 3D",
    usedIn: ["UMTRI"],
  },
  {
    name: "JSCAD",
    iconPath: "skills/jscad",
    category: "Mobile & 3D",
    usedIn: ["UMTRI"],
  },

  // Backend & Cloud
  {
    name: "Flask",
    iconPath: "skills/Flask",
    category: "Backend & Cloud",
    usedIn: ["HELLOMED", "KISA"],
  },
  {
    name: "FastAPI",
    iconPath: "skills/FastAPI",
    category: "Backend & Cloud",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "gRPC",
    iconPath: "skills/gRPC",
    category: "Backend & Cloud",
    usedIn: ["Aurora"],
  },
  {
    name: "WebSocket",
    iconPath: "skills/Socket.io",
    category: "Backend & Cloud",
    usedIn: ["KISA"],
  },
  {
    name: "MySQL",
    iconPath: "skills/MySQL",
    category: "Backend & Cloud",
    usedIn: ["HELLOMED", "KISA"],
  },
  {
    name: "PostgreSQL",
    iconPath: "skills/PostgreSQL",
    category: "Backend & Cloud",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "MongoDB",
    iconPath: "skills/MongoDB",
    category: "Backend & Cloud",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "Firebase",
    iconPath: "skills/Firebase",
    category: "Backend & Cloud",
    usedIn: ["KISA"],
  },
  {
    name: "AWS",
    iconPath: "skills/AWS",
    category: "Backend & Cloud",
    usedIn: ["Aurora", "HELLOMED", "KISA"],
  },

  // AI & Dev Tools
  {
    name: "Claude Code",
    iconPath: "skills/Claude",
    category: "AI & Dev Tools",
    usedIn: ["Aurora", "General use"],
  },
  {
    name: "Cursor",
    iconPath: "skills/Cursor",
    category: "AI & Dev Tools",
    usedIn: ["General use"],
  },
  {
    name: "Anthropic API",
    iconPath: "skills/Anthropic",
    category: "AI & Dev Tools",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "OpenAI API",
    iconPath: "skills/OpenAI",
    category: "AI & Dev Tools",
    usedIn: ["UMSI coursework"],
  },
  {
    name: "PyTorch",
    iconPath: "skills/Pytorch",
    category: "AI & Dev Tools",
    usedIn: ["DB Groups"],
  },
  {
    name: "TensorFlow",
    iconPath: "skills/TensorFlow",
    category: "AI & Dev Tools",
    usedIn: ["DB Groups"],
  },
  {
    name: "scikit-learn",
    iconPath: "skills/scikit-learn",
    category: "AI & Dev Tools",
    usedIn: ["DB Groups"],
  },
  {
    name: "Google Colab",
    iconPath: "skills/Google-colab",
    category: "AI & Dev Tools",
    usedIn: ["DB Groups"],
  },
  {
    name: "Git",
    iconPath: "skills/Git",
    category: "AI & Dev Tools",
    usedIn: ["General use"],
  },

  // Languages
  {
    name: "Python",
    iconPath: "skills/Python",
    category: "Languages",
    usedIn: ["Aurora", "HELLOMED", "KISA"],
  },
  {
    name: "TypeScript",
    iconPath: "skills/TypeScript",
    category: "Languages",
    usedIn: ["Aurora", "HELLOMED", "KISA"],
  },
  {
    name: "JavaScript",
    iconPath: "skills/JavaScript",
    category: "Languages",
    usedIn: ["UMTRI"],
  },
  {
    name: "Go",
    iconPath: "skills/Go",
    category: "Languages",
    usedIn: ["Aurora"],
  },
  {
    name: "Swift",
    iconPath: "skills/Swift",
    category: "Languages",
    usedIn: ["UMTRI"],
  },
  {
    name: "C",
    iconPath: "skills/C",
    category: "Languages",
    usedIn: ["UMich CS coursework"],
  },
  {
    name: "C++",
    iconPath: "skills/C++",
    category: "Languages",
    usedIn: ["UMich CS coursework"],
  },
  {
    name: "SQL",
    iconPath: "skills/SQL Developer",
    category: "Languages",
    usedIn: ["HELLOMED", "KISA"],
  },
];

export default skills;
