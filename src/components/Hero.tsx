'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';

export default function Hero() {
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

  return (
    <section 
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-28 pb-12 overflow-hidden" 
      id="home"
    >
      {/* Subtle Dot Grid Specific to Hero (underlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      {/* Soft Low-Opacity Orange Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-orange-600/[0.06] blur-[90px] pointer-events-none animate-pulse-slow" />

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
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          className="font-extrabold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl"
        >
          Engineering <span className="text-gradient-orange">intelligent systems</span> for real-world impact.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-muted-zinc max-w-2xl mb-10 uppercase flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5"
        >
          <span>AI/ML Engineer</span>
          <span className="text-orange-primary/30 hidden sm:inline">•</span>
          <span>Full-Stack Developer</span>
          <span className="text-orange-primary/30 hidden sm:inline">•</span>
          <span>Cloud Enthusiast</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-orange-primary to-orange-secondary hover:opacity-95 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,107,0,0.12)] hover:shadow-[0_0_25px_rgba(255,107,0,0.22)] cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#resume"
            onClick={(e) => handleScrollTo(e, '#resume')}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-orange-primary/25 transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-orange-primary" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-muted-zinc hover:text-white transition-colors duration-200 w-full sm:w-auto cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle Visual SVG Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="orangeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M 50 150 Q 250 120 350 280 T 750 180" fill="none" stroke="url(#orangeLineGrad)" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 150 500 Q 450 400 550 600 T 950 450" fill="none" stroke="url(#orangeLineGrad)" strokeWidth="0.75" />
          
          <circle cx="350" cy="280" r="3" fill="#FF6B00" className="animate-ping" style={{ animationDuration: '3.5s' }} />
          <circle cx="350" cy="280" r="2" fill="#FF6B00" />
          <circle cx="750" cy="180" r="1.5" fill="#FF8C42" />
          <circle cx="550" cy="600" r="3" fill="#FF8C42" className="animate-ping" style={{ animationDuration: '5s' }} />
          <circle cx="550" cy="600" r="2" fill="#FF8C42" />
        </svg>
      </div>
    </section>
  );
}
