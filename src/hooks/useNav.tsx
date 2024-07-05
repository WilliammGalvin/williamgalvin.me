"use client";

import { useState } from "react";

const useNav = (links: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Returns previous link index
  const changeLinkByIndex = (index: number): number => {
    const preIndex = selectedIndex;
    setSelectedIndex(index);

    return preIndex;
  };

  // Returns previous link index
  const changeLinkByTitle = (title: string): number => {
    const titleIndex: number = links.findIndex(
      (link) => link.toLowerCase() === title.toLowerCase()
    );

    if (titleIndex < 0) {
      console.error(`Title '${title}' not found in links.`);
      return -1;
    }

    const preIndex = selectedIndex;
    setSelectedIndex(titleIndex);

    return preIndex;
  };

  const getCurrentLinkIndex = (): number => {
    return selectedIndex;
  };

  const isSelected = (index: number): boolean => {
    return index === selectedIndex;
  };

  return {
    changeLinkByIndex,
    changeLinkByTitle,
    getCurrentLinkIndex,
    isSelected,
  };
};

export default useNav;
