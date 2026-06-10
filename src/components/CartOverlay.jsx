import React from 'react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CartOverlay({ isOpen, onClose }) {
  const { cartItems, cartTotal, updateCartQuantity, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-overlay-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="cart-header">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary" style={{ margin: 0 }}>Your Basket</h2>
                <p className="font-body-md text-on-surface-variant" style={{ margin: '4px 0 0 0', fontSize: '14px' }}>
                  Premium essentials for your companion
                </p>
              </div>
              <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Items */}
            <div className="cart-items">
              <AnimatePresence mode="popLayout">
                {cartItems.length === 0 ? (
                  <motion.div
                    className="cart-empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <span className="material-symbols-outlined text-6xl text-outline-variant/50 mb-4" style={{ fontSize: '64px', opacity: 0.5 }}>
                      shopping_basket
                    </span>
                    <p className="text-on-surface-variant">Your basket is currently empty.</p>
                    <button className="btn btn-outline btn-sm" onClick={onClose} style={{ marginTop: '16px' }}>
                      Browse Store
                    </button>
                  </motion.div>
                ) : (
                  cartItems.map(item => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-img"
                        onError={e => { e.target.src = '/images/pet_food_1780981574632.png'; }}
                      />
                      <div className="cart-item-info">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        <div className="qty-controls">
                          <button
                            className="qty-btn"
                            onClick={() => updateCartQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span style={{ fontWeight: 600, minWidth: 20, textAlign: 'center', color: 'var(--on-surface)' }}>
                            {item.quantity}
                          </span>
                          <button
                            className="qty-btn"
                            onClick={() => updateCartQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                          <button
                            className="icon-btn"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item"
                            style={{ marginLeft: 'auto', width: '32px', height: '32px' }}
                          >
                            <span className="material-symbols-outlined text-[20px] text-error">delete</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total-row">
                  <span className="text-on-surface-variant">Total</span>
                  <span className="text-primary">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-label-md hover:shadow-lg transition-all active:scale-95 duration-200"
                  onClick={() => { onClose(); navigate('/checkout'); }}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--on-primary)',
                    width: '100%',
                    padding: '16px 0',
                    borderRadius: 'var(--radius-default)',
                    fontWeight: 600,
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
