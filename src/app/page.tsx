"use client";

import Navbar, { NavLinks } from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExtrasSection from "@/components/sections/ExtrasSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import useNav from "@/hooks/useNav";
import useScreen from "@/hooks/useScreen";
import { motion } from "framer-motion";

export default function Home() {
  const linkTitles: string[] = [
    "Home",
    "About",
    "Extras",
    "Projects",
    "Contact",
  ];

  const {
    isSelected,
    getCurrentLinkIndex,
    getLastSelectedIndex,
    changeLinkByIndex,
    changeLinkByTitle,
  } = useNav(linkTitles);

  const { hasWindowSizeInitalized, isMobile } = useScreen(800);

  const linkComponents: React.ReactNode[] = [
    <HomeSection key="home" {...{ changeLinkByTitle, isMobile }} />,
    <AboutSection key="about" />,
    <ExtrasSection key="extras" />,
    <ProjectsSection key="projects" />,
    <ContactSection key="contact" />,
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
    hasWindowSizeInitalized() && (
      <main className="min-h-screen text-sm sm:text-base h-full bg-neutral-50 flex flex-col">
        <Navbar
          links={getNavLinks()}
          {...{ isSelected, isMobile, changeLinkByIndex }}
        />

        <div className="flex-1 relative overflow-x-hidden">
          <motion.ul
            className="absolute inset-0 max-h-full grid grid-flow-col"
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
                  className="flex w-screen max-w-screen h-full overflow-y-scroll overflow-x-hidden"
                >
                  {comp}
                </li>
              );
            })}
          </motion.ul>
        </div>
      </main>
    )
  );
}
