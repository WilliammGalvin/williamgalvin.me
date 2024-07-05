"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  tags: string[];
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[] | null>();

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch("./projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error("Error fetching projects", err));
    };

    fetchProjects();
  }, []);

  return (
    <SectionWrapper
      title={{
        header: "What I've made",
        description:
          "Below is a list of projects that display all of the relevant technologies I have mastered.",
      }}
    >
      {projects ? (
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
      ) : (
        <span>...</span>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
