import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from './AuthModal';

const Navbar = ({ onProfileClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Men', href: '#men' },
    { name: 'Women', href: '#women' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'About', href: '#about' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-display font-bold text-monegza-primary">
              MONEGZA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-monegza-primary hover:text-monegza-gold font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-monegza-gold/10"
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-3 h-0.5 bg-gradient-to-r from-monegza-gold to-monegza-gradient-end rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 'calc(100% - 24px)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => user ? onProfileClick() : setShowAuthModal(true)}
              className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors relative"
            >
              <User size={20} />
              {user && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-monegza-gold text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-monegza-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                    className="text-monegza-primary hover:text-monegza-gold font-medium transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <button className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors">
                    <Search size={20} />
                  </button>
                  <button className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors">
                    <Heart size={20} />
                  </button>
                  <button 
                    onClick={() => user ? onProfileClick() : setShowAuthModal(true)}
                    className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors"
                  >
                    <User size={20} />
                  </button>
                  <button className="p-2 text-monegza-primary hover:text-monegza-gold transition-colors relative">
                    <ShoppingBag size={20} />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-monegza-gold text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onSuccess={(userData) => {
          setUser(userData);
          setShowAuthModal(false);
        }}
      />
    </motion.nav>
  );
};

export default Navbar;