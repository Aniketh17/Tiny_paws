import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { image } from 'framer-motion/client';

const slides = [
  {
    text: "The level of detail Tiny Paws provides for my cat's medical history is unparalleled. It's high-end service met with genuine heart.",
    author: "Eleanor Dumont",
    location: "London, UK",
    initials: "ED"
  },
  {
    text: "Finally a platform that treats my dog with the same luxury and clinical care I expect for myself. Truly exceptional.",
    author: "Julian Laurent",
    location: "New York, NY",
    initials: "JL"
  }
];

export default function Home() {
  const { pets } = useAppContext();
  const [timeLeft, setTimeLeft] = useState('');
  const [nextPetName, setNextPetName] = useState('Luna');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown timer logic
  useEffect(() => {
    const updateCountdown = () => {
      let nextDate = null;
      let nextPet = 'Luna';
      if (pets && pets.length > 0) {
        const futurePets = pets
          .map(p => ({
            name: p.name,
            date: new Date(p.vaccinationDate || p.nextCheckup)
          }))
          .filter(p => p.date > new Date() && p.date < new Date(new Date().getFullYear() + 5, 0, 1))
          .sort((a, b) => a.date - b.date);
        
        if (futurePets.length > 0) {
          nextDate = futurePets[0].date;
          nextPet = futurePets[0].name;
        }
      }
      if (!nextDate) {
        // Mock date: 12 days, 4 hours from now
        nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 12);
        nextDate.setHours(nextDate.getHours() + 4);
        nextPet = pets && pets[0] ? pets[0].name : 'Luna';
      }
      setNextPetName(nextPet);
      const diff = nextDate - new Date();
      if (diff <= 0) {
        setTimeLeft('Due Now!');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${days} Days, ${hours} Hours, ${mins} Mins`);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 60000);
    return () => clearInterval(intervalId);
  }, [pets]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Veterinarian with dog"
            src="/images/hero_section_image.png"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container section-py" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              Premium Care for <br />Your Best Friend
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Elevating the lives of pets and their parents through specialized care, premium essentials, and clinical reliability.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/store" className="btn btn-primary">
                Shop Premium
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Find a Specialist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vaccination Countdown Banner */}
      <section className="w-full bg-tertiary-fixed py-8 relative overflow-hidden">
        {/* Concentric Pulsing and Rotating Circles & Blurs (UI UX PRO MAX style) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.12 }}>
          {/* Pulsing Solid Circle */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '30%',
              width: '600px',
              height: '600px',
              border: '24px solid var(--tertiary)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(1px)',
            }}
          />
          {/* Rotating Dashed Circle */}
          <motion.div
            animate={{
              scale: [1.05, 0.95, 1.05],
              rotate: [0, -360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '70%',
              width: '900px',
              height: '900px',
              border: '32px dashed var(--tertiary)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Floating Organic Gradient Blob 1 */}
          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '15%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, var(--tertiary) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              opacity: 0.6,
            }}
          />
          {/* Floating Organic Gradient Blob 2 */}
          <motion.div
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 80, -60, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, var(--tertiary) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              opacity: 0.5,
            }}
          />
        </div>
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-on-tertiary-fixed-variant rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--on-tertiary-fixed-variant)', borderRadius: '50%' }}>
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ color: 'var(--tertiary-fixed)', fontVariationSettings: "'FILL' 1" }}>
                notifications_active
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-tertiary-fixed" style={{ color: 'var(--on-tertiary-fixed)', margin: 0 }}>
                Health Alert: Vaccination Due
              </h3>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant" style={{ margin: '4px 0 0 0', color: 'var(--on-tertiary-fixed-variant)' }}>
                Next Vaccination for '{nextPetName}' in <span className="font-bold">{timeLeft}</span>
              </p>
            </div>
          </div>
          <Link to="/profile" className="btn btn-primary btn-sm" style={{ backgroundColor: 'var(--on-tertiary-fixed-variant)', color: 'var(--tertiary-fixed)' }}>
            Book Now
          </Link>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-stack-lg" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Why Discerning Parents Choose Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The Tiny Paws gold standard in pet care excellence.</p>
          </div>
          <div className="bento-grid">
            <div className="glass-card p-8 space-y-4">
              <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary" style={{ backgroundColor: 'rgba(45, 90, 84, 0.1)', borderRadius: 'var(--radius-md)', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '16px' }}>
                <span className="material-symbols-outlined text-4xl" style={{ fontSize: '36px' }}>verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Verified Specialists</h3>
              <p className="text-on-surface-variant font-body-md">Every professional in our network undergoes a rigorous 5-step vetting process, ensuring only top-tier expertise for your companion.</p>
            </div>
            <div className="glass-card p-8 space-y-4">
              <div className="w-14 h-14 bg-secondary-container/50 rounded-2xl flex items-center justify-center text-primary" style={{ backgroundColor: 'rgba(234, 226, 208, 0.5)', borderRadius: 'var(--radius-md)', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '16px' }}>
                <span className="material-symbols-outlined text-4xl" style={{ fontSize: '36px' }}>inventory_2</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Health Vault</h3>
              <p className="text-on-surface-variant font-body-md">Secure, cloud-based storage for all your pet's medical records, vaccination schedules, and growth tracking in one elegant interface.</p>
            </div>
            <div className="glass-card p-8 space-y-4">
              <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center text-primary" style={{ backgroundColor: 'rgba(255, 219, 208, 0.3)', borderRadius: 'var(--radius-md)', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justify: 'center', marginBottom: '16px' }}>
                <span className="material-symbols-outlined text-4xl" style={{ fontSize: '36px' }}>card_giftcard</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Premium Supplies</h3>
              <p className="text-on-surface-variant font-body-md">Curated high-end products from sustainable brands that share our commitment to pet health and environmental responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Shortcuts */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="services-image-grid">
            <Link className="service-shortcut-card" to="/services">
              <img
                alt="Walks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr5IpbgioYvR0TVaTIp0sD9OUPuo-rIakp6qy-WcuAmQRwNj2yKpULbk0r6Lbgh5-G18srZ_0ktlXIBpVCXAWlV2kYsUN7N1QFlckTTvIn-SDjnFG3oBjwoIL3q1SYEpdiIINO9iSBAT2iTlr4P-lBVN5anbEUQvyVkKQRgIXpOeFIOHtaKqGlsZcTA5ze5gzu27tAIEOKX_cn72Bo7I1UP22nT0Fk2h2whMvEl0ZVZMsPmU3u64yTovpuyKTIQm0PZf6jqJ6wEQc"
              />
              <div className="service-shortcut-overlay">
                <h4 className="font-headline-sm text-white" style={{ color: '#ffffff', margin: 0 }}>Walks</h4>
                <p className="font-label-sm text-white/80" style={{ margin: '4px 0 0 0', color: 'white' }}>Curated urban adventures</p>
              </div>
            </Link>
            <Link className="service-shortcut-card" to="/services">
              <img
                alt="Grooming"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLx94bvtqDVooTWAS5PZJidG7L8N_e38LSTHVHr5hA3SvsJb3Ctl8QUYwPjVDUXoBlNmc_EOaxtL4hWlO2i3av4OuSs9Vv4n7UvBQIiJPwJ3PvMQMK3fdUHWBwxJvwvgRiDnU8zNC2IJhs0-iuYudtz7eUY12qqwULhCVVqDzfZxYp745TuhblJ2RdFyB97zSVypLAc3mbOIs-THMq8ZpGUvIzkdvXqIFrf1ZVL9C6YHpkQ9RcbU9f0syzzpca8ae_bR2jI7UTTY"
              />
              <div className="service-shortcut-overlay">
                <h4 className="font-headline-sm text-white" style={{ color: '#ffffff', margin: 0 }}>Grooming</h4>
                <p className="font-label-sm text-white/80" style={{ margin: '4px 0 0 0', color: 'white' }}>Spa-grade treatment</p>
              </div>
            </Link>
            <Link className="service-shortcut-card" to="/services">
              <img
                alt="Vet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ufge6LdAkJW-tWLuX66ZfpCd5kHku56LvXouWRX0Gd-XxoAYJ-JhMbJbyXjB4tJImq5GpIXCnbBN8Rf419gQ6M_ptsZHWbf9CEyYePxdYqOa37cmqt-yQLIu2GzDNeUDlHaKTHVWBwNa55cR4QV3gBGRlrfaGeben8kXPSBPojwcO0S9r8TgEvenjLxn9tVAmjUAnusLNXyfv8nisfbj6huqmVccMm4c6G59CdiuHCmTAO-6jJyOI_kDz_aWl2QCEeSvcU0wGBE"
              />
              <div className="service-shortcut-overlay">
                <h4 className="font-headline-sm text-white" style={{ color: '#ffffff', margin: 0 }}>Vet</h4>
                <p className="font-label-sm text-white/80" style={{ margin: '4px 0 0 0', color: 'white' }}>24/7 Clinical support</p>
              </div>
            </Link>
            <Link className="service-shortcut-card" to="/profile">
              <img
                alt="Vault"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3hx5n7wDvLDIQ3ojbaFTZOW5VD04KF7YqyZMUwYUY2_ARih-ZbM4g4dyL7JBQVEGZioZeIxLuYJ_CTL-QGrcfqDHtDd9BPCosdgsqEO3OBTeGadBGxDegOt2BX2GdEaLMQmtpttgpJheiG9k5PKni42Bow7XlOZVZz30PhPe9NbcSq41LmhohCg-_ZeSa8DhcwfMRFMn68E59rzkpBzNLqT85GbZSppkDgQ-jaiZs6CxvnmDEuvQ6GwkJcp_8HFaGMrTZwAGRyII"
              />
              <div className="service-shortcut-overlay">
                <h4 className="font-headline-sm text-white" style={{ color: '#ffffff', margin: 0 }}>Vault</h4>
                <p className="font-label-sm text-white/80" style={{ margin: '4px 0 0 0', color: 'white' }}>Digital records secure</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-stack-lg text-white" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)', overflow: 'hidden' }}>
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-on-primary" style={{ color: 'var(--on-primary)' }}>Trusted by Families</h2>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '850px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                width: `${slides.length * 100}%`
              }}
            >
              {slides.map((s, idx) => (
                <div key={idx} style={{ width: `${100 / slides.length}%`, padding: '0 16px', flexShrink: 0 }}>
                  <div className="bg-surface p-10 rounded-3xl" style={{ backgroundColor: 'var(--surface)', color: 'var(--on-surface)', borderRadius: 'var(--radius-xl)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', color: 'var(--tertiary)', marginBottom: '24px', gap: '4px' }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                      <blockquote className="font-headline-sm text-headline-sm italic text-primary leading-relaxed" style={{ marginBottom: '24px', fontSize: '20px' }}>
                        "{s.text}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                      <div
                        className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center font-bold text-primary"
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: 'var(--secondary-container)',
                          color: 'var(--primary)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {s.initials}
                      </div>
                      <div>
                        <p className="font-label-md text-primary" style={{ margin: 0, fontWeight: 700 }}>{s.author}</p>
                        <p className="text-label-sm text-on-surface-variant" style={{ margin: '2px 0 0 0' }}>{s.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-lg px-margin-desktop">
        <div className="max-w-4xl mx-auto bg-primary text-on-primary rounded-[40px] p-12 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)', borderRadius: 'var(--radius-xl)' }}>
          <h2 className="font-display-lg text-display-lg mb-6" style={{ color: 'var(--on-primary)' }}>Ready to elevate their care?</h2>

          <p className="font-body-lg text-body-lg mb-10 opacity-80 max-w-xl mx-auto" style={{ color: 'var(--on-primary)' }}>Experience the Tiny Paws difference with our curated selection of premium essentials.</p>          <br/>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/store" className="btn btn-secondary" style={{ backgroundColor: '#ffffff', color: 'var(--primary)', border: 'none' }}>
              Shop the Collection
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
