import { Link } from 'react-scroll'
import useScrollReveal from '../hooks/useScrollReveal'

const products = [
  {
    id: 'product-guava',
    img: '/images/guava.jpg',
    alt: 'OrbSip Guava Juice with edible orbs, surrounded by fresh guava fruit',
    name: 'Pink Guava Bliss',
    sublabel: 'Limited Edition',
    dotColor: '#f06292',
    glowColor: 'rgba(240,98,146,0.35)',
    bgFrom: '#FCE4EC',
    bgTo: '#F8BBD9',
    tag: 'New',
    tagColor: '#f06292',
    ingredients: ['🍈 Guava Juice', '🫧 Guava Orbs', '🌿 Lychee Essence', '💧 Spring Water'],
    desc: "A tropical escape in every bottle. Sweet, rosy guava meets pop-bursting fruit orbs for a texture experience unlike anything you've tasted.",
    orbs: [
      { bg: '#f06292', top: '14%', left: '8%', size: 14, delay: '0s' },
      { bg: '#ec407a', top: '30%', right: '6%', size: 10, delay: '0.5s' },
      { bg: '#f48fb1', bottom: '20%', left: '12%', size: 12, delay: '1s' },
    ],
    featured: false,
  },
  {
    id: 'product-mango',
    img: '/images/mango.jpg',
    alt: 'OrbSip Mango Juice with edible orbs, surrounded by fresh mango slices',
    name: 'Golden Mango Burst',
    sublabel: 'Signature Flavor',
    dotColor: '#FFB300',
    glowColor: 'rgba(255,179,0,0.35)',
    bgFrom: '#FFF8E1',
    bgTo: '#FFE082',
    tag: null,
    tagColor: null,
    ingredients: ['🥭 Alphonso Mango', '🫧 Mango Orbs', '🌿 Mint Infusion', '💛 Turmeric Boost'],
    desc: 'Our star performer. Sun-ripened Alphonso mango, cold-pressed and paired with honey-sweet mango orbs that dissolve into pure joy.',
    orbs: [
      { bg: '#FFB300', top: '12%', right: '10%', size: 16, delay: '0.2s' },
      { bg: '#FF8F00', top: '40%', left: '5%',  size: 10, delay: '0.7s' },
      { bg: '#FFC107', bottom: '18%', right: '8%', size: 13, delay: '1.2s' },
    ],
    featured: true,
  },
  {
    id: 'product-watermelon',
    img: '/images/watermelon.jpg',
    alt: 'OrbSip Watermelon Juice with edible orbs, surrounded by watermelon slices',
    name: 'Watermelon Pop',
    sublabel: 'Summer Favorite',
    dotColor: '#ef5350',
    glowColor: 'rgba(239,83,80,0.35)',
    bgFrom: '#FFEBEE',
    bgTo: '#FFCDD2',
    tag: null,
    tagColor: null,
    ingredients: ['🍉 Watermelon Juice', '🫧 Watermelon Orbs', '🌿 Cooling Mint', '🍋 Lemon Zest'],
    desc: 'Crisp, cooling, and utterly refreshing. Pure watermelon juice, juicy orbs, and a mint finish that make every hot day bearable.',
    orbs: [
      { bg: '#ef5350', top: '18%', left: '6%',   size: 15, delay: '0.1s' },
      { bg: '#4CAF50', top: '45%', right: '5%',   size: 11, delay: '0.6s' },
      { bg: '#e53935', bottom: '22%', left: '10%', size: 9, delay: '1.1s' },
    ],
    featured: false,
  },
]

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.1)
  return (
    <div ref={ref} className={`invisible-until-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Flavors() {
  return (
    <section
      id="flavors"
      aria-label="OrbSip Flavor Showcase"
      className="py-24 bg-gradient-to-b from-[#F8FAF9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold font-[Poppins] uppercase tracking-[0.25em]
            text-[#4CAF50] mb-3">Product Lineup</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-center text-4xl sm:text-5xl font-[Poppins] font-black
            text-[#0D2818] mb-4">Choose Your Orb</h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="text-center text-[#1A3A2A]/65 font-[Inter] text-lg max-w-xl mx-auto mb-14">
            Three distinct personalities. One unforgettable experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={80 + i * 120} className="h-full">
              <article
                id={p.id}
                className={`relative flex flex-col rounded-3xl overflow-hidden h-full
                  border transition-all duration-400 group
                  hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)] hover:-translate-y-2
                  ${p.featured
                    ? 'border-[#D4AF37]/50 shadow-[0_12px_40px_rgba(212,175,55,0.18)] bg-[#0D2818]'
                    : 'border-gray-100 bg-white'}`}
              >
                {/* Featured badge */}
                {p.featured && p.tag && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20
                    px-4 py-1 rounded-full bg-[#D4AF37] text-[#0D2818]
                    text-xs font-black font-[Poppins] whitespace-nowrap shadow-lg">
                    {p.tag}
                  </div>
                )}

                {/* Image zone */}
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden bg-white flex items-center justify-center p-2"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${p.glowColor}, transparent 75%)`,
                    }}
                  />
                  {/* Floating orbs */}
                  {p.orbs.map((orb, oi) => (
                    <span
                      key={oi}
                      aria-hidden="true"
                      className="absolute rounded-full float-anim"
                      style={{
                        background: orb.bg,
                        width: orb.size,
                        height: orb.size,
                        top: orb.top,
                        left: orb.left,
                        right: orb.right,
                        bottom: orb.bottom,
                        animationDelay: orb.delay,
                      }}
                    />
                  ))}
                  {/* Non-featured tag */}
                  {!p.featured && p.tag && (
                    <span
                      className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full
                        text-white text-xs font-bold font-[Poppins] shadow-sm"
                      style={{ background: p.tagColor }}
                    >
                      {p.tag}
                    </span>
                  )}
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="relative z-10 w-full h-full object-contain
                      transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className={`flex flex-col flex-1 p-7
                  ${p.featured ? 'text-white' : 'text-[#0D2818]'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: p.dotColor }}
                    />
                    <span className={`text-xs font-[Inter] font-medium uppercase tracking-wider
                      ${p.featured ? 'text-[#D4AF37]' : 'text-[#1A3A2A]/50'}`}>
                      {p.sublabel}
                    </span>
                  </div>
                  <h3 className="text-2xl font-[Poppins] font-black mb-4">{p.name}</h3>

                  {/* Ingredients */}
                  <ul className="flex flex-wrap gap-2 mb-4" aria-label="Key ingredients">
                    {p.ingredients.map((ing) => (
                      <li
                        key={ing}
                        className={`text-xs font-[Inter] px-3 py-1 rounded-full
                          ${p.featured
                            ? 'bg-white/10 text-white/80'
                            : 'bg-[#F0F7F2] text-[#1A3A2A]/80'}`}
                      >
                        {ing}
                      </li>
                    ))}
                  </ul>

                  <p className={`text-sm font-[Inter] leading-relaxed mb-6 flex-1
                    ${p.featured ? 'text-white/75' : 'text-[#1A3A2A]/65'}`}>
                    {p.desc}
                  </p>

                  <Link
                    to="contact"
                    smooth
                    duration={600}
                    offset={-72}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                      text-sm font-bold font-[Poppins] cursor-pointer transition-all duration-300
                      hover:-translate-y-0.5 btn-gold-shimmer
                      ${p.featured
                        ? 'bg-[#D4AF37] text-[#0D2818] hover:bg-[#E8C84A] shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:shadow-[0_0_36px_rgba(212,175,55,0.6)]'
                        : 'bg-[#0D2818] text-white hover:bg-[#1A3A2A]'}`}
                  >
                    Try It Now →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
