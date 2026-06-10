import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Tiny Paws updates!');
    e.target.reset();
  };

  return (
    <footer>
      <div className="footer-grid container px-gutter">
        <div className="footer-col">
          <p className="footer-logo">Tiny Paws</p>
          <p className="font-body-md text-body-md text-on-surface-variant" style={{ margin: 0 }}>
            Redefining pet wellness through premium experiences and expert care.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-title">Explore</p>
          <ul className="footer-links">
            <li>
              <Link className="footer-link" to="/services">
                Veterinarians
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/services">
                Luxury Groomers
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/services">
                Private Walkers
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/services">
                Pet Nannies
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-title">Company</p>
          <ul className="footer-links">
            <li>
              <Link className="footer-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/our-story">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/our-story">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/our-story">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-title">Newsletter</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              className="bg-surface rounded-lg border-outline-variant/50 focus:ring-primary focus:border-primary w-full text-sm"
              placeholder="Email"
              type="email"
              required
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--outline-variant)',
                borderRadius: 'var(--radius-default)',
                padding: '8px 12px',
                flex: 1,
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              className="bg-primary text-white p-2 rounded-lg"
              type="submit"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--on-primary)',
                padding: '8px 12px',
                borderRadius: 'var(--radius-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Tiny Paws Premium Pet Care. All rights reserved.</p>
      </div>
    </footer>
  );
}
