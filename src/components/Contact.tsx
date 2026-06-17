'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Github, Linkedin, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'arihantjain7106@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-orange-600/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Resume Download Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="resume">
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">05 / Resume</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Curriculum Vitae
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
              <p className="text-muted-zinc text-sm sm:text-base leading-relaxed mt-6">
                Explore a detailed breakdown of my academic qualifications, projects, certifications, and developer toolkit in a print-ready format.
              </p>
            </div>

            {/* Resume Card Graphic */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between h-full min-h-[260px] border-orange-primary/15">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <FileText className="w-40 h-40 text-white" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-orange-primary animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">RESUME PROFILE</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Arihant Jain Resume</h3>
                <p className="text-xs text-muted-zinc leading-relaxed font-mono">
                  Format: PDF • Size: ~120 KB<br />
                  Latest Update: June 2026<br />
                  Academic Focus: B.Tech IT & Intelligent Systems
                </p>
              </div>

              {/* Action */}
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-orange-primary to-orange-secondary hover:opacity-95 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.12)] cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details Column (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-orange-secondary uppercase mb-2">06 / Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
              <p className="text-muted-zinc text-sm sm:text-base leading-relaxed mt-6">
                Whether you have an interesting job opening, a project idea, or just want to chat about AI/ML or Cloud architectures, my inbox is always open.
              </p>
            </div>

            {/* Contact Information list */}
            <div className="space-y-4 h-full flex flex-col justify-center">
              {/* Email Card with Copy Trigger */}
              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between border-orange-primary/15 group relative overflow-hidden bg-white/[0.01]">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-orange-primary/10 border border-orange-primary/20 text-orange-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">EMAIL</span>
                    <span className="text-white text-sm sm:text-base font-bold font-mono tracking-wide">{email}</span>
                  </div>
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 hover:border-orange-primary/25 text-gray-400 hover:text-white transition-all cursor-pointer relative"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4.5 h-4.5 text-emerald-400 animate-scale" /> : <Copy className="w-4.5 h-4.5" />}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GitHub Card */}
                <a
                  href="https://github.com/arihant2207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border-white/[0.06] cursor-pointer"
                >
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">GITHUB</span>
                    <span className="text-white text-sm font-bold font-mono">github.com/arihant2207</span>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://linkedin.com/in/arihant-j-40530b2b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border-white/[0.06] cursor-pointer"
                >
                  <div className="p-3.5 rounded-xl bg-orange-primary/10 border border-orange-primary/20 text-orange-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">LINKEDIN</span>
                    <span className="text-white text-sm font-bold font-mono">linkedin.com/in/arihant-j-40530b...</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/[0.08] mt-24 pt-8 text-center text-xs text-gray-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Arihant Jain. All rights reserved.</p>
          <p className="hover:text-gray-400 transition-colors">
            Built with Next.js and Tailwind CSS by <span className="text-white">Arihant Jain</span>
          </p>
        </div>
      </div>
    </section>
  );
}
