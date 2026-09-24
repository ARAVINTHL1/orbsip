import { Link } from 'react-scroll'
import { ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

/* Small floating background orb */
function BgOrb({ style, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-sm pointer-events-none ${className}`}
      style={style}
    />
  )
}


export default function Hero() {
  const textRef = useScrollReveal(0.1)
  const visualRef = useScrollReveal(0.1)

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-[#071410] via-[#0D2818] to-[#162B1E]"
    >
      {/* Ambient gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full
          bg-[#D4AF37]/10 blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 rounded-full
          bg-[#1E88E5]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full
          bg-[#4CAF50]/8 blur-[80px]" />
      </div>

      {/* Floating background orbs */}
      <BgOrb className="w-4 h-4 bg-[#f06292]/60 float-anim"
        style={{ top: '22%', left: '7%', animationDelay: '0s', animationDuration: '5s' }} />
      <BgOrb className="w-3 h-3 bg-[#FFB300]/70 float-anim"
        style={{ top: '60%', left: '12%', animationDelay: '1.2s', animationDuration: '4.5s' }} />
      <BgOrb className="w-5 h-5 bg-[#42A5F5]/50 float-anim"
        style={{ top: '35%', right: '6%', animationDelay: '0.6s', animationDuration: '6s' }} />
      <BgOrb className="w-3 h-3 bg-[#ef5350]/60 float-anim"
        style={{ top: '75%', right: '15%', animationDelay: '1.8s', animationDuration: '5.5s' }} />
      <BgOrb className="w-6 h-6 bg-[#D4AF37]/40 float-anim"
        style={{ top: '15%', left: '45%', animationDelay: '2s', animationDuration: '7s' }} />
      <BgOrb className="w-2.5 h-2.5 bg-[#4CAF50]/70 float-anim"
        style={{ top: '80%', left: '35%', animationDelay: '0.4s', animationDuration: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* ── Left text ── */}
        <div
          ref={textRef}
          className="invisible-until-scroll flex flex-col items-start gap-6"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm
            font-[Poppins] font-medium text-[#D4AF37]">
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] orb-pulse" />
            New Era of Beverages
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-[Poppins] font-black
            text-white leading-[1.08] tracking-tight">
            Fresh, Fun,{' '}
            <br />
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-[#D4AF37] via-[#E8C84A] to-[#D4AF37]">
              Just Orbs.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 font-[Inter] font-light leading-relaxed max-w-md">
            You've had juice. Now try it with a twist.<br />
            <span className="text-[#4CAF50] font-medium">Real fruit juice. Edible orbs.</span>{' '}
            A burst of surprise in every sip.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="whats-inside"
              smooth
              duration={600}
              offset={-72}
              id="hero-discover-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-[#D4AF37] text-[#0D2818] font-bold font-[Poppins] text-sm cursor-pointer
                hover:bg-[#E8C84A] transition-all duration-300
                shadow-[0_0_28px_rgba(212,175,55,0.45)]
                hover:shadow-[0_0_40px_rgba(212,175,55,0.65)]
                hover:-translate-y-0.5 btn-gold-shimmer"
            >
              Discover OrbSip <ArrowRight size={18} />
            </Link>
            <Link
              to="flavors"
              smooth
              duration={600}
              offset={-72}
              id="hero-flavors-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                border border-white/30 text-white font-semibold font-[Poppins] text-sm
                cursor-pointer hover:bg-white/10 hover:border-white/50
                transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Flavors
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10 w-full">
            {[
              { num: '3+', label: 'Flavors' },
              { num: '100%', label: 'Natural Juice' },
              { num: '∞', label: 'Fun' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-[Poppins] font-black text-[#D4AF37]">{s.num}</span>
                <span className="text-xs text-white/55 font-[Inter] mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right visual ── */}
        <div
          ref={visualRef}
          className="invisible-until-scroll relative flex justify-center items-center"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative w-full max-w-xl">
            {/* Glow ring */}
            <div aria-hidden="true"
              className="absolute inset-8 rounded-3xl
                bg-gradient-to-br from-[#D4AF37]/20 via-[#4CAF50]/10 to-[#1E88E5]/15
                blur-2xl" />

            <img
              src="/images/hero.jpg"
              alt="Three OrbSip bottles — Guava, Mango and Watermelon — with floating edible orbs"
              className="relative z-10 w-full rounded-3xl object-cover
                shadow-[0_40px_80px_rgba(0,0,0,0.5)] float-slow-anim"
            />


          </div>
        </div>
      </div>


    </section>
  )
}
