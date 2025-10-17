import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, Award, Globe, Heart } from 'lucide-react';

const SustainabilitySection = () => {
  const stats = [
    { icon: Droplets, value: '70%', label: 'Less Water Used', color: 'from-blue-400 to-blue-600' },
    { icon: Recycle, value: '100%', label: 'Recycled Materials', color: 'from-green-400 to-green-600' },
    { icon: Globe, value: '0', label: 'Carbon Footprint', color: 'from-purple-400 to-purple-600' },
    { icon: Award, value: '15+', label: 'Eco Certifications', color: 'from-yellow-400 to-yellow-600' }
  ];

  const initiatives = [
    {
      icon: Leaf,
      title: 'Organic Cotton',
      description: 'We use 100% organic cotton grown without harmful pesticides or chemicals.',
      image: 'organic-cotton'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Our innovative dyeing process uses 70% less water than traditional methods.',
      image: 'water-conservation'
    },
    {
      icon: Recycle,
      title: 'Circular Fashion',
      description: 'Take back program for old jeans to create new sustainable products.',
      image: 'circular-fashion'
    }
  ];

  return (
    <section id="sustainability" className="section-padding bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6"
          >
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Sustainable Fashion</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold text-monegza-primary mb-6"
          >
            Fashion That Cares for
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Planet
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At MONEGZA, we believe style shouldn't come at the cost of our environment. 
            Every pair of jeans is crafted with sustainability at its core.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-monegza-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Initiatives */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Sustainability Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={initiative.image === 'organic-cotton' ? 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' :
                       initiative.image === 'water-conservation' ? 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' :
                       'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <initiative.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-monegza-primary">{initiative.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-200" />
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Join the Sustainable Fashion Movement
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Every purchase you make contributes to a cleaner, greener future. 
              Together, we can revolutionize the fashion industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow"
              >
                Learn More About Our Mission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Shop Sustainable Collection
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;