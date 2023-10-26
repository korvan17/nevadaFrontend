import { motion } from "framer-motion";
import { useEffect } from "react";

function Backdrop({ toggleMenu, children }) {
  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      toggleMenu();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") toggleMenu();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleMenu]);

  return (
    <motion.div
      onClick={handleBackdropClose}
      className="fixed top-0 left-0 z-1 w-[100%] h-[100%]
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
