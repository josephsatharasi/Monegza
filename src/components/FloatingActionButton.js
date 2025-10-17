import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Phone, label: 'Call Us', color: 'bg-green-500', href: 'tel:+15551234567' },
    { icon: Mail, label: 'Email', color: 'bg-blue-500', href: 'mailto:hello@monegza.com' },
    { icon: MessageCircle, label: 'Chat', color: 'bg-purple-500', href: '#' }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:bottom-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`${action.color} text-white p-3 rounded-full shadow-lg flex items-center space-x-2 min-w-max`}
              >
                <action.icon size={20} />
                <span className="text-sm font-medium pr-2">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-monegza-gold to-monegza-gradient-end text-white rounded-full shadow-xl flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;