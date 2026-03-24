import { Link } from 'react-router-dom'
import Sparkle from '../ui/Sparkle'

export default function Hero({ hero, phone }) {
  if (!hero) return null

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Dobrodošli"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/exterior-01.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-antic-black/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-antic-black via-transparent to-antic-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-10 max-w-4xl mx-auto pt-24">

        {/* Logo */}
        <img
          src="/images/logo-white.png"
          alt="Pogrebno preduzeće Antić"
          className="h-24 md:h-32 w-auto object-contain mb-8 animate-fade-in"
        />

        {/* Decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-antic-gold/60" />
          <Sparkle size={14} className="text-antic-gold" />
          <div className="h-px w-16 bg-antic-gold/60" />
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-antic-cream leading-tight mb-6 animate-fade-in-up">
          {hero.title}
        </h1>

        <p
          className="font-garamond text-xl md:text-2xl text-antic-light/90 mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link to="/kontakt" className="btn-gold">
            {hero.cta}
          </Link>
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn-outline-gold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              {hero.ctaPhone}
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-antic-gold/50 animate-bounce" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Decorative corner sparkles */}
      <Sparkle size={36} className="absolute bottom-10 right-10 text-antic-gold/15 hidden md:block" />
      <Sparkle size={20} className="absolute top-28 left-10 text-antic-gold/10 hidden md:block" />
    </section>
  )
}
