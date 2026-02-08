import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const WomensPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gradient-to-r from-monegza-primary to-monegza-secondary py-16 text-white text-center">
        <h1 className="text-5xl font-display font-bold mb-4">Women's Collection</h1>
        <p className="text-xl text-white/90">Traditional sarees and elegant garments</p>
      </div>
      <FeaturedProducts initialCategory="women" onProductClick={() => {}} />
    </div>
  );
};

export default WomensPage;
