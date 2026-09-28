import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { HOST_INFO } from '../data/mediaData';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDates, setFormDates] = useState('');
  const [formCategory, setFormCategory] = useState('Deluxe Room (₹2,500)');
  const [formMessage, setFormMessage] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'When is the Winter Line visible from Dhanaulti?',
      a: 'The Winter Line phenomenon is typically visible between mid-October and mid-February during dusk (around 5:15 PM to 6:00 PM). Homestay Winter Line offers an unobstructed balcony view facing the sunset horizon.'
    },
    {
      q: 'What are the room charges and what is included?',
      a: 'We offer two room tiers: Deluxe Himalayan View Room at ₹2,500/night and Standard Cozy Room at ₹2,000/night. Both include attached bathrooms with 24/7 hot water geysers, mountain views, high-speed Wi-Fi, and morning tea.'
    },
    {
      q: 'Do you provide guides for the Top Tibba 8km trek?',
      a: 'Yes! Rahul Kohli and native Dhanaulti guides lead the 8km Top Tibba trek. Safety briefing, trail navigation, and harness/rope support are provided as needed.'
    },
    {
      q: 'How does River Night Camping (4km down) work?',
      a: 'Guests hike 4km downhill through lush mountain gorges to reach our secluded river campsite. We pitch waterproof Quechua dome tents right on the riverbank, arrange a night bonfire, and serve hot home-cooked meals.'
    },
    {
      q: 'How are the road conditions from Dehradun and Delhi?',
      a: 'The roads from Dehradun to Dhanaulti via Mussoorie or Suwakholi are well-paved and scenic throughout the year. Sedans, hatchbacks, and SUVs can all reach the homestay easily with private parking available.'
    }
  ];

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const submitToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Rahul Ji,\nInquiry from Homestay Winter Line website:\n\n• Name: ${formName || 'Guest'}\n• Phone: ${formPhone || 'Not provided'}\n• Travel Dates: ${formDates || 'Flexible'}\n• Interest: ${formCategory}\n• Message: ${formMessage || 'Please let me know availability.'}`
    );
    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Phone className="w-3.5 h-3.5" /> Host Connect
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Connect With Host <span className="text-shimmer">Rahul</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct personal attention. Call, email, or message directly on WhatsApp for room bookings, customized group treks, or camping queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Host Contact Information & Direct Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Host Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-400/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white text-2xl font-black font-cinzel shadow-lg shadow-amber-950/60">
                  R
                </div>
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Rahul Kohli
                  </h3>
                  <p className="text-xs font-mono text-amber-300">
                    Host & Mountain Guide • Homestay Winter Line
                  </p>
                  <span className="text-[11px] text-slate-400">Dhanaulti, Uttarakhand</span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">Mobile / WhatsApp</div>
                      <a href={`tel:${HOST_INFO.contactNumber}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                        +91 {HOST_INFO.contactNumber}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(HOST_INFO.contactNumber, 'phone')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                      <a href={`mailto:${HOST_INFO.email}`} className="font-bold text-white hover:text-teal-300 transition-colors truncate block">
                        {HOST_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(HOST_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Address</div>
                    <div className="font-medium text-white">
                      Homestay Winter Line, Dhanaulti, Tehri Garhwal, Uttarakhand 249180
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${HOST_INFO.contactNumber}`}
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Rahul</span>
                </a>

                <button
                  onClick={() => {
                    const text = encodeURIComponent('Hello Rahul, I would like to book a stay / trek at Homestay Winter Line.');
                    window.open(`https://wa.me/91${HOST_INFO.contactNumber}?text=${text}`, '_blank');
                  }}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Inquiry / Direct Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Instant Booking Inquiry
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1 mb-6">
              Send Your Travel Plan Directly
            </h3>

            <form onSubmit={submitToWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Sharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Tentative Dates</label>
                  <input
                    type="text"
                    placeholder="e.g. Next Weekend / 15-18 Nov"
                    value={formDates}
                    onChange={(e) => setFormDates(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Primary Interest</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="Deluxe Room (₹2,500)">Deluxe Room (₹2,500/nt)</option>
                    <option value="Normal Room (₹2,000)">Normal Room (₹2,000/nt)</option>
                    <option value="Top Tibba 8km Trek">Top Tibba 8km Ridge Trek</option>
                    <option value="River Night Camping (4km down)">River Night Camping (4km Down)</option>
                    <option value="Mountain Cliff Camping">Mountain Cliff Camping</option>
                    <option value="Complete Package (Room + Trek + Camping)">Complete Custom Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Custom Notes / Questions</label>
                <textarea
                  rows={3}
                  placeholder="Number of adults/children, special meal preferences, or questions..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Instant WhatsApp Inquiry to Host Rahul</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-mono mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
