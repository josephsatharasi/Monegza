import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingCart, Star, Truck, Shield, ArrowLeft, Check, Ruler, Package } from 'lucide-react';

const ProductDetailPage = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const sizes = ['28', '30', '32', '34', '36', '38', '40'];
  
  const images = [
    product.image,
    'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const features = [
    { icon: Truck, text: 'Free shipping on orders over $100' },
    { icon: Shield, text: '2-year quality guarantee' },
    { icon: Package, text: 'Easy returns within 30 days' },
    { icon: Ruler, text: 'Virtual try-on available' }
  ];

  const sizeGuide = [
    { size: '28', waist: '28"', hip: '36"', inseam: '32"' },
    { size: '30', waist: '30"', hip: '38"', inseam: '32"' },
    { size: '32', waist: '32"', hip: '40"', inseam: '34"' },
    { size: '34', waist: '34"', hip: '42"', inseam: '34"' },
    { size: '36', waist: '36"', hip: '44"', inseam: '34"' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="flex items-center space-x-2 text-monegza-primary hover:text-monegza-gold transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </motion.button>
            
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart size={20} className="text-monegza-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <ShoppingCart size={20} className="text-monegza-primary" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-monegza-gold text-white text-xs rounded-full flex items-center justify-center">2</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
            >
              <img 
                src={images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-monegza-gold text-white px-4 py-2 rounded-full font-semibold">
                  {product.badge}
                </div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === index 
                      ? 'border-monegza-primary shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl font-display font-bold text-monegza-primary mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-monegza-primary">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-gray-700 leading-relaxed">
                Premium quality denim crafted with 100% organic cotton. Features a comfortable fit with stretch technology 
                for all-day wear. Sustainable manufacturing process with eco-friendly dyes. Perfect for casual and semi-formal occasions.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-monegza-primary mb-3">Select Color</h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor === color 
                        ? 'border-monegza-primary shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <Check className="w-6 h-6 text-white mx-auto" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-monegza-primary">Select Size</h3>
                <button className="text-sm text-monegza-blue hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-monegza-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-monegza-primary mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  -
                </motion.button>
                <span className="text-2xl font-semibold text-monegza-primary w-12 text-center">{quantity}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={!selectedSize}
                className="w-full bg-gradient-to-r from-monegza-gradient-start to-monegza-gradient-end text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart - ${product.price * quantity}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-monegza-primary text-monegza-primary py-4 rounded-xl font-semibold text-lg hover:bg-monegza-primary hover:text-white transition-all"
              >
                Virtual Try-On
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-monegza-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-monegza-primary" />
                  </div>
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Guide Table */}
        <div className="mt-16">
          <h2 className="text-3xl font-display font-bold text-monegza-primary mb-8">Size Guide</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-monegza-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Size</th>
                  <th className="px-6 py-4 text-left">Waist</th>
                  <th className="px-6 py-4 text-left">Hip</th>
                  <th className="px-6 py-4 text-left">Inseam</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-monegza-primary">{item.size}</td>
                    <td className="px-6 py-4 text-gray-700">{item.waist}</td>
                    <td className="px-6 py-4 text-gray-700">{item.hip}</td>
                    <td className="px-6 py-4 text-gray-700">{item.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-monegza-primary mb-4">Material</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 100% Organic Cotton</li>
              <li>• Stretch Technology</li>
              <li>• Eco-Friendly Dyes</li>
              <li>• Breathable Fabric</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-monegza-primary mb-4">Care Instructions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Machine wash cold</li>
              <li>• Tumble dry low</li>
              <li>• Do not bleach</li>
              <li>• Iron low heat</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-monegza-primary mb-4">Sustainability</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 70% Less Water</li>
              <li>• Zero Waste Process</li>
              <li>• Carbon Neutral</li>
              <li>• Fair Trade Certified</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;