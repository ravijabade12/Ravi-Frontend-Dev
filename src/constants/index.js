import {
  frontend,
  ux,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  newsweb,
  postgresql,
  coverhunt,
  kelhel,
  threejs,
  amazonclone,
  dviewer,
  expenseTrack,
  githubviewer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Custom Website Development",
    icon: ux,
  },

  {
    title: "Landing Page Design",
    icon: ux,
  },
  {
    title: "Portfolio /  E-commerce website",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Threejs",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Xeroscape",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2024 - Present",
  },

  {
    title: "Web Developer Internship",
    company_name: "LetsGrowMore",
    icon: kelhel,
    iconBg: "#333333",
    date: "Oct 2023 - Nov 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Amazon Clone",
    description:
      "Built a responsive e-commerce platform using React, Redux, Tailwind CSS, and Swiper, featuring seamless navigation and dynamic product displays.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amazonclone,
    repo: "https://github.com/ravijabade12/AmazonClone",
    demo: "https://amazonclone-redux.netlify.app/",
  },

  {
    id: "project-2",
    name: "News Aggregator App",
    description:
      "Developed a responsive News Aggregator web application using React, Bootstrap, Firebase, and the GNews API to deliver real-time news across multiple categories.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: newsweb,
    repo: "https://github.com/ravijabade12/Aco-News.git",
    demo: "https://aco-worldwidenews.web.app/",
  },
  {
    id: "project-3",
    name: "Expense Tracker",
    description:
      "Created an Expense Tracker using React, Context API, useReducer, and Tailwind CSS to help users efficiently manage and track their expenses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context API",
        color: "green-text-gradient",
      },
      {
        name: "useReducer",
        color: "pink-text-gradient",
      },
    ],
    image: expenseTrack,
    repo: "https://github.com/ravijabade12/expenseTracker",
    demo: "https://expense-tracker-ravi.netlify.app/",
  },
  {
    id: "project-4",
    name: "3D Model Viewer",
    description: `Developed an interactive 3D Model Viewer using React Three Fiber, Tailwind CSS, and GLTF models, enabling seamless rendering and intuitive navigation for an enhanced user experience.`,
    tags: [
      {
        name: "react-three-fiber",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: dviewer,
    repo: "https://github.com/ravijabade12/SliderR3F.git",
    demo: "https://3dmodelviewerreact3f.netlify.app/",
  },
  {
    id: "project-5",
    name: "GitHub Profile Fetcher",
    description:
      "Built a GitHub Profile Fetcher using React and the GitHub REST API to provide detailed user insights, including followers, following, and recent repositories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: githubviewer,
    repo: "https://github.com/ravijabade12/githubProfileFetcher.git",
    demo: "https://githubprofilefetcherapi.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
