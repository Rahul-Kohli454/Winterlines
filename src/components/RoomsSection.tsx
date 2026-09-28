import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BedDouble, 
  Check, 
  Flame, 
  Wifi, 
  Coffee, 
  Mountain, 
  ChevronRight, 
  ChevronLeft, 
  MessageCircle, 
  Phone,
  Sparkles,
  Bath,
  Tv
} from 'lucide-react';
import { ROOMS, HOST_INFO } from '../data/mediaData';

export default function RoomsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [roomId: string]: number }>({
    'deluxe-room': 0,
    'normal-room': 0
  });

  const nextImage = (roomId: string, length: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % length
    }));
  };

  const prevImage = (roomId: string, length: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + length) % length
    }));
  };

  const bookRoomWhatsApp = (roomName: string, price: number) => {
    const text = encodeURIComponent(
      `Hello Rahul,\nI would like to book the *${roomName}* (₹${price}/night) at Homestay Winter Line, Dhanaulti.\n\nCheck-in Date:\nCheck-out Date:\nNumber of Guests:\nAdditional Requirements:`
    );
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="rooms" className="py-24 px-4 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <BedDouble className="w-3.5 h-3.5" /> Mountain Accommodations
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Sanctuaries Above The <span className="text-shimmer">Mist</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Spotless, heated mountain rooms overlooking the snowbound Garhwal ridges. Honest, direct host pricing with zero booking commission.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {ROOMS.map((room) => {
            const currentImg = activeImageIndex[room.id] || 0;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`glass-panel rounded-3xl overflow-hidden border flex flex-col justify-between ${
                  room.popular
                    ? 'border-amber-400/50 shadow-2xl shadow-amber-950/30'
                    : 'border-white/10'
                }`}
              >
                <div>
                  {/* Image Carousel Header */}
                  <div className="relative h-72 sm:h-84 w-full overflow-hidden group">
                    <img
                      src={room.images[currentImg]}
                      alt={`${room.name} at Homestay Winter Line Dhanaulti`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      {room.popular && (
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                          <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                        {room.capacity}
                      </span>
                    </div>

                    {/* Carousel Nav Arrows */}
                    <button
                      onClick={() => prevImage(room.id, room.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white backdrop-blur-md opacity-80 hover:opacity-100 transition-all cursor-pointer"
                      aria-label="Previous room photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextImage(room.id, room.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white backdrop-blur-md opacity-80 hover:opacity-100 transition-all cursor-pointer"
                      aria-label="Next room photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                      {room.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(prev => ({ ...prev, [room.id]: i }))}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            i === currentImg ? 'w-6 bg-amber-400' : 'w-2 bg-white/50'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Room Details Body */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                      <div>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1 leading-snug">
                          {room.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-serif italic leading-relaxed">
                          {room.tagline}
                        </p>
                      </div>
                      <div className="text-left sm:text-right shrink-0 pt-1 sm:pt-0">
                        <div className="flex items-baseline gap-1 sm:justify-end">
                          <span className="font-cinzel text-2xl sm:text-3xl font-black text-amber-300">
                            ₹{room.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400 font-sans">/ night</span>
                        </div>
                        {room.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ₹{room.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bed Type & Core specs */}
                    <div className="flex flex-wrap items-center gap-3 py-3 my-3 border-y border-white/10 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4 text-amber-400" />
                        <span>{room.bedType}</span>
                      </div>
                      <span className="text-white/20">•</span>
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-rose-400" />
                        <span>Hot Geyser Water</span>
                      </div>
                      <span className="text-white/20">•</span>
                      <div className="flex items-center gap-1.5">
                        <Wifi className="w-4 h-4 text-emerald-400" />
                        <span>Free Wi-Fi</span>
                      </div>
                      <span className="text-white/20">•</span>
                      <div className="flex items-center gap-1.5">
                        <Coffee className="w-4 h-4 text-amber-300" />
                        <span>Morning Chai</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 my-4">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => bookRoomWhatsApp(room.name, room.price)}
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp (₹{room.price})</span>
                  </button>
                  <a
                    href={`tel:${HOST_INFO.contactNumber}`}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-white/10"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Host</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
