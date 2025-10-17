import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Heart,
  Leaf
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Shop': [
      { name: 'Men\'s Jeans', href: '#' },
      { name: 'Women\'s Jeans', href: '#' },
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Sale', href: '#' }
    ],
    'Company': [
      { name: 'About Us', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    'Support': [
      { name: 'Size Guide', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'hello@monegza.com', href: 'mailto:hello@monegza.com' },
    { icon: MapPin, text: '123 Fashion Ave, NY 10001', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-monegza-primary via-monegza-secondary to-monegza-accent text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-monegza-gold to-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-display font-bold">MONEGZA</span>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">
                Crafting premium, sustainable denim that combines timeless style with modern innovation. 
                Join us in revolutionizing fashion for a better tomorrow.
              </p>

              {/* Sustainability Badge */}
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full w-fit">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">100% Sustainable</span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Stay Updated with MONEGZA
              </h3>
              <p className="text-white/80">
                Get the latest updates on new collections, exclusive offers, and sustainable fashion tips.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-monegza-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-monegza-gold to-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-white/60"
            >
              <span>© 2024 MONEGZA. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for sustainable fashion.</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-white/60 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <span className="text-white/60 text-sm">We accept:</span>
              <div className="flex space-x-2">
                {['VISA', 'MC', 'AMEX', 'PP'].map((payment, index) => (
                  <div
                    key={index}
                    className="w-10 h-6 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white/70">{payment}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-monegza-gold to-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-50"
      >
        <ArrowRight className="w-6 h-6 transform -rotate-90" />
      </motion.button>
    </footer>
  );
};

export default Footer;