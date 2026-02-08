import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '100K+', label: 'Products Sold' },
    { icon: Heart, value: '4.9', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-display font-bold text-monegza-primary mb-6">
            About <span className="bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end bg-clip-text text-transparent">OZZO</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for premium fabrics and ready-made garments since 2009
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="OZZO Store"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display font-bold text-monegza-primary mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              OZZO was founded with a vision to provide the finest quality fabrics and garments to our customers. 
              What started as a small fabric store has grown into a trusted name in the textile industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in premium formal wear fabrics, traditional sarees, and ready-made garments. 
              Our commitment to quality and customer satisfaction has made us the preferred choice for thousands of customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every product at OZZO is carefully selected to ensure the highest standards of quality, 
              comfort, and style. We believe in building lasting relationships with our customers through 
              exceptional service and authentic products.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-monegza-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-monegza-primary to-monegza-secondary rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            To provide our customers with the finest quality fabrics and garments at competitive prices, 
            while maintaining the highest standards of service and building lasting relationships based on trust and satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
