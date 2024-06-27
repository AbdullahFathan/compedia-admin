import { useState } from "react";

const useSideBar = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleItemClick = (index) => {
    setCurrentItem(index);
  };

  return {
    currentItem,
    handleItemClick,
  };
};

export default useSideBar;
