import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects: {
    title: string;
    description: string;
    url?: string;
    githubUrl?: string;
    tags: string[];
  }[] = [
    {
      title: "M.E.K Breakfast House",
      description: "A production website for a local breakfast restaurant.",
      url: "https://www.mekbreakfast.ca",
      tags: ["React", "NextJS", "Framer-motion", "Typescript", "TailwindCSS"],
    },
    {
      title: "store-app",
      description:
        "A demo store app that fetches product information from fakestoreapi.com and displays it in a clean and visually appealing way.",
      githubUrl: "https://github.com/WilliammGalvin/store-app",
      tags: ["React", "React-router", "Typescript", "TailwindCSS"],
    },
    {
      title: "map-loader",
      description:
        "A template to dynamically fetch and load tiles for a 2D game. A system designed for customizability and flexability.",
      githubUrl: "https://github.com/WilliammGalvin/map-loader",
      tags: ["Typescript", "p5.js"],
    },
    {
      title: "williamgalvin.me",
      description: "The portfolio website you're viewing right now!",
      githubUrl: "https://github.com/WilliammGalvin/williamgalvin.me",
      tags: ["React", "NextJS", "Framer-motion", "Typescript", "TailwindCSS"],
    },
  ];

  return (
    <PageWrapper
      title={{
        header: "What I've made",
        description:
          "Below is a list of projects that display all of the relevant technologies I have mastered.",
      }}
    >
      <div className="flex items-center justify-center mb-12">
        <ul className="grid grid-cols-2 gap-4">
          {projects.map((proj, i) => {
            return (
              <li key={i}>
                <ProjectCard props={{ ...proj }} />
              </li>
            );
          })}
        </ul>
      </div>
    </PageWrapper>
  );
}
