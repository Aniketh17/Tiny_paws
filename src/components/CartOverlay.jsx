import React from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CartOverlay({ isOpen, onClose }) {
  const { cart, updateCartQuantity } = useAppContext();
  const navigate = useNavigate();
  
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: '#000', zIndex: 90
            }}
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, width: '400px', maxWidth: '100%',
              height: '100vh', background: 'var(--surface)', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
              zIndex: 100, display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Your Cart</h2>
              <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X /></button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {cartItems.length === 0 ? (
                <p className="text-muted" style={{ textAlign: 'center', marginTop: '40px' }}>Your cart is empty.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: '16px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, marginBottom: '4px' }}>{item.name}</div>
                      <div style={{ color: 'var(--primary)', fontWeight: 700 }}>${item.price.toFixed(2)}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                        <button style={btnStyle} onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button style={btnStyle} onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }} 
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const btnStyle = {
  background: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '4px',
  width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
};
