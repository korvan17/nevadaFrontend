import React from "react";

function BurgerMenuIcon({ stroke = "#FAFCF8" }) {
  return (
    <>
      <svg
        width="24"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12.5h18M3 6.5h18M3 18.5h18"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default BurgerMenuIcon;
