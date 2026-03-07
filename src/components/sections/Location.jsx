import SectionHeading from '../ui/SectionHeading'
import { useIntersection } from '../../hooks/useIntersection'

const LOCATION_ICONS = {
  door: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  ),
  parking: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
}

export default function Location({ location }) {
  const { ref, visible } = useIntersection()

  if (!location) return null

  return (
    <section
      id="lokacija"
      className="bg-sedef-darkest"
      aria-labelledby="location-heading"
    >
      <div className="section-container pt-20 pb-10">
        <SectionHeading title={location.title} id="location-heading" />

        <div
          ref={ref}
          className={`
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Info bar */}
          <div className="border border-sedef-mid/30 bg-sedef-dark/30 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              {/* Address */}
              <address className="not-italic flex items-center gap-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-sedef-muted flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a
                  href={location.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-playfair text-xl text-sedef-lightest hover:text-sedef-light transition-colors"
                >
                  {location.address}
                </a>
              </address>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-sedef-mid/40" aria-hidden="true" />

              {/* Highlights */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {(location.highlights || []).map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <span className="text-sedef-muted flex-shrink-0">
                      {LOCATION_ICONS[item.icon] || null}
                    </span>
                    <span className="font-garamond text-lg text-sedef-light">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width map */}
      <div className="relative w-full">
        <iframe
          src={location.mapEmbedUrl}
          title="Lokacija Restoran Sedef na Google mapi"
          width="100%"
          height="450"
          className="w-full border-0"
          style={{ filter: 'grayscale(80%) invert(90%) contrast(80%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={location.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-call text-sm absolute top-4 right-4 z-10"
        >
          Otvori u Google Maps
        </a>
      </div>

      {/* Thin strip below map */}
      <div className="h-3 bg-sedef-darkest" aria-hidden="true" />
    </section>
  )
}
