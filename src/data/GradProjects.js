import health from "../assets/images/projects/health.svg";
import whiteboard from "../assets/images/projects/whiteboard.svg";
import heart from "../assets/images/projects/heart.svg";
import bus from "../assets/images/projects/bus.svg";

export default [
  {
    id: 1,
    title: "Medical Store Managment System",
    icon: health,
    description:
      "A project on C which can be used by medical stores for recording/updating different medicines,suppliers and clients.",
    githubPath: null,
    demoPath: null,
    year: "2017",
    techUsed: "C",
  },
  {
    id: 2,
    title: "Collaborative Whiteboard",
    description:
      "A project on C++ that has feature of sharing drawing among the connected networks that can be used for online study.",
    icon: whiteboard,
    githubPath: null,
    demoPath: null,
    year: "2018",
    techUsed: "C++",
  },
  {
    id: 3,
    title: "YETI",
    icon: heart,
    description:
      "A progressive web app build featuring medical assist and emergency services for tourist",
    githubPath: "https://github.com/rabinadk1/Yeti",
    demoPath: null,
    year: "2019",
    techUsed: "React, Firebase",
  },
  {
    id: 4,
    title: "Public Bus Tracker",
    icon: bus,
    description: "Realtime bus tracking app , Android + Web App!",
    githubPath: null,
    demoPath: null,
    year: "2021",
    techUsed: "React, Node JS, React Native and MongoDB",
  },
  {
    id: 5,
    title: "Blockchain Based Vaccine Certificate",
    icon: bus,
    description: "Final year project. Collaborated with team members to design and implement blockchain based vaccination certificate",
    githubPath: null,
    demoPath: null,
    year: "2022",
    techUsed: "EthereumJS, NextJS and ExpressJS",
  }
].reverse()
