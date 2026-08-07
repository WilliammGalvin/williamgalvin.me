"use client";

import { motion } from "framer-motion";
import ProjectButton from "../ProjectButton";
import NameCube from "../NameCube";
import SectionWrapper from "../SectionWrapper";
// import Link from "next/link";

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
        {/* {!isMobile() && (
          <Link
            href="https://cherry.williamgalvin.me/"
            className="absolute right-6 bottom-6 px-6 py-2 rounded-lg bg-red-200 border-black border-2 hover:bg-red-300 ease-in-out duration-150"
          >
            🍒 Cherry Language
          </Link>
        )} */}

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
            Systems
            <br />
            Developer.
          </h2>

          <h3 className="mt-12 mb-1 font-semibold text-xl">
            Hi, I&apos;m William 👋
          </h3>

          <div className="mb-12 text-base max-w-[300px] sm:max-w-[450px] space-y-3">
            <p>
              Currently at <span className="font-semibold">RBC Capital Markets</span>, building tools for Canada's designated market-making desk.<br />
            </p>
            <div>
              <p>
                What I&apos;m passionate about:
              </p>
              <ul className="list-disc ml-4 text-gray-800">
                <li>
                  <span>Trading systems</span><br />
                </li>
                <li>
                  <span>Compilers and programming languages</span><br />
                </li>
                <li>
                  <span>Performance optimization</span><br />
                </li>
              </ul>
            </div>

            <p>
              Available for{" "}
              <span className="font-semibold">winter</span>
              {" "}and{" "}
              <span className="font-semibold">summer</span>
              {" "}internships.
            </p>
          </div>

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
