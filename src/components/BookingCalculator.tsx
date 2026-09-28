import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  BedDouble, 
  Calendar, 
  Users, 
  Compass, 
  Tent, 
  Waves, 
  Coffee, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function BookingCalculator() {
  const [roomType, setRoomType] = useState<'deluxe' | 'normal' | 'camping-only'>('deluxe');
  const [nights, setNights] = useState<number>(1);
  const [guests, setGuests] = useState<number>(2);

  // Add-ons
  const [addTopTibba, setAddTopTibba] = useState<boolean>(true);
  const [addRiverCamping, setAddRiverCamping] = useState<boolean>(false);
  const [addCliffCamping, setAddCliffCamping] = useState<boolean>(false);
  const [addMeals, setAddMeals] = useState<boolean>(true);

  // Rates
  const roomRates = {
    'deluxe': 2500,
    'normal': 2000,
    'camping-only': 0
  };

  const topTibbaPricePerPerson = 700;
  const cliffCampingPricePerPerson = 1200;
  const riverCampingPricePerPerson = 1500;
  const mealsPricePerPersonPerDay = 450;

  // Calculation
  const roomTotal = roomRates[roomType] * nights;
  const topTibbaTotal = addTopTibba ? topTibbaPricePerPerson * guests : 0;
  const cliffCampingTotal = addCliffCamping ? cliffCampingPricePerPerson * guests : 0;
  const riverCampingTotal = addRiverCamping ? riverCampingPricePerPerson * guests : 0;
  const mealsTotal = addMeals ? mealsPricePerPersonPerDay * guests * nights : 0;

  const grandTotal = roomTotal + topTibbaTotal + cliffCampingTotal + riverCampingTotal + mealsTotal;

  const sendWhatsAppBooking = () => {
    const roomName = roomType === 'deluxe' ? 'Deluxe Room (₹2,500/nt)' : roomType === 'normal' ? 'Normal Room (₹2,000/nt)' : 'Camping Experience Only';
    
    let adventuresText = [];
    if (addTopTibba) adventuresText.push('Top Tibba 8km Trek');
    if (addCliffCamping) adventuresText.push('Starlit Mountain Cliff Camping');
    if (addRiverCamping) adventuresText.push('River Night Camping (4km Down Trek)');
    if (addMeals) adventuresText.push('Authentic Pahadi Meal Plan (Breakfast + Dinner)');

    const message = 
`Hello Rahul Ji,
I would like to book a trip with Homestay Winter Line, Dhanaulti:

• Accommodation: ${roomName}
• Stay Duration: ${nights} Night(s)
• Total Guests: ${guests} Person(s)
• Selected Adventures & Services:
  ${adventuresText.length > 0 ? adventuresText.map(a => `• ${a}`).join('\n  ') : '• Room stay only'}
• Estimated Total: ₹${grandTotal.toLocaleString('en-IN')}

Please let me know room availability and confirm the booking.`;

    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 px-4 bg-[#07090e] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" /> Instant Package Builder
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Calculate Your <span className="text-shimmer">Dhanaulti Escape</span>
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Customize your stay, 8km Top Tibba trek, or 4km river camping. Transparent rates with instant direct WhatsApp confirmation from host Rahul.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-400/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options selection column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Room Choice */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3">
                  1. Select Accommodation Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setRoomType('deluxe')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      roomType === 'deluxe'
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-amber-300 font-semibold mb-1">Deluxe Room</div>
                    <div className="font-cinzel text-lg font-bold text-white">₹2,500</div>
                    <div className="text-[11px] text-slate-400">Valley view & king bed</div>
                  </button>

                  <button
                    onClick={() => setRoomType('normal')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      roomType === 'normal'
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-amber-300 font-semibold mb-1">Normal Room</div>
                    <div className="font-cinzel text-lg font-bold text-white">₹2,000</div>
                    <div className="text-[11px] text-slate-400">Cozy wooden comfort</div>
                  </button>

                  <button
                    onClick={() => setRoomType('camping-only')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      roomType === 'camping-only'
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-emerald-400 font-semibold mb-1">Camping Only</div>
                    <div className="font-cinzel text-lg font-bold text-white">Outdoor</div>
                    <div className="text-[11px] text-slate-400">Tents under stars</div>
                  </button>
                </div>
              </div>

              {/* 2. Duration & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nights: <span className="text-amber-400 font-bold">{nights}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={1}
                      max={7}
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <span className="text-sm font-bold text-white w-8 text-center">{nights}N</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Guests: <span className="text-amber-400 font-bold">{guests}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={1}
                      max={12}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <span className="text-sm font-bold text-white w-8 text-center">{guests}P</span>
                  </div>
                </div>
              </div>

              {/* 3. Adventure & Dining Add-ons */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3">
                  3. Adventure Experiences & Meals
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addTopTibba}
                        onChange={(e) => setAddTopTibba(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <Compass className="w-4 h-4 text-amber-400" />
                          <span>Top Tibba Trek (8 KM Track)</span>
                        </div>
                        <div className="text-xs text-slate-400">Guided ridge hike, oak forests & snow peak views</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      +₹{topTibbaPricePerPerson}/p
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addRiverCamping}
                        onChange={(e) => setAddRiverCamping(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <Waves className="w-4 h-4 text-teal-400" />
                          <span>River Night Camping & 4km Down Trek</span>
                        </div>
                        <div className="text-xs text-slate-400">Descent to mountain riverbank, tent pitching & campfire</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-teal-300">
                      +₹{riverCampingPricePerPerson}/p
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addCliffCamping}
                        onChange={(e) => setAddCliffCamping(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <Tent className="w-4 h-4 text-indigo-400" />
                          <span>Starlit Mountain Cliff Camping</span>
                        </div>
                        <div className="text-xs text-slate-400">Quechua dome tent, warm sleeping bags & starry bonfire</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-300">
                      +₹{cliffCampingPricePerPerson}/p
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addMeals}
                        onChange={(e) => setAddMeals(e.target.checked)}
                        className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <Coffee className="w-4 h-4 text-rose-400" />
                          <span>Authentic Pahadi Meal Plan</span>
                        </div>
                        <div className="text-xs text-slate-400">Hot morning breakfast + hearty home-cooked Garhwali dinner</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-rose-300">
                      +₹{mealsPricePerPersonPerDay}/p/day
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Price Summary & Instant WhatsApp trigger column (5 cols) */}
            <div className="lg:col-span-5 bg-black/50 rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
                  Price Breakdown
                </span>
                <h3 className="text-xl font-cinzel font-bold text-white mt-1 mb-4">
                  Estimated Total
                </h3>

                <div className="space-y-2.5 text-xs text-slate-300 border-b border-white/10 pb-4">
                  <div className="flex justify-between">
                    <span>Accommodation ({nights} night{nights > 1 ? 's' : ''}):</span>
                    <span className="font-mono text-white">₹{roomTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {addTopTibba && (
                    <div className="flex justify-between">
                      <span>Top Tibba Trek ({guests}p):</span>
                      <span className="font-mono text-amber-300">₹{topTibbaTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addRiverCamping && (
                    <div className="flex justify-between">
                      <span>River Night Camping ({guests}p):</span>
                      <span className="font-mono text-teal-300">₹{riverCampingTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addCliffCamping && (
                    <div className="flex justify-between">
                      <span>Cliff Night Camping ({guests}p):</span>
                      <span className="font-mono text-indigo-300">₹{cliffCampingTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addMeals && (
                    <div className="flex justify-between">
                      <span>Pahadi Meals ({guests}p × {nights}d):</span>
                      <span className="font-mono text-rose-300">₹{mealsTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mb-6">
                  <div className="text-xs text-slate-400 mb-1">Total Estimated Amount</div>
                  <div className="font-cinzel text-4xl sm:text-5xl font-black text-amber-300">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Zero online commission • Pay directly to host Rahul
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={sendWhatsAppBooking}
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/60 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Booking to Rahul on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${HOST_INFO.contactNumber}`}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Need Custom Group Plan? Call {HOST_INFO.contactNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
