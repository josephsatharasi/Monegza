import React from 'react';
import { motion } from 'framer-motion';

const JeansLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-4 border-monegza-light border-t-monegza-primary rounded-full mx-auto"
          />
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-monegza-primary font-semibold text-lg mb-2"
        >
          {message}
        </motion.div>
      </div>
    </div>
  );
};

export default JeansLoader;