import React, { useState } from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileBottomNav = ({ onProfileClick }) => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'search', icon: Search, label: 'Search', href: '#collections' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist', href: '#' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', href: '#', badge: 2 },
    { id: 'profile', icon: User, label: 'Profile', href: '#', onClick: onProfileClick }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 z-50 lg:hidden shadow-2xl">
      <div className="flex items-center justify-around py-1 px-2">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 relative rounded-xl transition-all duration-300 ${
              activeTab === item.id 
                ? 'text-monegza-primary bg-monegza-primary/10' 
                : 'text-gray-500 hover:text-monegza-primary hover:bg-gray-100'
            }`}
          >
            <div className="relative">
              <item.icon 
                size={20} 
                className={`mb-1 ${
                  activeTab === item.id ? 'text-monegza-primary' : 'text-gray-500'
                }`} 
              />
              {item.badge && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-monegza-gold text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span className={`text-xs font-medium ${
              activeTab === item.id ? 'text-monegza-primary' : 'text-gray-500'
            }`}>
              {item.label}
            </span>
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-monegza-gold to-monegza-primary rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;