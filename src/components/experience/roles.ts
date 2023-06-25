import { MontechCard, OrigoHealth, YtakeNoteCard } from "./job-roles";

export const JOB_ROLES = {
  MONTECH: {
    duration: "2021 - Present",
    roles: [
      "Collaborate with designers to implement user-friendly, responsive and adaptable designs",
      "Worked with CMS to develop content-driven web applications that perfectly fit client’s interest.",
      //   "Established robust production and staging pipelines, utilizing Heroku, to streamline the deployment process of headless CMS backend applications.",
      //   "Implemented frontend automation tools (Husky, ESLint) and testing for optimized workflows, enhanced efficiency, and code quality.",
    ],
  },

  ORIGO_HEALTH: {
    duration: "2020 - 2021",
    roles: [
      "Collaborate with designers to implement user-friendly, responsive and adaptable designs",
      "Worked with CMS to develop content-driven web applications that perfectly fit client’s interest.",
      //   "Established robust production and staging pipelines, utilizing Heroku, to streamline the deployment process of headless CMS backend applications.",
      //   "Implemented frontend automation tools (Husky, ESLint) and testing for optimized workflows, enhanced efficiency, and code quality.",
    ],
  },
};

export const COMPANIES = [
  {
    title: "Montech Studios Inc",
    role: "Frontend Developer",
    description:
      "Collaborate with designers to implement user-friendly, responsive and adaptable designs",
    id: "montech",
    card: MontechCard,
    image: "/assets/images/montech.webp",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Firebase", "Redux"],
  },
  {
    title: "Origo Health",
    id: "origo",
    role: "Frontend Developer",
    description:
      "Collaborate with designers to implement user-friendly, responsive and adaptable designs",
    card: OrigoHealth,
    image: "/assets/images/origohealth.png",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Firebase", "Redux"],
  },

  {
    title: "Ytakenote",
    id: "ytakenote",
    role: "Frontend Developer",
    description:
      "Collaborate with designers to implement user-friendly, responsive and adaptable designs",
    card: YtakeNoteCard,
    image: "/assets/images/ytakenote.png",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Firebase", "Redux"],
  },
];
