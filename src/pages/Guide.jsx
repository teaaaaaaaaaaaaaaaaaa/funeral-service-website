import { Helmet } from 'react-helmet-async'
import Procedure from '../components/sections/Procedure'
import GuideContent from '../components/sections/GuideContent'
import ConsultationCTA from '../components/sections/ConsultationCTA'
import Sparkle from '../components/ui/Sparkle'

export default function Guide({ data, phone }) {
  return (
    <>
      <Helmet>
        <title>Vodič — procedura i informacije | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Kompletan vodič kroz pogrebnu proceduru u Srbiji. Koraci od konstatovanja smrti do sahrane, PIO fond naknada od 85.686 dinara, srpski pogrebni obicaji." />
      </Helmet>

      {/* Page hero */}
      <section className="pt-40 pb-16 section-marble relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <span className="section-label">Vodič i informacije</span>
          <h1 className="font-playfair text-4xl md:text-5xl text-antic-cream font-semibold mb-4">
            Korak po korak
          </h1>
          <p className="font-garamond text-xl text-antic-light max-w-2xl mx-auto">
            Sve što trebate znati u ovim teškim trenucima — objašnjeno jasno i bez žurbe.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-antic-gold" />
            <Sparkle size={10} className="text-antic-gold" />
            <div className="h-px w-12 bg-antic-gold" />
          </div>
        </div>
      </section>

      <Procedure procedure={data.procedure} />
      <GuideContent guide={data.guide} />
      <ConsultationCTA phone={phone} phoneDisplay={data.business?.phoneDisplay} />
    </>
  )
}
