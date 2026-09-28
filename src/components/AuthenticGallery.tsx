import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/mediaData';

export default function AuthenticGallery() {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'treks' | 'camping' | 'scenic' | 'food'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const nextLightbox = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const prevLightbox = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'rooms', label: 'Homestay & Rooms' },
    { key: 'treks', label: 'Top Tibba & Treks' },
    { key: 'camping', label: 'Quechua Camping' },
    { key: 'scenic', label: 'Dhanaulti Panoramas' },
    { key: 'food', label: 'Organic Mountain Food' }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <ImageIcon className="w-3.5 h-3.5" /> Authentic Visual Chronicles
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Glimpses of <span className="text-shimmer">Winter Line</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            100% authentic moments captured on our balcony deck, inside the heated rooms, on the 8km ridge trek, and by mountain rivers.
          </p>
        </div>

        {/* Filter Tab Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === c.key
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/40 cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Caption */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={activeItem.url}
                alt={activeItem.title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
                  {activeItem.category}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p className="text-sm text-slate-300 max-w-xl mx-auto mt-1">
                    {activeItem.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
