import { Link } from 'react-scroll'
import { Mail, Phone } from 'lucide-react'

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: "What's Inside", to: 'whats-inside' },
  { label: 'Our Flavors', to: 'flavors' },
  { label: 'Events', to: 'events' },
  { label: 'About Us', to: 'about' },
]

const flavorLinks = [
  { label: '🍈 Pink Guava Bliss', to: 'flavors' },
  { label: '🥭 Golden Mango Burst', to: 'flavors' },
  { label: '🍉 Watermelon Pop', to: 'flavors' },
]

const socials = [
  { id: 'social-instagram', label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { id: 'social-twitter', label: 'X (Twitter)', Icon: TwitterIcon, href: '#' },
  { id: 'social-facebook', label: 'Facebook', Icon: FacebookIcon, href: '#' },
  { id: 'social-youtube', label: 'YouTube', Icon: YoutubeIcon, href: '#' },
]

const linkProps = { smooth: true, duration: 600, offset: -72 }

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#071410] border-t border-white/5"
    >
      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link to="home" {...linkProps} className="cursor-pointer w-fit">
            <img
              src="/images/logo.jpg"
              alt="OrbSip Logo"
              className="h-10 w-auto rounded-lg object-contain"
            />
          </Link>
          <div>
            <p className="text-[#D4AF37] font-[Poppins] font-bold text-sm">
              Fresh, Fun, Just Orbs.
            </p>
            <p className="text-white/45 font-[Inter] text-xs mt-1">
              You've had juice. Now try it with a twist.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3" role="list" aria-label="Social media links">
            {socials.map(({ id, label, Icon, href }) => (
              <a
                key={id}
                id={id}
                href={href}
                role="listitem"
                aria-label={`Follow us on ${label}`}
                className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center
                  justify-center text-white/55 hover:text-[#D4AF37] hover:bg-white/15
                  hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-[Poppins] font-bold text-sm mb-5 uppercase tracking-wider">
            Quick Links
          </h4>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3 list-none">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    {...linkProps}
                    className="text-white/50 hover:text-[#D4AF37] text-sm font-[Inter]
                      cursor-pointer transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4AF37] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Flavors */}
        <div>
          <h4 className="text-white font-[Poppins] font-bold text-sm mb-5 uppercase tracking-wider">
            Flavors
          </h4>
          <ul className="flex flex-col gap-3 list-none">
            {flavorLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  {...linkProps}
                  className="text-white/50 hover:text-[#D4AF37] text-sm font-[Inter]
                    cursor-pointer transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-[#D4AF37] transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-[Poppins] font-bold text-sm mb-5 uppercase tracking-wider">
            Contact Us
          </h4>
          <address className="not-italic flex flex-col gap-4">
            <a
              id="footer-email"
              href="mailto:hello@orbsip.com"
              className="flex items-center gap-3 text-white/50 hover:text-[#D4AF37]
                text-sm font-[Inter] transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center
                group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                <Mail size={14} className="text-[#D4AF37]" aria-hidden="true" />
              </span>
              core.orbsip@gmail.com
            </a>
            <a
              id="footer-phone"
              href="tel:+919876543210"
              className="flex items-center gap-3 text-white/50 hover:text-[#D4AF37]
                text-sm font-[Inter] transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center
                group-hover:bg-[#D4AF37]/15 transition-colors duration-200">
                <Phone size={14} className="text-[#D4AF37]" aria-hidden="true" />
              </span>
              +91 9080618534
            </a>
          </address>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6
        flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 font-[Inter] text-xs text-center sm:text-left">
          © 2026 OrbSip Beverages Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {['Privacy Policy', 'Terms of Use', 'Food Safety'].map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-white/30 hover:text-[#D4AF37] font-[Inter] text-xs
                transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
