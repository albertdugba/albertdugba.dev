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
    id: "montech",
    card: MontechCard,
  },
  {
    title: "Origo Health",
    id: "origo",
    card: OrigoHealth,
  },

  {
    title: "Ytakenote",
    id: "ytakenote",
    card: YtakeNoteCard,
  },
];
