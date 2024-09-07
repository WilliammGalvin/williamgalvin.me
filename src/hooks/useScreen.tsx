"use client";

import assert from "assert";
import { useEffect, useState } from "react";

const useScreen = (mobileMaxSize?: number) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
  }, []);

  const hasWindowSizeInitalized = (): boolean => {
    return windowWidth !== null;
  };

  const isMobile = (): boolean => {
    if (!hasWindowSizeInitalized()) return false;
    return windowWidth! <= (mobileMaxSize ?? 550);
  };

  return { hasWindowSizeInitalized, isMobile };
};

export default useScreen;
