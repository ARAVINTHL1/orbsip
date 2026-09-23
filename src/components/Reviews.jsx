import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquareQuote } from 'lucide-react'

const reviewsData = [
  {
    id: 'rev-1',
    name: 'Karthik Rajan',
    city: 'Chennai, Tamil Nadu',
    rating: 5,
    flavor: 'Alphonso Mango Burst',
    initials: 'KR',
    review:
      'The mango bursting bubbles are so tasty! Best refreshing drink for sunny days.',
    date: 'Yesterday',
  },
  {
    id: 'rev-2',
    name: 'Priya Dharshini',
    city: 'Coimbatore, Tamil Nadu',
    rating: 5,
    flavor: 'Ruby Guava Pop',
    initials: 'PD',
    review:
      'Loved the guava pop flavor! The bursting orbs are super fun and delicious.',
    date: '3 days ago',
  },
  {
    id: 'rev-3',
    name: 'Saravanan Muthu',
    city: 'Madurai, Tamil Nadu',
    rating: 5,
    flavor: 'Crimson Watermelon Fizz',
    initials: 'SM',
    review:
      'Watermelon flavor is awesome. My whole family loved the popping pearls!',
    date: '5 days ago',
  },
  {
    id: 'rev-4',
    name: 'Deepika Murugan',
    city: 'Tiruchirappalli, Tamil Nadu',
    rating: 5,
    flavor: 'Tropical Passion Orb',
    initials: 'DM',
    review:
      'Very fresh and natural fruit taste. Kids really enjoyed the popping feeling.',
    date: '1 week ago',
  },
  {
    id: 'rev-5',
    name: 'Aravind Kumar',
    city: 'Salem, Tamil Nadu',
    rating: 5,
    flavor: 'Alphonso Mango Burst',
    initials: 'AK',
    review:
      'Brought this for our college get-together. Everyone loved the pop in every sip!',
    date: '1 week ago',
  },
  {
    id: 'rev-6',
    name: 'Kavitha Sundar',
    city: 'Tirunelveli, Tamil Nadu',
    rating: 5,
    flavor: 'Ruby Guava Pop',
    initials: 'KS',
    review:
      'Super unique drink! Sweet, tangy, and keeps you chilled all afternoon.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-7',
    name: 'Vignesh Balaji',
    city: 'Thanjavur, Tamil Nadu',
    rating: 5,
    flavor: 'Crimson Watermelon Fizz',
    initials: 'VB',
    review:
      'The juice quality is top class. Great fizz, nice bottle, and 100% fun to drink!',
    date: '2 weeks ago',
  },
]

export default function Reviews() {
  const containerRef = useScrollReveal(0.1)
  const scrollRef = useRef(null)

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
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-5xl font-[Poppins] font-black text-[#0D2818] tracking-tight">
              What People Say{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E8C84A] to-[#4CAF50]">
                About OrbSip.
              </span>
            </h2>
            <p className="mt-3 text-base text-[#1A3A2A]/70 font-[Inter] max-w-xl">
              Honest feedback and ratings from juice lovers enjoying our bursting orb flavors.
            </p>
          </div>

          {/* Carousel navigation arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll reviews left"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#D4AF37] flex items-center justify-center text-[#0D2818] hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll reviews right"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#D4AF37] flex items-center justify-center text-[#0D2818] hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* ── HORIZONTAL CAROUSEL ── */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="marquee-track flex gap-6 px-4">
          {loopList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[330px] sm:w-[360px] flex-shrink-0 bg-white rounded-3xl p-7 border border-emerald-950/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(13,40,24,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Uniform brand accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#4CAF50] to-[#1E88E5]" />

              {/* Decorative Quote watermark */}
              <MessageSquareQuote
                aria-hidden="true"
                className="absolute top-6 right-6 w-12 h-12 text-emerald-900/5 group-hover:text-emerald-900/10 transition-colors pointer-events-none"
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

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold font-[Poppins] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Sipper
                  </span>
                </div>

                {/* Simple & clear review text */}
                <p className="text-[#1A3A2A]/90 font-[Inter] text-base leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              <div>
                {/* Uniform Flavor Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-bold font-[Poppins] px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    ✦ {item.flavor}
                  </span>
                </div>

                {/* Reviewer Info with Tamil names and cities */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0D2818] to-[#1F4D35] text-[#D4AF37] font-[Poppins] font-bold text-sm shadow-md ring-2 ring-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
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

      {/* Bottom spacing into footer */}
      <div className="h-6 w-full" />
    </section>
  )
}
