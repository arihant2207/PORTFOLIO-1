'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Sparkles } from 'lucide-react';

export default function Hero() {
  const [hideBackground, setHideBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHideBackground(true);
      } else {
        setHideBackground(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const floatingParticles = [
    // Left side: 6 particles (between 5% and 35%)
    { id: 1, left: '7%', trailHeight: 90, dotSize: 3, delay: 0, duration: 11, opacity: 0.98 },
    { id: 2, left: '14%', trailHeight: 60, dotSize: 2.5, delay: 4, duration: 14, opacity: 0.88 },
    { id: 3, left: '22%', trailHeight: 110, dotSize: 3, delay: 1.5, duration: 10, opacity: 0.95 },
    { id: 4, left: '28%', trailHeight: 75, dotSize: 2.5, delay: 5.5, duration: 13, opacity: 0.92 },
    { id: 5, left: '33%', trailHeight: 120, dotSize: 3, delay: 3, duration: 12, opacity: 0.95 },
    { id: 6, left: '18%', trailHeight: 50, dotSize: 2, delay: 7, duration: 15, opacity: 0.82 },

    // Center area: 5 particles (between 36% and 65%)
    { id: 7, left: '39%', trailHeight: 100, dotSize: 2.5, delay: 1, duration: 13, opacity: 0.92 },
    { id: 8, left: '45%', trailHeight: 130, dotSize: 3, delay: 4.5, duration: 11, opacity: 0.98 },
    { id: 9, left: '51%', trailHeight: 80, dotSize: 2.5, delay: 2.5, duration: 15, opacity: 0.88 },
    { id: 10, left: '57%', trailHeight: 110, dotSize: 3, delay: 6, duration: 9, opacity: 0.95 },
    { id: 11, left: '63%', trailHeight: 70, dotSize: 2, delay: 3.5, duration: 14, opacity: 0.82 },

    // Right side: 7 particles (between 66% and 95%)
    { id: 12, left: '68%', trailHeight: 80, dotSize: 2.5, delay: 0.5, duration: 12, opacity: 0.88 },
    { id: 13, left: '73%', trailHeight: 120, dotSize: 3, delay: 5, duration: 10, opacity: 0.98 },
    { id: 14, left: '78%', trailHeight: 50, dotSize: 2, delay: 2, duration: 14, opacity: 0.82 },
    { id: 15, left: '83%', trailHeight: 100, dotSize: 3, delay: 7.5, duration: 11, opacity: 0.95 },
    { id: 16, left: '88%', trailHeight: 75, dotSize: 2.5, delay: 3, duration: 13, opacity: 0.92 },
    { id: 17, left: '93%', trailHeight: 110, dotSize: 3, delay: 6.5, duration: 8, opacity: 0.95 },
    { id: 18, left: '90%', trailHeight: 60, dotSize: 2.5, delay: 4, duration: 15, opacity: 0.88 },
  ];

  return (
    <section 
      className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center pt-[160px] md:pt-[180px] pb-16 overflow-hidden" 
      id="home"
    >
      {/* Top horizontal guide line (design framework) */}
      <div className="absolute top-[80px] left-0 w-full h-[1px] bg-white/[0.12] pointer-events-none z-0" />

      {/* Top Line Intersection Nodes */}
      <div className="absolute top-[80px] left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-[80px] left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-[80px] right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-[80px] right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      {/* Subtle Background Atmosphere */}
      {!hideBackground && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle Dot Grid (Orange) */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,107,0,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Extremely subtle ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-orange-600/[0.02] blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.02)_0%,transparent_70%)]" />

          {/* Elegant Particles with Thin Trails */}
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ 
                y: '-20vh',
                opacity: [0, p.opacity, p.opacity, 0] 
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                left: p.left,
                bottom: 0,
                width: '2px',
                height: `${p.trailHeight}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              {/* Glowing dot with enhanced visibility and bright core */}
              <div
                style={{
                  width: `${p.dotSize}px`,
                  height: `${p.dotSize}px`,
                  borderRadius: '50%',
                  backgroundColor: '#FFF8F2', // Light center core for premium glowing effect
                  border: '1px solid #FF6B00',
                  boxShadow: '0 0 12px #FF6B00, 0 0 24px #FF6B00, 0 0 40px rgba(255,107,0,0.85)',
                  filter: 'blur(0.1px)',
                  flexShrink: 0,
                }}
              />
              {/* Vertical trail fading naturally to the bottom */}
              <div
                style={{
                  width: '1px',
                  flexGrow: 1,
                  background: 'linear-gradient(to bottom, rgba(255,107,0,0.85), rgba(255,107,0,0.15), transparent)',
                  opacity: 0.9,
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Modern Label Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-primary/20 bg-orange-primary/5 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-orange-secondary mb-6"
        >
          <Terminal className="w-3.5 h-3.5 text-orange-primary animate-pulse" />
          <span>PORTFOLIO // ARIHANT JAIN</span>
        </motion.div>

        {/* Headline with clamped size */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)' }}
          className="font-extrabold tracking-tight text-[#F8FAFC] mb-6 leading-[1.15] max-w-4xl mx-auto"
        >
          Building <span className="text-gradient-orange">AI-powered</span> <br className="hidden md:inline" /> applications that solve <br className="hidden md:inline" /> real problems.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[#94A3B8] max-w-2xl mb-10 uppercase flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5"
        >
          <span>AI/ML Engineer</span>
          <span className="text-orange-primary/30 hidden sm:inline">•</span>
          <span>Full-Stack Developer</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4.5 w-full sm:w-auto"
        >
          {/* View Projects Button - Charcoal Glass Design */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="group relative flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-xs font-semibold tracking-wider text-white bg-[#151517]/85 backdrop-blur-md border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)] cursor-pointer w-full sm:w-auto"
          >
            <span>View Projects</span>
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-black ml-1 transition-colors group-hover:bg-zinc-900">
              <ArrowRight className="w-3 h-3 text-white transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>

          {/* Download Resume Button - Orange Accent Glass Design */}
          <a
            href="/resume/Arihant-Jain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-xs font-semibold tracking-widest uppercase text-white border border-orange-primary/30 bg-white/[0.02] backdrop-blur-sm shadow-[0_0_15px_rgba(255,107,0,0.06)] hover:bg-white/[0.04] hover:border-orange-primary hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-primary" />
            <span>DOWNLOAD RESUME</span>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="flex items-center justify-center gap-1.5 h-[50px] px-6 rounded-full text-xs font-semibold tracking-wider uppercase text-[#94A3B8] hover:text-white transition-colors duration-200 cursor-pointer w-full sm:w-auto"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>

      {/* SVG Overlay Removed */}
    </section>
  );
}
