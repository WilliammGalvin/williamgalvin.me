"use client";

import { motion } from "framer-motion";
import NameCube from "@/components/NameCube";
import PageWrapper from "@/components/PageWrapper";
import ProjectButton from "@/components/ProjectButton";

export default function Home() {
  return (
    <PageWrapper className="flex flex-1 relative items-center justify-center gap-x-6">
      <div className="absolute-center size-[600px] bg-white rounded-full z-0" />

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

        <p className="my-12 max-w-[500px]">
          Hi, I&apos;m William, a passionate front-end developer. Dedicated to
          mastering and innoving the web.
        </p>

        <ProjectButton />
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
    </PageWrapper>
  );
}
