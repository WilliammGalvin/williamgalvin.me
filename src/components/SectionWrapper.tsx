"use client";

import { motion } from "framer-motion";

const SectionWrapper = ({
  children,
  className,
  title,
  footerSpacing,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: { header: string; description: string };
  footerSpacing?: boolean;
}) => {
  return (
    <div
      className={`relative flex-1 w-full h-full ${className} ${
        footerSpacing ? "mb-12" : ""
      }`}
    >
      {title && (
        <motion.div
          className="text-center mt-12 mb-16 space-y-6 flex flex-col items-center"
          initial={{
            opacity: 0,
            y: -6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <h2 className="font-semibold text-3xl">{title.header}</h2>

          <p className="text-neutral-600 max-w-[550px]">{title.description}</p>
        </motion.div>
      )}

      {children}
    </div>
  );
};

export default SectionWrapper;
