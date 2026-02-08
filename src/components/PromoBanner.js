import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Recycle, Award } from 'lucide-react';

const PromoBanner = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over ₹5000'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium fabrics'
    },
    {
      icon: Award,
      title: 'Authentic Products',
      description: 'Genuine materials'
    },
    {
      icon: Recycle,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-monegza-primary to-monegza-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <feature.icon className="w-8 h-8 text-monegza-gold" />
              </motion.div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;