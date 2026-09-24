import { useState, useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const flowSteps = [
  {
    id: 'flow-1',
    step: '01',
    title: 'Bold Innovation',
    phase: 'The Spark',
    tagline: 'Molecular Ideation',
    desc: 'Reimagining beverages from scratch with edible molecular spheres that suspend and pop on demand.',
    color: '#38BDF8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'flow-2',
    step: '02',
    title: 'Uncompromising Quality',
    phase: 'The Sourcing',
    tagline: '100% Real Juice',
    desc: 'Cold-pressed real orchard fruit. Certified food-grade natural membranes with zero artificial shortcuts.',
    color: '#FBBF24',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    id: 'flow-3',
    step: '03',
    title: 'True Teamwork',
    phase: 'The Alchemy',
    tagline: 'Shared Purpose',
    desc: 'Food scientists, beverage creators, and flavor artists collaborating seamlessly to balance texture and taste.',
    color: '#34D399',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'flow-4',
    step: '04',
    title: 'Continuous Growth',
    phase: 'The Evolution',
    tagline: 'Always Evolving',
    desc: 'Iterating with orb bursting dynamics, exploring seasonal harvests, and refining mouthfeel every single batch.',
    color: '#FB923C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    id: 'flow-5',
    step: '05',
    title: 'Radical Integrity',
    phase: 'The Final Sip',
    tagline: 'Honest & Pure',
    desc: 'Zero synthetic dyes, zero mystery ingredients. Total transparency from orchard origin to the consumer.',
    color: '#F472B6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

export default function BrandValues() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useScrollReveal(0.12)

  // Gentle, calm auto-advance every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const current = flowSteps[activeStep]

  return (
    <section
      ref={containerRef}
      aria-label="Brand Values Flow Graph"
      className="invisible-until-scroll py-24 bg-[#071410] relative overflow-hidden text-white"
    >
      {/* Subtle, calm ambient background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold font-[Poppins] uppercase tracking-[0.2em] mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            The OrbSip Process Flow
          </div>
          <h2 className="text-3xl sm:text-5xl font-[Poppins] font-black text-white tracking-tight">
            From Spark to Sip:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FBBF24] to-[#34D399]">
              Our Value Graph
            </span>
          </h2>
        </div>

        {/* ── SPOTLIGHT VALUE CAROUSEL ── */}
        <div className="relative mb-12">

          {/* 5 Process Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {flowSteps.map((item, index) => {
              const isCurrent = activeStep === index
              const isPast = activeStep > index

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveStep(index)}
                  className={`value-card group relative flex flex-col items-center text-center p-6 rounded-3xl cursor-pointer border
                    transition-all duration-400 ease-out
                    ${isCurrent
                      ? 'value-card-active bg-white/10 border-white/30 shadow-lg -translate-y-2'
                      : isPast
                        ? 'bg-white/[0.04] border-white/15 hover:bg-white/[0.07]'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] opacity-50 hover:opacity-80'
                    }`}
                  style={{
                    '--value-delay': `${index * 0.18}s`,
                    '--value-color': item.color,
                  }}
                >
                  {/* Flow Node Icon Hub */}
                  <div
                    className={`value-card-hub relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${isCurrent ? 'value-card-hub-active' : ''}`}
                    style={{
                      backgroundColor: isCurrent ? `${item.color}25` : isPast ? `${item.color}15` : 'rgba(255,255,255,0.05)',
                      border: `1.5px solid ${isCurrent ? item.color : 'rgba(255,255,255,0.1)'}`,
                      color: isCurrent || isPast ? item.color : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {item.icon}

                    {/* Step badge */}
                    <span
                      className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-colors duration-300"
                      style={{
                        backgroundColor: isCurrent ? item.color : '#071410',
                        color: isCurrent ? '#071410' : 'rgba(255,255,255,0.6)',
                        borderColor: isCurrent ? item.color : 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Node Phase & Title */}
                  <span
                    className="text-[10px] font-[Poppins] font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                    style={{ color: isCurrent ? item.color : `${item.color}70` }}
                  >
                    {item.phase}
                  </span>
                  <h3
                    className="text-sm font-[Poppins] font-bold mb-2 leading-snug transition-colors duration-300"
                    style={{ color: isCurrent ? '#ffffff' : 'rgba(255,255,255,0.7)' }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-xs font-[Inter] transition-colors duration-300"
                    style={{ color: isCurrent ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)' }}
                  >
                    {item.tagline}
                  </span>

                  {/* Simple Indicator Bar */}
                  <div
                    className="h-1 rounded-full mt-4 transition-all duration-400 ease-out"
                    style={{
                      width: isCurrent ? '32px' : '6px',
                      backgroundColor: item.color,
                      opacity: isCurrent ? 1 : 0.2,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* ── ACTIVE STAGE DETAIL CARD (SIMPLE & CLEAN) ── */}
        <div
          className="relative rounded-3xl p-7 sm:p-9 border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-400"
          style={{
            borderColor: `${current.color}35`,
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold font-[Poppins] uppercase tracking-wider"
                  style={{
                    backgroundColor: `${current.color}15`,
                    color: current.color,
                    border: `1px solid ${current.color}35`,
                  }}
                >
                  Stage {current.step} of 05 • {current.phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-[Poppins] font-black text-white mb-2">
                {current.title}
              </h3>
              <p className="text-sm font-[Poppins] font-semibold mb-3 tracking-wide" style={{ color: current.color }}>
                {current.tagline}
              </p>
              <p className="text-white/70 font-[Inter] text-base leading-relaxed">
                {current.desc}
              </p>

              {/* Progress Indicator dots */}
              <div className="flex items-center gap-2 mt-5">
                {flowSteps.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(i)}
                    className="cursor-pointer transition-all duration-300 rounded-full"
                    aria-label={`Go to ${s.title}`}
                    style={{
                      width: i === activeStep ? '24px' : '8px',
                      height: '8px',
                      backgroundColor: i === activeStep ? current.color : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Prev / Next navigation buttons */}
            <div className="flex items-center gap-3 self-start lg:self-center flex-shrink-0">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : flowSteps.length - 1))}
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all cursor-pointer"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % flowSteps.length)}
                className="px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shadow-md"
                style={{
                  backgroundColor: current.color,
                  color: '#071410',
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
