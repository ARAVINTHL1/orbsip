import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: "What's Inside", to: 'whats-inside' },
  { label: 'Flavors', to: 'flavors' },
  { label: 'Events', to: 'events' },
  { label: 'About', to: 'about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkProps = {
    spy: true,
    smooth: true,
    duration: 600,
    offset: -72,
    onSetActive: (to) => setActive(to),
  }

  return (
    <nav
      id="navbar"
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled
          ? 'bg-[#0D2818]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="home" {...linkProps} className="cursor-pointer flex-shrink-0">
          <img
            src="/images/logo.jpg"
            alt="OrbSip Logo"
            className="h-10 w-auto rounded-lg object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none" role="list">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                {...linkProps}
                className={`relative px-4 py-2 text-sm font-medium font-[Poppins] rounded-full
                  transition-all duration-300 cursor-pointer select-none
                  ${activeLink === to
                    ? 'text-[#D4AF37]'
                    : 'text-white/80 hover:text-white'}`}
              >
                {label}
                {activeLink === to && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="contact"
            {...linkProps}
            id="nav-cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-[#D4AF37] text-[#0D2818] text-sm font-bold font-[Poppins] cursor-pointer
              hover:bg-[#E8C84A] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)]
              hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] btn-gold-shimmer"
          >
            Get In Touch
          </Link>

          <button
            id="hamburger-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-400
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul
          className="flex flex-col px-6 pb-6 pt-2 gap-1 bg-[#0D2818]/98 backdrop-blur-md list-none"
          role="list"
        >
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                {...linkProps}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-white/85 hover:text-[#D4AF37] font-medium
                  font-[Poppins] text-sm rounded-xl hover:bg-white/5 transition-all cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="contact"
              {...linkProps}
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-3 rounded-full bg-[#D4AF37] text-[#0D2818]
                font-bold font-[Poppins] text-sm cursor-pointer hover:bg-[#E8C84A] transition-colors"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
