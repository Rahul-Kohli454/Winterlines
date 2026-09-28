import React from 'react';
import { Phone, MessageCircle, BedDouble, Compass } from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function MobileQuickBar() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Rahul Ji, I would like to book a stay / trek at Homestay Winter Line, Dhanaulti.');
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090e]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 flex items-center justify-around shadow-2xl">
      <a
        href={`tel:${HOST_INFO.contactNumber}`}
        className="flex flex-col items-center justify-center p-1 text-slate-300 hover:text-white"
      >
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-400 mb-0.5">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-medium">Call Rahul</span>
      </a>

      <button
        onClick={handleWhatsApp}
        className="flex-1 mx-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/50"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp Book</span>
      </button>

      <a
        href="#rooms"
        className="flex flex-col items-center justify-center p-1 text-slate-300 hover:text-white"
      >
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-300 mb-0.5">
          <BedDouble className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-medium">₹2,000+</span>
      </a>
    </div>
  );
}
