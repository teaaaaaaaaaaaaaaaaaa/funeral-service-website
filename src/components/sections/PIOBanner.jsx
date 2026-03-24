import { Link } from 'react-router-dom'

export default function PIOBanner({ pioBanner }) {
  if (!pioBanner) return null

  return (
    <section className="bg-antic-marble border-y border-antic-gold/20" aria-label="PIO fond obaveštenje">
      <div className="section-container py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">

          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 border border-antic-gold/40 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-antic-gold" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="font-playfair text-xl md:text-2xl text-antic-cream mb-1">
              {pioBanner.title}
            </p>
            <p className="font-garamond text-base text-antic-light leading-relaxed max-w-3xl">
              {pioBanner.description}
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/vodic"
            className="flex-shrink-0 btn-outline-gold text-sm whitespace-nowrap"
          >
            {pioBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
