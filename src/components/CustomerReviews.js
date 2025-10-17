import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      review: 'Absolutely love my MONEGZA jeans! The fit is perfect and the quality is outstanding. The virtual try-on feature made shopping so easy.',
      product: 'High-Waist Skinny',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      social: 'instagram',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Los Angeles, USA',
      rating: 5,
      review: 'Best jeans I\'ve ever owned. The sustainable approach and premium quality make it worth every penny. Highly recommend!',
      product: 'Classic Slim Fit',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      social: 'twitter',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Miami, USA',
      rating: 5,
      review: 'The comfort and style are unmatched. I love that they\'re eco-friendly too. MONEGZA has become my go-to denim brand.',
      product: 'Eco-Friendly Bootcut',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      social: 'facebook',
      verified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Chicago, USA',
      rating: 5,
      review: 'Incredible attention to detail and craftsmanship. The jeans fit like they were made just for me. Customer service is top-notch too.',
      product: 'Urban Relaxed Fit',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      social: 'instagram',
      verified: true
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Happy Customers' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Would Recommend' },
    { value: '24/7', label: 'Customer Support' }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getSocialIcon = (social) => {
    switch (social) {
      case 'instagram': return Instagram;
      case 'twitter': return Twitter;
      case 'facebook': return Facebook;
      default: return Instagram;
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-monegza-light via-white to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold text-monegza-primary mb-6"
          >
            What Our Customers
            <span className="block bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end bg-clip-text text-transparent">
              Are Saying
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what real customers say about their MONEGZA experience.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-monegza-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-16 h-16 bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium"
                >
                  "{reviews[currentReview].review}"
                </motion.p>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  {/* Avatar */}
                  <img 
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />

                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-semibold text-monegza-primary">
                        {reviews[currentReview].name}
                      </h4>
                      {reviews[currentReview].verified && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600">{reviews[currentReview].location}</p>
                    <p className="text-sm text-monegza-blue">Purchased: {reviews[currentReview].product}</p>
                  </div>

                  {/* Social Icon */}
                  <div className="ml-4">
                    {React.createElement(getSocialIcon(reviews[currentReview].social), {
                      className: "w-6 h-6 text-gray-400"
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-monegza-primary hover:bg-monegza-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-monegza-primary hover:bg-monegza-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentReview
                  ? 'bg-monegza-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-monegza-blue/20"
                />
                <div>
                  <h4 className="font-semibold text-monegza-primary">{review.name}</h4>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-monegza-blue font-medium">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;