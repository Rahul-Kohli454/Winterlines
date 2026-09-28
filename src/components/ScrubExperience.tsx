import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Mountain, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../data/mediaData';

interface Slide {
  step: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: { text: string; href: string };
}

const SLIDES: Slide[] = [
  {
    step: '01',
    badge: 'High Altitude Sanctum',
    badgeColor: 'bg-amber-500/20 border-amber-400/40 text-amber-300',
    icon: <Mountain className="w-3.5 h-3.5 text-amber-400" />,
    title: 'Perched at 2,286m in Dhanaulti',
    description: 'Step onto our open iron balcony deck where the cool pine breezes roll off the Garhwal peaks and silence is absolute.'
  },
  {
    step: '02',
    badge: 'Rare Atmospheric Marvel',
    badgeColor: 'bg-rose-500/20 border-rose-400/40 text-rose-300',
    icon: <Sparkles className="w-3.5 h-3.5 text-rose-400" />,
    title: 'A Front-Row Seat to the Winter Line',
    description: 'Every winter evening, the lower sky catches fire in a straight, glowing scarlet ribbon. One of only two places on Earth to witness it.'
  },
  {
    step: '03',
    badge: 'The Himalayan Frontier',
    badgeColor: 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300',
    icon: <Compass className="w-3.5 h-3.5 text-emerald-400" />,
    title: 'Your Expedition Basecamp',
    description: 'From our doorstep, hike 8 kilometers along Top Tibba’s pristine ridges, or descend 4 kilometers into the singing river valley for starlit campfires.',
    cta: { text: 'Explore The 3 Treks', href: '#adventures' }
  }
];

export default function ScrubExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const targetTime = useRef(0);
  const currentTime = useRef(0);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    // 1. Scrub video smoothly
    const v = videoRef.current;
    if (v && v.duration && isFinite(v.duration)) {
      targetTime.current = p * (v.duration - 0.05);
    }

    // 2. Select distinct active step without overlap
    if (p < 0.33) {
      setActiveStep(0);
    } else if (p < 0.66) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const onLoaded = () => {
      setVideoReady(true);
      if (v.currentTime === 0) {
        v.currentTime = 0.1;
      }
      v.play().then(() => v.pause()).catch(() => {});
    };

    if (v.readyState >= 1) {
      onLoaded();
    } else {
      v.addEventListener('loadedmetadata', onLoaded);
      v.addEventListener('canplay', onLoaded);
    }

    let rafId: number;
    const tick = () => {
      if (videoReady && v) {
        const diff = targetTime.current - currentTime.current;
        if (Math.abs(diff) > 0.015) {
          currentTime.current += diff * 0.16;
          try {
            v.currentTime = currentTime.current;
          } catch (e) {
            // ignore seek lock
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('canplay', onLoaded);
    };
  }, [videoReady]);

  const currentSlide = SLIDES[activeStep];

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-[#07090e]">
      {/* Viewport-locked sticky stage */}
      <div className="sticky top-0 h-screen h-[100svh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Video Scrub Stage */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={getAssetUrl('media/winterline-experience.mp4')}
            poster={getAssetUrl('media/video-poster.jpg')}
            muted
            playsInline
            preload="auto"
            autoPlay
            loop
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
          {/* Subtle gradient vignette to blend with dark page */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/60 via-transparent to-[#07090e]/60" />
        </div>

        {/* Content Container with Mutual Exclusion via AnimatePresence */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 w-full text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.96 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 bg-black/65 backdrop-blur-xl shadow-2xl shadow-black/80 flex flex-col items-center"
            >
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4 ${currentSlide.badgeColor}`}
              >
                {currentSlide.icon}
                <span>{currentSlide.badge}</span>
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {currentSlide.title}
              </h2>

              {/* Description */}
              <p className="font-serif italic text-base sm:text-xl text-slate-200 max-w-xl mx-auto leading-relaxed mb-6">
                "{currentSlide.description}"
              </p>

              {/* Action Button if available */}
              {currentSlide.cta && (
                <a
                  href={currentSlide.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all hover:scale-105 shadow-xl shadow-amber-950/60"
                >
                  <span>{currentSlide.cta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              {/* Progress step indicators */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
                {SLIDES.map((s, idx) => (
                  <div
                    key={s.step}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStep === idx
                        ? 'w-8 bg-amber-400'
                        : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Stage Info Bar */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Scroll Scrub Experience ({activeStep + 1}/3)</span>
          </div>
          <div className="hidden sm:block tracking-widest uppercase text-slate-400">
            Dhanaulti Panoramic Balcony
          </div>
        </div>
      </div>
    </section>
  );
}
