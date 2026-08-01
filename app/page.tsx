import React from 'react';

export default function Home() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'inline-block', padding: '6px 14px', backgroundColor: '#1A1A1A', border: '1px solid rgba(197, 160, 89, 0.4)', color: '#C5A059', fontSize: '12px', fontFamily: 'monospace', borderRadius: '20px', letterSpacing: '1px' }}>
          SYSTEM TELEMETRY // ACTIVE
        </div>
        
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.2' }}>
          AN EPIC FANTASY UNBOUND.<br />
          <span style={{ color: '#C5A059' }}>DARK FICTION. DIEGETIC SOUND.</span>
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#9CA3AF', maxWidth: '650px', lineHeight: '1.6' }}>
          170,000+ words of immersive world-building. 19 original score tracks. An uncompromising transmedia universe built for true fantasy originalists.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          <a href="#bundle" style={{ padding: '14px 28px', backgroundColor: '#C5A059', color: '#000000', fontWeight: 'bold', borderRadius: '6px' }}>
            Claim Citizen ID & Read Chapters 1–4
          </a>
          <a href="#bundle" style={{ padding: '14px 28px', backgroundColor: '#1A1A1A', border: '1px solid #333', color: '#FFFFFF', fontWeight: 'bold', borderRadius: '6px' }}>
            Unlock Full Bundle (K350)
          </a>
        </div>
      </section>

      {/* LORE SECTION */}
      <section id="lore" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div style={{ backgroundColor: '#121212', padding: '24px', borderRadius: '8px', border: '1px solid #222' }}>
          <h3 style={{ color: '#C5A059', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px' }}>CREATURE FILE #01</h3>
          <h4 style={{ fontSize: '1.4rem', color: '#FFF', margin: '8px 0' }}>The Ngoloko</h4>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5' }}>The brutal, single-eyed apex predator stalking the uncharted shadows of the lower sectors.</p>
        </div>
        <div style={{ backgroundColor: '#121212', padding: '24px', borderRadius: '8px', border: '1px solid #222' }}>
          <h3 style={{ color: '#C5A059', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px' }}>CREATURE FILE #02</h3>
          <h4 style={{ fontSize: '1.4rem', color: '#FFF', margin: '8px 0' }}>The Mahamba</h4>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5' }}>A massive, ancient aquatic terror lurking beneath the river currents, steeped in dark legend.</p>
        </div>
        <div style={{ backgroundColor: '#121212', padding: '24px', borderRadius: '8px', border: '1px solid #222' }}>
          <h3 style={{ color: '#C5A059', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '1px' }}>ICONOGRAPHY</h3>
          <h4 style={{ fontSize: '1.4rem', color: '#FFF', margin: '8px 0' }}>Nyami Nyami</h4>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5' }}>The sacred river deity mark etched permanently from collarbone to wrist, signifying unbroken loyalty.</p>
        </div>
      </section>

      {/* VAULT GATE */}
      <section id="bundle" style={{ backgroundColor: '#121212', border: '1px solid rgba(197, 160, 89, 0.5)', borderRadius: '12px', padding: '40px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#C5A059', letterSpacing: '2px' }}>CLEARANCE GATE // LEVEL 02</span>
        <h2 style={{ fontSize: '2rem', color: '#FFF' }}>Unlock The Complete Merakion Vault</h2>
        <p style={{ color: '#9CA3AF', maxWidth: '600px', fontSize: '0.95rem' }}>
          Get instant access to the complete 170,000+ word Gods and Mortals e-Pub manuscript, the full 19-track diegetic album vault, and reservation priority for physical hardcover drops.
        </p>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C5A059' }}>K350</div>
        <button style={{ padding: '16px 32px', backgroundColor: '#C5A059', color: '#000000', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
          Unlock Full Vault via Mobile Money / Card
        </button>
        <p style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>Instant delivery via Airtel Money, MTN Mobile Money, or Visa/Mastercard.</p>
      </section>

    </div>
  );
}
