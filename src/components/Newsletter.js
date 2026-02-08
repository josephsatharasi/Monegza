import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Zap, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const benefits = [
    { icon: Gift, text: 'Exclusive offers & early access' },
    { icon: Zap, text: 'New collection previews' },
    { icon: Mail, text: 'Style tips & fashion insights' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-monegza-primary via-monegza-secondary to-monegza-accent text-white overflow-hidden">
      <div className="container-custom">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-monegza-gold/20 to-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-monegza-blue/20 to-monegza-purple/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-r from-monegza-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-display font-bold mb-6"
              >
                Stay in the Loop
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/80 mb-8"
              >
                Join our community and be the first to know about new collections, 
                exclusive offers, and sustainable fashion insights.
              </motion.p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-monegza-gold to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-full text-monegza-primary placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-monegza-gold/30 transition-all"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="absolute right-2 top-2 bg-gradient-to-r from-monegza-gold to-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  <p className="text-sm text-white/60">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500 rounded-2xl p-6 flex items-center justify-center space-x-3"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">Welcome to OZZO!</h3>
                    <p className="text-green-100">Check your email for a special welcome offer.</p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-white/60 mb-4">Join 50,000+ fashion enthusiasts</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-monegza-blue to-monegza-purple rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-sm font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-white/80 text-sm">and many more...</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;