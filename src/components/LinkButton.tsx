"use client";

import { useAnimate } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) => {
  const [scope, animate] = useAnimate();

  return (
    <Link
      onMouseEnter={(_) => {
        animate(scope.current, {
          marginLeft: ["0", "10px"],
        });
      }}
      onMouseLeave={(_) => {
        animate(scope.current, {
          marginLeft: ["10px", "0"],
        });
      }}
      href={href}
      target="_blank"
      className={`border-2 border-black border-spacing-2 inline-flex text-sm sm:text-base rounded-xl pl-8 pr-4 py-1 items-center gap-x-6`}
    >
      {children}

      <motion.div ref={scope}>
        <FiArrowRight />
      </motion.div>
    </Link>
  );
};

export default LinkButton;
