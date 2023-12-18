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
  // const { data: loginForm } = useSWR("loginForm");
  // const { data: registerForm } = useSWR("registerForm");

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      toggleMenu
        ? toggleMenu()
        : toggleSideBar
        ? toggleSideBar()
        : closeModal();
    }
  };

  useEffect(() => {
    // console.log("Backdrop is mount");
    const handleKeyDown = (e) => {
      if (e.code === "Escape")
        toggleMenu
          ? toggleMenu()
          : toggleSideBar
          ? toggleSideBar()
          : closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // console.log("Backdrop did unmount");
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
