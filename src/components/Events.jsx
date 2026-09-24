import { useState } from 'react'
import { Send } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const occasions = [
  { id: 'event-wedding',    emoji: '💒', label: 'Weddings' },
  { id: 'event-sports',     emoji: '🏆', label: 'Sports Events' },
  { id: 'event-corporate',  emoji: '🏢', label: 'Corporate Events' },
  { id: 'event-festival',   emoji: '🎪', label: 'Festivals' },
  { id: 'event-school',     emoji: '🎓', label: 'College Events' },
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

export default function Events() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', event_type: '', message: '',
  })

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.event_type || !form.message) return
    setSubmitted(true)
  }

  return (
    <section
      id="events"
      aria-label="Events and Customization"
      className="py-24 relative overflow-hidden
        bg-gradient-to-br from-[#1F4D35] via-[#2D6A4F] to-[#1A3A2A]"
    >
      {/* Ambient blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full
          bg-[#4CAF50]/8 blur-[100px]" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full
          bg-[#1E88E5]/8 blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full
          bg-white/10 blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6
        grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ── Left: copy ── */}
        <div className="flex flex-col">
          <Reveal>
            <p className="text-xs font-bold font-[Poppins] uppercase tracking-[0.25em]
              text-white mb-4">Experiences</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-4xl sm:text-5xl font-[Poppins] font-black text-white
              leading-[1.1] mb-5">
              Every Occasion<br />
              <span className="text-transparent bg-clip-text
                bg-gradient-to-r from-white via-white to-white">
                Deserves an Orb.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-white/70 font-[Inter] text-lg leading-relaxed mb-8 max-w-md">
              A unique beverage experience for every occasion — from intimate celebrations
              to large-scale events, OrbSip brings the wow factor.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-wrap gap-3 mb-10">
              {occasions.map(o => (
                <div
                  key={o.id}
                  id={o.id}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass
                    text-white/85 text-sm font-medium font-[Poppins]
                    hover:bg-white/15 hover:text-white hover:scale-105
                    transition-all duration-300 cursor-default"
                >
                  <span>{o.emoji}</span>
                  {o.label}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Feature checklist */}
          <Reveal delay={220}>
            <ul className="flex flex-col gap-3">
              {[
                'Custom orb flavour blending for your event',
                'Branded bottle labels with your event name',
                'Bulk orders with flexible delivery',
                'On-site OrbSip experience stations',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-white/70 font-[Inter] text-sm">
                  <span className="w-5 h-5 rounded-full bg-white/20 border border-white/40
                    flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── Right: form ── */}
        <Reveal delay={100} className="lg:pt-8">
          <div
            id="contact"
            className="rounded-3xl overflow-hidden
              bg-white/5 backdrop-blur-md border border-white/10
              shadow-[0_30px_78px_rgba(0,0,0,0.48),0_8px_24px_rgba(116,198,157,0.12)]"
          >
            <div className="bg-[#B7E4C7] px-8 py-6">
              <h3 className="text-xl font-[Poppins] font-black text-[#0D2818]">
                Plan Your OrbSip Experience
              </h3>
              <p className="text-[#0D2818]/70 font-[Inter] text-sm mt-1">
                Tell us about your event — we'll craft something special.
              </p>
            </div>

            <form
              id="orbsip-contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="p-8 flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-name" className="text-white/80 text-sm font-medium font-[Inter]">
                  Your Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Ravi Kumar"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15
                    text-white font-[Inter] text-sm placeholder:text-white/30
                    focus:outline-none focus:border-white/60 focus:bg-white/12
                    transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-white/80 text-sm font-medium font-[Inter]">
                  Email Address
                </label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ravi@example.com"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15
                    text-white font-[Inter] text-sm placeholder:text-white/30
                    focus:outline-none focus:border-white/60 focus:bg-white/12
                    transition-colors duration-200"
                />
              </div>

              {/* Event type */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-event" className="text-white/80 text-sm font-medium font-[Inter]">
                  Event Type
                </label>
                <select
                  id="form-event"
                  name="event_type"
                  value={form.event_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15
                    text-white font-[Inter] text-sm
                    focus:outline-none focus:border-white/60 focus:bg-white/12
                    transition-colors duration-200 appearance-none cursor-pointer
                    [&>option]:bg-[#0D2818] [&>option]:text-white"
                >
                  <option value="" disabled>Select your occasion…</option>
                  <option value="wedding">Wedding</option>
                  <option value="sports">Sports Event</option>
                  <option value="corporate">Corporate / Business Event</option>
                  <option value="festival">Festival / Outdoor Event</option>
                  <option value="college">School / College Event</option>
                  <option value="birthday">Birthday / Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="text-white/80 text-sm font-medium font-[Inter]">
                  Tell us more…
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Event date, number of guests, any special requirements…"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15
                    text-white font-[Inter] text-sm placeholder:text-white/30 resize-none
                    focus:outline-none focus:border-white/60 focus:bg-white/12
                    transition-colors duration-200"
                />
              </div>

              {/* Submit */}
              {submitted ? (
                <div
                  role="alert"
                  aria-live="polite"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl
                    bg-[#4CAF50]/15 border border-[#4CAF50]/30 text-[#4CAF50]
                    font-[Poppins] font-semibold text-sm"
                >
                  <span className="text-lg">🎉</span>
                  Thanks! We'll be in touch within 24 hours.
                </div>
              ) : (
                <button
                  type="submit"
                  id="form-submit-btn"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4
                    rounded-xl bg-[#B7E4C7] text-[#0D2818] font-black font-[Poppins] text-sm
                    hover:bg-[#D8F3DC] transition-all duration-300
                    shadow-[0_0_24px_rgba(183,228,199,0.28)]
                    hover:shadow-[0_0_36px_rgba(183,228,199,0.5)]
                    hover:-translate-y-0.5 btn-gold-shimmer"
                >
                  Send My Inquiry <Send size={16} />
                </button>
              )}
            </form>
          </div>
        </Reveal>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-0 h-24
        bg-gradient-to-b from-transparent via-[#1F4D35]/70 to-white pointer-events-none" />
    </section>
  )
}
