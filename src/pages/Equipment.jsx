import { Helmet } from 'react-helmet-async'
import EquipmentCatalog from '../components/sections/EquipmentCatalog'
import Sparkle from '../components/ui/Sparkle'

export default function Equipment({ data }) {
  return (
    <>
      <Helmet>
        <title>Pogrebna oprema — katalog | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Katalog pogrebne opreme: sanduci, krstovi, cveće i venci, anđeli. Visokokvalitetna oprema za dostojanstven ispraćaj." />
      </Helmet>

      {/* Page hero */}
      <section className="pt-40 pb-16 section-marble relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <span className="section-label">Oprema</span>
          <h1 className="font-playfair text-4xl md:text-5xl text-antic-cream font-semibold mb-4">
            Pogrebna oprema
          </h1>
          <p className="font-garamond text-xl text-antic-light max-w-2xl mx-auto">
            Pažljivo odabrana oprema za dostojanstven i lep ispraćaj.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-antic-gold" />
            <Sparkle size={10} className="text-antic-gold" />
            <div className="h-px w-12 bg-antic-gold" />
          </div>
        </div>
      </section>

      <EquipmentCatalog equipment={data.equipment} />
    </>
  )
}
