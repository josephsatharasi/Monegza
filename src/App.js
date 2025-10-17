import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import VirtualTryOn from './components/VirtualTryOn';
import SustainabilitySection from './components/SustainabilitySection';
import LifestyleSection from './components/LifestyleSection';
import CustomerReviews from './components/CustomerReviews';
import PromoBanner from './components/PromoBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingActionButton from './components/FloatingActionButton';
import ProfilePage from './components/ProfilePage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  if (selectedProduct) {
    return (
      <ProductDetailPage 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    );
  }

  if (showProfile) {
    return (
      <ProfilePage 
        user={user} 
        onClose={() => setShowProfile(false)} 
      />
    );
  }

  return (
    <Router>
      <div className="App bg-white">
        <Navbar onProfileClick={handleProfileClick} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PromoBanner />
              <FeaturedProducts onProductClick={setSelectedProduct} />
              <VirtualTryOn />
              <SustainabilitySection />
              <LifestyleSection />
              <CustomerReviews />
              <Newsletter />
            </>
          } />
        </Routes>
        <Footer />
        <MobileBottomNav onProfileClick={handleProfileClick} />
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;
