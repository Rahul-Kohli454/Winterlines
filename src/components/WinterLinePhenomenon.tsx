import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, Info, Eye, Camera, Clock } from 'lucide-react';
import { WINTER_LINE_FACTS } from '../data/mediaData';

export default function WinterLinePhenomenon() {
  const [activeTime, setActiveTime] = useState<'afternoon' | 'sunset' | 'night'>('sunset');

  const gradients = {
    afternoon: {
      label: '4:30 PM • Crisp Alpine Daylight',
      sky: 'from-sky-700 via-amber-200 to-amber-100',
      band: 'opacity-20 bg-amber-400',
      description: 'Clear, crisp Garhwal daylight with snow-capped peaks glittering against cobalt blue.'
    },
    sunset: {
      label: '5:25 PM • Peak Winter Line Glow',
      sky: 'from-indigo-950 via-purple-900 to-amber-600',
      band: 'opacity-100 bg-gradient-to-r from-rose-500 via-amber-400 to-yellow-300 shadow-[0_0_40px_rgba(245,158,11,0.8)]',
      description: 'The miracle 30-minute window: a sharp, two-tone horizon band dividing the violet heavens from the dusky misty valleys below.'
    },
    night: {
      label: '6:30 PM • Himalayan Galaxy & Campfire',
      sky: 'from-[#030712] via-[#0b0f19] to-[#1e1b4b]',
      band: 'opacity-30 bg-purple-600/40',
      description: 'Zero light pollution unfolds the Milky Way, star clusters, and crackling pine campfire sparks.'
    }
  };

  return (
    <section id="winterline" className="py-24 px-4 bg-[#0a0d14] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Atmospheric Wonder
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            The Legend of The <span className="text-shimmer">Winter Line</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Visible from only two regions on the entire planet: the Swiss Alps, and the Dhanaulti-Mussoorie ridge of Uttarakhand.
          </p>
        </div>

        {/* Interactive Horizon Simulator Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                Interactive Dusk Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel">
                Witness the Horizon Transition
              </h3>
            </div>

            {/* Time Toggle Buttons */}
            <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 self-stretch sm:self-auto">
              <button
                onClick={() => setActiveTime('afternoon')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTime === 'afternoon'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" /> Afternoon
              </button>
              <button
                onClick={() => setActiveTime('sunset')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTime === 'sunset'
                    ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-rose-950/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Sunset Peak
              </button>
              <button
                onClick={() => setActiveTime('night')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTime === 'night'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" /> Starlight Night
              </button>
            </div>
          </div>

          {/* Simulator Visual Box */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/15 transition-all duration-700 shadow-inner flex flex-col justify-end">
            {/* Animated Sky Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${gradients[activeTime].sky} transition-all duration-700`} />

            {/* Clouds / Mountain silhouette */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black" />

            {/* The Winter Line Sharp Horizon Band */}
            <div className="relative z-10 w-full mb-16">
              <div className={`h-2.5 sm:h-3.5 w-full transition-all duration-700 ${gradients[activeTime].band}`} />
            </div>

            {/* Dhanaulti Mountain Ridge Silhouette */}
            <div className="relative z-20 w-full">
              <svg
                viewBox="0 0 1200 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-24 sm:h-36 object-cover text-[#07090e]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 240L0 120L120 80L240 140L380 60L520 130L680 40L840 110L990 70L1120 130L1200 90L1200 240Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Time label badge inside simulator */}
            <div className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-amber-200 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{gradients[activeTime].label}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{gradients[activeTime].description}</span>
          </div>
        </div>

        {/* 3 Informative Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WINTER_LINE_FACTS.map((fact, idx) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 font-mono font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white mb-2">{fact.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
