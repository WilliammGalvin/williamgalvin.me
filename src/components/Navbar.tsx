import Link from "next/link";
import { motion } from "framer-motion";

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
  changeLinkByIndex: (index: number) => number;
}) => {
  return (
    <nav className="w-full flex justify-between px-8 p-6 border-black">
      <Link href="/">William Galvin</Link>

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
    </nav>
  );
};

export type { NavLinks };
export default Navbar;
