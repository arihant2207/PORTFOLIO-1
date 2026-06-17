'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Map, TrendingUp, BarChart3 } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'GeoVision',
    subtitle: 'AI-Powered Geospatial Analytics Platform',
    description: 'A full-stack geospatial analytics web app for visualizing location-based data. Integrated AI-driven location scoring, recommendations, and interactive chatbot features powered by REST APIs.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Leaflet.js', 'OpenStreetMap', 'REST APIs'],
    github: 'https://github.com/arihant2207/GeoVision',
    accent: 'orange',
    visual: 'geovision',
  },
  {
    id: 2,
    title: 'AI Financial Advisor',
    subtitle: 'Gen Z Wealth & Budgeting Chatbot',
    description: 'An intelligent AI chatbot helping Gen Z users with automated budgeting, savings recommendations, and investment guidance using NLP and Machine Learning.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis'],
    github: '#',
    accent: 'orange',
    visual: 'financial',
  },
  {
    id: 3,
    title: 'Sentiment Analysis Web App',
    subtitle: 'Customer Feedback Classifier',
    description: 'A web application that analyzes and classifies customer text sentiment as positive, negative, or neutral, helping teams process feedback loops.',
    tech: ['Python', 'Flask', 'TensorFlow', 'Hugging Face', 'NLP'],
    github: 'https://github.com/arihant2207/Sentiment_analysis',
    accent: 'orange',
    visual: 'sentiment',
  }
];

// Helper components for the CSS mockups
function GeoVisionVisual() {
  return (
    <div className="w-full h-full relative bg-[#0a0a0a] rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden group">
      {/* Mock Map Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
      
      {/* Map outline mockup */}
      <div className="absolute inset-4 rounded-lg bg-[#0e0e0e] border border-white/[0.04] overflow-hidden flex items-center justify-center">
        {/* Mock Map paths */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 40 Q 50 30 100 80 T 200 40 T 300 120" fill="none" stroke="#FF6B00" strokeWidth="1.2" />
          <path d="M 20 150 Q 80 120 140 160 T 300 140" fill="none" stroke="#FF8C42" strokeWidth="1" />
          <circle cx="100" cy="80" r="4" fill="#FF6B00" />
          <circle cx="140" cy="160" r="4" fill="#FF8C42" />
        </svg>

        {/* Floating AI Scoring Widget */}
        <div className="absolute top-3 right-3 glass-panel p-2 rounded-lg text-[10px] flex items-center gap-1.5 shadow-lg border-orange-primary/20 bg-[#050505]/70">
          <span className="w-2 h-2 rounded-full bg-orange-primary animate-ping" />
          <span className="text-gray-400 font-mono">Location Score:</span>
          <span className="text-white font-bold font-mono text-xs">94.8</span>
        </div>

        {/* Map UI controls */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-1">
          <div className="w-6 h-6 rounded-md bg-[#18181b]/95 border border-white/5 flex items-center justify-center text-gray-400 text-xs font-bold font-mono cursor-default">+</div>
          <div className="w-6 h-6 rounded-md bg-[#18181b]/95 border border-white/5 flex items-center justify-center text-gray-400 text-xs font-bold font-mono cursor-default">-</div>
        </div>

        <div className="text-center z-10 flex flex-col items-center gap-2">
          <Map className="w-8 h-8 text-orange-primary/60 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[10px] font-mono tracking-widest text-gray-400">GEOSPATIAL CANVAS</span>
        </div>
      </div>
    </div>
  );
}

function FinancialAdvisorVisual() {
  return (
    <div className="w-full h-full relative bg-[#0a0a0a] rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden group">
      {/* Mock Chart Area */}
      <div className="absolute inset-4 rounded-lg bg-[#0e0e0e] border border-white/[0.04] p-3 flex flex-col justify-between">
        {/* Header metrics */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[9px] font-mono text-gray-500 uppercase">Interactive Balance</span>
            <div className="text-sm font-extrabold text-white font-mono">$4,850.00</div>
          </div>
          <span className="text-[9px] font-semibold text-orange-secondary bg-orange-primary/10 px-1.5 py-0.5 rounded border border-orange-primary/20">+12.4%</span>
        </div>

        {/* Visual Line Chart */}
        <div className="h-16 flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 35 Q 20 20 40 30 T 80 10 T 100 5" fill="none" stroke="#FF6B00" strokeWidth="2" />
            <path d="M 0 35 Q 20 20 40 30 T 80 10 T 100 5 L 100 40 L 0 40 Z" fill="url(#chartGrad)" />
            <circle cx="100" cy="5" r="3" fill="#FF6B00" />
          </svg>
        </div>

        {/* Chatbot overlay message */}
        <div className="glass-panel p-2 rounded-lg text-[9px] flex gap-2 items-start shadow-md border-orange-primary/20 bg-[#050505]/70">
          <div className="w-4 h-4 rounded-full bg-orange-primary/20 flex items-center justify-center font-mono font-bold text-[8px] text-orange-primary">AI</div>
          <div className="text-gray-300">
            <span className="font-semibold text-white">Advisor:</span> "Based on your spending, save $50 this week!"
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 text-orange-primary/5">
        <TrendingUp className="w-16 h-16 group-hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  );
}

function SentimentAnalysisVisual() {
  return (
    <div className="w-full h-full relative bg-[#0a0a0a] rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden group">
      {/* Visual Sentiment Meters */}
      <div className="absolute inset-4 rounded-lg bg-[#0e0e0e] border border-white/[0.04] p-3.5 flex flex-col justify-between">
        
        {/* Mini Bubble */}
        <div className="glass-panel p-2 rounded-lg text-[9px] text-gray-300 border-orange-primary/20 bg-[#050505]/70 shadow-md">
          <div className="text-gray-500 font-mono italic mb-1 text-[8px]">Analyze Input:</div>
          "The geospatial integration is extremely smooth!"
        </div>

        {/* Meters */}
        <div className="space-y-1.5">
          {/* Positive Meter */}
          <div>
            <div className="flex justify-between text-[8px] font-mono text-gray-400 mb-0.5">
              <span>POSITIVE</span>
              <span className="text-orange-primary font-bold">88%</span>
            </div>
            <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
              <div className="h-full bg-orange-primary rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          {/* Neutral/Negative combined */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="flex justify-between text-[8px] font-mono text-gray-500 mb-0.5">
                <span>NEUTRAL</span>
                <span>9%</span>
              </div>
              <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gray-600 rounded-full" style={{ width: '9%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[8px] font-mono text-gray-500 mb-0.5">
                <span>NEGATIVE</span>
                <span>3%</span>
              </div>
              <div className="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-red-500/50 rounded-full" style={{ width: '3%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 text-orange-primary/5">
        <BarChart3 className="w-16 h-16 group-hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden border-b border-white/[0.04]">
      {/* Soft Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-orange-600/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-20">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">03 / Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Implementations
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Alternating Projects List (Storytelling Layout) */}
        <div className="space-y-24 sm:space-y-36">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const hasGithub = project.github && project.github !== '#';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Preview column */}
                <div className={`col-span-1 lg:col-span-5 h-[240px] sm:h-[300px] w-full flex items-center justify-center ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  {project.visual === 'geovision' && <GeoVisionVisual />}
                  {project.visual === 'financial' && <FinancialAdvisorVisual />}
                  {project.visual === 'sentiment' && <SentimentAnalysisVisual />}
                </div>

                {/* Content description column */}
                <div className={`col-span-1 lg:col-span-7 flex flex-col justify-center ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 mb-2 uppercase block">
                    FEATURED PROJECT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-gradient-orange mb-6">
                    {project.subtitle}
                  </h4>
                  <p className="text-muted-zinc text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-[10px] sm:text-xs font-semibold font-mono tracking-wider border border-white/[0.06] bg-white/[0.01] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {hasGithub ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)]"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-gray-600 border border-white/4 bg-white/[0.01]">
                        <Github className="w-4 h-4" />
                        <span>Private Repository</span>
                      </div>
                    )}

                    {project.visual === 'geovision' && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-primary/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-primary animate-ping" />
                        Production Live
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
