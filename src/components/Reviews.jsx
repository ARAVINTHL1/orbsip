import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquareQuote } from 'lucide-react'

const reviewsData = [
  {
    id: 'rev-1',
    name: 'Aarav Sharma',
    city: 'Bengaluru, Karnataka',
    rating: 5,
    flavor: 'Alphonso Mango Burst',
    flavorColor: '#FFB300',
    flavorBg: '#FFF8E1',
    initials: 'AS',
    avatarGradient: 'from-amber-400 to-orange-500',
    review:
      'The bursting orbs in the Alphonso Mango flavor are mind-blowing! You get a fresh fruit explosion with every sip. Completely replaced my usual sugary energy drinks.',
    date: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Ananya Iyer',
    city: 'Chennai, Tamil Nadu',
    rating: 5,
    flavor: 'Ruby Guava Pop',
    flavorColor: '#f06292',
    flavorBg: '#FCE4EC',
    initials: 'AI',
    avatarGradient: 'from-pink-400 to-rose-600',
    review:
      'Tried OrbSip at our college fest and the whole gang was obsessed. The texture is unlike anything else in India — crisp, playful, and super refreshing in hot weather!',
    date: '4 days ago',
  },
  {
    id: 'rev-3',
    name: 'Rohan Verma',
    city: 'Mumbai, Maharashtra',
    rating: 5,
    flavor: 'Crimson Watermelon Fizz',
    flavorColor: '#ef5350',
    flavorBg: '#FFEBEE',
    initials: 'RV',
    avatarGradient: 'from-red-400 to-rose-500',
    review:
      'The Watermelon Fizz with popping bubbles is a true party in your mouth. Both kids and adults in our family fight over the last bottle. 10/10 innovation!',
    date: '1 week ago',
  },
  {
    id: 'rev-4',
    name: 'Diya Patel',
    city: 'Ahmedabad, Gujarat',
    rating: 5,
    flavor: 'Tropical Passion Orb',
    flavorColor: '#4CAF50',
    flavorBg: '#E8F5E9',
    initials: 'DP',
    avatarGradient: 'from-emerald-400 to-teal-600',
    review:
      'Zero synthetic aftertaste, pure orchard flavor. The molecular orb science actually works — the bubbles stay intact and burst right when you sip.',
    date: '1 week ago',
  },
  {
    id: 'rev-5',
    name: 'Vikram Malhotra',
    city: 'New Delhi, Delhi',
    rating: 5,
    flavor: 'Alphonso Mango Burst',
    flavorColor: '#FFB300',
    flavorBg: '#FFF8E1',
    initials: 'VM',
    avatarGradient: 'from-amber-500 to-yellow-600',
    review:
      'Ordered a 12-pack for our startup game night and it was gone in 20 minutes! The packaging aesthetics and the mouthfeel pop are absolutely world-class.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-6',
    name: 'Sneha Reddy',
    city: 'Hyderabad, Telangana',
    rating: 5,
    flavor: 'Ruby Guava Pop',
    flavorColor: '#f06292',
    flavorBg: '#FCE4EC',
    initials: 'SR',
    avatarGradient: 'from-fuchsia-400 to-pink-600',
    review:
      'I was skeptical about edible liquid orbs at first, but one sip of the Guava changed everything. Perfectly balanced sweetness, natural pulp, and 100% fun!',
    date: '2 weeks ago',
  },
  {
    id: 'rev-7',
    name: 'Karthik Sundaram',
    city: 'Kochi, Kerala',
    rating: 5,
    flavor: 'Crimson Watermelon Fizz',
    flavorColor: '#1E88E5',
    flavorBg: '#E3F2FD',
    initials: 'KS',
    avatarGradient: 'from-sky-400 to-blue-600',
    review:
      'OrbSip feels like fine-dining molecular gastronomy made accessible for daily life. Clean ingredients, real fruit, and fantastic fizz. Proud of this brand!',
    date: '3 weeks ago',
  },
]

export default function Reviews() {
  const containerRef = useScrollReveal(0.1)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate list once to create continuous seamless looping track
  const loopList = [...reviewsData, ...reviewsData]

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="reviews"
      ref={containerRef}
      aria-label="Customer Reviews"
      className="invisible-until-scroll py-24 bg-gradient-to-b from-white via-gray-50 to-[#071410] relative overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#4CAF50]/5 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/8 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-[Poppins] uppercase tracking-[0.2em] mb-3">
              <span className="text-sm">🇮🇳</span>
              Loved Across India • 50,000+ Sips
            </div>
            <h2 className="text-3xl sm:text-5xl font-[Poppins] font-black text-[#0D2818] tracking-tight">
              Real Sips,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E8C84A] to-[#4CAF50]">
                Real Bursts.
              </span>
            </h2>
            <p className="mt-3 text-base text-[#1A3A2A]/70 font-[Inter] max-w-xl">
              Hear what beverage enthusiasts, students, and fruit lovers across Indian cities are saying about the OrbSip sensation.
            </p>
          </div>

          {/* Carousel controls & status */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-bold font-[Poppins] text-[#0D2818] hover:bg-gray-50 transition-all cursor-pointer"
              title="Pause or resume auto scroll"
            >
              {isPaused ? '▶ Auto Play' : '⏸ Pause'}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                aria-label="Scroll reviews left"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#D4AF37] flex items-center justify-center text-[#0D2818] hover:text-[#D4AF37] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Scroll reviews right"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#D4AF37] flex items-center justify-center text-[#0D2818] hover:text-[#D4AF37] transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── HORIZONTAL CONTINUOUS CAROUSEL ── */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div
          className="marquee-track flex gap-6 px-4"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {loopList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[380px] flex-shrink-0 bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Accent bar matching flavor */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
                style={{ backgroundColor: item.flavorColor }}
              />

              {/* Decorative Quote Icon watermark */}
              <MessageSquareQuote
                aria-hidden="true"
                className="absolute top-6 right-6 w-12 h-12 text-gray-100 group-hover:text-emerald-50 transition-colors pointer-events-none"
              />

              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold font-[Poppins] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Sipper
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#1A3A2A]/85 font-[Inter] text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              <div>
                {/* Flavor Tag */}
                <div className="mb-4">
                  <span
                    className="inline-block text-[11px] font-bold font-[Poppins] px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: item.flavorBg,
                      color: item.flavorColor,
                    }}
                  >
                    ✦ {item.flavor}
                  </span>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-tr ${item.avatarGradient} flex items-center justify-center text-white font-[Poppins] font-bold text-sm shadow-md ring-2 ring-white`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-[Poppins] font-black text-[#0D2818] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#1A3A2A]/55 font-[Inter]">
                      {item.city}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade into footer */}
      <div className="h-10 w-full" />
    </section>
  )
}
