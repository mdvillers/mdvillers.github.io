import Work from "./Work";

export default [
  {
    id: 1,
    title: "Experience",
    description: Work.map((w) => w.designation).join(", "),
    path: "/experience",
  },
  {
    id: 2,
    title: "Contact",
    description: "Reach me by email and connect on social platforms.",
    path: "/contact",
  },
];
