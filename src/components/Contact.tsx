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
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Achievements bottom line / transition to Contact */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* Contact Top Intersection Nodes */}
      <div className="absolute top-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      {/* Decorative Blob (Slightly warmer orange accent) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-orange-600/[0.045] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Resume Download Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="resume">
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">05 / Resume</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Curriculum Vitae
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mt-6">
                Explore a detailed breakdown of my academic qualifications, projects, certifications, and developer toolkit in a print-ready format.
              </p>
            </div>

            {/* Resume Card Graphic */}
            <div className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex flex-col shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group">
              {/* Dot Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />
              
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-300 z-0">
                <FileText className="w-40 h-40 text-orange-primary" />
              </div>

              <div className="relative z-10 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                      <FileText className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest block leading-none">RESUME PROFILE</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Arihant Jain Resume</h3>
                </div>

                {/* Action */}
                <div>
                  <a
                    href="/resume/Arihant-Jain-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-orange-primary to-orange-secondary hover:opacity-95 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.12)] cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Column (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-orange-secondary uppercase mb-2">06 / Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Let's Build Something
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mt-6">
                Whether you have an interesting job opening, a project idea, or just want to chat about AI/ML or Cloud architectures, my inbox is always open.
              </p>
            </div>

            {/* Contact Information list */}
            <div className="space-y-4 h-full flex flex-col justify-center">
              {/* Email Card with Copy Trigger */}
              <div
                onClick={copyToClipboard}
                className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex items-center justify-between shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Dot Grid Background Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                    <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">EMAIL</span>
                    <span className="text-[#F8FAFC] text-sm sm:text-base font-bold font-mono tracking-wide">{email}</span>
                  </div>
                </div>
                
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 group-hover:border-orange-primary/25 text-[#94A3B8] group-hover:text-white transition-all relative z-10">
                  {copied ? <Check className="w-4.5 h-4.5 text-emerald-400 animate-scale" /> : <Copy className="w-4.5 h-4.5" />}
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href="https://github.com/arihant2207"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex items-center justify-between shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Dot Grid Background Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                    <Github className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">GITHUB</span>
                    <span className="text-[#F8FAFC] text-sm sm:text-base font-bold font-mono">github.com/arihant2207</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 group-hover:border-orange-primary/25 text-[#94A3B8] group-hover:text-white transition-all relative z-10">
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/arihant-j-40530b2b1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex items-center justify-between shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Dot Grid Background Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">LINKEDIN</span>
                    <span className="text-[#F8FAFC] text-sm sm:text-base font-bold font-mono">linkedin.com/in/arihant-j-40530b...</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 group-hover:border-orange-primary/25 text-[#94A3B8] group-hover:text-white transition-all relative z-10">
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/[0.08] mt-24 pt-8 text-center text-xs text-[#94A3B8] font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Arihant Jain. All rights reserved.</p>
          <p className="hover:text-[#F8FAFC] transition-colors">
            Built with Next.js and Tailwind CSS by <span className="text-[#F8FAFC]">Arihant Jain</span>
          </p>
        </div>
      </div>
      
      {/* Footer horizontal guide line (design framework) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* Footer bottom Intersection Nodes */}
      <div className="absolute bottom-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
    </section>
  );
}
