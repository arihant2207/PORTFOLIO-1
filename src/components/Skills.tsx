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
    category: 'Frontend',
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
    skills: ['AWS', 'Google Cloud'],
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
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden">
      {/* About bottom line / transition to Skills */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* Skills Top Intersection Nodes */}
      <div className="absolute top-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      {/* Soft overlay blob */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] rounded-full bg-orange-600/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">02 / Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Skills
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {SKILLS_DATA.map((group, idx) => {
            const IconComponent = group.icon;
            const colSpan = idx < 3 
              ? 'md:col-span-3 lg:col-span-2' 
              : (idx === 4 ? 'md:col-span-6 lg:col-span-3' : 'md:col-span-3 lg:col-span-3');
            
            // Positioning overrides for specific card badges as requested by user
            let badgeContainerClass = "flex flex-wrap justify-center gap-2 mt-auto relative z-10";
            if (group.category === 'Languages' || group.category === 'Frontend') {
              badgeContainerClass += " -translate-y-2";
            } else if (group.category === 'Cloud Infrastructure' || group.category === 'Developer Tools') {
              badgeContainerClass += " translate-x-2.5";
            }

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className={`relative overflow-hidden bg-[#080808]/90 backdrop-blur-sm border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] rounded-[24px] p-[28px] flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:-translate-y-1 group col-span-1 ${colSpan}`}
              >
                {/* Dot Grid Background Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 relative z-10">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight">{group.category}</h3>
                </div>

                {/* Badges Container */}
                <div className={badgeContainerClass}>
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
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[#E2E8F0] transition-all duration-200 cursor-default"
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
