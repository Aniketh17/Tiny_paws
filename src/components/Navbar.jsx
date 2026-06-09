import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Dog } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenCart }) {
  const { cartItemsCount } = useAppContext();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, 
      backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)', padding: '16px 0'
    }}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-main)' }}>
          <Dog size={32} color="var(--primary)" /> Tiny Paws
        </Link>
        <nav className="nav-links" style={{ display: 'flex', gap: '40px', fontSize: '1.1rem' }}>
          <Link to="/" style={{ color: isActive('/') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Home</Link>
          <Link to="/store" style={{ color: isActive('/store') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Store</Link>
          <Link to="/services" style={{ color: isActive('/services') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Services</Link>
          <Link to="/contact" style={{ color: isActive('/contact') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Contact</Link>
        </nav>
        <div className="nav-icons" style={{ display: 'flex', gap: '24px', alignItems: 'center', position: 'relative' }}>
          
          {/* User Dropdown */}
          <div 
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', color: 'var(--text-main)' }}>
              <User size={24} />
            </div>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute', top: '100%', right: 0, width: '200px',
                    background: 'var(--surface)', borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)',
                    overflow: 'hidden', zIndex: 100
                  }}
                >
                  <Link to="/profile" style={{ display: 'block', padding: '12px 16px', borderBottom: '1px solid var(--border)' }} className="dropdown-link">
                    My Profile
                  </Link>
                  <Link to="/signin" style={{ display: 'block', padding: '12px 16px', color: 'var(--primary)', fontWeight: 600 }} className="dropdown-link">
                    Sign In / Sign Up
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div onClick={onOpenCart} className="cart-icon" style={{ position: 'relative', cursor: 'pointer', padding: '8px' }}>
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="cart-count" style={{
                  position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: 'white',
                  fontSize: '0.75rem', fontWeight: 'bold', height: '20px', width: '20px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                {cartItemsCount}
              </motion.span>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .dropdown-link:hover { background-color: var(--bg-color); }
      `}</style>
    </header>
  );
}
