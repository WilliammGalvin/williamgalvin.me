import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import SectionWrapper from "../SectionWrapper";
import { useEffect, useState } from "react";

type ExtrasData = {
  title: string;
  description: string;
};

const ExtrasSection = () => {
  const [projects, setProjects] = useState<ExtrasData[] | null>();

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch("./extras.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error("Error fetching extras", err));
    };

    fetchProjects();
  }, []);

  return (
    <SectionWrapper
      title={{
        header: "Coding extra curriculars",
        description:
          "A list of my proudest developmental extra curriculars. These are extras that I have done to benefit others while applying all my programming skills.",
      }}
      className="flex flex-col items-center"
    >
      {projects ? (
        <ul className="flex flex-col gap-y-5 items-center pb-12">
          {projects.map((project, i) => (
            <li key={i} className="border-2 border-black bg-white p-4">
              <h3 className="font-semibold mb-4">{project.title}</h3>
              <p className="max-w-[525px]">{project.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>...</p>
      )}
    </SectionWrapper>
  );
};

export default ExtrasSection;
