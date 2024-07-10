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
    assert(hasWindowSizeInitalized(), "windowWidth has yet to be initalized.");
    return windowWidth! <= (mobileMaxSize ?? 550);
  };

  return { hasWindowSizeInitalized, isMobile };
};

export default useScreen;
