import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/sections/ContactSection'
import Sparkle from '../components/ui/Sparkle'

export default function Contact({ data }) {
  return (
    <>
      <Helmet>
        <title>Kontakt | Pogrebno preduzeće Antić — 0-24h</title>
        <meta name="description" content="Kontaktirajte Pogrebno preduzeće Antić. Dežurna linija 0-24h, 365 dana. Zakažite konsultacije ili pošaljite upit." />
      </Helmet>

      {/* Page hero */}
      <section className="pt-40 pb-16 section-marble relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <span className="section-label">Kontakt</span>
          <h1 className="font-playfair text-4xl md:text-5xl text-antic-cream font-semibold mb-4">
            Tu smo za vas
          </h1>
          <p className="font-garamond text-xl text-antic-light max-w-xl mx-auto">
            Dostupni 00-24h, 365 dana u godini.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-antic-gold" />
            <Sparkle size={10} className="text-antic-gold" />
            <div className="h-px w-12 bg-antic-gold" />
          </div>
        </div>
      </section>

      <ContactSection business={data.business} />
    </>
  )
}
