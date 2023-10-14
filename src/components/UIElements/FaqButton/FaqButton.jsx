"use client";

import useClickOutside from "@/components/UseClickOutside/UseClickOutside";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

export default function Collapsible({ item, faq }) {
  const [isVisible, setVisible] = useState(false);
  const menuRef = useRef(null);
  const refButton = useRef(null);
  function handleVisibility() {
    setVisible(!isVisible);
  }

  useClickOutside(menuRef, refButton, () => {
    if (isVisible) {
      setTimeout(() => setVisible(!isVisible), 100);
    }
  });
  return (
    <div>
      <button
        type="button"
        ref={refButton}
        onClick={handleVisibility}
        className="w-full min-h-[72px] flex items-center justify-between px-6"
      >
        <span>{item}</span>
        <svg
          className={` transition-transform duration-500 ${
            isVisible && "rotate-180"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.0002 13.243L16.9502 8.29295C17.0424 8.19744 17.1528 8.12126 17.2748 8.06885C17.3968 8.01644 17.528 7.98885 17.6608 7.9877C17.7936 7.98655 17.9252 8.01185 18.0481 8.06213C18.171 8.11241 18.2827 8.18666 18.3766 8.28056C18.4705 8.37445 18.5447 8.4861 18.595 8.609C18.6453 8.73189 18.6706 8.86357 18.6694 8.99635C18.6683 9.12913 18.6407 9.26035 18.5883 9.38236C18.5359 9.50436 18.4597 9.6147 18.3642 9.70695L12.7072 15.364C12.5197 15.5514 12.2653 15.6567 12.0002 15.6567C11.735 15.6567 11.4807 15.5514 11.2932 15.364L5.63618 9.70695C5.45402 9.51835 5.35323 9.26575 5.35551 9.00355C5.35778 8.74135 5.46295 8.49054 5.64836 8.30513C5.83377 8.11973 6.08458 8.01456 6.34678 8.01228C6.60898 8.01 6.86158 8.11079 7.05018 8.29295L12.0002 13.243Z"
            fill="#000A11"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.35 }}
          >
            <p className="bg-[#021827] text-white origin-top pt-4 pb-12 px-6 border-b-[12px] border-inherit">
              {faq[item]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
