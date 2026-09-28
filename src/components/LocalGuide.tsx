import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Car, 
  Plane, 
  Train, 
  Mountain, 
  Compass, 
  CloudSnow, 
  Sun, 
  Sparkles, 
  Navigation 
} from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function LocalGuide() {
  const routes = [
    {
      title: 'From Dehradun (Airport / Railway)',
      distance: 'Approx 80 KM • 2.5 Hours',
      icon: <Car className="w-5 h-5 text-amber-400" />,
      desc: 'Ascend via Mussoorie or the scenic Maldevta-Suwakholi mountain route winding through pristine cedar woods directly into Dhanaulti.'
    },
    {
      title: 'From Mussoorie (Queen of Hills)',
      distance: '25 KM • 50 Minutes',
      icon: <Compass className="w-5 h-5 text-teal-400" />,
      desc: 'A gorgeous high-ridge drive connecting Mussoorie to Dhanaulti along panoramic Himalayan vistas and fruit orchards.'
    },
    {
      title: 'From Rishikesh / Haridwar',
      distance: 'Approx 85 KM • 3 Hours',
      icon: <Navigation className="w-5 h-5 text-rose-400" />,
      desc: 'Travel up via Narendra Nagar, Chamba, and into Dhanaulti with sweeping views of the Bhagirathi valley and pine ridges.'
    },
    {
      title: 'From Delhi NCR',
      distance: 'Approx 300 KM • 7-8 Hours',
      icon: <Car className="w-5 h-5 text-indigo-400" />,
      desc: 'Take the Delhi-Meerut Expressway to Dehradun, then ascend up to Dhanaulti. Perfect weekend retreat away from city smog.'
    }
  ];

  const attractions = [
    {
      title: 'Surkanda Devi Temple',
      alt: '3,030m Summit',
      desc: 'Sacred Shakti Peeth with 360-degree snow peaks and modern ropeway cable car, just 8km from Dhanaulti.'
    },
    {
      title: 'Top Tibba Ridge (8 KM)',
      alt: 'Wilderness Trail',
      desc: 'Our homestay’s premier guided ridge trek cutting through virgin oak groves and alpine crests.'
    },
    {
      title: 'Eco Park Dhanaulti',
      alt: 'Deodar Woodlands',
      desc: 'Sprawling forest park featuring suspension bridges, horse riding, and walking trails maintained by forest locals.'
    },
    {
      title: 'River Valley Descent (4 KM)',
      alt: 'Hidden Gorge',
      desc: 'Secluded mountain riverbed with crystal freshwater springs, stone pools, and riverside camping.'
    }
  ];

  return (
    <section id="location" className="py-24 px-4 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" /> Dhanaulti Altitude Guide
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Ascend To <span className="text-shimmer">Dhanaulti</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Perched at 7,500 feet above the clouds. Far quieter, cooler, and more pristine than crowded commercial hill stations.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {routes.map((route, i) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {route.icon}
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">{route.title}</h3>
                  <span className="text-xs font-mono text-amber-300">{route.distance}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{route.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Nearby Marvels & Google Map Link banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Nearby Mountain Highlights
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Surrounded by Virgin Himalayan Wilderness
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {attractions.map((att) => (
                <div key={att.title} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-bold text-amber-300 font-cinzel">{att.title}</div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">{att.alt}</div>
                  <div className="text-xs text-slate-300">{att.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-3">
            <a
              href={HOST_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 transition-transform hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
            <span className="text-xs text-slate-400 text-center">
              Dhanaulti, Tehri Garhwal, Uttarakhand 249180
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
