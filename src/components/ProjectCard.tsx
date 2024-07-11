"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion, useAnimate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({
  props,
}: {
  props: {
    title: string;
    description: string;
    url?: string;
    githubUrl?: string;
    tags: string[];
  };
}) => {
  return (
    <div className="flex flex-col justify-between border-2 border-black bg-white p-6 h-full">
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

        <div>
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
      </div>
    </div>
  );
};

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [scope, animate] = useAnimate();

  return (
    <Link
      onMouseEnter={(_) => {
        animate(scope.current, {
          marginLeft: ["0", "10px"],
        });
      }}
      onMouseLeave={(_) => {
        animate(scope.current, {
          marginLeft: ["10px", "0"],
        });
      }}
      href={href}
      target="_blank"
      className="border-2 border-black border-spacing-2 inline-flex text-sm sm:text-base rounded-xl pl-8 pr-4 py-1 items-center gap-x-6"
    >
      {children}

      <motion.div ref={scope}>
        <FiArrowRight />
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
