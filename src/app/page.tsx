"use client";

import Navbar, { NavLinks } from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import useNav from "@/hooks/useNav";

export default function Home() {
  const linkTitles: string[] = ["Home", "About", "Projects", "Contact"];

  const {
    getCurrentLinkIndex,
    isSelected,
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

  return (
    <section className="min-h-screen h-full bg-neutral-50 flex flex-col">
      <Navbar links={getNavLinks()} {...{ isSelected, changeLinkByIndex }} />
      {linkComponents[getCurrentLinkIndex()]}
    </section>
  );
}
