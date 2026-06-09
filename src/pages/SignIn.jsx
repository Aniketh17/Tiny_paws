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
    <div style={{ 
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', padding: '20px',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: '40px', left: '40px', zIndex: 100 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 600 }}>
          <ArrowLeft size={24} /> Back
        </button>
      </div>

      <div style={{
        background: 'var(--surface)', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        overflow: 'hidden', width: '100%', maxWidth: '1000px', height: '650px', display: 'flex', position: 'relative'
      }}>
        
        {/* SignIn Form (Left Side) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.6s ease-in-out', opacity: isSignUp ? 0 : 1, zIndex: isSignUp ? 1 : 2, pointerEvents: isSignUp ? 'none' : 'auto' }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--text-main)', textAlign: 'center' }}>Sign In</h2>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" placeholder="Email" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input type="password" placeholder="Password" className="form-control" required style={{ padding: '16px' }} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}>Sign In</button>
            
            <p className="text-muted" style={{ textAlign: 'center', marginTop: '20px', display: 'block', '@media (min-width: 768px)': { display: 'none' } }}>
              <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsSignUp(true)}>Switch to Sign Up</span>
            </p>
          </form>
        </div>

        {/* SignUp Form (Right Side) */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.6s ease-in-out', opacity: isSignUp ? 1 : 0, zIndex: isSignUp ? 2 : 1, pointerEvents: isSignUp ? 'auto' : 'none' }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--text-main)', textAlign: 'center' }}>Create Account</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
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

            <p className="text-muted" style={{ textAlign: 'center', marginTop: '20px', display: 'block', '@media (min-width: 768px)': { display: 'none' } }}>
              <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsSignUp(false)}>Switch to Sign In</span>
            </p>
          </form>
        </div>

        {/* Overlay Slider */}
        <motion.div 
          animate={{ x: isSignUp ? '-100%' : '0%' }}
          transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
          style={{
            position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
            background: 'linear-gradient(135deg, var(--primary) 0%, #ff5e00 100%)',
            color: 'white', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '60px', boxShadow: isSignUp ? '20px 0 50px rgba(0,0,0,0.2)' : '-20px 0 50px rgba(0,0,0,0.2)'
          }}
        >
          <AnimatePresence mode="wait">
            {!isSignUp ? (
              <motion.div key="panel-login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Hello, Friend!</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Enter your personal details and start your pet care journey with us</p>
                <button className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 40px', fontSize: '1.2rem' }} onClick={() => setIsSignUp(true)}>Sign Up</button>
              </motion.div>
            ) : (
              <motion.div key="panel-signup" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Welcome Back!</h2>
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
