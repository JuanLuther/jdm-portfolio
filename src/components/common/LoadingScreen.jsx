import React from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onLoaded }) => {
  // Define the animation sequence
  const splashVariants = {
    // Initial state (fully visible)
    initial: { opacity: 1 },
    // Exit state (faded out)
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8, // Duration of the fade out
        ease: "easeInOut",
      },
    },
  };

  // Define the animation for the logo and text
  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Use a useEffect to control the timing and call the parent's onLoaded function
  React.useEffect(() => {
    // Wait for the initial content animation to complete + a moment to appreciate it
    const timer = setTimeout(() => {
      // This is where you would trigger the exit animation or state change in the parent
      if (onLoaded) {
        onLoaded();
      }
    }, 1500); // Display time before starting the fade-out

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    // The main container that will fade out
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-center items-center h-screen  text-2xl font-bold space-y-4"
      variants={splashVariants}
      initial="initial"
      exit="exit" // Use the 'exit' prop which requires the parent to use AnimatePresence
    >
      {/* Animated content container for the bounce/fade-in effect */}
      <motion.div
        className="flex flex-col justify-center items-center space-y-2"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <div className="animate-bounce">
          {/* Note: Ensure 'logo.svg' path is correct in your project */}
          <img src="logo.svg" alt="Loading..." />
        </div>
        <div>JERICK DALE A. MENDOZA</div>
      </motion.div>
    </motion.div>
  );
};
