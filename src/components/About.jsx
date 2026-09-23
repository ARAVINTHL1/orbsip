import useScrollReveal from '../hooks/useScrollReveal'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.1)
  return (
    <div ref={ref} className={`invisible-until-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const pillars = [
  { label: '🌿 Edible', bg: 'bg-[#E8F5E9]', text: 'text-[#1B5E20]' },
  { label: '⚡ Innovative', bg: 'bg-[#E3F2FD]', text: 'text-[#0D47A1]' },
  { label: '💧 Refreshing', bg: 'bg-[#FFF8E1]', text: 'text-[#F57F17]' },
]

const team = [
  {
    id: 'team-arjun',
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Beverage visionary obsessed with turning molecular gastronomy into everyday joy.',
    emoji: '🧠',
    color: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    id: 'team-priya',
    name: 'Priya Sharma',
    role: 'Head of Flavor Science',
    bio: 'Food chemist who engineers the perfect orb burst — texture, taste, and timing.',
    emoji: '🔬',
    color: '#4CAF50',
    bg: '#E8F5E9',
  },
  {
    id: 'team-rohan',
    name: 'Rohan Das',
    role: 'Chief Creative Officer',
    bio: 'Designs the OrbSip universe — from bottle aesthetics to brand storytelling.',
    emoji: '🎨',
    color: '#D4AF37',
    bg: '#FFF8E1',
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About OrbSip"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Top: Mascot (left) + Brand Story (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Mascot — left, bigger */}
          <Reveal delay={100} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Glow circle */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-80 h-80 rounded-full
                  bg-gradient-to-br from-[#1E88E5]/20 via-[#4CAF50]/15 to-[#D4AF37]/10
                  blur-3xl"
              />
              {/* Orbiting decoration ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-96 h-96 rounded-full border-2
                  border-dashed border-[#D4AF37]/20"
                style={{ animation: 'spinSlow 20s linear infinite' }}
              />

              <img
                src="/images/mascot.png"
                alt="OrbSip's friendly water-droplet mascot character, waving and wearing a gold superhero cape"
                className="relative z-10 w-96 h-auto object-contain bob-anim"
              />

              {/* Floating mini orbs around mascot */}
              {[
                { bg: '#f06292', top: '10%', right: '-10%', size: 16, delay: '0s' },
                { bg: '#FFB300', bottom: '15%', left: '-8%', size: 12, delay: '1s' },
                { bg: '#4CAF50', top: '55%', right: '-12%', size: 10, delay: '0.5s' },
              ].map((orb, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="absolute rounded-full float-anim"
                  style={{
                    background: orb.bg,
                    width: orb.size,
                    height: orb.size,
                    top: orb.top,
                    bottom: orb.bottom,
                    left: orb.left,
                    right: orb.right,
                    animationDelay: orb.delay,
                  }}
                />
              ))}
            </div>
          </Reveal>

          {/* Copy — right */}
          <div className="flex flex-col order-1 lg:order-2">
            <Reveal>
              <p className="text-xs font-bold font-[Poppins] uppercase tracking-[0.25em]
                text-[#4CAF50] mb-4">Our Story</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-4xl sm:text-5xl font-[Poppins] font-black
                text-[#0D2818] leading-[1.1] mb-6">
                Reimagining Juice,<br />
                <span className="text-transparent bg-clip-text
                  bg-gradient-to-r from-[#D4AF37] to-[#E8C84A]">
                  One Orb at a Time.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <p className="text-[#1A3A2A]/70 font-[Inter] text-base leading-relaxed mb-4">
                OrbSip was born from a simple belief: juice should be more than a drink —
                it should be an <em className="text-[#0D2818] font-medium not-italic">experience</em>.
                We combine the science of molecular gastronomy with the soul of tropical
                fruits to create beverages that surprise, delight, and refresh in equal measure.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-[#1A3A2A]/70 font-[Inter] text-base leading-relaxed mb-8">
                From our first experiment with edible spheres to our growing lineup of
                orb-powered flavours, every bottle of OrbSip represents our commitment to
                innovation, quality, and unapologetic fun.
              </p>
            </Reveal>

            {/* Brand pillars */}
            <Reveal delay={190}>
              <div className="flex flex-wrap gap-3 mb-8">
                {pillars.map(p => (
                  <span
                    key={p.label}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold font-[Poppins]
                      ${p.bg} ${p.text}`}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Quote */}
            <Reveal delay={240}>
              <blockquote className="relative border-l-4 border-[#D4AF37] pl-6 py-2">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 text-6xl text-[#D4AF37]/20
                    font-serif leading-none select-none"
                >
                  "
                </span>
                <p className="text-[#1A3A2A] font-[Inter] text-base leading-relaxed italic">
                  We didn't just want to make juice. We wanted to change how people{' '}
                  <em className="font-bold not-italic text-[#D4AF37]">feel</em> when they drink it.
                </p>
                <cite className="block mt-3 text-sm text-[#1A3A2A]/50 font-[Inter] not-italic font-medium">
                  — The OrbSip Team
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* ── Team Cards ── */}
        <Reveal delay={60}>
          <div className="text-center mb-12">
            <p className="text-xs font-bold font-[Poppins] uppercase tracking-[0.25em] text-[#4CAF50] mb-2">
              The People Behind the Orbs
            </p>
            <h3 className="text-3xl sm:text-4xl font-[Poppins] font-black text-[#0D2818]">
              Meet Our Team
            </h3>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={80 + i * 100}>
              <div className="flex flex-col items-center gap-4 group">

                {/* Circle Card */}
                <div
                  id={member.id}
                  className="relative w-52 h-52 rounded-full flex flex-col items-center justify-center
                    text-center cursor-default transition-all duration-400
                    hover:scale-110 hover:-translate-y-2"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, #ffffff 0%, ${member.bg} 100%)`,
                    boxShadow: `0 12px 40px ${member.color}30, inset 0 -4px 12px ${member.color}20`,
                    border: `3px solid ${member.color}30`,
                  }}
                >
                  {/* Inner glow ring */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-3 rounded-full opacity-30 transition-opacity duration-400 group-hover:opacity-60"
                    style={{ border: `2px dashed ${member.color}` }}
                  />

                  {/* Highlight specular */}
                  <div
                    aria-hidden="true"
                    className="absolute top-4 left-8 w-10 h-5 rounded-full bg-white/60 blur-[2px] rotate-[-20deg] pointer-events-none"
                  />

                  {/* Emoji avatar */}
                  <span className="text-4xl mb-2 z-10">{member.emoji}</span>

                  {/* Name */}
                  <h4 className="text-sm font-[Poppins] font-black text-[#0D2818] z-10 px-4 leading-tight">
                    {member.name}
                  </h4>
                </div>

                {/* Role + bio below the circle */}
                <div className="text-center max-w-[180px]">
                  <span
                    className="inline-block text-[11px] font-black font-[Poppins] uppercase tracking-wider
                      px-3 py-1 rounded-full mb-2"
                    style={{ color: member.color, backgroundColor: member.bg }}
                  >
                    {member.role}
                  </span>
                  <p className="text-xs text-[#1A3A2A]/65 font-[Inter] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

