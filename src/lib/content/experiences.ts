import { Experiences } from "@lib/types/experiences";

const experiences: Experiences = {
  UMTRI: {
    title: "Research Assistant",
    company: "University of Michigan Transportation Research Institute (UMTRI)",
    location: "Ann Arbor, MI",
    start: "May 2025",
    end: "Present",
    description:
      "Currently a full-time research assistant contributing mainly on the development of web and mobile applications, handling 3D models from actual human posture and face measurements and wheelchair models.",
    projects: [
      {
        title:
          "Online 3D parametric wheelchair - human interaction simulation model",
        descriptions: [
          "Implemented modeling methods using different frameworks for 3D human (Three.js) and wheelchair (JSCAD) models, and optimized the interaction between these models, reducing latency per computation by approximately 60%.",
        ],
        skills: [
          { name: "Javascript", iconPath: "skills/JavaScript" },
          { name: "Three.js", iconPath: "skills/Three.js" },
          { name: "JSCAD", iconPath: "skills/jscad" },
        ],
        cardContent: {
          internalLink: null,
          preview: "/project-previews/wheelchair.png",
          externalLink: "https://humanshape.org/WheelchairTool/",
          githubLink: null,
        },
      },
      {
        title: "3D face mask scanning iOS mobile application",
        descriptions: [
          "Currently developing an application used to scan faces through camera and generate 3D mask objects, using Swift.",
          "Successfully implemented full stack integrations into a native iOS application, and using responses data from the server generated 3D models.",
          "Designed views for rendering 3D models on a 2D screen, using iOS native frameworks mainly intended for visionOS programming.",
        ],
        skills: [
          { name: "Swift", iconPath: "skills/Swift" },
          { name: "SwiftUI", iconPath: "skills/Swift" },
          { name: "RealityKit", iconPath: "skills/Apple" },
        ],
        cardContent: {
          internalLink: null,
          preview: "/project-previews/face-mask.png",
          externalLink: null,
          githubLink: null,
        },
      },
    ],
  },
  HELLOMED: {
    title: "Full Stack Engineer",
    company: "HELLOMED",
    location: "Ann Arbor, MI",
    start: "Mar 2024",
    end: "May 2025",
    description:
      "Spearheaded the migration of a local medical clinic's website from Wix to a more scalable, customizable and secure platform, improving its SEO and user experience.",
    projects: [
      {
        title: "HELLOMED Website",
        cardContent: {
          internalLink: null,
          preview: "/project-previews/hellomed.png",
          externalLink: "https://www.hello-med.com/",
          githubLink: [
            "https://github.com/dongsub0918/hellomed-client",
            "https://github.com/dongsub0918/hellomed-server",
          ],
        },
        descriptions: [
          "Migrated legacy Wix site to a custom developed application, enhancing UX and enabling full control over the features.",
          "Built and deployed HIPAA-compliant systems for processing sensitive patient data, using presigned URLs, auth tokens, and strict CORS rules; reliably handling 300+ monthly submissions of sensitive patient medical data including images.",
          "Optimized search engine performance through search engine optimization (SEO) techniques, including the use of traffic-informed metadata, semantic HTML and structured data resulting in a 30%+ increase in organic traffic.",
        ],
        skills: [
          { name: "Typescript", iconPath: "skills/TypeScript" },
          { name: "Python", iconPath: "skills/Python" },
          { name: "MySQL", iconPath: "skills/MySQL" },
          { name: "React", iconPath: "skills/React" },
          { name: "Tailwind CSS", iconPath: "skills/Tailwind CSS" },
          { name: "Next.js", iconPath: "skills/Next.js" },
          { name: "AWS S3", iconPath: "skills/AWS" },
          { name: "AWS RDS", iconPath: "skills/AWS" },
          { name: "AWS Elasticbeanstalk", iconPath: "skills/AWS" },
          { name: "SEO", iconPath: "skills/SEO" },
        ],
      },
    ],
  },
  KISA: {
    title: "IT Team Lead",
    company:
      "Korean International Student Association (University of Michigan KISA)",
    location: "Ann Arbor, MI",
    start: "Sep 2022",
    end: "Apr 2025",
    description:
      "Led and contributed alongside 7 teammates to proactively build applications addressing the association's IT needs.",
    projects: [
      {
        title: "KISA Community Web Application",
        cardContent: {
          internalLink: null,
          preview: "/project-previews/kisa.png",
          externalLink: "https://www.umichkisa.com/",
          githubLink: [
            "https://github.com/dongsub0918/kisa-client",
            "https://github.com/dongsub0918/kisa-server",
          ],
        },
        descriptions: [
          "Designed and implemented servers and databases to power the bulletin board feature, serving as a platform for +400 user posts and externally requested job postings, with traffic of ~1,000 unique users per day.",
          "Deployed resources on AWS and utilized AWS Cloudfront's content delivery network features to efficiently serve users geographically split between the US and Korea, cutting image loading latency by 95% for Korean users.",
        ],
        skills: [
          { name: "Typescript", iconPath: "skills/TypeScript" },
          { name: "Python", iconPath: "skills/Python" },
          { name: "MySQL", iconPath: "skills/MySQL" },
          { name: "React", iconPath: "skills/React" },
          { name: "Tailwind CSS", iconPath: "skills/Tailwind CSS" },
          { name: "Next.js", iconPath: "skills/Next.js" },
          { name: "AWS S3", iconPath: "skills/AWS" },
          { name: "AWS RDS", iconPath: "skills/AWS" },
          { name: "AWS Elasticbeanstalk", iconPath: "skills/AWS" },
          { name: "AWS Cloudfront", iconPath: "skills/AWS" },
        ],
      },
      {
        title: "Real-time Food Ordering Platform (Pocha)",
        cardContent: {
          internalLink: null,
          preview: "/project-previews/pocha.png",
          externalLink: "https://www.umichkisa.com/pocha",
          githubLink: [
            "https://github.com/dongsub0918/kisa-client",
            "https://github.com/dongsub0918/kisa-server",
          ],
        },
        descriptions: [
          "Designed and implemented a reliable and live notification system for order status updates using socket communication.",
          "Prevented transactions on sold-out items by implementing a fault-tolerant stock update algorithm on the server.",
          "Hosted two events which involved 300+ participants, 100+ transactions and $4,000+ revenue using the application.",
        ],
        skills: [
          { name: "Typescript", iconPath: "skills/TypeScript" },
          { name: "Python", iconPath: "skills/Python" },
          { name: "MySQL", iconPath: "skills/MySQL" },
          { name: "React", iconPath: "skills/React" },
          { name: "Tailwind CSS", iconPath: "skills/Tailwind CSS" },
          { name: "Next.js", iconPath: "skills/Next.js" },
          { name: "AWS S3", iconPath: "skills/AWS" },
          { name: "AWS RDS", iconPath: "skills/AWS" },
          { name: "AWS Elasticbeanstalk", iconPath: "skills/AWS" },
          { name: "AWS Cloudfront", iconPath: "skills/AWS" },
        ],
      },
    ],
  },
  DBGROUPS: {
    title: "Machine Learning Engineer",
    company: "DB Groups",
    location: "Seoul, South Korea",
    start: "Jun 2023",
    end: "Aug 2023",
    description:
      "While being a machine learning engineer of the DB groups, I was seconded to DB Hitek, a semiconductor manufacturing company, to develop a wafer chip defect detection model for most of my time.",
    projects: [
      {
        title: "Wafer Chip Defect Detection",
        cardContent: {
          internalLink: null,
          preview: null,
          externalLink: null,
          githubLink: null,
        },
        descriptions: [
          "Initiated the machine learning model development from scratch by collecting real faulty wafer chip images from production lines by collaborating with DB Hitek's 3 different semiconductor factory teams.",
          "Developed a prototype capable of detecting whether the chip is damaged or not, and classifying 10 most common defect types (11 total classes), achieving 95% accuracy on a test dataset, outperforming manual inspection in reliability.",
        ],
        skills: [
          { name: "Python", iconPath: "skills/Python" },
          { name: "Tensorflow", iconPath: "skills/Tensorflow" },
          { name: "Pytorch", iconPath: "skills/Pytorch" },
          { name: "Scikit-learn", iconPath: "skills/Scikit-learn" },
          { name: "Pandas", iconPath: "skills/Pandas" },
          { name: "Numpy", iconPath: "skills/Numpy" },
          { name: "Google Colab", iconPath: "skills/Google-Colab" },
        ],
      },
    ],
  },
  //   ROWAN: {
  //     title: "Data Analyst",
  //     company: "ROWAN",
  //     location: "Seoul, South Korea",
  //     start: "Apr 2021",
  //     end: "Aug 2021",
  //     description:
  //       "Processed neurosurgery diagnosis natural language data from actual Alzheimer's patients using AI models. Also developed a motion capture game designed to cure early stage Alzheimer's using Python and Mediapipe.",
  //     projects: [],
  //   },
};

export default experiences;
