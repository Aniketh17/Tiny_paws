import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const providersData = [
  {
    id: 1,
    name: 'Dr. Elena Vance',
    title: 'Senior Veterinary Surgeon',
    rating: '4.9',
    distance: '0.8 miles away',
    type: 'Veterinary Specialists',
    icon: 'medical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2ihGFv1AnpCCgKqco6DlZ4K2nO2evtL9d3K3X_-_M9PHpuTDFaZPZy0V5pcbddP8OOHajvMoCQIxvUKo1JHb35kLSoxcFL6c4d_sTULLMI76RKUhlLXmQ5wK7EsvlEabyccdoa-RNTSYeWLJbNO8Q0zm-UVNQ6YbGZcGj-j24r4AXp7b7AoytCrQmOkav90y5YNuB3cuICMmiGRZfwRlYkOrWs831TyDqqIRyZLXXyDwpqBvvUwSsJ4OQ9UHruxAaFMzN1kz_CCs',
    pinPos: { top: '25%', left: '33%' }
  },
  {
    id: 2,
    name: 'Posh Paws Studio',
    title: 'Boutique Grooming',
    rating: '4.8',
    distance: '1.2 miles away',
    type: 'Boutique Groomers',
    icon: 'content_cut',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6r7oaBiQZzFylm5OaFtcEwI259RJGoK2PuZgjSLIEspqY83R6uXXeiVpusGa6CPeIvsoailP7uCP3tI4UyFXt1MsuAyspGCHSjv9qGiD9Pm6V6G1P6zBG8Z9arHRSgbXgUzSJLmnL5oIk0Nnbz9a6YlTI6xzuwTozzj74qItHb1BKQnqz5w335OPmn1KLo5p9Na_GgqgSpZWcFIW5el9VQJ5r3usLBtIVlg_kjBh1Wj6zvm6DF7pL9664tQuZigvBWTmiD_yRoi4',
    pinPos: { top: '50%', left: '66%' }
  },
  {
    id: 3,
    name: 'Marcus Walker',
    title: 'Professional Dog Walker',
    rating: '5.0',
    distance: '2.5 miles away',
    type: 'Professional Walkers',
    icon: 'directions_walk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1ELNawJvCJDL6WEFAjB7gz43imZq6LZL6nCGbI7dXmezc1PYZWCVn8GSIIWjVe2zEtWOWKzviAjxtZCmksAeFlGK7wUKbuR8kC6i8jEt7SuK3Kf1TZ8S-J50XfkVOZLIIobS5wk-PVEWDxde3iUeqMUPn43awrpQkPc2N0dZgLOuDqhvX0v5kP2gJn0mLe5fb6wxKnO6SatUdV2l3vitNCjnB6Se38dxxzB5iSxWO3a44J4gBvxy9kbXpSKLQd7kWitzrrPnWh3E',
    pinPos: { top: '66%', left: '50%' }
  },
  {
    id: 4,
    name: 'Urban Nannies',
    title: 'In-Home Pet Sitting',
    rating: '4.7',
    distance: '3.1 miles away',
    type: 'Elite Nannies',
    icon: 'potted_plant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCStdKA3tcoMjheYJE9p6LlGvu0LDGd6J8BJwsbqZmEVFAHpMHYHy-7GW6BxCdNtrna0ylEnqU3xSpKpGFUhFUzRuUeTaIV6MS5dZIljYT9XzQy0nE3GBCExXPdeV-leaW-zoSZwbzN4wGV1D-dZ6y8dcUsbkxoCbJJ1_b4Pf9uE89Pv7g0sppSyHn4Sv2Qanw8xyLlfgnpcvsUKdVOgvszAPNnuV6pLSzTShagH6201AZWspFqW695jzHpeOIZBtN3uTCR5m6cX7g',
    pinPos: { top: '35%', left: '75%' }
  }
];

export default function Services() {
  const [serviceType, setServiceType] = useState('Veterinary Specialists');
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('Within 5 miles');
  const [hoveredProviderId, setHoveredProviderId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Local connection request simulation
  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}!\nThey will contact you shortly via email.`);
  };

  const handleBook = (name) => {
    alert(`Booking process initiated for ${name}!\nCheck your email for details.`);
  };

  const filteredProviders = providersData.filter(provider => {
    if (searchQuery) {
      return provider.type === searchQuery;
    }
    return true;
  });

  const handleFindCare = () => {
    setSearchQuery(serviceType);
  };

  return (
    <div className="container" style={{ paddingBottom: 80, paddingTop: 120 }}>
      {/* Header & Filter Bar */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
          <h1 className="font-display-lg text-primary" style={{ marginBottom: '16px' }}>
            Find Premium Care
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Connect with vetted specialists who treat your companions like royalty.
          </p>
        </div>

        {/* Modern Filter Bar */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', width: '100%' }}>
            
            {/* Service Type Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-sm text-on-surface-variant" style={{ marginLeft: '4px' }}>Service Type</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--surface-container-low)',
                    border: 'none',
                    borderRadius: 'var(--radius-default)',
                    padding: '12px 16px 12px 40px',
                    fontSize: '14px',
                    color: 'var(--on-surface)',
                    appearance: 'none',
                    outline: 'none'
                  }}
                >
                  <option value="Veterinary Specialists">Veterinary Specialists</option>
                  <option value="Boutique Groomers">Boutique Groomers</option>
                  <option value="Professional Walkers">Professional Walkers</option>
                  <option value="Elite Nannies">Elite Nannies</option>
                </select>
                <span className="material-symbols-outlined text-primary" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>
                  home_health
                </span>
              </div>
            </div>

            {/* Location Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-sm text-on-surface-variant" style={{ marginLeft: '4px' }}>Location</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or Zip Code"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--surface-container-low)',
                    border: 'none',
                    borderRadius: 'var(--radius-default)',
                    padding: '12px 16px 12px 40px',
                    fontSize: '14px',
                    color: 'var(--on-surface)',
                    outline: 'none'
                  }}
                />
                <span className="material-symbols-outlined text-primary" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>
                  location_on
                </span>
              </div>
            </div>

            {/* Distance select */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-label-sm text-on-surface-variant" style={{ marginLeft: '4px' }}>Distance</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--surface-container-low)',
                    border: 'none',
                    borderRadius: 'var(--radius-default)',
                    padding: '12px 16px 12px 40px',
                    fontSize: '14px',
                    color: 'var(--on-surface)',
                    appearance: 'none',
                    outline: 'none'
                  }}
                >
                  <option value="Within 5 miles">Within 5 miles</option>
                  <option value="Within 10 miles">Within 10 miles</option>
                  <option value="Within 25 miles">Within 25 miles</option>
                </select>
                <span className="material-symbols-outlined text-primary" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>
                  distance
                </span>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button
              onClick={handleFindCare}
              className="btn btn-primary"
              style={{ padding: '12px 32px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--on-primary)' }}>search</span>
              Find Care
            </button>
          </div>
        </div>
      </section>

      {/* Main Content: Bento Grid with Map */}
      <div className="service-map-layout">
        
        {/* Provider List (8 Columns / left-side) */}
        <div className="providers-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="providers-list-grid">
            
            <AnimatePresence>
              {filteredProviders.map((provider) => (
                <motion.div
                  key={provider.id}
                  className="glass-card"
                  onMouseEnter={() => setHoveredProviderId(provider.id)}
                  onMouseLeave={() => setHoveredProviderId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid rgba(192, 200, 198, 0.3)'
                  }}
                >
                  {/* Card Image */}
                  <div style={{ height: '192px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={provider.image}
                      alt={provider.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      className="glass-card"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        transform: 'none'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--primary)', fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-label-sm" style={{ color: 'var(--primary)' }}>{provider.rating}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 className="font-headline-sm text-primary" style={{ margin: 0 }}>
                        {provider.name}
                      </h3>
                      <span className="font-label-sm text-on-surface-variant" style={{ whiteSpace: 'nowrap' }}>
                        {provider.distance}
                      </span>
                    </div>

                    <p
                      className="font-label-md"
                      style={{
                        color: 'var(--on-secondary-container)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '24px'
                      }}
                    >
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                        {provider.icon}
                      </span>
                      {provider.title}
                    </p>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                      <button
                        className="btn btn-primary"
                        style={{ flex: 1, padding: '10px 16px', fontSize: '13px' }}
                        onClick={() => handleBook(provider.name)}
                      >
                        Book Now
                      </button>
                      <button
                        className="btn btn-secondary"
                        style={{ flex: 1, padding: '10px 16px', fontSize: '13px' }}
                        onClick={() => handleConnect(provider.name)}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
          </div>
        </div>

        <aside className="map-sidebar">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Map Card */}
            <div
              className="glass-card"
              style={{
                height: '480px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(19, 66, 61, 0.05)',
                border: '1px solid rgba(192, 200, 198, 0.3)',
                transform: 'none'
              }}
            >
              {/* Map background image */}
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--surface-container-high)' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQEcLHiaatp5CEiHWPa2CEKgmVZqRPFUorBZ9W094hXuWcCrDx7-9r1xje7tKKHBsby3ut6zrm5E_t5G_ocEM06JVer3EFC3OS6aePski0dB42WcSPIjnSKxa8-GglYZMP5L_yTqNjk17ckHrptSFkcFYJCAv4drGunBJusyNu3RP5UaReExv_z5aVYNwHu-oh9NpoJqQxFRzjZelCyQzeNnvbgUMw-2hyrmwgF08anx5qWGyuVVza7_jdrR1MlzXSSFD9ij32xk"
                  alt="San Francisco Map"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(100%) contrast(1.2)' }}
                />

                {/* Map pins */}
                {filteredProviders.map(provider => (
                  <div
                    key={provider.id}
                    style={{
                      position: 'absolute',
                      top: provider.pinPos.top,
                      left: provider.pinPos.left,
                      cursor: 'pointer',
                      transform: 'translate(-50%, -50%)',
                      zIndex: hoveredProviderId === provider.id ? 20 : 10
                    }}
                  >
                    <motion.div
                      animate={hoveredProviderId === provider.id ? {
                        y: [0, -12, 0],
                        scale: 1.25
                      } : {
                        y: 0,
                        scale: 1.0
                      }}
                      transition={{
                        y: hoveredProviderId === provider.id ? {
                          repeat: Infinity,
                          duration: 0.6,
                          ease: 'easeInOut'
                        } : { duration: 0.2 },
                        scale: { duration: 0.2 }
                      }}
                      style={{
                        backgroundColor: hoveredProviderId === provider.id ? 'var(--primary)' : 'var(--primary-container)',
                        color: 'var(--on-primary)',
                        padding: '8px',
                        borderRadius: '9999px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>
                        {provider.icon === 'medical_services' ? 'pets' : provider.icon}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Map Info Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(192, 200, 198, 0.3)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <p className="font-label-sm" style={{ color: 'var(--primary)', margin: 0 }}>Nearby Providers</p>
                  <p className="font-body-md text-on-surface-variant" style={{ margin: 0, fontSize: '13px' }}>
                    {filteredProviders.length} experts found in area
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: 'rgba(45, 90, 84, 0.15)',
                    color: 'var(--primary)',
                    padding: '8px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => alert("Expanding Map Visual...")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fullscreen</span>
                </button>
              </div>
            </div>

            {/* Emergency Care Card */}
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--tertiary-fixed)',
                color: 'var(--on-tertiary-fixed-variant)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(104, 38, 16, 0.1)'
              }}
            >
              <h4 className="font-headline-sm" style={{ color: 'var(--tertiary)', margin: '0 0 8px' }}>
                Emergency Care?
              </h4>
              <p className="font-body-md" style={{ color: 'var(--on-tertiary-fixed-variant)', opacity: 0.9, margin: '0 0 16px', fontSize: '14px', lineHeight: 1.5 }}>
                Immediate veterinary assistance is available 24/7 through our telehealth network.
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--tertiary)',
                  color: 'var(--on-tertiary)',
                  padding: '10px 24px',
                  fontSize: '13px'
                }}
                onClick={() => alert("Connecting to 24/7 Emergency Line...")}
              >
                Contact ER Now
              </button>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}

