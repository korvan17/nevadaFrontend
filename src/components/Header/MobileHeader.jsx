"use client";

import { useState } from "react";

function MobileHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={handleOpenMenu} type="button">
        Open menu
      </button>
      {isMenuOpen && (
        <div className="bg-captionBlue w-[100%] h-[100%] fixed top-0 text-mainWhite">
          Menu
          <button onClick={handleOpenMenu} type="button">
            Close menu
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
