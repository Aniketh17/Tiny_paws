import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CartOverlay from './components/CartOverlay';

import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Services from './pages/Services';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ minHeight: 'calc(100vh - 160px)' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '40px 0', marginTop: '60px' }}>
        <div className="container" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <p>&copy; 2026 Tiny Paws V2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
