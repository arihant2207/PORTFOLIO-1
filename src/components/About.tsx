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
    <section id="about" className="py-24 relative overflow-hidden border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">01 / Profile</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering & Core Competencies
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
            className="lg:col-span-6 space-y-6 text-muted-zinc leading-relaxed text-sm sm:text-base font-medium"
          >
            <p>
              I design and build intelligent software systems, specializing in the intersection of AI/ML, NLP, and cloud architectures. Currently pursuing my B.Tech in IT at Silver Oak University, I focus on transforming complex mathematical models into production-ready APIs and scalable applications.
            </p>
            <p>
              Based in Ahmedabad, India, my engineering philosophy centers on code optimization, system integrity, and robust design. I bridge the gap between heavy computational models and low-latency client interfaces, ensuring seamless enterprise deployment.
            </p>
            <p>
              For me, system engineering is about creating impact. I build automated workflows and predictive interfaces that solve actual business challenges, optimizing infrastructure for security, compliance, and performance.
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
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between min-h-[150px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-primary/10 border border-orange-primary/20 rounded-xl text-orange-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">ACADEMICS</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-semibold text-gray-400 font-mono">B.Tech in IT</h3>
                <p className="text-white font-bold text-base mt-1">Silver Oak University</p>
                <span className="text-xs text-gray-500 font-mono">2023 — 2027</span>
              </div>
            </motion.div>

            {/* Card 2: CGPA */}
            <motion.div
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between min-h-[150px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-primary/10 border border-orange-primary/20 rounded-xl text-orange-primary">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">EXCELLENCE</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-semibold text-gray-400 font-mono">Cumulative GPA</h3>
                <p className="text-white font-extrabold text-3xl mt-0.5 text-gradient-orange">8.61 <span className="text-xs text-gray-500 font-normal">/ 10</span></p>
                <span className="text-xs text-gray-500 font-mono">Current Standing</span>
              </div>
            </motion.div>

            {/* Card 3: Location */}
            <motion.div
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between min-h-[150px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-primary/10 border border-orange-primary/20 rounded-xl text-orange-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">OPERATIONS</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-semibold text-gray-400 font-mono">Based In</h3>
                <p className="text-white font-bold text-lg mt-1">Ahmedabad, India</p>
                <span className="text-xs text-gray-500 font-mono">GMT +5:30</span>
              </div>
            </motion.div>

            {/* Card 4: Focus */}
            <motion.div
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between min-h-[150px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-primary/10 border border-orange-primary/20 rounded-xl text-orange-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">RELIABILITY</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-semibold text-gray-400 font-mono">Specializations</h3>
                <p className="text-white font-bold text-sm mt-1 leading-snug">AI Systems • NLP Pipelines • SecOps</p>
                <span className="text-xs text-gray-500 font-mono">Infrastructure</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
