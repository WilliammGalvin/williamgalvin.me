"use client";

import { useState } from "react";

const useNav = (links: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number>(0);

  const changeLinkByIndex = (index: number) => {
    setLastSelectedIndex(selectedIndex);
    setSelectedIndex(index);
  };

  const changeLinkByTitle = (title: string) => {
    const titleIndex: number = links.findIndex(
      (link) => link.toLowerCase() === title.toLowerCase()
    );

    if (titleIndex < 0) {
      console.error(`Title '${title}' not found in links.`);
      return -1;
    }

    setLastSelectedIndex(selectedIndex);
    setSelectedIndex(titleIndex);
  };

  const getCurrentLinkIndex = (): number => {
    return selectedIndex;
  };

  const getLastSelectedIndex = (): number => {
    return lastSelectedIndex;
  };

  const isSelected = (index: number): boolean => {
    return index === selectedIndex;
  };

  return {
    changeLinkByIndex,
    changeLinkByTitle,
    getCurrentLinkIndex,
    getLastSelectedIndex,
    isSelected,
  };
};

export default useNav;
