import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/store',       label: 'Store' },
  { to: '/services',    label: 'Services' },
  { to: '/profile',     label: 'Medical Vault' },
  { to: '/our-story',   label: 'About Us' },
  { to: '/contact',     label: 'Contact' },
];

export default function Navbar({ onOpenCart }) {
  const { cartItemsCount } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userMenuRef = React.useRef(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when tapping outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <>
      <header className={scrolled ? 'shadow-md py-2' : 'shadow-sm py-0'} style={{ transition: 'all 0.3s ease' }}>
        <div className="nav-container">
        {/* Logo and Mobile Toggle Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="hamburger-btn icon-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          {/* Logo */}
          <Link to="/" className="logo">
            Tiny Paws
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Cart Icon Button */}
          <div className="cart-btn-wrapper">
            <button
              className="icon-btn"
              onClick={onOpenCart}
              aria-label="Open Cart"
            >
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart</span>
            </button>
            <AnimatePresence>
              {cartItemsCount > 0 && (
                <motion.span
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={cartItemsCount}
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* User Account / Profile */}
          <div
            className="user-menu"
            ref={userMenuRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="icon-btn"
              aria-label="Account Menu"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <span
                className="material-symbols-outlined text-primary text-2xl"
                style={{ fontVariationSettings: isDropdownOpen || isActive('/profile') ? "'FILL' 1" : "'FILL' 0" }}
              >
                account_circle
              </span>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="user-dropdown"
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/profile" className="dropdown-item">Medical Vault</Link>
                  <div className="dropdown-divider" />
                  <Link to="/signin" className="dropdown-item" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    Sign In / Sign Up
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Drawer — rendered outside header so position:fixed works correctly */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              className="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-nav-header">
                <span className="font-headline-sm text-primary">Menu</span>
                <button
                  className="icon-btn"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link
                  to="/"
                  className={`mobile-drawer-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">home</span>
                  <span>Home</span>
                </Link>
                <Link
                  to="/store"
                  className={`mobile-drawer-link ${isActive('/store') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <span>Store</span>
                </Link>
                <Link
                  to="/services"
                  className={`mobile-drawer-link ${isActive('/services') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">medical_services</span>
                  <span>Services</span>
                </Link>
                <Link
                  to="/profile"
                  className={`mobile-drawer-link ${isActive('/profile') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">vaccines</span>
                  <span>Medical Vault</span>
                </Link>
                <Link
                  to="/our-story"
                  className={`mobile-drawer-link ${isActive('/our-story') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">info</span>
                  <span>About Us</span>
                </Link>
                <Link
                  to="/contact"
                  className={`mobile-drawer-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">mail</span>
                  <span>Contact</span>
                </Link>
              </div>

              <div className="mobile-drawer-footer">
                <Link
                  to="/signin"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px 24px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}