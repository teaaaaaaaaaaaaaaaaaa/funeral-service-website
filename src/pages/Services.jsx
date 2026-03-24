import { Helmet } from 'react-helmet-async'
import ServicesGrid from '../components/sections/ServicesGrid'
import ConsultationCTA from '../components/sections/ConsultationCTA'
import Sparkle from '../components/ui/Sparkle'

export default function Services({ data, phone }) {
  return (
    <>
      <Helmet>
        <title>Pogrebne usluge | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Kompletne pogrebne usluge u Beogradu: prevoz pokojnika, organizacija sahrane i kremacije, administracija, cveće i venci. Dostupni 0-24h." />
      </Helmet>

      {/* Page hero */}
      <section className="pt-40 pb-16 section-marble relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <span className="section-label">Naše usluge</span>
          <h1 className="font-playfair text-4xl md:text-5xl text-antic-cream font-semibold mb-4">
            Pogrebne usluge
          </h1>
          <p className="font-garamond text-xl text-antic-light max-w-2xl mx-auto">
            Preuzimamo sve — od prvog kontakta do poslednje formalnosti.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-antic-gold" />
            <Sparkle size={10} className="text-antic-gold" />
            <div className="h-px w-12 bg-antic-gold" />
          </div>
        </div>
      </section>

      <ServicesGrid services={data.services} />
      <ConsultationCTA phone={phone} phoneDisplay={data.business?.phoneDisplay} />
    </>
  )
}
