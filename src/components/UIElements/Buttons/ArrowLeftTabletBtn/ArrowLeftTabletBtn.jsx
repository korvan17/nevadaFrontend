"use client";

import React, { useState } from "react";
import ArrowLeftTabletModal from "@/components/Modals/ArrowLeftTabletModal/ArrowLeftTabletModal";

export default function ArrowLeftTabletBtn() {
  const [showArrowLeftTabletModal, setArrowLeftTabletModal] = useState(false);

  const toggleArrowLeftTabletModal = () => {
    setArrowLeftTabletModal(!showArrowLeftTabletModal);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <button
        onClick={toggleArrowLeftTabletModal}
        type="button"
        className="hidden lg:hidden md:h-6 md:w-6 md:fixed
        md:top-[400px] md:right-0 md:z-20 md:flex md:items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="46"
          viewBox="0 0 33 46"
          fill="none"
          className="absolute"
        >
          <path
            d="M33.5974 23C33.5974 35.7025 41.4977 46 28.6465 46C21.2062 46 13.9178 42.5554 7.08166 37.1857C-2.03831 30.0221 -1.76838 16.2273 7.43127 9.16626C14.1473 4.01148 21.693 0 28.6465 0C41.4977 0 33.5974 10.2975 33.5974 23Z"
            fill="#1477CE"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute"
        >
          <path
            d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {showArrowLeftTabletModal && (
        <ArrowLeftTabletModal
          isModalOpen={showArrowLeftTabletModal}
          isModalClose={toggleArrowLeftTabletModal}
          widthMd="330px"
          heightMd="867px"
          // className="absolute transition translate-x duration-500 ease-in-out"
        />
      )}
    </>
  );
}

//  transform: translateY(100%);
//     transition-property: transform;
//     transition-duration: 250ms;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

// translate-x-full
