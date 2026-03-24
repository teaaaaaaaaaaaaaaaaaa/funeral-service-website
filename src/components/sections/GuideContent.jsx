import { useIntersection } from '../../hooks/useIntersection'
import SectionHeading from '../ui/SectionHeading'

function DocumentList({ docs }) {
  return (
    <ul className="space-y-2.5">
      {docs.map((doc, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-antic-gold mt-1 flex-shrink-0 text-xs">✦</span>
          <span className="font-garamond text-base text-antic-light">{doc}</span>
        </li>
      ))}
    </ul>
  )
}

function CustomCard({ custom, index }) {
  const { ref, visible } = useIntersection()
  return (
    <div
      ref={ref}
      className={`card-dark animate-on-scroll ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-playfair text-xl text-antic-cream mb-3">{custom.title}</h3>
      <p className="font-garamond text-base text-antic-light leading-relaxed">{custom.description}</p>
    </div>
  )
}

export default function GuideContent({ guide }) {
  if (!guide) return null

  const { pioInfo, customs } = guide

  return (
    <>
      {/* PIO Info section */}
      {pioInfo && (
        <section id="pio-fond" className="section-padding section-marble">
          <div className="section-container">
            <SectionHeading
              label="Finansijska pomoć"
              title={pioInfo.title}
              subtitle={pioInfo.description}
            />

            <div className="grid md:grid-cols-2 gap-12 mt-10">
              {/* Documents */}
              <div className="card-dark">
                <h3 className="font-playfair text-xl text-antic-cream mb-5 flex items-center gap-3">
                  <span className="text-antic-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </span>
                  Potrebna dokumenta
                </h3>
                <DocumentList docs={pioInfo.documents} />
              </div>

              {/* Amount highlight */}
              <div className="flex flex-col justify-center text-center md:text-left gap-5">
                <div className="inline-flex flex-col items-center md:items-start">
                  <span className="section-label">Iznos naknade</span>
                  <div className="font-playfair text-5xl md:text-6xl text-antic-gold font-semibold leading-none">
                    {pioInfo.amount}
                  </div>
                  <div className="font-lato text-sm text-antic-muted mt-1 tracking-wide">dinara</div>
                </div>
                <p className="font-garamond text-lg text-antic-light leading-relaxed">
                  {pioInfo.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Customs */}
      {customs?.length > 0 && (
        <section id="obicaji" className="section-padding bg-antic-black">
          <div className="section-container">
            <SectionHeading
              label="Tradicija i obicaji"
              title="Srpski pogrebni obicaji"
              subtitle="Poštujemo tradiciju i pomažemo vam da organizujete ispraćaj u skladu s vašim verskim i kulturnim potrebama."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {customs.map((c, i) => (
                <CustomCard key={i} custom={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
