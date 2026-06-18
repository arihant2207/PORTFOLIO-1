'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
    image: '/geovision.jpg',
  },
  {
    id: 2,
    title: 'ResumeBoost',
    subtitle: 'AI Resume Optimizer',
    description: 'Developed a full-stack web application that optimizes resumes for ATS compatibility using Google Gemini 2.5 Flash. The platform parses PDF and DOCX resumes, analyzes job descriptions, and rewrites content using stronger action verbs, skill categorization, and ATS-friendly formatting.\n\nBuilt a robust 6-step API pipeline:\nUpload → Parse → Analyze → Optimize → Generate PDF → Download\n\nImplemented exponential backoff retry logic to handle Gemini availability and rate-limit errors.\n\nIntegrated Supabase Authentication with Email Login and Google OAuth, session persistence, protected routes, and secure user management.\n\nDeployed using Render (Backend) and Vercel (Frontend) with GitHub-based CI/CD workflows.',
    tech: ['FastAPI', 'Next.js', 'Gemini AI', 'Supabase', 'Python'],
    github: '#',
    visit: 'https://resumeboost-tau.vercel.app/',
    accent: 'orange',
    visual: 'resumeboost',
    image: '/resumeboost.png',
  },
  {
    id: 3,
    title: 'AI Financial Advisor',
    subtitle: 'Gen Z Wealth & Budgeting Chatbot',
    description: 'An intelligent AI chatbot helping Gen Z users with automated budgeting, savings recommendations, and investment guidance using NLP and Machine Learning.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis'],
    github: '#',
    accent: 'orange',
    visual: 'financial',
    image: '/financial.png',
  },
  {
    id: 4,
    title: 'Sentiment Analysis Web App',
    subtitle: 'Customer Feedback Classifier',
    description: 'A web application that analyzes and classifies customer text sentiment as positive, negative, or neutral, helping teams process feedback loops.',
    tech: ['Python', 'Flask', 'TensorFlow', 'Hugging Face', 'NLP'],
    github: 'https://github.com/arihant2207/Sentiment_analysis',
    accent: 'orange',
    visual: '',
    image: '',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden">
      {/* Skills bottom line / transition to Projects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.14] pointer-events-none z-0" />

      {/* Projects Top Intersection Nodes */}
      <div className="absolute top-0 left-[4%] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-[18%] xl:left-[calc(50%-640px)] w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[18%] xl:right-[calc(50%-640px)] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 right-[4%] w-[5px] h-[5px] translate-x-1/2 -translate-y-1/2 bg-white/[0.22] border border-white/[0.1] pointer-events-none z-0" />

      {/* Soft Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-orange-600/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-20">
          <span className="text-xs font-mono tracking-widest text-orange-primary uppercase mb-2">03 / Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-orange-primary to-orange-secondary mt-4 rounded-full" />
        </div>

        {/* Alternating Projects List (Storytelling Layout) */}
        <div className="space-y-24 sm:space-y-36">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const hasGithub = project.github && project.github !== '#';
            const hasVisual = !!project.visual;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className={hasVisual ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center" : "w-full"}
              >
                {hasVisual ? (
                  <>
                    {/* Visual Preview column with real screenshot */}
                    <div className={`col-span-1 lg:col-span-5 w-full flex items-center justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <div className="relative overflow-hidden w-full aspect-[1.8/1] rounded-[20px] border border-[rgba(255,107,0,0.2)] hover:border-[#FF6B00] bg-[#080808]/90 backdrop-blur-sm p-1.5 shadow-[0_4px_20px_rgba(255,107,0,0.03)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:scale-[1.02] group">
                        <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content description column */}
                    <div className={`col-span-1 lg:col-span-7 flex flex-col justify-center ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8] mb-2 uppercase block">
                        FEATURED PROJECT
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-gradient-orange mb-6">
                        {project.subtitle}
                      </h4>
                      <p className="whitespace-pre-line text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        {project.description}
                      </p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-md text-[10px] sm:text-xs font-semibold font-mono tracking-wider border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[#E2E8F0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {(hasGithub || project.visit || project.visual === 'geovision') && (
                        <div className="flex items-center gap-4">
                          {hasGithub && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)]"
                            >
                              <Github className="w-4 h-4" />
                              <span>Source Code</span>
                            </a>
                          )}

                          {project.visit && (
                            <a
                              href={project.visit}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] cursor-pointer"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Visit Site</span>
                            </a>
                          )}

                          {project.visual === 'geovision' && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-primary/75">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-primary animate-ping" />
                              Production Live
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  /* Full-width text-focused layout */
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8] mb-2 uppercase block">
                      FEATURED PROJECT
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-gradient-orange mb-6">
                      {project.subtitle}
                    </h4>
                    <p className="whitespace-pre-line text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-[10px] sm:text-xs font-semibold font-mono tracking-wider border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[#E2E8F0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {(hasGithub || project.visit) && (
                      <div className="flex items-center gap-4">
                        {hasGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)]"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.visit && (
                          <a
                            href={project.visit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/8 bg-white/[0.02] hover:bg-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit Site</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
