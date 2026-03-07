import HeroSlider from '../ui/HeroSlider'

export default function Hero({ hero, phone }) {
  if (!hero) return null

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Hero sekcija"
    >
      {/* Background image slider */}
      <HeroSlider images={hero.images} />

      {/* Content */}
      <div className="relative z-10 section-container flex flex-col items-center gap-6 pt-24 pb-16">
        {/* Decorative line */}
        <div className="w-12 h-px bg-sedef-light/50 mb-2" aria-hidden="true" />

        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-sedef-lightest leading-tight max-w-3xl">
          {hero.title}
        </h1>

        <p className="font-garamond text-xl md:text-2xl text-sedef-light max-w-xl leading-relaxed">
          {hero.subtitle}
        </p>

        {/* Decorative line */}
        <div className="w-12 h-px bg-sedef-light/50 mt-2" aria-hidden="true" />

        {/* CTA */}
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="btn-primary mt-4 text-base tracking-widest uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            {hero.cta}
          </a>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-sedef-light/50" aria-hidden="true">
        <span className="font-lato text-xs tracking-widest uppercase">Skroluj</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
