import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mediaData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5" /> Traveler Testimonies
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Cherished By Mountain <span className="text-shimmer">Wanderers</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unfiltered words from guests who walked our trails and spent nights watching the winter horizon ablaze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-500/20 mb-2" />

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-cinzel text-base font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">{t.city}</div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
