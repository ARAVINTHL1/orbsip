import { useEffect, useState } from 'react'

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('in')
  const [progress, setProgress] = useState(0)

  // Progress bar fills smoothly over 2.6s
  useEffect(() => {
    let start = null
    const DURATION = 2600

    const tick = (ts) => {
      if (!start) start = ts
      const pct = Math.min(((ts - start) / DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setPhase('out')
        setTimeout(onDone, 700)
      }
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div
      aria-live="polite"
      aria-label="OrbSip loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background: '#071410',
        transition: phase === 'out' ? 'opacity 0.6s ease, transform 0.6s ease' : undefined,
        opacity: phase === 'out' ? 0 : 1,
        transform: phase === 'out' ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* ── SIMPLE & UNIQUE BACKGROUND ANIMATION: Liquid Droplet Ripples ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        
        {/* Soft breathing radial core glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full blur-[90px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(30,136,229,0.22) 0%, rgba(76,175,80,0.18) 45%, rgba(212,175,55,0.08) 70%, transparent 100%)',
            animation: 'auraPulse 4s ease-in-out infinite',
          }}
        />

        {/* Liquid ripple ring 1 */}
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-emerald-400/25 pointer-events-none"
          style={{
            animation: 'waterRipple 4.2s cubic-bezier(0.1, 0.4, 0.2, 1) infinite',
            animationDelay: '0s',
            boxShadow: '0 0 25px rgba(52, 211, 153, 0.15), inset 0 0 15px rgba(56, 189, 248, 0.1)',
          }}
        />

        {/* Liquid ripple ring 2 */}
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-[#38BDF8]/20 pointer-events-none"
          style={{
            animation: 'waterRipple 4.2s cubic-bezier(0.1, 0.4, 0.2, 1) infinite',
            animationDelay: '1.4s',
            boxShadow: '0 0 25px rgba(56, 189, 248, 0.12), inset 0 0 15px rgba(76, 175, 80, 0.1)',
          }}
        />

        {/* Liquid ripple ring 3 */}
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-[#D4AF37]/20 pointer-events-none"
          style={{
            animation: 'waterRipple 4.2s cubic-bezier(0.1, 0.4, 0.2, 1) infinite',
            animationDelay: '2.8s',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.12)',
          }}
        />

        {/* Subtle fine concentric compass circle for geometric elegance */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.04] pointer-events-none"
        />
      </div>

      {/* ── CENTER BRAND CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo Card with glass gloss */}
        <div
          className="relative mb-6 px-9 py-5 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/30"
          style={{
            animation: 'splashFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <img
            src="/images/logo.png"
            alt="OrbSip Logo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-[#D4AF37] font-[Poppins] font-bold text-sm sm:text-base tracking-[0.3em] uppercase mb-8"
          style={{
            animation: 'splashFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          Fresh, Fun, Just Orbs.
        </p>

        {/* Loader dots */}
        <div
          className="flex items-center gap-2.5 mb-8"
          style={{
            animation: 'splashFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '0.35s',
            opacity: 0,
          }}
        >
          {[
            { c: '#1E88E5', d: '0s' },
            { c: '#4CAF50', d: '0.18s' },
            { c: '#D4AF37', d: '0.36s' },
          ].map((dot, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: dot.c,
                boxShadow: `0 0 10px ${dot.c}80`,
                animation: 'splashBounce 0.9s ease-in-out infinite',
                animationDelay: dot.d,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="w-60 sm:w-72"
          style={{
            animation: 'splashFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '0.45s',
            opacity: 0,
          }}
        >
          {/* Progress track */}
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #1E88E5 0%, #4CAF50 50%, #D4AF37 100%)',
                boxShadow: '0 0 12px rgba(76, 175, 80, 0.6)',
                transition: 'width 0.05s linear',
              }}
            />
          </div>

          {/* Dynamic Loading Text */}
          <p className="text-white/50 font-[Inter] text-xs tracking-wider uppercase mt-3">
            {progress < 40
              ? 'Chilling the orbs…'
              : progress < 75
              ? 'Pouring the juice…'
              : 'Almost ready…'}
          </p>
        </div>

      </div>
    </div>
  )
}
