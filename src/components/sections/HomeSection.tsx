"use client";

import { motion } from "framer-motion";
import ProjectButton from "../ProjectButton";
import NameCube from "../NameCube";
import SectionWrapper from "../SectionWrapper";

const HomeSection = ({
  changeLinkByTitle,
}: {
  changeLinkByTitle: (title: string) => void;
}) => {
  return (
    <SectionWrapper className="flex items-center justify-center gap-x-8">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute-center size-[600px] bg-white rounded-full z-0"
      />

      <motion.div
        className="z-10"
        initial={{
          opacity: 0,
          x: -6,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <h2 className="text-6xl font-semibold leading-[1.25]">
          Frontend
          <br />
          Developer.
        </h2>

        <p className="my-12 max-w-[450px]">
          Hi, I&apos;m William, a passionate front-end developer. Dedicated to
          mastering and innoving the web.
        </p>

        <ProjectButton goToProject={() => changeLinkByTitle("projects")} />
      </motion.div>

      <motion.div
        className="cube-container relative"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      >
        <div className="absolute-center">
          <NameCube />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default HomeSection;
