import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass, Mountain, Sparkles } from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Winter Line', href: '#winterline' },
    { name: 'Rooms & Rates', href: '#rooms' },
    { name: 'Treks & Camping', href: '#adventures' },
    { name: 'Rate Estimator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'How to Reach', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Rahul, I would like to inquire about booking a stay at Homestay Winter Line in Dhanaulti.`);
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top Scroll Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-amber-500 via-rose-500 to-amber-300 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#07090e]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-rose-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Mountain className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
                  HOMESTAY WINTER LINE
                </span>
                <span className="text-[11px] font-sans tracking-widest text-amber-400/90 uppercase flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3 inline" /> Dhanaulti • 7,500 Ft
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Quick Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOST_INFO.contactNumber}`}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 text-xs font-semibold flex items-center gap-2 transition-all"
                title="Call Rahul directly"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {HOST_INFO.contactNumber}</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Booking</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={handleWhatsApp}
                className="p-2 rounded-lg bg-emerald-600 text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/10 text-slate-200 hover:text-white hover:bg-white/15 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:text-amber-300 hover:bg-white/5 text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${HOST_INFO.contactNumber}`}
                className="w-full py-3 rounded-lg bg-white/10 text-white font-medium text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Rahul ({HOST_INFO.contactNumber})</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="w-full py-3 rounded-lg bg-emerald-600 text-white font-semibold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-900/50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Instant on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
