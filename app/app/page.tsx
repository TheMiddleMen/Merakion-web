import React from 'react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
      {/* HERO SECTION */}
      <section className="space-y-6 text-center md:text-left py-10">
        <div className="inline-block px-3 py-1 bg-[#1A1A1A] border border-[#C5A059]/40 text-[#C5A059] text-xs font-mono rounded-full uppercase tracking-wider">
          System Telemetry // Active
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          THE AFRICAN MYTHOS RECLAIMED.<br />
          <span className="text-[#C5A059]">DARK FANTASY. DIEGETIC SOUND.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          170,000 words of uncompromising folklore. 19 score tracks. A sovereign real-world movement built across the grid of Lusaka.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a href="#register" className="px-6 py-3 bg-[#C5A059] text-black font-semibold rounded hover:bg-[#d6b26a] transition text-center">
            Claim Citizen ID & Read Chapters 1–4
          </a>
          <a href="#bundle" className="px-6 py-3 bg-[#1A1A1A] border border-[#333] text-white font-semibold rounded hover:border-[#C5A059] transition text-center">
            Unlock Full Bundle (K350)
          </a>
        </div>
      </section>

      {/* LORE SNIPPET SECTION */}
      <section id="lore" className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#121212] p-6 rounded-lg border border-[#222] space-y-3">
          <h3 className="text-[#C5A059] font-mono text-sm tracking-widest uppercase">Creature File #01</h3>
          <h4 className="text-xl font-bold text-white">The Ngoloko</h4>
          <p className="text-sm text-gray-400">The brutal, single-eyed apex predator stalking the uncharted shadows of the lower sectors.</p>
        </div>
        <div className="bg-[#121212] p-6 rounded-lg border border-[#222] space-y-3">
          <h3 className="text-[#C5A059] font-mono text-sm tracking-widest uppercase">Creature File #02</h3>
          <h4 className="text-xl font-bold text-white">The Mahamba</h4>
          <p className="text-sm text-gray-400">A massive, ancient aquatic terror lurking beneath the river currents, steeped in local legend.</p>
        </div>
        <div className="bg-[#121212] p-6 rounded-lg border border-[#222] space-y-3">
          <h3 className="text-[#C5A059] font-mono text-sm tracking-widest uppercase">Iconography</h3>
          <h4 className="text-xl font-bold text-white">Nyami Nyami</h4>
          <p className="text-sm text-gray-400">The river god tattoo etched permanently from collarbone to wrist, marking sacred loyalty.</p>
        </div>
      </section>

      {/* K350 BUNDLE GATE */}
      <section id="bundle" className="bg-[#121212] border border-[#C5A059]/50 rounded-xl p-8 space-y-6 text-center">
        <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">Clearance Gate // Level 02</span>
        <h2 className="text-3xl font-bold text-white">Unlock The Complete Merakion Vault</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Get instant access to the complete 170,000-word Gods and Mortals e-Pub manuscript, the full 19-track diegetic album vault, and reservation priority for physical hardcover drops.
        </p>
        <div className="text-4xl font-extrabold text-[#C5A059]">K350</div>
        <div>
          <button className="px-8 py-4 bg-[#C5A059] text-black font-bold text-lg rounded hover:bg-[#d6b26a] transition">
            Unlock Full Vault via Mobile Money / Card
          </button>
        </div>
        <p className="text-xs text-gray-500 font-mono">Instant delivery via Airtel Money, MTN Mobile Money, or Visa/Mastercard.</p>
      </section>
    </div>
  );
          }

