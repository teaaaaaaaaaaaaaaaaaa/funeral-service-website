import { Link } from 'react-router-dom'
import Sparkle from '../ui/Sparkle'

export default function ConsultationCTA({ phone, phoneDisplay }) {
  return (
    <section className="section-marble relative overflow-hidden py-20 md:py-24">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-antic-black via-antic-marble to-antic-black opacity-70" />

      <div className="relative section-container text-center">
        <Sparkle size={28} className="text-antic-gold/30 mx-auto mb-6" />

        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-antic-cream mb-5 font-semibold">
          Zakažite Konsultacije
        </h2>
        <p className="font-garamond text-xl text-antic-light mb-10 max-w-xl mx-auto leading-relaxed">
          Naš tim je dostupan 24 sata dnevno, 365 dana u godini. Pozovite nas ili zakažite sastanak.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/kontakt" className="btn-gold">
            Zakažite Konsultacije
          </Link>
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn-outline-gold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              {phoneDisplay || phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
