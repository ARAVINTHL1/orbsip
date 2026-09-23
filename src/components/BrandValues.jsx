import { useState, useEffect, useRef } from 'react'
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
    glow: 'rgba(56, 189, 248, 0.4)',
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
    glow: 'rgba(251, 191, 36, 0.4)',
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
    glow: 'rgba(52, 211, 153, 0.4)',
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
    glow: 'rgba(251, 146, 60, 0.4)',
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
    glow: 'rgba(244, 114, 182, 0.4)',
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
  const [autoPlay, setAutoPlay] = useState(true)
  const [cardKey, setCardKey] = useState(0)
  const containerRef = useScrollReveal(0.12)
  const prevStep = useRef(0)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [autoPlay])

  // Bump cardKey whenever activeStep changes so the card re-mounts and plays its entrance
  useEffect(() => {
    if (prevStep.current !== activeStep) {
      prevStep.current = activeStep
      setCardKey((k) => k + 1)
    }
  }, [activeStep])

  const current = flowSteps[activeStep]

  const goTo = (idx) => {
    setActiveStep(idx)
    setAutoPlay(false)
  }

  return (
    <section
      ref={containerRef}
      aria-label="Brand Values Flow Graph"
      className="invisible-until-scroll py-24 bg-gradient-to-b from-[#071410] via-[#0D2818] to-[#071410] relative overflow-hidden text-white"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold font-[Poppins] uppercase tracking-[0.2em] mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              The OrbSip Process Flow
            </div>
            <h2 className="text-3xl sm:text-5xl font-[Poppins] font-black text-white tracking-tight">
              From Spark to Sip:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FBBF24] to-[#34D399]">
                Our Value Graph
              </span>
            </h2>
          </div>
        </div>

        {/* ── FLOW PIPELINE ── */}
        <div className="relative mb-14">

          {/* Desktop connecting pipeline */}
          <div className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-3 z-0 pointer-events-none">
            {/* Static track */}
            <div className="w-full h-1.5 bg-white/10 rounded-full" />

            {/* Animated glowing stream — fills up to active step */}
            <div
              className="absolute top-0 left-0 h-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.20,0.64,1)] stream-flow"
              style={{
                width: `${(activeStep / (flowSteps.length - 1)) * 100}%`,
                background: `linear-gradient(90deg, #38BDF8, #FBBF24, #34D399, #FB923C, #F472B6, #38BDF8)`,
                boxShadow: `0 0 18px 2px ${current.color}80`,
              }}
            />

            {/* Traveling droplet */}
            <div
              className="absolute -top-1.5 w-4 h-4 rounded-full bg-white transition-all duration-700 ease-[cubic-bezier(0.34,1.20,0.64,1)] droplet-pulse"
              style={{
                left: `${(activeStep / (flowSteps.length - 1)) * 100}%`,
                transform: 'translateX(-50%)',
                boxShadow: `0 0 16px 5px ${current.color}`,
                backgroundColor: current.color,
              }}
            />
          </div>

          {/* 5 Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {flowSteps.map((item, index) => {
              const isCurrent = activeStep === index
              const isPast = activeStep > index

              return (
                <div
                  key={item.id}
                  onClick={() => goTo(index)}
                  className={`group relative flex flex-col items-center text-center p-6 rounded-3xl cursor-pointer border
                    transition-all duration-500 ease-out
                    ${isCurrent
                      ? 'bg-white/10 border-white/40 shadow-2xl -translate-y-3'
                      : isPast
                        ? 'bg-white/[0.04] border-white/20 hover:bg-white/[0.08] hover:-translate-y-1'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] opacity-60 hover:opacity-90 hover:-translate-y-1'
                    }`}
                  style={{
                    boxShadow: isCurrent ? `0 20px 50px -10px ${item.glow}` : 'none',
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {/* Pulsing ring glow on active node */}
                  {isCurrent && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-3xl pulse-ring pointer-events-none"
                      style={{ border: `2px solid ${item.color}`, boxShadow: `0 0 12px ${item.color}` }}
                    />
                  )}

                  {/* Flow Node Icon Hub */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5
                      transition-all duration-500 group-hover:scale-110
                      ${isCurrent ? 'node-enter' : ''}`}
                    style={{
                      background: isCurrent
                        ? `radial-gradient(circle at 32% 28%, #ffffff 0%, ${item.color} 52%, #071410 100%)`
                        : isPast
                          ? `radial-gradient(circle at 32% 28%, #ffffff 0%, ${item.color}70 70%, #071410 100%)`
                          : 'rgba(255,255,255,0.06)',
                      boxShadow: isCurrent
                        ? `0 0 28px ${item.glow}, inset 0 2px 6px rgba(255,255,255,0.8), inset 0 -3px 8px rgba(0,0,0,0.4)`
                        : 'none',
                      color: isCurrent || isPast ? '#ffffff' : '#ffffff60',
                    }}
                  >
                    {/* Glass gloss on active */}
                    {isCurrent && (
                      <div
                        aria-hidden="true"
                        className="absolute top-1.5 left-2.5 w-5 h-2.5 rounded-full bg-white/70 blur-[1px] rotate-[-22deg] pointer-events-none"
                      />
                    )}

                    {item.icon}

                    {/* Step badge */}
                    <span
                      className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-black border transition-all duration-300"
                      style={{
                        backgroundColor: isCurrent ? item.color : '#071410',
                        color: isCurrent ? '#071410' : '#ffffff80',
                        borderColor: isCurrent ? '#ffffff60' : 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Labels */}
                  <span
                    className="text-[10px] font-[Poppins] font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                    style={{ color: isCurrent ? item.color : `${item.color}80` }}
                  >
                    {item.phase}
                  </span>
                  <h3
                    className="text-sm font-[Poppins] font-black mb-2 leading-snug transition-colors duration-300"
                    style={{ color: isCurrent ? '#ffffff' : 'rgba(255,255,255,0.7)' }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-xs font-[Inter] transition-colors duration-300"
                    style={{ color: isCurrent ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}
                  >
                    {item.tagline}
                  </span>

                  {/* Active indicator bar */}
                  <div
                    className="h-1 rounded-full mt-4 transition-all duration-500 ease-out"
                    style={{
                      width: isCurrent ? '44px' : isPast ? '12px' : '6px',
                      backgroundColor: item.color,
                      opacity: isCurrent ? 1 : isPast ? 0.4 : 0.15,
                      boxShadow: isCurrent ? `0 0 10px ${item.color}` : 'none',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* ── ACTIVE STAGE DETAIL CARD — re-animates on each step change ── */}
        <div
          key={cardKey}
          className="fade-slide-up relative rounded-3xl p-6 sm:p-10 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            boxShadow: `0 24px 70px -20px ${current.glow}`,
          }}
        >
          {/* Accent corner glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-50"
            style={{ backgroundColor: current.color }}
          />
          {/* Bottom accent glow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: current.color }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black font-[Poppins] uppercase tracking-wider"
                  style={{
                    backgroundColor: `${current.color}20`,
                    color: current.color,
                    border: `1px solid ${current.color}50`,
                  }}
                >
                  Stage {current.step} of 05 • {current.phase}
                </span>
                <span className="text-xs text-white/35 font-mono hidden sm:inline">Active Flow Node</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-[Poppins] font-black text-white mb-2">
                {current.title}
              </h3>
              <p className="text-sm font-[Poppins] font-semibold mb-4 tracking-wide" style={{ color: current.color }}>
                {current.tagline}
              </p>
              <p className="text-white/70 font-[Inter] text-base leading-relaxed">
                {current.desc}
              </p>

              {/* Step progress dots */}
              <div className="flex items-center gap-2 mt-6">
                {flowSteps.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className="cursor-pointer transition-all duration-300 rounded-full"
                    aria-label={`Go to ${s.title}`}
                    style={{
                      width: i === activeStep ? '28px' : '8px',
                      height: '8px',
                      backgroundColor: i === activeStep ? current.color : i < activeStep ? `${current.color}50` : 'rgba(255,255,255,0.15)',
                      boxShadow: i === activeStep ? `0 0 10px ${current.color}` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 self-start lg:self-center flex-shrink-0">
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : flowSteps.length - 1))
                  setAutoPlay(false)
                }}
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all cursor-pointer"
              >
                ← Prev
              </button>
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev + 1) % flowSteps.length)
                  setAutoPlay(false)
                }}
                className="px-5 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer shadow-lg"
                style={{
                  backgroundColor: current.color,
                  color: '#071410',
                  boxShadow: `0 4px 20px ${current.glow}`,
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
