import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { animateScroll as scroll } from 'react-scroll'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="back-to-top-btn"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
      className={`fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full
        bg-[#D4AF37] text-[#0D2818] flex items-center justify-center
        shadow-[0_4px_24px_rgba(212,175,55,0.5)] hover:bg-[#E8C84A]
        hover:shadow-[0_6px_32px_rgba(212,175,55,0.7)]
        transition-all duration-400 hover:-translate-y-1
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ChevronUp size={22} aria-hidden="true" />
    </button>
  )
}
