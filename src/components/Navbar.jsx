import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Dog, Menu } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenCart }) {
  const { cartItemsCount } = useAppContext();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Dog size={32} color="var(--primary)" style={{ flexShrink: 0 }} /> Tiny Paws
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" style={{ fontSize: '1.1rem' }}>
          <Link to="/" style={{ color: isActive('/') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Home</Link>
          <Link to="/store" style={{ color: isActive('/store') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Store</Link>
          <Link to="/services" style={{ color: isActive('/services') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Services</Link>
          <Link to="/contact" style={{ color: isActive('/contact') ? 'var(--primary)' : 'inherit', fontWeight: 500 }}>Contact</Link>
        </nav>

        <div className="nav-icons" style={{ position: 'relative' }}>

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

          {/* Hamburger Menu Button (mobile only) */}
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger-menu" style={{ cursor: 'pointer', padding: '8px' }}>
            <Menu size={24} color="var(--text-main)" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{
          display: isMenuOpen ? 'block' : 'none',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          padding: '20px',
          zIndex: 100
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/" style={{ color: isActive('/') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/store" style={{ color: isActive('/store') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            Store
          </Link>
          <Link to="/services" style={{ color: isActive('/services') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" style={{ color: isActive('/contact') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/profile" style={{ color: isActive('/profile') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none', borderTop: '1px solid var(--border)', paddingTop: '16px' }} onClick={() => setIsMenuOpen(false)}>
            My Profile
          </Link>
          <Link to="/signin" style={{ color: isActive('/signin') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            Sign In / Sign Up
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}