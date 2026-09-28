import React from 'react';
import Navbar from './components/Navbar';
import AmbientAtmosphere from './components/AmbientAtmosphere';
import Hero from './components/Hero';
import ScrubExperience from './components/ScrubExperience';
import WinterLinePhenomenon from './components/WinterLinePhenomenon';
import RoomsSection from './components/RoomsSection';
import AdventuresSection from './components/AdventuresSection';
import BookingCalculator from './components/BookingCalculator';
import AuthenticGallery from './components/AuthenticGallery';
import LocalGuide from './components/LocalGuide';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import MobileQuickBar from './components/MobileQuickBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Ambient background particles & star field */}
      <AmbientAtmosphere />

      {/* Floating frosted glass navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Cinematic Scroll Stage & Video Scrubbing */}
        <ScrubExperience />

        {/* The Winter Line Phenomenon Experience */}
        <WinterLinePhenomenon />

        {/* Accommodations & Direct Host Pricing (Deluxe ₹2500 & Normal ₹2000) */}
        <RoomsSection />

        {/* Adventures (Top Tibba 8km, Night Camping, River Camping 4km Down) */}
        <AdventuresSection />

        {/* Interactive Custom Package & Cost Calculator */}
        <BookingCalculator />

        {/* Authentic Media Gallery with Lightbox */}
        <AuthenticGallery />

        {/* How to Reach & Altitude Guide */}
        <LocalGuide />

        {/* Traveler Testimonials */}
        <TestimonialsSection />

        {/* Host Contact, WhatsApp Dispatcher & FAQ */}
        <ContactSection />
      </main>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
