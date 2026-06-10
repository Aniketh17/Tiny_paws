import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignIn() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [petName, setPetName] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to profile dashboard
    navigate('/profile');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--background)',
        padding: '24px',
        position: 'relative'
      }}
    >
      {/* Floating Back Button */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(112, 121, 119, 0.15)',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 4px 12px rgba(19, 66, 61, 0.05)',
          color: 'var(--primary)',
          textDecoration: 'none',
          zIndex: 100
        }}
        className="font-label-md hover:bg-surface-container-low transition-all duration-300"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
        Back to Home
      </Link>

      <div className="signin-container">
        {/* Forms Panel */}
        <motion.div
          className="signin-form-panel"
          animate={isMobile ? { x: 0 } : { x: isSignUp ? '100%' : '0%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 170 }}
        >
          {/* Brand Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 className="font-display-lg" style={{ fontSize: '32px', margin: '0 0 8px', color: 'var(--primary)' }}>
              Tiny Paws
            </h1>
            <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
              Elevating pet care through expertise and love.
            </p>
          </div>

          {/* Toggle Switch */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                backgroundColor: 'var(--secondary-container)',
                padding: '4px',
                borderRadius: '9999px',
                display: 'inline-flex',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Background thumb sliding */}
              <motion.div
                animate={{ x: isSignUp ? '100%' : '0%' }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  bottom: '4px',
                  width: 'calc(50% - 4px)',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '9999px',
                  zIndex: 1
                }}
              />
              <span
                onClick={() => setIsSignUp(false)}
                className="font-label-md"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '8px 24px',
                  color: !isSignUp ? '#ffffff' : 'var(--primary)',
                  transition: 'color 0.2s'
                }}
              >
                Sign In
              </span>
              <span
                onClick={() => setIsSignUp(true)}
                className="font-label-md"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '8px 24px',
                  color: isSignUp ? '#ffffff' : 'var(--primary)',
                  transition: 'color 0.2s'
                }}
              >
                Sign Up
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSignUp ? (
              /* Sign In Form */
              <motion.form
                key="signin-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div>
                  <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@tinypaws.com"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label className="font-label-md text-on-surface-variant">Password</label>
                    <a href="#" className="font-label-md text-primary" style={{ textDecoration: 'underline' }}>
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '16px', width: '100%', borderRadius: '9999px', fontSize: '15px', marginTop: '8px' }}
                >
                  Continue
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ffffff' }}>
                    arrow_forward
                  </span>
                </button>

                {/* Third Party Auth Section */}
                <div style={{ position: 'relative', margin: '8px 0', textAlign: 'center' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', borderTop: '1px solid var(--outline-variant)' }} />
                  </div>
                  <span
                    className="font-label-sm"
                    style={{
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      padding: '0 12px',
                      color: 'var(--on-surface-variant)'
                    }}
                  >
                    OR CONTINUE WITH
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ padding: '12px', borderRadius: '12px', fontSize: '14px', border: '1px solid var(--outline-variant)' }}
                    onClick={() => navigate('/profile')}
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida/AP1WRLsAioubnflOyqFlf3viEKLQIZsO_yHbeDotVJ5TOgkzvmq3FW40a0ICXangitocp0ut5_93x6L9ZWDVbN7uq2Ouw61Bfi9LSnngxtQmh6HzCPhV5_53-pxZ4YYTuAeuYcUQjaqPRO7tELY-IdjkUSr-Cpap5w9fOZpTJamok_FIG-Q6IDHND-JskYYoIOjVMpJ0hwkR2h5LfdTTjbLsy9m-w7k1tTe-fFv-8N73dv0mzd9ZGKe1RH6Y7RU"
                      alt="Google logo"
                      style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                    />
                    Google
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ padding: '12px', borderRadius: '12px', fontSize: '14px', border: '1px solid var(--outline-variant)' }}
                    onClick={() => navigate('/profile')}
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                      apps
                    </span>
                    Apple
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Sign Up Form */
              <motion.form
                key="signup-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '6px' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane"
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: '1px solid var(--outline-variant)',
                        borderRadius: '12px',
                        padding: '10px 14px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '6px' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: '1px solid var(--outline-variant)',
                        borderRadius: '12px',
                        padding: '10px 14px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '6px' }}>
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    required
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Luna"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="block font-label-md text-on-surface-variant" style={{ marginBottom: '6px' }}>
                    Create Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      border: '1px solid var(--outline-variant)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '14px', width: '100%', borderRadius: '9999px', fontSize: '15px', marginTop: '12px' }}
                >
                  Create Account
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Image Panel Overlay */}
        <motion.div
          className="signin-image-panel"
          animate={isMobile ? { x: 0 } : { x: isSignUp ? '-100%' : '0%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 170 }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2n8rTDdyjhIVab23dh9nT0pRIplDLUsx-GLzsl3x4zSfy9w2AlprhrKZJn4am_ePpyTpMOxVHxstuQsBUnXHT_LQ8B168Vo39Y4_goorRuk351JpLfOmOSZHkV4hF89QtaU__k9f0qDFbhA_7a5N6zMpVCtlWNR2JPxzp-1cc_zAcNlHCw-lvh0KU0Hc34TuxPaHrZ27kz1UaxcByXmSJP83-Fxmv8021a89SIJ9o7zYtTLjByaulIB5hxHKTZq6j2q5TDtp13E"
            alt="Happy pet parent with golden retriever"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(19, 66, 61, 0.85), rgba(19, 66, 61, 0.35))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '48px',
              color: '#ffffff'
            }}
          >
            <span
              className="font-label-sm"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                opacity: 0.8,
                marginBottom: '8px',
                color: '#ffffff'
              }}
            >
              Join the Community
            </span>

            <h2
              className="font-display-lg"
              style={{
                color: '#ffffff',
                fontSize: '32px',
                lineHeight: 1.25,
                marginBottom: '16px',
                fontWeight: 'bold'
              }}
            >
              {!isSignUp ? 'Welcome back to the family.' : 'Start your premium journey.'}
            </h2>

            <p className="font-body-md" style={{ color: '#ffffff', opacity: 0.9, maxWidth: '400px', margin: 0 }}>
              {!isSignUp
                ? "Access your pet's medical vault, schedule premium grooming, and shop our curated boutique collection."
                : 'Create a profile for your pet and unlock world-class health tracking and personalized nutrition plans today.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
              <div style={{ display: 'flex', marginRight: '4px' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9VJ2bfTY9UPSR4IrAUJV-6ZrYTRGqBv76n09ilNIypW-VP-c10ql0bd1_btfmPTMkoScGchFqz1dz7IR8O_8ZZgU9eZF0TUArLbQWwJ3O1w3ca857YnqKqF-5zAnaX4D_0Q-Y89fwz7uqg9MOysnU8XvL8Y_6mTfv4LE0ADOmmGzKO6XVBslp41_ioX8hW-2WLkKBE8eFGN-wcWHG1965UtSZbDRXm9yT9Q5yAG_GO3pLck3R1lwHpM43lpI7UX3KOWV_r8jZD4"
                  alt="User avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', objectFit: 'cover' }}
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi7v1vcMGVvqkVOMrGiynroXEEu440M_9gT_p0CTSBFVkWrL6f5Bt5Yb_P9prLjCpJ9OGFuV2s1MwWRUEanTTKYbBpAO6O3Q1YJ12kLlF_kXvmCgsc9H_gjTQgJOH-uGXSggPdvuBh97bgoUNB5ycuJ71ZCNrdSxESeDossOsIqXqgFZvIZI9fs6vG2W1ezdUYyAf6KfCtRGytoY3L4oNaWF_5x_VY0RvMMatcKawnj8ZuuQHideD77GbEa87BiuD_AE0xuaL_t48"
                  alt="User avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', objectFit: 'cover', marginLeft: '-12px' }}
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_wHjN1lbvel_RqvvmebYE__7_pAsCpp7DhfaBclWfudpK5Lw56F6HvHUSEYfuDuzGP1sTCAWBcuPO-BrLwtzS0QfHvW4N3B8sYUyDBV7ZtRSNzi9Xvdxy3ioWurwTsqcMeVwBI1w5rL8hFYoxAvJiPH0141YJcgv49emVJa-DNEp4nWW7euEoZ5EFS5mgtfGBOvsc_HdGD9tZC8HNyn6T8sPYjoxkxpjIvYyNsj0LheCJmeVMKOfrK7fVTqqzqK27P50R4G_3ZBM"
                  alt="User avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', objectFit: 'cover', marginLeft: '-12px' }}
                />
              </div>
              <p className="font-label-sm" style={{ color: '#ffffff', margin: 0, opacity: 0.9 }}>
                Join 15,000+ premium pet parents
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
