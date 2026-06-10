import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="container" style={{ paddingBottom: 80, paddingTop: 120 }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }} className="md-text-left">
        <h1 className="font-display-lg text-primary" style={{ marginBottom: '16px' }}>
          Connect With Our Care Team
        </h1>
        <p className="font-body-lg text-on-surface-variant md-mx-0" style={{ maxWidth: '640px', margin: '0 auto' }}>
          Whether you're scheduling a wellness check or planning a puppy birthday bash, our dedicated premium care specialists are here to ensure every wag is a happy one.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', flexWrap: 'wrap' }}>
        
        {/* Left Column: Company Info (5 Columns / left-side) */}
        <div style={{ flex: '1 1 320px', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(192, 200, 198, 0.3)', transform: 'none' }}>
            <h2 className="font-headline-sm text-primary" style={{ marginBottom: '24px' }}>
              Reach Out
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Studio */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>location_on</span>
                </div>
                <div>
                  <h3 className="font-label-md text-primary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>
                    Our Studio
                  </h3>
                  <p className="font-body-md text-on-surface-variant" style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                    123 Puppy Lane<br />New York City, NY 10001
                  </p>
                </div>
              </div>

              {/* Call */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                </div>
                <div>
                  <h3 className="font-label-md text-primary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>
                    Speak with Us
                  </h3>
                  <p className="font-body-md text-on-surface-variant" style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 500 }}>
                    1-800-TINY-PAWS
                  </p>
                  <p className="font-label-sm text-on-surface-variant" style={{ margin: 0, opacity: 0.7, fontStyle: 'italic' }}>
                    Mon - Sat, 8am - 8pm EST
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
                </div>
                <div>
                  <h3 className="font-label-md text-primary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>
                    Digital Correspondence
                  </h3>
                  <p className="font-body-md text-on-surface-variant" style={{ margin: 0, fontSize: '14px' }}>
                    care@tinypaws.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Map Graphic */}
          <div
            className="glass-card"
            style={{
              height: '280px',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(19, 66, 61, 0.05)',
              border: '1px solid rgba(192, 200, 198, 0.3)',
              transform: 'none'
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiBm9-WT9o14lPm18L_fc3UUeEirqwy2Ko90OL350IPjcccq0vXYVVhASGsqD9SHhEdzfLuBUgphvd4sxZyyUBGBDoW6rqnqwnBSyefsdf4nZMD_pKF5wnKeLDbKkfNMEZebPdAXBSsAbLOQyNcyERlzx44SV-ATUGvve36jZc1z2ny4iISIyKQ9YrLSf2yBQppDEI2_nynu2myPYmEAmhHYAloDtw6qV4bAN-gqtFrwPOxEnz26-5J4kAF9J42cD5keoP8a2k8WM"
              alt="Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.9)' }}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(19, 66, 61, 0.08)' }} />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '8px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(192, 200, 198, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span className="font-label-md text-primary">Tiny Paws HQ</span>
            </div>
          </div>

        </div>

        {/* Right Column: Inquiry Form (7 Columns / right-side) */}
        <div style={{ flex: '2 1 480px', display: 'flex', flexDirection: 'column' }}>
          <div className="glass-card" style={{ padding: '40px', border: '1px solid rgba(192, 200, 198, 0.3)', transform: 'none' }}>
            
            <div style={{ marginBottom: '24px' }}>
              <h2 className="font-headline-sm text-primary" style={{ margin: '0 0 8px' }}>
                Send an Inquiry
              </h2>
              <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
                Our concierge team typically responds within two business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="font-label-md text-on-surface-variant" style={{ display: 'block', marginBottom: '8px' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alexander Brooks"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label className="font-label-md text-on-surface-variant" style={{ display: 'block', marginBottom: '8px' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="font-label-md text-on-surface-variant" style={{ display: 'block', marginBottom: '8px' }}>Inquiry Category</label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      outline: 'none',
                      appearance: 'none'
                    }}
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Medical">Medical Vault & Health</option>
                    <option value="Store">Premium Store Orders</option>
                    <option value="Birthday Planning">Birthday Planning Services</option>
                  </select>
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    expand_more
                  </span>
                </div>
              </div>

              <div>
                <label className="font-label-md text-on-surface-variant" style={{ display: 'block', marginBottom: '8px' }}>Your Message</label>
                <textarea
                  required
                  rows="5"
                  placeholder="How can we assist you and your companion today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--surface-container-low)',
                    border: '1px solid var(--outline-variant)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="btn btn-primary"
                  style={{
                    padding: '14px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: isSubmitted ? 'var(--tertiary-container)' : 'var(--primary)',
                    color: isSubmitted ? 'var(--on-tertiary-container)' : 'var(--on-primary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>sync</span>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span>
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
