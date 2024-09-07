"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Indie_Flower } from "next/font/google";
import swirlArrow from "../../../public/swirl_arrow.png";
import useScreen from "@/hooks/useScreen";

export type ProjectData = {
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  tags: string[];
  category: string;
};

const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectData[] | null>();
  const { isMobile } = useScreen(1380);

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
          "Below is a list of projects that I have made within the last year to showcase my skills. They are all built off of problems that I have experienced and are my unique solutions to them.",
      }}
    >
      {projects ? (
        <div
          className={`${
            isMobile() ? "mt-[125px]" : ""
          } relative flex items-center justify-center pb-12`}
        >
          <ul className="relative grid grid-flow-row sm:grid-cols-2 gap-x-4 gap-y-7 mx-8">
            {projects.map((proj, i) => {
              return (
                <li key={i}>
                  <ProjectCard props={{ ...proj }} />
                </li>
              );
            })}

            <div
              className="absolute flex justify-end right-0 top-0"
              style={{
                transform: isMobile()
                  ? "translateY(calc(-1 * 100% - 15px))"
                  : "translateY(calc(-1 * 100% + 18px)) translateX(50%)",
              }}
            >
              <span
                className={`${
                  isMobile() ? "text-base" : "text-lg"
                } mr-[-10px] mt-[-27px] ${indieFlower.className}`}
              >
                Click me for
                <br /> more info!
              </span>

              <Image
                src={swirlArrow}
                alt="arrow"
                className={isMobile() ? "size-[40px]" : "size-[65px]"}
                style={{
                  transform: isMobile()
                    ? "rotateY(180deg) rotateZ(50deg)"
                    : "rotateY(180deg) rotateZ(30deg)",
                }}
              />
            </div>
          </ul>
        </div>
      ) : (
        <span>...</span>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
