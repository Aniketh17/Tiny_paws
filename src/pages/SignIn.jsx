import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function SignIn() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="auth-container">
      <div className="auth-back-btn">
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 600 }}>
          <ArrowLeft size={24} /> Back
        </button>
      </div>

      <div className="auth-card">
        
        {/* SignIn Form (Left Side) */}
        <div 
          className={`auth-form-side left ${isSignUp ? 'hidden-mobile' : ''}`}
          style={{ 
            opacity: isSignUp ? 0 : 1, 
            zIndex: isSignUp ? 1 : 2, 
            pointerEvents: isSignUp ? 'none' : 'auto' 
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: 'var(--title-sm)', marginBottom: '30px', color: 'var(--text-main)', textAlign: 'center' }}>Sign In</h2>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" placeholder="Email" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input type="password" placeholder="Password" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}>Sign In</button>
            
            <p className="text-muted auth-mobile-switch" style={{ textAlign: 'center', marginTop: '20px' }}>
              Don't have an account? <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsSignUp(true)}>Sign Up</span>
            </p>
          </form>
        </div>

        {/* SignUp Form (Right Side) */}
        <div 
          className={`auth-form-side right ${!isSignUp ? 'hidden-mobile' : ''}`}
          style={{ 
            opacity: isSignUp ? 1 : 0, 
            zIndex: isSignUp ? 2 : 1, 
            pointerEvents: isSignUp ? 'auto' : 'none' 
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: 'var(--title-sm)', marginBottom: '30px', color: 'var(--text-main)', textAlign: 'center' }}>Create Account</h2>
            <div className="contact-form-grid" style={{ marginBottom: '20px' }}>
              <input type="text" placeholder="First Name" className="form-control" required style={{ padding: '16px' }} />
              <input type="text" placeholder="Last Name" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" placeholder="Email" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input type="password" placeholder="Password" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}>Sign Up</button>

            <p className="text-muted auth-mobile-switch" style={{ textAlign: 'center', marginTop: '20px' }}>
              Already have an account? <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsSignUp(false)}>Sign In</span>
            </p>
          </form>
        </div>

        {/* Overlay Slider */}
        <motion.div 
          className="auth-overlay-container"
          animate={{ x: isSignUp ? '-100%' : '0%' }}
          transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
          style={{
            boxShadow: isSignUp ? '20px 0 50px rgba(0,0,0,0.2)' : '-20px 0 50px rgba(0,0,0,0.2)'
          }}
        >
          <AnimatePresence mode="wait">
            {!isSignUp ? (
              <motion.div key="panel-login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h2 style={{ fontSize: 'var(--title-md)', marginBottom: '20px', color: 'white' }}>Hello, Friend!</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Enter your personal details and start your pet care journey with us</p>
                <button className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 40px', fontSize: '1.2rem' }} onClick={() => setIsSignUp(true)}>Sign Up</button>
              </motion.div>
            ) : (
              <motion.div key="panel-signup" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h2 style={{ fontSize: 'var(--title-md)', marginBottom: '20px', color: 'white' }}>Welcome Back!</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>To keep connected with us please login with your personal info</p>
                <button className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 40px', fontSize: '1.2rem' }} onClick={() => setIsSignUp(false)}>Sign In</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
