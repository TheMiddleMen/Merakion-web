import './globals.css';
import React from 'react';

export const metadata = {
  title: 'MERAKION // SECTOR 097',
  description: 'Sovereign Transmedia Deployment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-[#E5E5E5] font-sans antialiased min-h-screen flex flex-col justify-between">
        <header className="border-b border-[#222222] px-6 py-4 flex justify-between items-center bg-[#0A0A0A]/90 backdrop-blur sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-widest text-lg text-white">MERAKION</span>
            <span className="text-xs bg-[#1A1A1A] text-[#C5A059] px-2 py-0.5 rounded border border-[#C5A059]/30">SECTOR 097</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#lore" className="hover:text-white transition">Lore</a>
            <a href="#vault" className="hover:text-white transition">Audio Vault</a>
            <a href="#dashboard" className="hover:text-[#C5A059] transition">Citizen Clearance</a>
          </nav>
        </header>

        <main className="mb-24">{children}</main>

        <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-[#222222] px-6 py-3 flex items-center justify-between z-50">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#C5A059] text-black font-bold flex items-center justify-center hover:bg-[#d6b26a] transition">
              ►
            </button>
            <div>
              <p className="text-xs text-[#C5A059] font-mono tracking-wider uppercase">Now Streaming</p>
              <p className="text-sm font-medium text-white">Track 01: The Ngoloko Shift</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-500">
            <span>02:41</span>
            <div className="w-32 bg-[#222] h-1 rounded-full overflow-hidden">
              <div className="bg-[#C5A059] w-2/3 h-full"></div>
            </div>
            <span>04:15</span>
          </div>
        </div>
      </body>
    </html>
  );
                }
            
