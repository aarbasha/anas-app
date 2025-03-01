import React from "react";
import { motion } from "framer-motion";

const ScaleInAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, x: -200, scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInAnimation;
