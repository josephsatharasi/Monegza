import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-monegza-light border-t-monegza-primary rounded-full mx-auto mb-4"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-monegza-primary font-semibold"
      >
        Loading MONEGZA...
      </motion.div>
    </div>
  </div>
);

export default LoadingSpinner;