import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CartOverlay from './components/CartOverlay';
import Footer from './components/Footer';

import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Services from './pages/Services';
import OurStory from './pages/OurStory';

// Pages that should show the footer (not auth/checkout overlay pages)
const SHOW_FOOTER_ROUTES = ['/', '/store', '/services', '/contact', '/our-story', '/profile'];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const showFooter = SHOW_FOOTER_ROUTES.some(r =>
    r === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(r)
  );

  const showNavbar = location.pathname !== '/signin';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      {showNavbar && <Navbar onOpenCart={() => setIsCartOpen(true)} />}
      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          style={{ flex: 1 }}
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
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
