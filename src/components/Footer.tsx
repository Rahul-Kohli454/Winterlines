import React from 'react';
import { Mountain, Phone, Mail, MapPin, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function Footer() {
  return (
    <footer className="bg-[#040609] border-t border-white/10 pt-16 pb-24 sm:pb-16 px-4 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-rose-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Mountain className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                HOMESTAY WINTER LINE
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed font-serif italic">
              "Perched high on Dhanaulti's western ridge at 7,500 ft elevation. Experience the legendary scarlet sunset Winter Line, Top Tibba 8km treks, and secluded river night camping."
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Dhanaulti • Uttarakhand • 2,286m Above Sea Level</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Experiences & Stays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">
                  Deluxe Room (₹2,500 / night)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">
                  Standard Room (₹2,000 / night)
                </a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-amber-300 transition-colors">
                  Top Tibba Ridge Trek (8 KM Track)
                </a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-amber-300 transition-colors">
                  Starlit Cliff Night Camping
                </a>
              </li>
              <li>
                <a href="#adventures" className="hover:text-amber-300 transition-colors">
                  River Night Camping (4 KM Down Trek)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors">
                  Instant Cost Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Host Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Direct Host Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="text-white font-medium">Host:</span>
                <span className="text-amber-300">{HOST_INFO.hostName}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOST_INFO.contactNumber}`} className="hover:text-white transition-colors">
                  +91 {HOST_INFO.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${HOST_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {HOST_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{HOST_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Homestay Winter Line. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted with love for the Garhwal Himalayas</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
