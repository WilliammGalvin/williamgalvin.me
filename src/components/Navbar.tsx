"use client";

import Link from "next/link";
import { Variants, motion } from "framer-motion";
import useScreen from "@/hooks/useScreen";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { useState } from "react";

type NavLinks = {
  title: string;
  component: React.ReactNode;
}[];

const Navbar = ({
  links,
  isSelected,
  changeLinkByIndex,
}: {
  links: NavLinks;
  isSelected: (index: number) => boolean;
  changeLinkByIndex: (index: number) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { hasWindowSizeInitalized, isMobile } = useScreen(800);

  const backgroundScreenVariants: Variants = {
    dim: {
      opacity: 0.5,
    },
    clear: {
      opacity: 0,
    },
  };

  const dropdownVariants: Variants = {
    closed: {
      scaleY: 0,
    },
    open: {
      scaleY: 1,
    },
  };

  const dropdownChildrenVariants: Variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    hasWindowSizeInitalized() && (
      <>
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen bg-black z-10"
          animate={isDropdownOpen ? "dim" : "clear"}
          variants={backgroundScreenVariants}
        />
        <nav className="relative w-full flex justify-between px-8 p-6 bg-white z-20">
          <Link href="/">William Galvin</Link>

          {isMobile() ? (
            // Mobile Nav
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FiMenu />
              </button>

              <motion.ul
                className="absolute top-full left-0 w-full p-6 bg-neutral-100 space-y-5 origin-top"
                animate={isDropdownOpen ? "open" : "closed"}
                variants={dropdownVariants}
              >
                {links.map((link, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="flex items-center w-min pr-[5vw] gap-x-3 text-lg"
                      variants={dropdownChildrenVariants}
                      whileHover={{
                        columnGap: "20px",
                      }}
                    >
                      <FiArrowRight />
                      {link.title}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </>
          ) : (
            // Full nav
            <motion.ul layout className="flex gap-x-12">
              {links.map((link, i) => {
                return (
                  <li key={i} className="relative">
                    <button
                      onClick={() => changeLinkByIndex(i)}
                      style={{
                        color: isSelected(i) ? "#000000" : "rgba(0, 0, 0, 0.4)",
                        fontWeight: isSelected(i) ? "600" : "400",
                      }}
                    >
                      {link.title}
                    </button>

                    {isSelected(i) && (
                      <motion.div
                        layoutId="navLinkSelected"
                        className="absolute left-1/2 -translate-x-1/2 size-[6px] bg-black rounded-full"
                        style={{
                          top: "calc(100% + 3px)",
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </motion.ul>
          )}
        </nav>
      </>
    )
  );
};

export type { NavLinks };
export default Navbar;
