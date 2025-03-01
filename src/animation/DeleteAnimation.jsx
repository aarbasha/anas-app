import React from "react";
import { motion } from "framer-motion";
const DeleteAnimation = ({ children, onComplete, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 0, x: -100 }}
      onAnimationComplete={onComplete} // استخدام الكزت كمعامل
    >
      {children}
    </motion.div>
  );
};

export default DeleteAnimation;
