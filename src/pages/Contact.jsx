import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: 'var(--title-sm)', marginBottom: '16px' }}>Get in Touch</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Have questions about your pet's health, our products, or want to schedule an appointment? We're here to help!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 style={{ marginBottom: '30px' }}>Contact Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)', borderRadius: '50%' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Our Location</h3>
                <p className="text-muted">123 Pet Avenue, Bark City<br />NY 10001, USA</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)', borderRadius: '50%' }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone Number</h3>
                <p className="text-muted">+1 (555) 123-4567<br />Mon-Fri 9am to 6pm</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)', borderRadius: '50%' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email Address</h3>
                <p className="text-muted">support@tinypaws.com<br />We reply within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="contact-form-card"
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="contact-form-grid">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>First Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Last Name</label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
              <input type="email" className="form-control" required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Query Type</label>
              <select className="form-control" required>
                <option value="" disabled selected>Select a topic...</option>
                <option value="general">General Enquiry</option>
                <option value="medical">Medical / Vet Appointment</option>
                <option value="store">Store Issue / Return</option>
                <option value="birthday">Pet Birthday Planning</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '15px' }}>
              <Send size={20} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
