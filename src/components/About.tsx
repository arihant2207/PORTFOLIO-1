'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Shield } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Hero bottom line / transition to About */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* About Top Intersection Nodes */}
      <div className="absolute top-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">01 / Profile</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Professional Summary
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-[#CBD5E1] leading-relaxed text-sm sm:text-base font-medium"
          >
            <p>
              I'm Arihant Jain, a B.Tech IT student at Silver Oak University with a strong interest in AI/ML and full-stack development.
            </p>
            <p>
              I enjoy building practical software that combines intelligent systems with clean user experiences. My projects range from AI-powered resume optimization and sentiment analysis to geospatial analytics and financial advisory applications.
            </p>
            <p>
              Through hackathons, certifications, and hands-on development, I've worked with technologies like Python, React, TypeScript, NLP, REST APIs, AWS, and Google Cloud.
            </p>
            <p>
              My goal is simple: build useful products, learn continuously, and solve real-world problems through technology.
            </p>
          </motion.div>

          {/* Bento Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Card 1: Education */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex flex-col justify-between min-h-[160px] shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group col-span-1"
            >
              {/* Dot Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] rounded-xl text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                  <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider">ACADEMICS</span>
              </div>
              <div className="mt-4 relative z-10">
                <h3 className="text-xs font-semibold text-[#94A3B8] font-mono">B.Tech in IT</h3>
                <p className="text-[#F8FAFC] font-bold text-base mt-1">Silver Oak University</p>
                <span className="text-xs text-[#64748B] font-mono">2023 — 2027</span>
              </div>
            </motion.div>

            {/* Card 2: CGPA */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex flex-col justify-between min-h-[160px] shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group col-span-1"
            >
              {/* Dot Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] rounded-xl text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                  <Award className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider">EXCELLENCE</span>
              </div>
              <div className="mt-4 relative z-10">
                <h3 className="text-xs font-semibold text-[#94A3B8] font-mono">Cumulative GPA</h3>
                <p className="text-white font-extrabold text-3xl mt-0.5 text-gradient-orange">8.61 <span className="text-xs text-[#94A3B8] font-normal">/ 10</span></p>
                <span className="text-xs text-[#64748B] font-mono">Current Standing</span>
              </div>
            </motion.div>

            {/* Card 3: Location */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex flex-col justify-between min-h-[160px] shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group sm:col-span-2"
            >
              {/* Dot Grid Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] rounded-xl text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider">OPERATIONS</span>
              </div>
              <div className="mt-4 relative z-10">
                <h3 className="text-xs font-semibold text-[#94A3B8] font-mono">Based In</h3>
                <p className="text-[#F8FAFC] font-bold text-lg mt-1">Ahmedabad, India</p>
                <span className="text-xs text-[#64748B] font-mono">GMT +5:30</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
