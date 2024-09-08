"use client";

import { Variants, motion } from "framer-motion";
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
  isMobile,
}: {
  links: NavLinks;
  isSelected: (index: number) => boolean;
  changeLinkByIndex: (index: number) => void;
  isMobile: () => boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const backgroundScreenVariants: Variants = {
    dim: {
      opacity: 0.5,
    },
    clear: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-screen h-screen bg-black z-10"
        animate={isDropdownOpen ? "dim" : "clear"}
        variants={backgroundScreenVariants}
        style={{
          scale: isDropdownOpen ? 1 : 0,
        }}
      />

      <nav className="sticky top-0 left-0 w-full flex justify-between px-8 p-6 bg-white z-20">
        <button onClick={() => changeLinkByIndex(0)}>William Galvin</button>

        {isMobile() ? (
          <MobileNavOptions
            {...{ links, changeLinkByIndex, isDropdownOpen, toggleDropdown }}
          />
        ) : (
          <FullNavOptions {...{ links, changeLinkByIndex, isSelected }} />
        )}
      </nav>
    </>
  );
};

const FullNavOptions = ({
  links,
  changeLinkByIndex,
  isSelected,
}: {
  links: NavLinks;
  changeLinkByIndex: (index: number) => void;
  isSelected: (index: number) => boolean;
}) => {
  return (
    <motion.ul layout className="flex gap-x-12">
      {links.map((link, i) => {
        return (
          <li key={i} className="relative">
            <motion.button
              onClick={() => changeLinkByIndex(i)}
              whileHover={{
                color: "#000000",
              }}
              style={{
                color: isSelected(i) ? "#000000" : "rgba(0, 0, 0, 0.4)",
                fontWeight: isSelected(i) ? "600" : "400",
              }}
            >
              {link.title}
            </motion.button>

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
  );
};

const MobileNavOptions = ({
  links,
  changeLinkByIndex,
  isDropdownOpen,
  toggleDropdown,
}: {
  links: NavLinks;
  changeLinkByIndex: (index: number) => void;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}) => {
  const onMobileLinkClicked = (index: number) => {
    toggleDropdown();
    changeLinkByIndex(index);
  };

  const dropdownVariants: Variants = {
    closed: {
      scaleY: 0,
    },
    open: {
      scaleY: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const dropdownChildrenVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <button onClick={toggleDropdown}>
        <FiMenu className="text-xl" />
      </button>

      <motion.ul
        className="absolute top-full left-0 w-full p-6 bg-neutral-100 space-y-7 origin-top"
        animate={isDropdownOpen ? "open" : "closed"}
        variants={dropdownVariants}
        initial={{
          scaleY: 0,
        }}
      >
        {links.map((link, i) => {
          return (
            <li key={i}>
              <motion.button
                onClick={() => onMobileLinkClicked(i)}
                className="flex items-center w-min pr-[5vw] gap-x-3 text-lg"
                variants={dropdownChildrenVariants}
                whileHover={{
                  columnGap: "20px",
                }}
              >
                <FiArrowRight />
                {link.title}
              </motion.button>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export type { NavLinks };
export default Navbar;
