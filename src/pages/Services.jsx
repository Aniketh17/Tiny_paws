import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, CheckCircle } from 'lucide-react';

const serviceProviders = [
  { id: 1, type: 'vet', name: 'Dr. Sarah Jenkins', title: 'Senior Veterinarian', rating: 4.9, location: 'Downtown Clinic', image: 'https://i.pravatar.cc/300?img=32', desc: 'Expert in canine and feline preventive care.' },
  { id: 2, type: 'groomer', name: 'Paws & Bubbles', title: 'Certified Groomers', rating: 4.8, location: 'Westside Avenue', image: 'https://i.pravatar.cc/300?img=47', desc: 'Full-service grooming, styling, and nail clipping.' },
  { id: 3, type: 'walker', name: 'Mike Thompson', title: 'Pro Dog Walker', rating: 5.0, location: 'City Park Area', image: 'https://i.pravatar.cc/300?img=11', desc: 'Energetic walks tailored to your dogs breed and age.' },
  { id: 4, type: 'nanny', name: 'Emma Rose', title: 'Pet Nanny / Sitter', rating: 4.9, location: 'Mobile Service', image: 'https://i.pravatar.cc/300?img=5', desc: 'In-home pet sitting so your furry friend stays comfortable.' },
  { id: 5, type: 'vet', name: 'Dr. Marcus Webb', title: 'Pet Surgeon', rating: 4.7, location: 'Northside Animal Hospital', image: 'https://i.pravatar.cc/300?img=59', desc: 'Specialist in complex surgeries and emergency care.' },
  { id: 6, type: 'walker', name: 'Sarahs Pack Walks', title: 'Group Walkers', rating: 4.8, location: 'East Suburbs', image: 'https://i.pravatar.cc/300?img=43', desc: 'Socialization and pack walks for active dogs.' },
  { id: 7, type: 'groomer', name: 'The Fluffy Spa', title: 'Cat Grooming Specialist', rating: 4.9, location: 'Uptown Heights', image: 'https://i.pravatar.cc/300?img=20', desc: 'Stress-free grooming and bathing specialized for felines.' },
  { id: 8, type: 'nanny', name: 'David Chen', title: 'Overnight Pet Sitter', rating: 5.0, location: 'Downtown', image: 'https://i.pravatar.cc/300?img=68', desc: 'Reliable overnight care so you can travel without worry.' },
  { id: 9, type: 'vet', name: 'Dr. Emily Foster', title: 'Pet Dental Specialist', rating: 4.8, location: 'Westside Avenue', image: 'https://i.pravatar.cc/300?img=35', desc: 'Comprehensive dental cleaning and oral surgery for pets.' },
  { id: 10, type: 'walker', name: 'Jake & Co Walks', title: 'Solo Dog Walks', rating: 4.7, location: 'Suburban Area', image: 'https://i.pravatar.cc/300?img=53', desc: 'One-on-one attention for dogs who prefer solo walks.' },
  { id: 11, type: 'nanny', name: 'Maria Gomez', title: 'Puppy Training & Care', rating: 4.9, location: 'City Park', image: 'https://i.pravatar.cc/300?img=49', desc: 'Basic obedience training combined with daily sitting.' },
  { id: 12, type: 'groomer', name: 'Posh Paws Salon', title: 'Premium Styling', rating: 4.6, location: 'Downtown Plaza', image: 'https://i.pravatar.cc/300?img=24', desc: 'Luxury breed-specific trims and spa treatments.' }
];

export default function Services() {
  const [filter, setFilter] = useState('all');

  const filteredProviders = filter === 'all' 
    ? serviceProviders 
    : serviceProviders.filter(p => p.type === filter);

  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}! They will contact you shortly via email.`);
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: 'var(--title-md)', marginBottom: '15px' }}>Pet Services Directory</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Connect with top-rated veterinarians, groomers, dog walkers, and pet nannies in your area. Your pet deserves the best care!
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {['all', 'vet', 'groomer', 'walker', 'nanny'].map(type => (
          <button 
            key={type}
            onClick={() => setFilter(type)}
            className={`btn ${filter === type ? 'btn-primary' : 'btn-outline'}`}
            style={{ textTransform: 'capitalize', padding: '10px 24px' }}
          >
            {type === 'all' ? 'All Services' : `${type}s`}
          </button>
        ))}
      </div>

      <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
        {filteredProviders.map(provider => (
          <motion.div 
            key={provider.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ position: 'relative', height: '220px' }}>
              <img src={provider.image} alt={provider.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--surface)', padding: '5px 12px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
                <Star size={16} fill="var(--primary)" color="var(--primary)" /> {provider.rating}
              </div>
              <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600 }}>
                {provider.type}
              </div>
            </div>
            
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{provider.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '15px' }}>{provider.title}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '15px', fontSize: '0.9rem' }}>
                <MapPin size={16} /> {provider.location}
              </div>
              
              <p className="text-muted" style={{ marginBottom: '24px', flex: 1 }}>{provider.desc}</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button className="btn btn-outline" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} /> Book
                </button>
                <button className="btn btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} onClick={() => handleConnect(provider.name)}>
                  <CheckCircle size={18} /> Connect
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
