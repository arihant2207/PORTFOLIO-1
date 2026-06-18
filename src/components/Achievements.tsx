'use client';

import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Tic Tech Toe Hackathon Participant',
    organization: 'IEEE Student Branch DA-IICT',
    date: '2026',
    description: 'Collaborated on rapid prototyping of intelligent web applications, delivering functional software models under timed pressure.',
    category: 'Hackathon',
    icon: Trophy,
  },
  {
    title: 'Top 7 Teams — Smart India Hackathon (SIH 2025)',
    organization: 'Government of India',
    date: '2025',
    description: 'Recognized in the top 7 teams nationally for building complex solutions addressing critical government/geospatial problem statements.',
    category: 'Hackathon',
    icon: Trophy,
  },
  {
    title: 'Google Cloud Cybersecurity Track',
    organization: 'Google Cloud Academy',
    description: 'Specialized program completing curriculum on threat monitoring, IAM structures, data protection, and cloud network architecture.',
    category: 'Certification',
    icon: Award,
  },
  {
    title: 'Oracle Cloud Certified',
    organization: 'Oracle Academy',
    description: 'Verified certification in Core OCI infrastructure: Compute, Storage, Database operations, and IAM policies.',
    category: 'Certification',
    icon: Award,
  },
  {
    title: 'AWS Academy Cloud Foundations',
    organization: 'Amazon Web Services',
    description: 'Completed foundational cloud infrastructure training covering core services (EC2, S3, RDS, IAM) and serverless principles.',
    category: 'Certification',
    icon: Award,
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36 relative overflow-hidden">
      {/* Projects bottom line / transition to Achievements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* Achievements Top Intersection Nodes */}
      <div className="absolute top-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      {/* Background radial overlay */}
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-orange-600/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-20 items-center text-center">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">04 / Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Achievements & Credentials
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-[#ff6b00]/30 shadow-[0_0_8px_rgba(255,107,0,0.2)]" />

          {ACHIEVEMENTS_DATA.map((achievement, idx) => {
            const IconComp = achievement.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Timeline node dot aligned vertically with center of card heading */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-[35px] sm:top-[43px] flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#050505] border border-[#ff6b00]/50 shadow-[0_0_10px_rgba(255,107,0,0.25)] group-hover:border-[#ff6b00] group-hover:shadow-[0_0_14px_rgba(255,107,0,0.45)] transition-all duration-300 z-30">
                  <span className="h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_6px_#ff6b00]" />
                </span>

                {/* Content Box */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[rgba(255,107,0,0.25)] text-white shadow-[0_0_12px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_16px_rgba(255,107,0,0.3)] transition-all duration-300">
                        <IconComp className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-gradient-orange transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#94A3B8] font-mono mt-0.5">{achievement.organization}</p>
                      </div>
                    </div>

                    {achievement.date && (
                      <div className="flex items-center text-xs text-[#94A3B8] font-mono shrink-0 sm:self-start bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-full">
                        <span>{achievement.date}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
