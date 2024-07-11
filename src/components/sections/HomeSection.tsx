"use client";

import { motion } from "framer-motion";
import ProjectButton from "../ProjectButton";
import NameCube from "../NameCube";
import SectionWrapper from "../SectionWrapper";

const HomeSection = ({
  changeLinkByTitle,
  isMobile,
}: {
  changeLinkByTitle: (title: string) => void;
  isMobile: () => boolean;
}) => {
  return (
    <SectionWrapper className="flex justify-center gap-x-8">
      <div className="relative w-full flex justify-center items-center gap-x-8 text-center md:text-left">
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
          className="absolute-center size-[500px] sm:size-[600px] bg-white rounded-full z-0"
        />

        <motion.div
          className="z-10 relative"
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
          <h2 className="text-5xl sm:text-6xl font-semibold leading-[1.25]">
            Frontend
            <br />
            Developer.
          </h2>

          <p className="my-12 text-base max-w-[300px] sm:max-w-[450px]">
            Hi, I&apos;m William, a passionate front-end developer. Dedicated to
            mastering and innoving the web.
          </p>

          <ProjectButton goToProject={() => changeLinkByTitle("projects")} />
        </motion.div>

        {!isMobile() && (
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
        )}
      </div>

      {isMobile() && <MobileFooterNote />}
    </SectionWrapper>
  );
};

const MobileFooterNote = () => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-full bg-white border border-black py-1 px-6 text-xs rounded-full whitespace-nowrap"
      style={{
        top: "calc(100% - 15px)",
      }}
    >
      ⚠️ Portfolio better on full resolution!
    </div>
  );
};

export default HomeSection;
