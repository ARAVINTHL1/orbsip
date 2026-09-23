import { Link } from 'react-scroll'
import useScrollReveal from '../hooks/useScrollReveal'

/* ── Reusable "Reveal" wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.12)
  return (
    <div
      ref={ref}
      className={`invisible-until-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ── Three step cards ── */
const steps = [
  {
    id: 'step-juice',
    number: '01',
    title: 'Fresh Fruit Juice',
    desc: 'Cold-pressed, 100% real juice from hand-picked fruits. No concentrates, no artificial flavors — just pure nature in a bottle.',
    accent: '#4CAF50',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="rgba(76,175,80,0.15)" stroke="#4CAF50" strokeWidth="2"/>
        <path d="M20 40 Q20 22 30 18 Q40 22 40 40 Q40 46 30 46 Q20 46 20 40Z" fill="#4CAF50" opacity="0.85"/>
        <ellipse cx="30" cy="20" rx="8" ry="5" fill="#81C784"/>
        <path d="M30 18 Q35 12 38 8" stroke="#388E3C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'step-orbs',
    number: '02',
    title: 'Edible Orbs',
    desc: 'Tiny spheres of fruity goodness crafted via molecular gastronomy. They float, they pop, they burst with flavour when you bite them.',
    accent: '#1E88E5',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="rgba(30,136,229,0.15)" stroke="#1E88E5" strokeWidth="2"/>
        <circle cx="22" cy="28" r="7" fill="#1E88E5" opacity="0.9"/>
        <circle cx="36" cy="32" r="6" fill="#42A5F5" opacity="0.9"/>
        <circle cx="28" cy="38" r="5" fill="#1565C0" opacity="0.9"/>
        <circle cx="22" cy="28" r="3" fill="white" opacity="0.4"/>
        <circle cx="36" cy="32" r="2.5" fill="white" opacity="0.4"/>
        <circle cx="28" cy="38" r="2" fill="white" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'step-surprise',
    number: '03',
    title: 'A Little Surprise',
    desc: 'Every bottle holds a unique orb experience — no two sips are the same. Discover unexpected pops of flavour that make every drink an adventure.',
    accent: '#D4AF37',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="rgba(212,175,55,0.15)" stroke="#D4AF37" strokeWidth="2"/>
        <polygon points="30,12 34,24 47,24 37,32 41,45 30,37 19,45 23,32 13,24 26,24" fill="#D4AF37" opacity="0.9"/>
        <polygon points="30,16 33,24 42,24 35,29 37,38 30,33 23,38 25,29 18,24 27,24" fill="#FFF9C4" opacity="0.6"/>
      </svg>
    ),
  },
]

/* ── Flavor preview cards ── */
const flavors = [
  {
    id: 'flavor-guava',
    img: '/images/guava.jpg',
    alt: 'OrbSip Guava bottle with pink juice and floating orbs',
    emoji: '🍈',
    name: 'Pink Guava Bliss',
    badge: 'Guava',
    badgeBg: '#FCE4EC',
    badgeColor: '#c2185b',
    bgStart: '#FCE4EC',
    bgEnd: '#F8BBD9',
    desc: 'Sweet, tangy guava juice loaded with tropical guava orbs and a hint of lychee. Refreshing and exotic.',
    orbs: [
      { bg: '#f06292', top: '20%', left: '10%', delay: '0s', size: 12 },
      { bg: '#ec407a', top: '60%', left: '80%', delay: '0.4s', size: 9 },
      { bg: '#f48fb1', top: '75%', left: '30%', delay: '0.8s', size: 11 },
    ],
  },
  {
    id: 'flavor-mango',
    img: '/images/mango.jpg',
    alt: 'OrbSip Mango bottle with golden juice and floating orbs',
    emoji: '🥭',
    name: 'Golden Mango Burst',
    badge: 'Mango',
    badgeBg: '#FFF8E1',
    badgeColor: '#F57F17',
    bgStart: '#FFF8E1',
    bgEnd: '#FFE082',
    desc: 'Sun-ripened Alphonso mango juice with honey-sweet mango orbs that melt on your tongue. Pure tropical gold.',
    orbs: [
      { bg: '#FFB300', top: '15%', left: '75%', delay: '0.2s', size: 14 },
      { bg: '#FF8F00', top: '65%', left: '15%', delay: '0.6s', size: 10 },
      { bg: '#FFC107', top: '80%', left: '60%', delay: '1s',   size: 12 },
    ],
  },
  {
    id: 'flavor-watermelon',
    img: '/images/watermelon.jpg',
    alt: 'OrbSip Watermelon bottle with red juice and floating orbs',
    emoji: '🍉',
    name: 'Watermelon Pop',
    badge: 'Watermelon',
    badgeBg: '#FFEBEE',
    badgeColor: '#c62828',
    bgStart: '#FFEBEE',
    bgEnd: '#FFCDD2',
    desc: 'Crisp, hydrating watermelon juice with juicy orbs and a cooling mint finish. Sip your summer.',
    orbs: [
      { bg: '#ef5350', top: '25%', left: '20%', delay: '0.3s', size: 13 },
      { bg: '#e53935', top: '55%', left: '70%', delay: '0.7s', size: 9 },
      { bg: '#4CAF50', top: '70%', left: '40%', delay: '1.1s', size: 11 },
    ],
  },
]

export default function WhatsInside() {
  return (
    <section
      id="whats-inside"
      aria-label="What's Inside OrbSip"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <Reveal>
          <p className="text-center text-xs font-bold font-[Poppins] uppercase tracking-[0.25em]
            text-[#4CAF50] mb-3">
            The OrbSip Concept
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-center text-4xl sm:text-5xl font-[Poppins] font-black
            text-[#0D2818] mb-4 leading-tight">
            What's Actually Inside?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-center text-[#1A3A2A]/70 font-[Inter] text-lg max-w-xl mx-auto mb-16">
            Three simple things that add up to something extraordinary.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-24">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={100 + i * 100}>
              <div
                id={step.id}
                className="relative flex flex-col items-center text-center p-8
                  rounded-3xl border border-gray-100 bg-white
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1.5 transition-all duration-400 group"
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                    transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${step.accent}18` }}
                >
                  {step.icon}
                </div>

                {/* Number */}
                <span className="absolute top-6 right-7 text-5xl font-[Poppins] font-black
                  leading-none select-none"
                  style={{ color: `${step.accent}1A` }}>
                  {step.number}
                </span>

                <h3 className="text-xl font-[Poppins] font-bold text-[#0D2818] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1A3A2A]/65 font-[Inter] text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0
                  group-hover:w-1/2 rounded-full transition-all duration-400"
                  style={{ background: step.accent }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Flavor preview */}
        <Reveal>
          <p className="text-center text-xs font-bold font-[Poppins] uppercase tracking-[0.25em]
            text-[#4CAF50] mb-3">
            Our Flavors
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-center text-4xl sm:text-5xl font-[Poppins] font-black
            text-[#0D2818] mb-4">
            Pick Your Orb Adventure
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {flavors.map((f, i) => (
            <Reveal key={f.id} delay={100 + i * 100}>
              <div
                id={f.id}
                className="rounded-3xl overflow-hidden border border-gray-100
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]
                  hover:-translate-y-2 transition-all duration-400 group bg-white"
              >
                {/* Image zone */}
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden bg-white flex items-center justify-center p-2"
                >
                  {/* Floating mini orbs */}
                  {f.orbs.map((orb, oi) => (
                    <span
                      key={oi}
                      aria-hidden="true"
                      className="absolute rounded-full opacity-80 float-anim"
                      style={{
                        background: orb.bg,
                        width: orb.size,
                        height: orb.size,
                        top: orb.top,
                        left: orb.left,
                        animationDelay: orb.delay,
                      }}
                    />
                  ))}
                  <img
                    src={f.img}
                    alt={f.alt}
                    className="relative z-10 w-full h-full object-contain
                      transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <span
                    className="inline-block text-xs font-bold font-[Poppins] px-3 py-1
                      rounded-full mb-3"
                    style={{ background: f.badgeBg, color: f.badgeColor }}
                  >
                    {f.emoji} {f.badge}
                  </span>
                  <h3 className="text-lg font-[Poppins] font-bold text-[#0D2818] mb-2">
                    {f.name}
                  </h3>
                  <p className="text-sm text-[#1A3A2A]/65 font-[Inter] leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  <Link
                    to="flavors"
                    smooth
                    duration={600}
                    offset={-72}
                    className="text-sm font-semibold font-[Poppins] text-[#1E88E5]
                      hover:text-[#D4AF37] transition-colors cursor-pointer
                      inline-flex items-center gap-1 group/link"
                  >
                    Explore Flavor
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
