import React from 'react';
import { motion } from 'framer-motion';

const JeansLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Jeans */}
        <div className="relative mb-8">
          <motion.div
            animate={{ 
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-32 mx-auto relative"
          >
            {/* Jeans Body */}
            <div className="w-full h-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-3xl rounded-b-lg relative overflow-hidden">
              {/* Pocket */}
              <div className="absolute top-4 right-2 w-6 h-8 bg-blue-700 rounded-sm border border-blue-500"></div>
              <div className="absolute top-4 left-2 w-6 h-8 bg-blue-700 rounded-sm border border-blue-500"></div>
              
              {/* Seams */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-300 transform -translate-x-1/2"></div>
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-yellow-300"></div>
              <div className="absolute right-2 top-0 bottom-0 w-0.5 bg-yellow-300"></div>
              
              {/* Belt loops */}
              <div className="absolute top-0 left-1/2 w-1 h-2 bg-blue-700 transform -translate-x-1/2"></div>
              <div className="absolute top-0 left-4 w-1 h-2 bg-blue-700"></div>
              <div className="absolute top-0 right-4 w-1 h-2 bg-blue-700"></div>
            </div>
            
            {/* Legs */}
            <div className="flex space-x-1 mt-1">
              <motion.div 
                animate={{ scaleY: [1, 0.9, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-11 h-16 bg-gradient-to-b from-blue-700 to-blue-900 rounded-b-lg"
              ></motion.div>
              <motion.div 
                animate={{ scaleY: [1, 0.9, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-11 h-16 bg-gradient-to-b from-blue-700 to-blue-900 rounded-b-lg"
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-monegza-gold rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">M</span>
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full"
          ></motion.div>
        </div>
        
        {/* Loading Text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-monegza-primary font-semibold text-lg mb-2"
        >
          {message}
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <motion.div
            animate={{ x: [-200, 200] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-24 bg-gradient-to-r from-monegza-gold to-monegza-gradient-end rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default JeansLoader;