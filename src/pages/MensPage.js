import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const MensPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gradient-to-r from-monegza-primary to-monegza-secondary py-16 text-white text-center">
        <h1 className="text-5xl font-display font-bold mb-4">Men's Collection</h1>
        <p className="text-xl text-white/90">Premium fabrics and formal wear for men</p>
      </div>
      <FeaturedProducts initialCategory="men" onProductClick={() => {}} />
    </div>
  );
};

export default MensPage;
