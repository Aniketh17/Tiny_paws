import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, MapPin, Bone, Activity, ArrowRight, Clock, Stethoscope, Briefcase, FileText, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { pets } = useAppContext();
  const [timeLeft, setTimeLeft] = useState('');

  // Find next vaccination date from all pets
  useEffect(() => {
    const updateTimer = () => {
      let nextDate = null;
      if (pets && pets.length > 0) {
        const futureDates = pets
          .map(p => new Date(p.vaccinationDate))
          .filter(d => d > new Date())
          .sort((a, b) => a - b);
        if (futureDates.length > 0) nextDate = futureDates[0];
      }
      
      // Default fallback if no pets or no future vaccines
      if (!nextDate) {
        nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 14);
      }

      const diff = nextDate - new Date();
      if (diff <= 0) {
        setTimeLeft('Due Now!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [pets]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="container hero-section" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'var(--title-lg)', marginBottom: '20px' }}
          >
            Premium Care for Your <span style={{ color: 'var(--primary)' }}>Furry Friends</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '500px' }}
          >
            Your one-stop destination for high-quality pet supplies, expert veterinary services, dog walkers, and medical document management.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-buttons">
            <Link to="/store" className="btn btn-primary">Shop Now</Link>
            <Link to="/services" className="btn btn-outline">Explore Services</Link>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="hero-image"
        >
          <img src="images/hero_dog_1780981561460.png" alt="Happy dog" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', objectFit: 'cover', aspectRatio: '4/3' }} />
        </motion.div>
      </section>

      {/* Vaccination Banner */}
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="vax-banner"
        >
          <div>
            <h2 style={{ fontSize: 'var(--title-xs)', marginBottom: '10px' }}>Vaccination Due Reminder</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>Keep your pets safe. We check all your pet profiles for upcoming dates.</p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '20px 40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', textAlign: 'center', width: '100%', maxWidth: '320px' }}>
            <div className="text-muted" style={{ marginBottom: '10px' }}>Next Vaccine In:</div>
            <div style={{ fontSize: 'var(--title-xs)', fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', fontVariantNumeric: 'tabular-nums' }}>
              {timeLeft}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us / Value Prop Section */}
      <section style={{ padding: '80px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Why Choose Tiny Paws?</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We combine premium e-commerce with real-world professional pet services.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '30px' }}>
            {[
              { icon: <ShieldCheck size={40} />, title: "Trusted Professionals", desc: "All our groomers, walkers, and vets are fully verified." },
              { icon: <Heart size={40} />, title: "Premium Products", desc: "We only stock high-quality, nutritious food and safe toys." },
              { icon: <FileText size={40} />, title: "Secure Health Vault", desc: "Store your pet's medical records directly in your private dashboard." },
              { icon: <Activity size={40} />, title: "24/7 Support", desc: "Our veterinary experts are always on standby to help you." }
            ].map((feature, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} style={{ padding: '30px', textAlign: 'center', background: 'var(--bg-color)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{feature.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Services</h2>
              <p className="text-muted">Connecting you with the best pet professionals.</p>
            </div>
            <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
              View Directory <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '30px' }}>
            {[
              { title: 'Dog Walkers', icon: <Briefcase size={32} />, link: '/services' },
              { title: 'Pet Nannies', icon: <Heart size={32} />, link: '/services' },
              { title: 'Veterinarians', icon: <Stethoscope size={32} />, link: '/services' },
              { title: 'Document Vault', icon: <FileText size={32} />, link: '/profile' }
            ].map((srv, idx) => (
              <Link to={srv.link} key={idx}>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: 'rgba(249, 115, 22, 0.05)', boxShadow: 'var(--shadow-sm)' }} transition={{ duration: 0.2 }} style={{ background: 'var(--surface)', padding: '40px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer', color: 'var(--text-main)' }}>
                  <div style={{ marginBottom: '20px', padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                    {srv.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem' }}>{srv.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Partner Stores */}
      <section style={{ padding: '80px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Nearby Partner Clinics & Stores</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            {[
              { name: 'City Vet Clinic', dist: '1.2 miles', address: '123 Main St', link: 'https://maps.google.com/?q=City+Vet+Clinic+123+Main+St' },
              { name: 'Paws & Claws Care', dist: '3.5 miles', address: '456 Oak Ave', link: 'https://maps.google.com/?q=Paws+Claws+Care+456+Oak+Ave' },
              { name: 'Downtown Animal Hospital', dist: '5.0 miles', address: '789 Pine Blvd', link: 'https://maps.google.com/?q=Downtown+Animal+Hospital+789+Pine+Blvd' }
            ].map((store, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>{store.name}</h3>
                  <span style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{store.dist}</span>
                </div>
                <p className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}><MapPin size={16} /> {store.address}</p>
                <a href={store.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Get Directions</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>What Pet Parents Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            {[
              { name: "Emily R.", review: "The Document Vault feature is a lifesaver. I always have my dog's vaccination records ready when we travel!", rating: 5 },
              { name: "Mark T.", review: "Found the best dog walker through their Services directory. Plus, their premium dog food delivery is super fast.", rating: 5 },
              { name: "Sarah L.", review: "Booked a grooming appointment and bought toys all in one place. Tiny Paws is officially my go-to pet app.", rating: 5 }
            ].map((t, idx) => (
              <div key={idx} style={{ background: 'var(--surface)', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', color: '#FBBF24', marginBottom: '15px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>"{t.review}"</p>
                <h4 style={{ fontWeight: 600 }}>- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
