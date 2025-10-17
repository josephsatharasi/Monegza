import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

const FeaturedProducts = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'bestseller', name: 'Best Sellers' }
  ];

  const products = [
    {
      id: 1,
      name: 'Classic Slim Fit',
      category: 'men',
      price: 129,
      originalPrice: 159,
      rating: 4.8,
      reviews: 234,
      colors: ['#1a1a2e', '#4a90e2', '#2d3436'],
      badge: 'Best Seller',
      isNew: false,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'High-Waist Skinny',
      category: 'women',
      price: 119,
      originalPrice: 149,
      rating: 4.9,
      reviews: 189,
      colors: ['#2d3436', '#74b9ff', '#a29bfe'],
      badge: 'New',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Vintage Straight',
      category: 'men',
      price: 139,
      originalPrice: 169,
      rating: 4.7,
      reviews: 156,
      colors: ['#636e72', '#00b894', '#e17055'],
      badge: 'Limited',
      isNew: false,
      image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Eco-Friendly Bootcut',
      category: 'women',
      price: 149,
      originalPrice: 179,
      rating: 4.9,
      reviews: 298,
      colors: ['#2d3436', '#00b894', '#fdcb6e'],
      badge: 'Eco',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Urban Relaxed Fit',
      category: 'men',
      price: 109,
      originalPrice: 139,
      rating: 4.6,
      reviews: 167,
      colors: ['#1a1a2e', '#6c5ce7', '#fd79a8'],
      badge: 'Sale',
      isNew: false,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Premium Wide Leg',
      category: 'women',
      price: 159,
      originalPrice: 199,
      rating: 4.8,
      reviews: 203,
      colors: ['#2d3436', '#e84393', '#00cec9'],
      badge: 'Premium',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : activeCategory === 'new'
    ? products.filter(p => p.isNew)
    : activeCategory === 'bestseller'
    ? products.filter(p => p.badge === 'Best Seller')
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="collections" className="section-padding bg-gradient-to-b from-white to-monegza-light/30">
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
            className="text-4xl lg:text-5xl font-display font-bold text-monegza-primary mb-4"
          >
            Featured <span className="bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end bg-clip-text text-transparent">Collections</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our handcrafted denim pieces that blend timeless style with modern innovation
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end text-white shadow-lg'
                  : 'bg-white text-monegza-primary border border-gray-200 hover:border-monegza-blue'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => onProductClick && onProductClick(product)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-monegza-primary/20 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-80">
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.badge === 'New' ? 'bg-monegza-gold text-white' :
                  product.badge === 'Best Seller' ? 'bg-monegza-blue text-white' :
                  product.badge === 'Limited' ? 'bg-monegza-purple text-white' :
                  product.badge === 'Eco' ? 'bg-green-500 text-white' :
                  product.badge === 'Sale' ? 'bg-red-500 text-white' :
                  'bg-monegza-primary text-white'
                }`}>
                  {product.badge}
                </div>

                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-monegza-primary hover:bg-monegza-primary hover:text-white transition-all duration-300 shadow-xl"
                    >
                      <Eye size={22} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-monegza-primary hover:bg-monegza-gold hover:text-white transition-all duration-300 shadow-xl"
                    >
                      <Heart size={22} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-monegza-primary hover:bg-monegza-blue hover:text-white transition-all duration-300 shadow-xl"
                    >
                      <ShoppingCart size={22} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-monegza-primary mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-monegza-primary">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Add to Cart</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;