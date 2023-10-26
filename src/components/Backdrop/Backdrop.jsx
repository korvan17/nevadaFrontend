import { motion } from "framer-motion";

function Backdrop({ handleOpenMenu, children }) {
  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      handleOpenMenu();
    }
  };
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
