"use client";

import Navbar, { NavLinks } from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import useNav from "@/hooks/useNav";
import { motion } from "framer-motion";

export default function Home() {
  const linkTitles: string[] = ["Home", "About", "Projects", "Contact"];

  const {
    isSelected,
    getCurrentLinkIndex,
    getLastSelectedIndex,
    changeLinkByIndex,
    changeLinkByTitle,
  } = useNav(linkTitles);

  const linkComponents: React.ReactNode[] = [
    <HomeSection {...{ changeLinkByTitle }} />,
    <AboutSection />,
    <ProjectsSection />,
    <ContactSection />,
  ];

  const getNavLinks = (): NavLinks => {
    return linkTitles.map((linkTitle, i) => {
      return { title: linkTitle, component: linkComponents[i] };
    });
  };

  const getSectionAnimationDuration = (): number => {
    return (
      0.1 * Math.abs(getLastSelectedIndex() - getCurrentLinkIndex()) + 0.45
    );
  };

  return (
    <section className="min-h-screen h-full bg-neutral-50 flex flex-col overflow-hidden">
      <Navbar links={getNavLinks()} {...{ isSelected, changeLinkByIndex }} />

      <motion.ul
        className="flex-1 grid grid-flow-col"
        animate={{
          transform: `translateX(-${getCurrentLinkIndex() * 100}vw)`,
        }}
        transition={{
          duration: getSectionAnimationDuration(),
          ease: "circInOut",
        }}
      >
        {linkComponents.map((comp, i) => {
          return (
            <li
              key={i}
              className="flex w-[100vw] max-w-[100vw] h-full overflow-hidden"
            >
              {comp}
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}
