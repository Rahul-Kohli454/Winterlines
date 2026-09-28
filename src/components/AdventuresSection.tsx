import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Mountain, 
  Tent, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  MessageCircle,
  Footprints,
  Flame,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Camera,
  Layers,
  Sparkle,
  Phone
} from 'lucide-react';
import { ADVENTURES, TREK_STEPS, TREK_PHOTOS, HOST_INFO, TrekPhoto, TrekStep } from '../data/mediaData';

export default function AdventuresSection() {
  // Step-by-step active tab
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Trek Photos Filter & Lightbox
  const [photoFilter, setPhotoFilter] = useState<string>('all');
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<TrekPhoto | null>(null);

  const filteredPhotos = photoFilter === 'all'
    ? TREK_PHOTOS
    : TREK_PHOTOS.filter(p => p.category === photoFilter);

  const openLightbox = (photo: TrekPhoto) => {
    setActiveLightboxPhoto(photo);
  };

  const closeLightbox = () => {
    setActiveLightboxPhoto(null);
  };

  const nextLightbox = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activeLightboxPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActiveLightboxPhoto(filteredPhotos[nextIndex]);
  };

  const prevLightbox = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activeLightboxPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActiveLightboxPhoto(filteredPhotos[prevIndex]);
  };

  const bookAdventureWhatsApp = (adventureTitle: string) => {
    const text = encodeURIComponent(
      `Hello Rahul,\nI would like to inquire about and book the *${adventureTitle}* at Homestay Winter Line, Dhanaulti.\n\nGroup Size:\nPreferred Dates:\nNeed Camping Gear / Meals:`
    );
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  const bookPhotoAdventureWhatsApp = (photoTitle: string) => {
    const text = encodeURIComponent(
      `Hello Rahul,\nI saw the trek photo "${photoTitle}" on Homestay Winter Line website and want to experience this trail/camp!\n\nDates:\nGroup Size:`
    );
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  const currentStep: TrekStep = TREK_STEPS[activeStepIndex] || TREK_STEPS[0];

  const filterCategories = [
    { key: 'all', label: 'All 15 Photos', count: 15 },
    { key: 'camp', label: 'Camping & Tents', count: 4 },
    { key: 'trail', label: 'Forest Trails', count: 5 },
    { key: 'views', label: 'Panoramic Views', count: 3 },
    { key: 'gear', label: 'Basecamp & Gear', count: 1 },
    { key: 'orchard', label: 'Trail Orchard', count: 2 },
  ];

  return (
    <section id="adventures" className="py-24 px-4 bg-[#0a0d14] relative overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. SECTION MAIN HEADER */}
        {/* ========================================================================= */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-4 shrink-0">
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span>High Himalayan Expeditions & Camping</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Treks & <span className="text-shimmer">Wilderness Camping</span>
          </h2>

          <p className="font-serif italic text-base sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Led directly by host Rahul Kohli and native Dhanaulti mountaineers. Unspoiled deodar canopies, alpine ridges, Quechua dome tents, and singing river valleys.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. HOW WE TREK: STEP-BY-STEP EXPEDITION JOURNEY */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 shrink-0">
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>How We Do It • Complete Journey</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-2 leading-snug">
              The Trek Experience, <span className="text-amber-300">Step by Step</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Here is how we assemble, hike, pitch camp, and enjoy the mountains with safety and local hospitality.
            </p>
          </div>

          {/* Interactive Step Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
            {TREK_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  activeStepIndex === idx
                    ? 'bg-amber-500/20 border-amber-400/60 shadow-xl shadow-amber-950/40 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    activeStepIndex === idx ? 'bg-amber-400 text-slate-950' : 'bg-white/10 text-slate-300'
                  }`}>
                    {step.number}
                  </span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline font-mono">{step.duration}</span>
                </div>
                <div className="font-cinzel text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Step Active Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-400/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Media Preview (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden group shadow-xl border border-white/15">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shrink-0">
                    {currentStep.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{currentStep.altitude}</span>
                    <span className="text-white/40">•</span>
                    <span>{currentStep.duration}</span>
                  </div>
                  <div className="font-cinzel text-base font-bold text-white drop-shadow">
                    {currentStep.stageName}
                  </div>
                </div>
              </div>

              {/* Step Explainer & Actions (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                      STAGE {currentStep.number} OF 05
                    </span>
                    <span className="text-slate-400">• {currentStep.stageName}</span>
                  </div>

                  <h4 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                    {currentStep.title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-serif">
                    {currentStep.description}
                  </p>

                  {/* How We Do It Bullet Points */}
                  <div className="space-y-3 mb-8 bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/10">
                    <div className="text-xs uppercase font-mono tracking-widest text-amber-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>On-Ground Process & Safety:</span>
                    </div>

                    <div className="space-y-2.5">
                      {currentStep.howWeDoIt.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Navigation & Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveStepIndex(prev => (prev - 1 + TREK_STEPS.length) % TREK_STEPS.length)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Previous Stage</span>
                    </button>
                    <button
                      onClick={() => setActiveStepIndex(prev => (prev + 1) % TREK_STEPS.length)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <span className="hidden sm:inline">Next Stage</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => bookAdventureWhatsApp(`Stage ${currentStep.number}: ${currentStep.title}`)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Inquire About This Trek with Rahul</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. THREE FEATURED ADVENTURE PACKAGES */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 shrink-0">
              <Mountain className="w-3.5 h-3.5 shrink-0" />
              <span>Signature Experiences</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-2 leading-snug">
              Choose Your <span className="text-shimmer">Mountain Expedition</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Guided directly by native mountaineers. All equipment, camping gear, and safety harnesses included.
            </p>
          </div>

          <div className="space-y-12">
            {ADVENTURES.map((adv, idx) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass-panel rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Column (5 cols) */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <img
                    src={adv.image}
                    alt={`${adv.title} in Dhanaulti Uttarakhand`}
                    className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent lg:hidden" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shrink-0">
                      {adv.badge}
                    </span>
                  </div>
                </div>

                {/* Text / Details Column (7 cols) */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div>
                    {/* Meta Specs */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                      {adv.distance && (
                        <span className="flex items-center gap-1 text-amber-300 shrink-0">
                          <Footprints className="w-3.5 h-3.5 shrink-0" />
                          <span>Distance: {adv.distance}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-slate-300 shrink-0">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>Duration: {adv.duration}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-white font-sans text-[11px] shrink-0">
                        Difficulty: {adv.difficulty}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-base font-serif italic text-amber-200/85 mb-4">
                      {adv.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {adv.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {adv.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Adventure CTA Row */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => bookAdventureWhatsApp(adv.title)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-950/40 hover:scale-105 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Inquire / Book This Trek with Rahul</span>
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Harnesses, ropes & guide assistance included</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. ALL 15 NEW TREK PHOTOS SHOWCASE & LIGHTBOX */}
        {/* ========================================================================= */}
        <div id="trek-gallery" className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 shrink-0">
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span>Live Expedition Gallery • 15 Authentic Photos</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-snug">
              Real Photos From Our <span className="text-shimmer">Dhanaulti Trails</span>
            </h3>
            <p className="font-serif italic text-sm sm:text-lg text-slate-300 leading-relaxed">
              Every photograph below is captured live during our treks with host Rahul Kohli: from packing rucksacks on stone paths to high ridge dome camps, starry twilights, and fresh apple harvests.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {filterCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setPhotoFilter(c.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  photoFilter === c.key
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{c.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  photoFilter === c.key ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-400'
                }`}>
                  {c.count}
                </span>
              </button>
            ))}
          </div>

          {/* 15 Photos Responsive Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => openLightbox(photo)}
                  className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] font-mono font-bold tracking-wider uppercase shrink-0">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-amber-300" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="text-[11px] font-mono text-amber-300 mb-0.5">
                      {photo.subtitle}
                    </div>
                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Quick Note at Bottom */}
          <div className="mt-8 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>All 15 photos captured on actual treks in Dhanaulti</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Rahul at {HOST_INFO.contactNumber} to customize dates & trails</span>
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. FULL-SCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeLightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50 transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 z-50 transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 z-50 transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-[#07090e]/90 p-4 sm:p-6 rounded-3xl border border-white/15 shadow-2xl overflow-y-auto"
            >
              <div className="relative w-full max-h-[60vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/60 mb-4">
                <img
                  src={activeLightboxPhoto.url}
                  alt={activeLightboxPhoto.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl"
                />
              </div>

              {/* Photo Caption & Inquire Button */}
              <div className="w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                <div className="max-w-xl">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                      {activeLightboxPhoto.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Photo {filteredPhotos.findIndex(p => p.id === activeLightboxPhoto.id) + 1} of {filteredPhotos.length}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1 leading-snug">
                    {activeLightboxPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                    {activeLightboxPhoto.description}
                  </p>
                </div>

                <button
                  onClick={() => bookPhotoAdventureWhatsApp(activeLightboxPhoto.title)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-105 transition-all cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Book This Trail with Rahul</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
