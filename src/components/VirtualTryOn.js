import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Smartphone, Monitor, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const VirtualTryOn = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Camera,
      title: 'Capture Your Photo',
      description: 'Take a photo or upload an existing one',
      color: 'from-monegza-blue to-monegza-purple'
    },
    {
      icon: Zap,
      title: 'AI Processing',
      description: 'Our AI analyzes your body measurements',
      color: 'from-monegza-purple to-monegza-gold'
    },
    {
      icon: Monitor,
      title: 'Virtual Try-On',
      description: 'See how our jeans look on you instantly',
      color: 'from-monegza-gold to-monegza-gradient-end'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Perfect Fit Guarantee',
      description: 'AI-powered size recommendation with 95% accuracy'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Try on jeans directly from your smartphone'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'See results in under 3 seconds'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-monegza-primary via-monegza-secondary to-monegza-accent text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Zap className="w-4 h-4 text-monegza-gold" />
                <span className="text-sm font-medium">Revolutionary Technology</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-display font-bold mb-6"
              >
                Virtual Try-On
                <span className="block bg-gradient-to-r from-monegza-gold to-yellow-300 bg-clip-text text-transparent">
                  Experience
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/80 leading-relaxed mb-8"
              >
                Try before you buy with our cutting-edge AI technology. See how our jeans fit and look on you without leaving your home.
              </motion.p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setActiveStep(index)}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'bg-white/10 backdrop-blur-sm' : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 ${
                    activeStep === index ? 'bg-monegza-gold border-monegza-gold' : ''
                  }`}>
                    {activeStep === index && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20"
            >
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-8 h-8 text-monegza-gold mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-monegza-gold to-yellow-400 text-monegza-primary px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl transition-shadow"
              >
                <span>Try Virtual Fitting</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Demo Container */}
            <div className="relative">
              <motion.div
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                {/* Phone Mockup */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 mx-auto max-w-sm">
                  <div className="bg-white rounded-2xl h-96 relative overflow-hidden">
                    {/* Virtual Try-On Interface */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Virtual Try-On Model"
                      className="w-full h-full object-cover"
                    />
                    {/* AR Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-monegza-primary/20 to-transparent">
                      {/* Size indicators */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-monegza-primary">
                        Size: 32W x 34L
                      </div>
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                        Perfect Fit ✓
                      </div>
                      {/* Bottom controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                          <span className="text-xs font-semibold text-monegza-primary">Classic Slim Fit</span>
                        </div>
                        <div className="bg-monegza-gold/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-xs font-semibold text-white">Try Different Style</span>
                        </div>
                      </div>
                    </div>

                    {/* Scanning Animation */}
                    <motion.div
                      animate={{ y: [-100, 400, -100] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-monegza-gold to-transparent opacity-80"
                    ></motion.div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-monegza-gold">95%</div>
                    <div className="text-xs text-white/70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-monegza-gold">3s</div>
                    <div className="text-xs text-white/70">Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-monegza-gold">50K+</div>
                    <div className="text-xs text-white/70">Users</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-monegza-gold to-yellow-400 rounded-2xl flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-monegza-blue to-monegza-purple rounded-2xl flex items-center justify-center"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;