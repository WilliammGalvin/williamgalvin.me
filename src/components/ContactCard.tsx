"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ContactCard = ({
  title,
  icon,
  href,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-neutral-200 z-0" />

      <motion.div
        whileHover={{
          transform: "rotateX(15deg) rotateY(5deg)",
        }}
      >
        <Link
          href={href}
          className="relative flex items-center gap-x-5 border-2 border-black w-full px-6 py-4 z-10 bg-white"
        >
          <span className="text-3xl">{icon}</span>

          <div className="flex flex-col">
            <span className="font-semibold">{title}</span>
            <span className="text-neutral-700">{children}</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ContactCard;
