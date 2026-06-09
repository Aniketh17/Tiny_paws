import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, CreditCard, Truck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useAppContext();
  
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const cartItems = Object.values(cart);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          style={{ background: 'var(--surface)', padding: '60px', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-md)', maxWidth: '500px' }}
        >
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
            style={{ display: 'inline-block', color: 'var(--secondary)', marginBottom: '20px' }}
          >
            <CheckCircle size={80} />
          </motion.div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Order Placed!</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            Thank you for shopping at Tiny Paws. We've received your order and are getting it ready for your furry friend!
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/store')}>Continue Shopping</button>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2>Your cart is empty.</h2>
        <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => navigate('/store')}>Go to Store</button>
      </div>
    );
  }

  return (
    <div className="container checkout-container">
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 600, marginBottom: '30px' }}>
        <ArrowLeft size={24} /> Back to Store
      </button>

      <div className="checkout-flex-layout">
        
        {/* Left Column: Forms */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ flex: '1 1 300px' }}>
          <div className="contact-form-card">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderBottom: '2px solid var(--bg-color)', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: step === 1 ? 'var(--primary)' : 'var(--text-muted)' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: step === 1 ? 'var(--primary)' : 'var(--border)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Shipping Details</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: step === 2 ? 'var(--primary)' : 'var(--text-muted)' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: step === 2 ? 'var(--primary)' : 'var(--border)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Payment</h3>
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="contact-form-grid" style={{ marginBottom: '20px' }}>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>First Name</label><input type="text" className="form-control" required /></div>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Last Name</label><input type="text" className="form-control" required /></div>
                </div>
                <div style={{ marginBottom: '20px' }}><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Address</label><input type="text" className="form-control" required /></div>
                <div className="contact-form-grid" style={{ marginBottom: '30px' }}>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>City</label><input type="text" className="form-control" required /></div>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>ZIP Code</label><input type="text" className="form-control" required /></div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  Continue to Payment <Truck size={20} />
                </button>
              </form>
            ) : (
              <form onSubmit={handlePlaceOrder}>
                <div style={{ background: 'var(--bg-color)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <input type="radio" checked readOnly style={{ accentColor: 'var(--primary)' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Credit Card</h4>
                    <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Safe and secure payment</p>
                  </div>
                  <CreditCard size={32} color="var(--primary)" style={{ marginLeft: 'auto' }} />
                </div>
                
                <div style={{ marginBottom: '20px' }}><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Card Number</label><input type="text" placeholder="0000 0000 0000 0000" className="form-control" required /></div>
                <div className="contact-form-grid" style={{ marginBottom: '30px' }}>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Expiry Date</label><input type="text" placeholder="MM/YY" className="form-control" required /></div>
                  <div><label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>CVC</label><input type="text" placeholder="123" className="form-control" required /></div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button type="button" className="btn btn-outline" style={{ padding: '16px', flex: 1 }} onClick={() => setStep(1)}>Back</button>
                  <button type="submit" className="btn btn-primary" style={{ padding: '16px', flex: 2, fontSize: '1.1rem' }} disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : `Pay $${(cartTotal + 5.99).toFixed(2)}`}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column: Order Summary */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ flex: '1 1 300px' }}>
          <div className="contact-form-card">
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Order Summary</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px', maxHeight: '300px', overflowY: 'auto' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h4>
                    <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Qty: {item.quantity}</p>
                  </div>
                  <div style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span className="text-muted">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span className="text-muted">Shipping</span>
                <span>$5.99</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '20px', fontSize: '1.5rem', fontWeight: 700 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>${(cartTotal + 5.99).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
