'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll to update active state & blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker
      const scrollPosition = window.scrollY + 120;
      const sections = NAV_ITEMS.map(item => document.querySelector(item.href));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement;
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#050505]/80 backdrop-blur-lg border-b border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="flex items-center gap-2 font-mono text-lg font-bold text-white tracking-wider hover:opacity-95 transition-opacity"
          >
            <Code2 className="w-5 h-5 text-orange-primary" />
            <span>AJ<span className="text-gradient-orange font-sans font-extrabold font-mono">.dev</span></span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 hover:text-white ${
                    isActive ? 'text-white' : 'text-muted-zinc'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume Button & Menu toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold tracking-wider text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/45 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.05)]"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-zinc hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/[0.08] px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-2xl font-bold border-b border-white/[0.04] pb-3 ${
                    activeSection === item.href ? 'text-gradient-orange font-black' : 'text-muted-zinc'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 text-center text-sm font-bold tracking-wider text-white border border-white/8 bg-orange-primary/5 hover:bg-orange-primary/10 transition-colors duration-300"
            >
              Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
