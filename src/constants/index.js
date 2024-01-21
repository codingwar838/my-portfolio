import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mimilogo,
  onet,
  starlight,
  dateme,
  mikeshop,
  mikecollection,
  threejs,
  josh,
  mimi,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Computer Science Instructor",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Mimi",
    icon: mimilogo,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining Mimi dental clinic website existing codebase.",
      "Collaborating with cross-functional teams including product managers, designers and other developers to develop high and good quality apps",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing feedback to other developers.",
      "Also working as the social media manager",
    ],
  },
  {
    title: "React & Node.js Developer",
    company_name: "Onet",
    icon: onet,
    iconBg: "#383E56",
    date: "Jul 2022 - Jun 2023",
    points: [
      "Developing and maintaining web applications using Next.js, React.js, Node.js, TypeScript, JavaScript Tailwind css, Sass, Redux toolkit, Firebase and other related technologies.",
      "Collaborating with cross-functional teams including product managers, designers and other developers to develop high and good quality apps",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing feedback to other developers.",
    ],
  },
  {
    title: "Computer Science Instructor",
    company_name: "Starlight College",
    icon: starlight,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Jun 2022",
    points: [
      "Taught courses in data structures, algorithms, design patterns, programming languages and web development",
      "Developed and delivered engaging lectures, assignments, projects and hands-on coding exercises for practical skill development.",
      "Facilitated discussions on emerging technologies and industry trends.",
      "Fostered a passion for technology and critical thinking among students.",
    ],
  },
  {
    title: "Computer Science Instructor",
    company_name: "Headstart College",
    icon: "",
    iconBg: "#383E56",
    date: "Feb 2019 - Jan 2021",
    points: [
      "Taught courses in data structures, algorithms, design patterns, programming languages and web development",
      "Developed and delivered engaging lectures, assignments, projects and hands-on coding exercises for practical skill development.",
      "Facilitated discussions on emerging technologies and industry trends.",
      "Fostered a passion for technology and critical thinking among students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mike has proven to be one of the best, creative and passionate Software developer in Odua Telecoms.",
    name: "Odun David",
    designation: "CTO",
    company: "Onet",
    image: avatar,
  },
  {
    testimonial:
      "After Mike optimized our website, we gained more traffic by 60%. We can't thank him enough!",
    name: "Rita Luchi",
    designation: "CEO",
    company: "Mimi dental",
    image: mimi,
  },
  {
    testimonial:
      "I've never met a Software developer and computer science instructor as Mike, who is passionate with his job and truly cares about his students. ",
    name: "Joshua Adeoye",
    designation: "CTO",
    company: "Starlight",
    image: josh,
  },
];

const projects = [
  {
    name: "Dateme",
    description:
      "Dateme is a web dating application that allows users from different countries or continent to find love, make friends and meet new people. It makes it easier to find soul mate ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: dateme,
    source_code_link: "https://github.com/youngking44/dateme",
    live_demo_link: "http://dateme.onrender.com",
  },
  {
    name: "Mikeshop",
    description:
      "Mikeshop is an ecommerce web application that enables users to buy different electronic devices such as phones, laptops, watch, headphones e.t.c at their comfort of their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: mikeshop,
    source_code_link: "https://github.com/youngking44/mikeshop/",
    live_demo_link: "https://youngking-mikeshop.onrender.com/",
  },
  {
    name: "Mike Collections",
    description:
      "Mikecollection is an ecommerce application that enables users to buy different cute and latest wears such as clothes, shoes, bags e.t.c at their comfort of their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "styled-components",
        color: "orange-text-gradient",
      },
    ],
    image: mikecollection,
    source_code_link:
      "https://github.com/youngking44/react-nodejs-ecommerce-01",
    live_demo_link: "https://youngking-mikecollection.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
