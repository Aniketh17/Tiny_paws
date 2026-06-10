import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Co-Founder & CVO',
    title: 'Chief Veterinary Officer',
    desc: '15+ years in feline nutrition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9qnGgfbeJNKTJDz9WOOLKTX8_Nb2mJEc_EdsJJKbbG95UExM-Ek-CiZDWUebP5MJXaQfVqx645cFN_m4y8uU7OF9Ds01PCpMe_hzpZAijTvHmjJPjLcAUuLrTRiw-eAt5zZnFsw2i6Naoq3ryX1CN3fgh_ws4_14KoAHoTRyhAEWNIlq6NAkvj2dnXB5GKjT7JIl_FJYmxANGrUA82Yjmo2SAR_sf8T_pYr0dx3iqHlgjNjKiEQlD-EBeV_Z-coGA94PefH01DeE'
  },
  {
    name: 'Marcus Thorne',
    role: 'Design Principal',
    title: 'Head of Product Design',
    desc: 'Former Senior Lead at Apple.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqDyXUEUJtyhN44ttaBuofHWMStfBUmTOXAlLYUXIL9J8P3mfyRTIdGYG6e_Xj6s08l7xYkN2YEg_RM-joGkDMzcRtIIrcMwJsdNO40ElF_-scagPzMTaD6yPeNpR4Npf9-kFAIhsXET4M-pNvxts3vSL7iGmiTjOjQepG2L3bAEYVhhYlhJ79EZUZh2QK8y2T9innT4j2eBAUMRyALLl5jWc3u_yeWmkQbH64kuALjLPbStoh898RatR0cgJAtnpKdQvHXQRxWG0'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Lead',
    title: 'Director of Operations',
    desc: 'Supply chain ethics expert.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZCFwM0PkV8ZeMxhZA6ik2xxJI1UUjnM1RhfDLtMUvgB98qhORyPQubLdbLIFjTvOSybKZqVCun8ZRsNKYrFUe4N8jEljdH4W5xaFJRntAziR95zgyVi1qGWpudMdQ_-DW9wOqK671CNYydJK3vxMTOR1I2hR8UNftS87kQU_PYxuDGT59_5NX0DqHsJhZ22hYq_C6mVkbrO7un9cjuI87EnX713qU13lhIoTjq919FR5q3x_BEBkd1Hy6qT6pcG2kc-lY9t_im8'
  },
  {
    name: 'Dr. David Kim',
    role: 'Lead Researcher',
    title: 'Research Lead',
    desc: 'Ph.D. in Animal Physiology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJscnPFzAWBFKEXy3xfywoa77kypvSnr_cIjvDteKyjW9fBO06aSa8MbDLrlw-GkDAlqzz3SXF92hZd3qAgDJD1ieRQBNOsIJE8LaD9rqVOr8fCqZfsMpTWio1xwU8emJHmYDuQw3qAY2lD7TL-6Bb1n4FAJhtIWwP6BdDQo8ZLWUMuFvHp6_dJkZ3smzkTXmGSucRmiX7goFBm5O_we-tEqruZ-FHadZOGOeZjY6wiC_juOkecF_a6s3-FViLbcp5vkRZc6Q_YF4'
  }
];

export default function OurStory() {
  return (
    <div style={{ paddingTop: '0px' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '65vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingBottom: '64px', paddingTop: '120px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/about_us_image.png"
            alt="Veterinarian with golden retriever"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(252,249,248,0.2) 0%, rgba(252,249,248,1) 100%)'
          }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '640px' }}>
            <span
              className="font-label-md"
              style={{
                backgroundColor: 'var(--primary-container)',
                color: 'var(--on-primary-container)',
                padding: '6px 16px',
                borderRadius: '9999px',
                display: 'inline-block',
                marginBottom: '24px'
              }}
            >
              OUR STORY
            </span>
            <h1 className="font-display-lg text-primary" style={{ marginBottom: '24px', lineHeight: 1.2 }}>
              Where Clinical Excellence Meets <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 'normal' }}>Heartfelt Care</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant">
              Founded by a collective of visionary veterinarians and designers, Tiny Paws was born from a simple realization: our pets deserve a standard of care as sophisticated as our own.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy - Bento Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="story-mission-grid">
            
            {/* Mission Card */}
            <div
              className="glass-card story-mission-card-large"
              style={{
                backgroundColor: 'var(--primary-container)',
                color: '#ffffff',
                padding: '48px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                minHeight: '380px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.08 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '140px' }}>
                  auto_awesome
                </span>
              </div>
              <h2 className="font-headline-md" style={{ color: '#ffffff', marginBottom: '24px' }}>Our Mission</h2>
              <p className="font-body-lg" style={{ opacity: 0.9, color: '#ffffff', maxWidth: '480px', margin: 0, lineHeight: 1.7 }}>
                To redefine the pet parenting experience through science-backed nutrition, intuitive design, and a relentless commitment to longevity. We don't just treat pets; we advocate for their fullest, healthiest lives.
              </p>
            </div>

            {/* Founded by Experts Card */}
            <div
              className="glass-card story-mission-card-small"
              style={{
                backgroundColor: 'var(--secondary-container)',
                padding: '40px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'none'
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--on-primary)',
                    marginBottom: '24px'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                    stethoscope
                  </span>
                </div>
                <h3 className="font-headline-sm text-primary" style={{ marginBottom: '16px' }}>Founded by Experts</h3>
                <p className="font-body-md" style={{ color: 'var(--on-secondary-container)', margin: 0 }}>
                  Our board-certified veterinary founders ensure every product and service meets rigorous medical standards before it ever reaches your home.
                </p>
              </div>

              <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', marginRight: '12px' }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwMWIuhhb4g27gtjTBWg77KrPkcpn23HL8hpRMY8jSv6F42kBu-rxxAt2VBDPNApuoT6-9ZurQJOK_W66_9JwpgiS3mFzMMkeUXPsuMohGgtIUXZ0h7-QF7GflAbHErSN_hy-rEUIbArD17XhwwlyTFrHhrmM0bEOS5HuMxDec_oq2cHDK-G8cmzmAYluDS7rxhVZfTWff_JTv7It0gPcRvWBtzN6CcrvE4En6uhbD4rFClBX5ZOB153p-xGnCRFlfHwYoyX1zIi0"
                    alt="Team member"
                    style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--background)', objectFit: 'cover', zIndex: 3 }}
                  />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCub5chbmMHxtBfc3ZPUXuFT5xSxGCwVIZ0FywnzFEGxlO-wyDtul6G4Cn3C_1uTtJEgTvQuA_hIEDaAn-xre3Mmrne6qm3NYyLXYhR12uso5BF2sLqFgoeQcmIo4heVCmz7WffC8juaVGOrALEu66TeT411nZKfp9wrvBTIs-VlYEDk3oj81uKVX14LoTfFMi3mcdpUmtO1gwi5gjlIj_69i9NYvIM-kVs45fo2W-65Eof75HbQVo8QqCfJ5AqGcO6mgQH5NUWUh4"
                    alt="Team member"
                    style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--background)', objectFit: 'cover', marginLeft: '-16px', zIndex: 2 }}
                  />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuGIWelJLPHcbjGuVPWMfCqg6LEAu79n0UzT4nEB3ls44thXuhDfz6k2XbcLOuBGaQa8gymiZ4QXtmXe1hQDiGQn4PkredyiJF9nmCwCCZM05ye389cLZ7zovXZTpEGyMp6rn4YFClLyR1ix7S5MCjt6Ev1ImOJ-As48QHG4H6Am_lZN-2fliVWIpZ5i8dJ2Hql8fRDDfp3acYKIgDJ6pkATtunJ7topjUvAEFwovztVrVqPBQOXx7c6cTM0vKNLbK6XWiiOU_0vM"
                    alt="Team member"
                    style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--background)', objectFit: 'cover', marginLeft: '-16px', zIndex: 1 }}
                  />
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--on-primary)',
                      border: '2px solid var(--background)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      marginLeft: '-16px',
                      zIndex: 0
                    }}
                  >
                    +12
                  </div>
                </div>
              </div>
            </div>

            {/* Design Card */}
            <div
              className="glass-card story-mission-card-small"
              style={{
                backgroundColor: 'var(--surface-container-high)',
                padding: '40px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: 'none'
              }}
            >
              <h3 className="font-headline-sm text-primary" style={{ marginBottom: '16px' }}>The Designer's Touch</h3>
              <p className="font-body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '24px', lineHeight: 1.6 }}>
                Pet care shouldn't feel like a chore. Our design team creates products that seamlessly integrate into the modern, aesthetic home.
              </p>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiatXXq3KlnXtJvoxnwNOLhmf_uJS56NJdAN82EN3owEND8IZg8wJ3DqF5pgV9_W9C7PLdFYdn8_I6xVURL0lsrR4aCKAJXQN32LFkBYQgiBD8QwnXqgj-NSc-dBgj4t_ShODIVajrYMcmd8ncfxkgJXbLfJPuMtZXE_NkCKKWVXwc3qM2ocltqd8p7DWNu0ol9vAGGTGo_Po0ufFUsu9P8VCDZklzhtpdDc4b-d3CKvREJiHQcDb6ctssKOOm9VY8nADTG85bzAA"
                  alt="Modern pet home"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Values Card */}
            <div
              className="glass-card story-mission-card-large"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--outline-variant)',
                padding: '40px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'none'
              }}
            >
              <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <h3 className="font-headline-sm text-primary" style={{ margin: 0 }}>The Tiny Paws Standard</h3>
                <span className="font-label-md" style={{ color: 'var(--tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Quality & Ethics
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>verified</span>
                    <span className="font-label-md" style={{ color: 'var(--primary)' }}>Medical Grade</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                    Every formulation is tested in clinical settings to ensure efficacy and safety.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>eco</span>
                    <span className="font-label-md" style={{ color: 'var(--primary)' }}>Sustainably Sourced</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                    We prioritize ethical farms and eco-friendly packaging for a better planet.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                    <span className="font-label-md" style={{ color: 'var(--primary)' }}>Total Transparency</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                    Full ingredient disclosure and lab results available for every single batch.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>volunteer_activism</span>
                    <span className="font-label-md" style={{ color: 'var(--primary)' }}>Rescue Advocacy</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                    A portion of every sale goes directly to providing medical care for shelter pets.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comfort Section */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--surface-container-low)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="font-headline-md text-primary" style={{ marginBottom: '48px' }}>
            Crafted for Their Comfort
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(255,255,255,0.5)' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px', marginBottom: '16px' }}>
                favorite
              </span>
              <h4 className="font-headline-sm text-primary" style={{ marginBottom: '8px' }}>Unmatched Love</h4>
              <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
                We treat every customer’s pet as if they were our own founding furry members.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '32px', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(255,255,255,0.5)' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px', marginBottom: '16px' }}>
                science
              </span>
              <h4 className="font-headline-sm text-primary" style={{ marginBottom: '8px' }}>Scientific Rigor</h4>
              <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
                Innovation driven by research, not trends. We follow the science to the bowl.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '32px', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(255,255,255,0.5)' }}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px', marginBottom: '16px' }}>
                home_health
              </span>
              <h4 className="font-headline-sm text-primary" style={{ marginBottom: '8px' }}>Life at Home</h4>
              <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
                Wellness is a 24/7 journey. We provide the tools to make it effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '500px' }}>
              <h2 className="font-headline-md text-primary" style={{ marginBottom: '16px' }}>
                The Minds Behind the Paws
              </h2>
              <p className="font-body-lg text-on-surface-variant" style={{ margin: 0 }}>
                A multi-disciplinary team dedicated to the evolution of pet longevity and happiness.
              </p>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => alert('Applications form coming soon!')}
            >
              Join the Team
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {teamMembers.map((member, i) => (
              <div key={i} className="group" style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '24px', overflow: 'hidden', marginBottom: '16px' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)',
                      transition: 'all 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(19, 66, 61, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '24px'
                    }}
                    className="team-hover"
                  >
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px'
                      }}
                    >
                      <p className="font-label-sm" style={{ color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {member.title}
                      </p>
                      <p style={{ fontSize: '13px', color: 'var(--on-surface)', margin: 0 }}>
                        {member.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <h5 className="font-headline-sm text-primary" style={{ margin: '0 0 4px' }}>
                  {member.name}
                </h5>
                <p className="font-body-md text-on-surface-variant" style={{ margin: 0 }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--on-primary)',
              borderRadius: '40px',
              padding: '64px 24px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2 className="font-display-lg" style={{ color: 'var(--on-primary)', marginBottom: '24px' }}>
              Ready to elevate their care?
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--on-primary)', opacity: 0.8, maxWidth: '500px', margin: '0 auto 40px' }}>
              Experience the Tiny Paws difference with our curated selection of premium essentials.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/store" className="btn" style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
                Shop the Collection
              </Link>
              <Link to="/services" className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff' }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
