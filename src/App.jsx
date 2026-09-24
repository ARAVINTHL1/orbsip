import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatsInside from './components/WhatsInside'
import BrandValues from './components/BrandValues'
import Flavors from './components/Flavors'
import Events from './components/Events'
import About from './components/About'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className={loading ? 'home-page is-loading' : 'home-page is-ready'}>
      {loading && <SplashScreen onDone={() => setLoading(false)} />}

      <Navbar />

      <main>
        <Hero />
        <WhatsInside />
        <BrandValues />
        <Flavors />
        <Events />
        <About />
        <Reviews />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
