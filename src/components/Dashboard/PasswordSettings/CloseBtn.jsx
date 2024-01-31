import React from "react";

function CloseBtn({ toggleSideBar }) {
  return (
    <button
      onClick={toggleSideBar}
      className="absolute bg-transparent top-[10px] right-[10px] bg-captionalWhite p-[8px]"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="#FAFCF8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default CloseBtn;
