"use client";

import { FiArrowRight } from "react-icons/fi";
import { motion, useAnimate } from "framer-motion";

const ProjectButton = ({ goToProject }: { goToProject: () => void }) => {
  const [scope, animate] = useAnimate();

  return (
    <button
      onClick={goToProject}
      className="relative inline-flex items-center"
      onMouseEnter={(_) => {
        animate(scope.current, {
          marginLeft: ["0", "5px"],
        });
      }}
      onMouseLeave={(_) => {
        animate(scope.current, {
          marginLeft: ["5px", "0"],
        });
      }}
    >
      <div
        className="absolute left-0 top-1/2 bg-neutral-300 opacity-70 rounded-full size-12 z-0"
        style={{
          transform: "translateY(calc(-50% + 2px))",
        }}
      />

      <div className="relative ml-4 gap-x-3 z-10 font-semibold flex items-center">
        See my projects
        <motion.span ref={scope}>
          <FiArrowRight />
        </motion.span>
      </div>
    </button>
  );
};

export default ProjectButton;
