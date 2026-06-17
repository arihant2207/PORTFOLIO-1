'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Calendar } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Tic Tech Toe Hackathon Participant',
    organization: 'Silver Oak University',
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
    date: '2024',
    description: 'Specialized program completing curriculum on threat monitoring, IAM structures, data protection, and cloud network architecture.',
    category: 'Certification',
    icon: Award,
  },
  {
    title: 'Oracle Cloud Certified',
    organization: 'Oracle Academy',
    date: '2024',
    description: 'Verified certification in Core OCI infrastructure: Compute, Storage, Database operations, and IAM policies.',
    category: 'Certification',
    icon: Award,
  },
  {
    title: 'AWS Academy Cloud Foundations',
    organization: 'Amazon Web Services',
    date: '2023',
    description: 'Completed foundational cloud infrastructure training covering core services (EC2, S3, RDS, IAM) and serverless principles.',
    category: 'Certification',
    icon: Award,
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden border-b border-white/[0.04]">
      {/* Background radial overlay */}
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-orange-600/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-20 items-center text-center">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">04 / Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Credentials
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {/* Vertical glowing path */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-orange-primary via-orange-secondary to-transparent" />

          {ACHIEVEMENTS_DATA.map((achievement, idx) => {
            const IconComp = achievement.icon;
            const isHackathon = achievement.category === 'Hackathon';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="relative"
              >
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#050505] border border-white/20">
                  <span className={`h-2 w-2 rounded-full ${
                    isHackathon ? 'bg-orange-primary shadow-[0_0_8px_rgba(255,107,0,0.5)]' : 'bg-orange-secondary shadow-[0_0_8px_rgba(255,140,66,0.5)]'
                  }`} />
                </span>

                {/* Content Box */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                  {/* Subtle top indicator */}
                  <div className={`absolute top-0 left-0 bottom-0 w-[3px] ${
                    isHackathon ? 'bg-orange-primary/40' : 'bg-orange-secondary/40'
                  }`} />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        isHackathon ? 'bg-orange-primary/10 text-orange-primary border border-orange-primary/20' : 'bg-orange-secondary/10 text-orange-secondary border border-orange-secondary/20'
                      }`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gradient-orange transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500 font-mono mt-0.5">{achievement.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono shrink-0 sm:self-start bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-zinc text-xs sm:text-sm leading-relaxed font-medium">
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
