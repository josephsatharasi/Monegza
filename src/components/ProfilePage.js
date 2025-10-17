import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Heart, Settings, MapPin, Phone, Mail, Edit3, Camera, Package, Star, CreditCard } from 'lucide-react';

const ProfilePage = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const orders = [
    { id: '#MZ001', date: '2024-01-15', status: 'Delivered', total: '$129', items: 2 },
    { id: '#MZ002', date: '2024-01-10', status: 'Shipped', total: '$249', items: 1 },
    { id: '#MZ003', date: '2024-01-05', status: 'Processing', total: '$189', items: 3 }
  ];

  const wishlistItems = [
    { id: 1, name: 'Classic Slim Fit', price: '$129', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'High-Waist Skinny', price: '$119', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-monegza-blue to-monegza-purple rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-monegza-gold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-monegza-primary">{user?.name || 'User Name'}</h3>
                <p className="text-gray-600 text-sm">{user?.email || 'user@email.com'}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-monegza-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold text-monegza-primary">Profile Information</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 px-4 py-2 bg-monegza-primary text-white rounded-xl hover:shadow-lg transition-shadow"
                    >
                      <Edit3 size={16} />
                      <span>{isEditing ? 'Save' : 'Edit'}</span>
                    </motion.button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            defaultValue={user?.name || 'John Doe'}
                            disabled={!isEditing}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-monegza-primary focus:border-transparent transition-all disabled:bg-gray-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            defaultValue={user?.email || 'john@example.com'}
                            disabled={!isEditing}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-monegza-primary focus:border-transparent transition-all disabled:bg-gray-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            disabled={!isEditing}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-monegza-primary focus:border-transparent transition-all disabled:bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                          <textarea
                            defaultValue="123 Fashion Ave, New York, NY 10001"
                            disabled={!isEditing}
                            rows={3}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-monegza-primary focus:border-transparent transition-all disabled:bg-gray-50 resize-none"
                          />
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-monegza-primary to-monegza-secondary rounded-xl p-4 text-white">
                        <h3 className="font-semibold mb-2">Membership Status</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm opacity-90">Premium Member</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-semibold">Gold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-monegza-primary">Order History</h2>
                  
                  <div className="space-y-4">
                    {orders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-monegza-primary/10 rounded-xl flex items-center justify-center">
                              <Package className="w-6 h-6 text-monegza-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-monegza-primary">{order.id}</h3>
                              <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-monegza-primary">{order.total}</div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-monegza-primary">My Wishlist</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {wishlistItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-semibold text-monegza-primary mb-2">{item.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-monegza-primary">{item.price}</span>
                            <button className="bg-monegza-primary text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-monegza-primary">Account Settings</h2>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-4">
                      <h3 className="font-semibold text-monegza-primary mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700">Email notifications</span>
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-monegza-primary focus:ring-monegza-primary" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700">SMS notifications</span>
                          <input type="checkbox" className="rounded border-gray-300 text-monegza-primary focus:ring-monegza-primary" />
                        </label>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4">
                      <h3 className="font-semibold text-monegza-primary mb-4">Payment Methods</h3>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <CreditCard className="w-6 h-6 text-monegza-primary" />
                        <div>
                          <p className="font-medium">**** **** **** 1234</p>
                          <p className="text-sm text-gray-600">Expires 12/25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;