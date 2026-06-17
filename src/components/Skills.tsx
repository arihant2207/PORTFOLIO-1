'use client';

import { motion } from 'framer-motion';
import { Layers, Terminal, BrainCircuit, Cloud, Wrench } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Languages',
    icon: Terminal,
    skills: ['Python', 'JavaScript', 'TypeScript'],
    accent: 'orange',
  },
  {
    category: 'Frontend Engineering',
    icon: Layers,
    skills: ['React.js', 'Tailwind CSS', 'HTML/CSS'],
    accent: 'orange',
  },
  {
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    skills: ['NLP', 'TensorFlow', 'Hugging Face', 'Machine Learning', 'Data Analysis'],
    accent: 'orange',
  },
  {
    category: 'Cloud Infrastructure',
    icon: Cloud,
    skills: ['AWS', 'Google Cloud', 'Oracle Cloud'],
    accent: 'orange',
  },
  {
    category: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: 'orange',
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-b border-white/[0.04]">
      {/* Soft overlay blob */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] rounded-full bg-orange-600/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">02 / Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Matrix
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((group) => {
            const IconComponent = group.icon;
            
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col h-full relative group overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary opacity-20 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-orange-primary/10 text-orange-primary border border-orange-primary/20">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{group.category}</h3>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{ 
                        scale: 1.03,
                        borderColor: 'rgba(255, 107, 0, 0.35)',
                        backgroundColor: 'rgba(255, 107, 0, 0.04)',
                        color: '#ffffff',
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/[0.06] bg-white/[0.01] text-muted-zinc transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
