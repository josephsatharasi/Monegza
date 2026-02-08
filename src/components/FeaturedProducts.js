import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star, Filter, X } from 'lucide-react';

const FeaturedProducts = ({ onProductClick, initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    fabric: [],
    price: [],
    occasion: []
  });

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men-formal-shirt-fabric', name: 'Formal Shirt Fabric' },
    { id: 'men-formal-pant-fabric', name: 'Formal Pant Fabric' },
    { id: 'men-formal-shirts', name: 'Formal Shirts' },
    { id: 'men-formal-pants', name: 'Formal Pants' },
    { id: 'women-pattu-sarees', name: 'Pattu Sarees' },
    { id: 'women-fancy-sarees', name: 'Fancy Sarees' },
    { id: 'women-blouses', name: 'Ready-Made Blouses' }
  ];

  const filterOptions = {
    size: ['S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
    color: ['Red', 'Blue', 'Green', 'Black', 'White', 'Gold', 'Silver'],
    fabric: ['Cotton', 'Silk', 'Polyester', 'Linen', 'Chiffon', 'Georgette'],
    price: ['Under $50', '$50-$100', '$100-$200', 'Above $200'],
    occasion: ['Casual', 'Formal', 'Party', 'Wedding', 'Festival']
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentFilters = prev[filterType];
      if (currentFilters.includes(value)) {
        return { ...prev, [filterType]: currentFilters.filter(v => v !== value) };
      } else {
        return { ...prev, [filterType]: [...currentFilters, value] };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      size: [],
      color: [],
      fabric: [],
      price: [],
      occasion: []
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  const products = [
    {
      id: 1,
      name: 'Premium Cotton Formal Shirt Fabric',
      category: 'men-formal-shirt-fabric',
      price: 1800,
      originalPrice: 2400,
      rating: 4.8,
      reviews: 234,
      colors: ['#ffffff', '#87ceeb', '#ffc0cb'],
      badge: 'Best Seller',
      size: 'Free Size',
      fabric: 'Cotton',
      occasion: 'Formal',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Silk Formal Pant Fabric',
      category: 'men-formal-pant-fabric',
      price: 2200,
      originalPrice: 3000,
      rating: 4.7,
      reviews: 189,
      colors: ['#000000', '#2d3436', '#636e72'],
      badge: 'Premium',
      size: 'Free Size',
      fabric: 'Silk',
      occasion: 'Formal',
      image: 'https://images.unsplash.com/photo-1598032895397-b9372bc7f0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Classic White Formal Shirt',
      category: 'men-formal-shirts',
      price: 3500,
      originalPrice: 4800,
      rating: 4.9,
      reviews: 312,
      colors: ['#ffffff', '#87ceeb', '#000000'],
      badge: 'New',
      size: 'M',
      fabric: 'Cotton',
      occasion: 'Formal',
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Black Formal Pants',
      category: 'men-formal-pants',
      price: 3800,
      originalPrice: 5200,
      rating: 4.8,
      reviews: 267,
      colors: ['#000000', '#2d3436', '#636e72'],
      badge: 'Best Seller',
      size: 'L',
      fabric: 'Polyester',
      occasion: 'Formal',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Traditional Pattu Saree',
      category: 'women-pattu-sarees',
      price: 7200,
      originalPrice: 10000,
      rating: 4.9,
      reviews: 445,
      colors: ['#ffd700', '#dc143c', '#228b22'],
      badge: 'Premium',
      size: 'Free Size',
      fabric: 'Silk',
      occasion: 'Wedding',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Designer Fancy Saree',
      category: 'women-fancy-sarees',
      price: 4800,
      originalPrice: 6400,
      rating: 4.7,
      reviews: 298,
      colors: ['#ff1493', '#4169e1', '#32cd32'],
      badge: 'New',
      size: 'Free Size',
      fabric: 'Georgette',
      occasion: 'Party',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Cotton Petticoat',
      category: 'women-petticoats',
      price: 1000,
      originalPrice: 1400,
      rating: 4.6,
      reviews: 156,
      colors: ['#ffffff', '#000000', '#ffc0cb'],
      badge: 'Sale',
      size: 'M',
      fabric: 'Cotton',
      occasion: 'Casual',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Silk Ready-Made Blouse',
      category: 'women-blouses',
      price: 2600,
      originalPrice: 3600,
      rating: 4.8,
      reviews: 203,
      colors: ['#dc143c', '#ffd700', '#000000'],
      badge: 'Best Seller',
      size: 'L',
      fabric: 'Silk',
      occasion: 'Festival',
      image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = products.filter(p => {
    if (initialCategory === 'men' && !p.category.startsWith('men')) return false;
    if (initialCategory === 'women' && !p.category.startsWith('women')) return false;
    if (initialCategory === 'all' && activeCategory !== 'all' && p.category !== activeCategory) return false;
    
    if (filters.size.length > 0 && !filters.size.includes(p.size)) return false;
    if (filters.fabric.length > 0 && !filters.fabric.includes(p.fabric)) return false;
    if (filters.occasion.length > 0 && !filters.occasion.includes(p.occasion)) return false;
    
    if (filters.price.length > 0) {
      const priceMatch = filters.price.some(range => {
        if (range === 'Under $50') return p.price < 2000;
        if (range === '$50-$100') return p.price >= 2000 && p.price < 4000;
        if (range === '$100-$200') return p.price >= 4000 && p.price < 8000;
        if (range === 'Above $200') return p.price >= 8000;
        return false;
      });
      if (!priceMatch) return false;
    }
    
    return true;
  });

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
            Our <span className="bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end bg-clip-text text-transparent">Collections</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Premium fabrics and ready-made garments for men and women
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
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

        {/* Filter Toggle Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-monegza-primary text-monegza-primary rounded-full font-semibold hover:bg-monegza-primary hover:text-white transition-all duration-300"
          >
            <Filter size={20} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            {hasActiveFilters && (
              <span className="ml-2 px-2 py-0.5 bg-monegza-gold text-white text-xs rounded-full">
                {Object.values(filters).flat().length}
              </span>
            )}
          </motion.button>
        </motion.div>

        {/* Advanced Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-monegza-primary flex items-center gap-2">
                <Filter size={24} />
                Filter Products
              </h3>
              {hasActiveFilters && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-all"
                >
                  <X size={16} />
                  Clear All
                </motion.button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Size Filter */}
              <div>
                <h4 className="font-semibold text-monegza-primary mb-3 flex items-center gap-2">
                  Size
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.size.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFilterChange('size', size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        filters.size.includes(size)
                          ? 'bg-monegza-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="font-semibold text-monegza-primary mb-3">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.color.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFilterChange('color', color)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        filters.color.includes(color)
                          ? 'bg-monegza-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Fabric Filter */}
              <div>
                <h4 className="font-semibold text-monegza-primary mb-3">Fabric</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.fabric.map((fabric) => (
                    <motion.button
                      key={fabric}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFilterChange('fabric', fabric)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        filters.fabric.includes(fabric)
                          ? 'bg-monegza-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {fabric}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-monegza-primary mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.price.map((price) => (
                    <motion.button
                      key={price}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFilterChange('price', price)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                        filters.price.includes(price)
                          ? 'bg-monegza-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {price}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Occasion Filter */}
              <div>
                <h4 className="font-semibold text-monegza-primary mb-3">Occasion</h4>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.occasion.map((occasion) => (
                    <motion.button
                      key={occasion}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFilterChange('occasion', occasion)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        filters.occasion.includes(occasion)
                          ? 'bg-monegza-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {occasion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-monegza-primary">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
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
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/500/1a1a2e/ffffff?text=Product'; }}
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
                    <span className="text-2xl font-bold text-monegza-primary">₹{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
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
          )) : (
            <div className="col-span-full text-center py-16">
              <p className="text-2xl text-gray-400 mb-4">No products found</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className="px-6 py-3 bg-monegza-primary text-white rounded-full font-semibold hover:bg-monegza-blue transition-all"
              >
                Clear Filters
              </motion.button>
            </div>
          )}
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