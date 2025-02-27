import Work from "./Work";
import GradProjects
 from "./GradProjects";
export default [
  {
    id: 1,
    title: "Experience",
    description: Work.map((w)=>w.designation).join(", "),
    path: "/experience",
  },
  {
    id: 2,
    title: "Projects",
    description: GradProjects.map((w)=>w.title).join(", "),
    path: "/projects",
  } 
];
