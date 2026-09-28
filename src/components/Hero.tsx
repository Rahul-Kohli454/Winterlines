import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Tent,
  BedDouble
} from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function Hero() {
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Rahul,\nI saw Homestay Winter Line website and would like to check room availability & trek packages.\n\nName:\nDates:\nRoom (Deluxe ₹2500 / Normal ₹2000):\nTreks (Top Tibba 8km / River Camping):`
    );
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* High-res authentic scenic background with luxury gradient masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="./media/winterline-28.jpg"
          alt="Homestay Winter Line panoramic glass dining and valley view in Dhanaulti"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.1] transition-transform duration-10000 hover:scale-100"
        />
        {/* Cinematic gradient overlays: twilight sky to deep midnight ground */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-[#07090e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-transparent to-[#07090e]/90" />
        {/* Subtle horizon glow simulating the Winter Line */}
        <div className="absolute bottom-24 left-0 right-0 h-32 bg-gradient-to-t from-amber-500/10 via-rose-500/5 to-transparent blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Location & Altitude Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-black/40"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Dhanaulti, Uttarakhand • Altitude 2,286m (7,500 Ft)</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline text-slate-300">Near Mussoorie Ridge</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-[1.08]"
        >
          HOMESTAY <br className="sm:hidden" />
          <span className="text-shimmer drop-shadow-lg">WINTER LINE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif italic text-lg sm:text-2xl md:text-3xl text-amber-100/90 max-w-3xl mb-8 leading-relaxed font-normal"
        >
          "Where the clouds rest beneath your feet, and the winter horizon blazes in sacred gold."
        </motion.p>

        {/* Highlight Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl mb-10 text-left"
        >
          <div className="glass-panel p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition-all min-w-0">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1 min-w-0">
              <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-300 truncate">Deluxe Room</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-white font-cinzel leading-tight">
              ₹2,500 <span className="text-[10px] sm:text-xs text-slate-400 font-sans font-normal">/ nt</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1 mt-0.5">Valley view & king bed</p>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition-all min-w-0">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1 min-w-0">
              <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-300 truncate">Normal Room</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-white font-cinzel leading-tight">
              ₹2,000 <span className="text-[10px] sm:text-xs text-slate-400 font-sans font-normal">/ nt</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1 mt-0.5">Wooden cozy & hot bath</p>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition-all min-w-0">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1 min-w-0">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-300 truncate">Top Tibba Trek</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-amber-300 font-cinzel leading-tight">
              8 KM <span className="text-[10px] sm:text-xs text-slate-400 font-sans font-normal">Track</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1 mt-0.5">Alpine ridge & snow peaks</p>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-xl border border-white/10 hover:border-amber-400/40 transition-all min-w-0">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1 min-w-0">
              <Tent className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-300 truncate">River Camping</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-emerald-400 font-cinzel leading-tight">
              4 KM <span className="text-[10px] sm:text-xs text-slate-400 font-sans font-normal">Down</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1 mt-0.5">Stream valley & bonfire</p>
          </div>
        </motion.div>

        {/* Primary Call to Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleWhatsAppBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 flex items-center justify-center gap-3 transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Book with Host Rahul on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${HOST_INFO.contactNumber}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/15 backdrop-blur-md flex items-center justify-center gap-2.5 transition-all hover:border-amber-400/50"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Direct Call: {HOST_INFO.contactNumber}</span>
          </a>

          <a
            href="#rooms"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 font-semibold text-base border border-amber-500/30 flex items-center justify-center gap-2 transition-all"
          >
            <span>Explore Rooms & Treks</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct Host Pricing (No Middlemen)</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Geysers with 24/7 Hot Water</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Organic Local Pahadi Food</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Scroll to explore</span>
        <div className="w-5 h-9 rounded-full border border-slate-500/60 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
