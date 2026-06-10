import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useAppContext();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Fallback to mock items if cart is empty so that it looks exactly like the design
  const itemsToRender = cartItems.length > 0 ? cartItems : [
    {
      id: 'prod-1',
      name: 'Artisanal Feast Kibble',
      price: 54.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUW2Vk1FSh1-2Uq66XHxpTO2jvUJbuSxP3MEae9RQDg2PQH93Nsyti4lYZNQAoqwWWjK2ZaDp5eP3xF3UCmisf3ImHCrq23Gbku1wEpAumuFjijNTiW5R6EvCUZNJ3-g7l-ut2p8UslB_y3zgl50mswknKWOjIz0KIffCSaSujlxZtnRjQpFTp_pGHkqNdeFVkU6PRztJ8aXRdDoYGhdRwo8khwMhXvHtjIMB4CQ0U4ro0_1HJU5mSdWfyk7bJQeEDnDChC-t-5qs'
    },
    {
      id: 'prod-2',
      name: 'Pure Vitality Vitamins',
      price: 45.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKil3j9Eplc9UWrU1yXPQSt7zUQYdUANbXzshw_dvY7wDastQM57xTjvkrN-jHdi05Csp1srTsA8SgBDxLhGt6sqsYuedprPVUVQY7Sv9Q7d2tV5vdh9-AokhBJEFWOPBnsP5AsABfbaFuX41g1n3EmQbBMKMFtn0Mta6eszJEjmnO0RZOlXz9COUeGSojG8d5OSKE1LyRzprw8bspYgURUpPCl6EzVKo4hgzXimV7E7AxMB0fWMXJVuKUFYsNQBzyv4DBs_RQBlA'
    }
  ];

  const subtotal = cartItems.length > 0 ? cartTotal : 99.00;
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleGoToStep = (targetStep) => {
    setStep(targetStep);
  };

  const handleSimulateOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      clearCart();
    }, 2500);
  };

  if (success) {
    return (
      <div className="container" style={{ paddingBottom: 80, paddingTop: 120, display: 'flex', justifyContent: 'center' }}>
        <motion.section
          className="glass-card checkout-success-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: '560px',
            width: '100%',
            padding: '64px 48px',
            textAlign: 'center',
            border: '1px solid rgba(192, 200, 198, 0.3)',
            transform: 'none'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(19, 66, 61, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: 'var(--primary)'
            }}
          >
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h2 className="font-headline-md text-primary" style={{ marginBottom: '16px' }}>
            Order Confirmed!
          </h2>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Your premium pet care bundle is being prepared. We've sent a confirmation email to your inbox.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/store')}
            style={{ padding: '12px 32px' }}
          >
            Track My Order
          </button>
        </motion.section>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingBottom: 80, paddingTop: 120 }}>
      <div className="checkout-layout">
        
        {/* Checkout Flow (8 Columns / left-side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Progress Stepper */}
          <div className="checkout-stepper" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                borderRadius: '9999px',
                border: '2px solid var(--primary)',
                color: 'var(--primary)',
                backgroundColor: 'rgba(19, 66, 61, 0.05)'
              }}
            >
              <span
                className="font-label-md"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px'
                }}
              >
                1
              </span>
              <span className="font-label-md">Shipping</span>
            </div>
            
            <div style={{ width: '48px', height: '1px', backgroundColor: 'var(--outline-variant)' }} />
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                borderRadius: '9999px',
                border: step === 2 ? '2px solid var(--primary)' : '2px solid var(--outline-variant)',
                color: step === 2 ? 'var(--primary)' : 'var(--outline)',
                backgroundColor: step === 2 ? 'rgba(19, 66, 61, 0.05)' : 'transparent'
              }}
            >
              <span
                className="font-label-md"
                style={{
                  backgroundColor: step === 2 ? 'var(--primary)' : 'var(--outline-variant)',
                  color: step === 2 ? '#ffffff' : 'var(--outline)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px'
                }}
              >
                2
              </span>
              <span className="font-label-md">Payment</span>
            </div>
          </div>

          {/* Stepper Contents */}
          <AnimatePresence mode="wait">
            {step === 1 ? (
              /* Step 1: Shipping Details */
              <motion.section
                key="step-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-card"
                style={{ padding: '32px', transform: 'none', border: '1px solid rgba(192,200,198,0.3)' }}
              >
                <h2 className="font-headline-sm text-primary" style={{ marginBottom: '24px' }}>
                  Shipping Details
                </h2>
                
                <form
                  onSubmit={(e) => { e.preventDefault(); handleGoToStep(2); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div>
                    <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Pet Parent Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: 'none',
                        borderRadius: 'var(--radius-default)',
                        padding: '16px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>Street Address</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Puppy Lane"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: 'none',
                        borderRadius: 'var(--radius-default)',
                        padding: '16px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>City</label>
                      <input
                        type="text"
                        required
                        placeholder="Pawsville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '16px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>ZIP Code</label>
                      <input
                        type="text"
                        required
                        placeholder="90210"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '16px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ padding: '16px 32px', boxShadow: '0 8px 24px rgba(19, 66, 61, 0.15)' }}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </motion.section>
            ) : (
              /* Step 2: Payment Details */
              <motion.section
                key="step-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-card"
                style={{ padding: '32px', transform: 'none', border: '1px solid rgba(192,200,198,0.3)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 className="font-headline-sm text-primary" style={{ margin: 0 }}>
                    Payment Details
                  </h2>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--on-surface-variant)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>lock</span>
                    <span className="font-label-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Encryption</span>
                  </div>
                </div>

                <form
                  onSubmit={handleSimulateOrder}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div style={{ position: 'relative' }}>
                    <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: 'none',
                        borderRadius: 'var(--radius-default)',
                        padding: '16px 80px 16px 16px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                    <div style={{ position: 'absolute', right: '16px', bottom: '14px', display: 'flex', gap: '8px' }}>
                      <div style={{ width: '32px', height: '20px', backgroundColor: 'var(--surface-variant)', borderRadius: '2px' }} />
                      <div style={{ width: '32px', height: '20px', backgroundColor: 'var(--surface-variant)', borderRadius: '2px' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>Expiry Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '16px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '16px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div className="checkout-payment-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    <button
                      type="button"
                      onClick={() => handleGoToStep(1)}
                      className="font-label-md text-primary"
                      style={{ textDecoration: 'underline' }}
                    >
                      Back to Shipping
                    </button>
                    
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isProcessing}
                      style={{
                        padding: '16px 40px',
                        minWidth: '200px',
                        boxShadow: '0 8px 24px rgba(19, 66, 61, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      {isProcessing ? 'Processing Securely...' : 'Place Order'}
                      {isProcessing && (
                        <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px', color: '#ffffff' }}>
                          sync
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </motion.section>
            )}
          </AnimatePresence>

        </div>

        {/* Order Summary (4 Columns / right-side) */}
        <aside>
          <div className="glass-card" style={{ padding: '32px', position: 'sticky', top: '100px', transform: 'none', border: '1px solid rgba(192,200,198,0.3)' }}>
            <h3 className="font-headline-sm text-primary" style={{ marginBottom: '24px', fontSize: '22px' }}>
              Order Summary
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              {itemsToRender.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--surface-container-high)', flexShrink: 0 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4 className="font-label-md text-on-surface" style={{ fontSize: '14px', margin: '0 0 4px' }}>
                      {item.name}
                    </h4>
                    <p className="font-label-sm text-on-surface-variant" style={{ margin: 0 }}>
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="font-label-md text-on-surface" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--outline-variant)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="text-on-surface" style={{ fontWeight: 500 }}>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span className="text-on-surface-variant">Shipping</span>
                <span className="text-on-surface" style={{ fontWeight: 500 }}>${shipping.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--outline-variant)', paddingTop: '16px' }}>
                <span className="font-headline-sm text-primary" style={{ margin: 0, fontSize: '20px' }}>Total</span>
                <span className="font-headline-sm text-primary" style={{ margin: 0, fontSize: '20px' }}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'var(--surface-container-low)', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <p className="font-label-sm text-on-secondary-fixed-variant" style={{ margin: 0, lineHeight: 1.4, fontSize: '11px' }}>
                Enjoy free shipping on orders over $150. Add ${(150 - subtotal) > 0 ? (150 - subtotal).toFixed(2) : '0.00'} more for zero-cost delivery.
              </p>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}
