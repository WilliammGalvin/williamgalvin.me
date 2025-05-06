"use client";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ProjectData } from "./sections/ProjectsSection";
import useScreen from "@/hooks/useScreen";
import LinkButton from "./LinkButton";

const projectCategories: { tag: string; title: string; hex: string }[] = [
  { tag: "web", title: "Web Development", hex: "#bddeff" },
  { tag: "mobile", title: "Mobile Application", hex: "#ffcb99" },
  { tag: "c-plus-plus", title: "C++ Development", hex: "#a8c9a5" },
  { tag: "c", title: "C Development", hex: "#ffe7b9" },
  { tag: "rust", title: "Rust Development", hex: "#d7b4f3" },
  { tag: "desktop", title: "Desktop Application", hex: "#f1a7a3" },
  { tag: "go", title: "Go Development", hex: "#b3e5fc" }, // light sky blue
];

const ProjectCard = ({ props }: { props: ProjectData }) => {
  const { isMobile } = useScreen(375);
  const category = projectCategories.find((c) => c.tag === props.category);

  return (
    <motion.div
      className="relative flex flex-col justify-between border-2 border-black bg-white p-6 h-full"
      whileHover={{
        borderRadius: "12px",
      }}
    >
      {category && !isMobile() && (
        <div
          className="absolute border-2 border-black left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-3 py-[2px] text-xs rounded-full"
          style={{
            backgroundColor: category.hex,
          }}
        >
          {category.title}
        </div>
      )}

      <div className="mb-12">
        <span className="font-semibold mb-2">{props.title}</span>
        <p className="text-neutral-700 max-w-[550px]">{props.description}</p>
      </div>

      <div>
        <ul className="flex flex-wrap gap-2 mb-5">
          {props.tags.map((tag, i) => {
            return (
              <li
                key={i}
                className="border border-black rounded-full px-[11px] text-xs"
              >
                <span>{tag}</span>
              </li>
            );
          })}
        </ul>

        {props.url && <LinkButton href={props.url}>View Link</LinkButton>}

        {props.githubUrl && (
          <LinkButton href={props.githubUrl}>
            <div className="flex items-center gap-x-3">
              <FaGithub />
              GitHub
            </div>
          </LinkButton>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
