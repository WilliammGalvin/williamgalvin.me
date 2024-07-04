"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { push } = useRouter();
  const [currentLink, setCurrentLink] = useState<number>(0);

  const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isSelected = (index: number) => {
    return index === currentLink;
  };

  const changeLink = (index: number, href: string) => {
    setCurrentLink(index);
    push(href);
  };

  return (
    <nav className="flex justify-between px-8 p-6 border-black">
      <Link href="/">William Galvin</Link>

      <motion.ul layout className="flex gap-x-12">
        {links.map((link, i) => {
          return (
            <li key={i} className="relative">
              <button
                onClick={() => changeLink(i, link.href)}
                style={{
                  color: isSelected(i) ? "#000000" : "rgba(0, 0, 0, 0.4)",
                  fontWeight: isSelected(i) ? "600" : "400",
                }}
              >
                {link.name}
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
    </nav>
  );
};

export default Navbar;
