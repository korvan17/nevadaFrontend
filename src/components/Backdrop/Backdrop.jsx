"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useSWR from "swr";
function Backdrop({
  toggleMenu,
  toggleSideBar,
  closeModal,
  isMenuOpen,
  children,
}) {
  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      if (toggleMenu) toggleMenu();
      else if (!toggleMenu && toggleSideBar) toggleSideBar();
      else closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        if (toggleMenu) toggleMenu();
        else if (!toggleMenu && toggleSideBar) toggleSideBar();
        else closeModal();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleMenu, toggleSideBar, closeModal]);

  return (
    <motion.div
      onClick={handleBackdropClose}
      className="fixed top-0 left-0 z-40 w-[100%] h-[100%]
    bg-background
    backdrop-brightness-50
    filter blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
