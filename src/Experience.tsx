import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from './experienceData';

function getLogoSrc(filename: string) {
  return require(`./assets/${filename}`);
}

function ExperienceCard({ exp, idx }: { exp: any; idx: number }) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const bulletsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = bulletsRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setShowScrollIndicator(true);
    } else {
      setShowScrollIndicator(false);
    }
  }, []);

  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
    >
      <div className="flip-card-inner min-h-[420px] w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front bg-white rounded-2xl shadow-xl p-8 border border-slate-100 w-full h-full flex flex-col items-center z-10">
          {exp.logo && (
            <img
              src={getLogoSrc(exp.logo)}
              alt={exp.company + ' logo'}
              className={`h-20 w-20 object-contain mb-4 mx-auto rounded-full border-2 border-gray-200
                ${exp.company === 'Meta' ? 'p-3' : ''}
                ${exp.company === 'NVIDIA' ? 'p-1 scale-110' : ''}
              `}
              style={{ background: 'transparent' }}
            />
          )}
          <div className="mb-2 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-indigo-700 text-center">{exp.role}</span>
            <span className="text-gray-500 text-center">{exp.company}</span>
          </div>
          <div className="text-sm text-gray-400 mb-4 text-center">{exp.date}</div>
          <div className="mb-3 flex flex-col items-center min-h-[32px]">
            <span className="text-xs text-gray-400 font-medium flex items-center gap-1 animate-pulse">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 inline-block' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'/></svg>
              Hover for details
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto justify-center absolute bottom-8 left-0 right-0 px-4">
            {exp.tech.map((t: string, i: number) => (
              <span key={i} className="bg-slate-100 text-xs px-3 py-1 rounded-full text-gray-700 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Back Side */}
        <div className="flip-card-back bg-white rounded-2xl shadow-xl p-8 border border-slate-100 w-full h-full flex flex-col relative">
          <ul
            ref={bulletsRef}
            className="mb-4 list-disc list-inside text-sm text-gray-700 space-y-2 text-left max-h-72 overflow-y-auto pr-2 mt-2"
          >
            {exp.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {showScrollIndicator && (
            <div className="absolute bottom-16 left-0 right-0 flex justify-center pointer-events-none animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-auto justify-center absolute bottom-8 left-0 right-0 px-4">
            {exp.tech.map((t: string, i: number) => (
              <span key={i} className="bg-slate-100 text-xs px-3 py-1 rounded-full text-gray-700 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-violet-100 py-16 px-4" id="experience">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">Experience</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl scale-90 mx-auto">
        {experienceData.map((exp, idx) => (
          <ExperienceCard exp={exp} idx={idx} key={exp.company + exp.role + exp.date} />
        ))}
      </div>
    </section>
  );
} 