import { Experiences } from "@lib/types/experiences";

const experiences: Experiences = {
  UMTRI: {
    title: "Research Assistant",
    company: "University of Michigan Transportation Research Institute (UMTRI)",
    location: "Ann Arbor, MI",
    start: "May 2025",
    end: null,
    description:
      "Currently a full-time research assistant contributing mainly on the development of web and mobile applications, handling 3D models from actual human posture and face measurements and wheelchair models.",
    projects: [
      {
        title:
          "Online 3D parametric wheelchair - human interaction simulation model",
        externallink: "https://humanshape.org/WheelchairTool/",
        link: null,
        preview: "/project-previews/wheelchair.png",
        descriptions: [
          "Implemented modeling methods using different frameworks for 3D human (Three.js) and wheelchair (JSCAD) models, and optimized the interaction between these models, reducing latency per computation by approximately 60%.",
        ],
        skills: ["Javascript", "Three.js", "JSCAD"],
      },
      {
        title: "3D face mask scanning iOS mobile application",
        externallink: "",
        link: null,
        preview: null,
        descriptions: [
          "Currently developing an application used to scan faces through camera and generate 3D mask objects, using Swift.",
        ],
        skills: ["Swift"],
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
        externallink: "https://www.hello-med.com/",
        link: null,
        preview: "/project-previews/hellomed.png",
        descriptions: [
          "Deployed HIPAA compliant, reliable, and highly scalable databases and REST API servers for handling medical data including images using presigned URLs and tokens, successfully handling 300+ data submissions per month.",
          "Improved organic traffic by +30% by implementing relevant metadata and structured data derived from traffic analysis.",
        ],
        skills: [
          "Typescript",
          "Python",
          "MySQL",
          "React",
          "Tailwind CSS",
          "Next.js",
          "AWS S3",
          "AWS RDS",
          "AWS Elasticbeanstalk",
          "SEO",
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
        externallink: "https://www.umichkisa.com/",
        link: null,
        preview: "/project-previews/kisa.png",
        descriptions: [
          "Designed and implemented servers and databases to power the bulletin board feature, serving as a platform for +400 user posts and externally requested job postings, with traffic of ~1,000 unique users per day.",
          "Deployed resources on AWS and utilized AWS Cloudfront's content delivery network features to efficiently serve users geographically split between the US and Korea, cutting image loading latency by 95% for Korean users.",
        ],
        skills: [
          "Typescript",
          "Python",
          "MySQL",
          "React",
          "Tailwind CSS",
          "Next.js",
          "AWS S3",
          "AWS RDS",
          "AWS Elasticbeanstalk",
          "AWS Cloudfront",
        ],
      },
      {
        title: "Real-time Food Ordering Platform (Pocha)",
        externallink: "https://www.umichkisa.com/pocha",
        link: null,
        preview: "/project-previews/pocha.png",
        descriptions: [
          "Designed and implemented a reliable and live notification system for order status updates using socket communication.",
          "Prevented transactions on sold-out items by implementing a fault-tolerant stock update algorithm on the server.",
          "Hosted two events which involved 300+ participants, 100+ transactions and $4,000+ revenue using the application.",
        ],
        skills: [
          "Typescript",
          "Python",
          "MySQL",
          "React",
          "Tailwind CSS",
          "Next.js",
          "AWS S3",
          "AWS RDS",
          "AWS Elasticbeanstalk",
          "AWS Cloudfront",
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
        externallink: "https://www.dbhitek.com/en",
        link: null,
        preview: null,
        descriptions: [
          "Initiated the machine learning model development from scratch by collecting real faulty wafer chip images from production lines by collaborating with DB Hitek's 3 different semiconductor factory teams.",
          "Developed a prototype capable of detecting whether the chip is damaged or not, and classifying 10 most common defect types (11 total classes), achieving 95% accuracy on a test dataset, outperforming manual inspection in reliability.",
        ],
        skills: [
          "Python",
          "Tensorflow",
          "Pytorch",
          "Scikit-learn",
          "Pandas",
          "Numpy",
          "Google Colab",
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
