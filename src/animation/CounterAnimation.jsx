import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CounterAnimation = ({ children, count }) => {
  return (
    <AnimatePresence>
      <motion.div
        // key={count}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default CounterAnimation;