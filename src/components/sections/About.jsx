import SectionHeading from '../ui/SectionHeading'
import { useIntersection } from '../../hooks/useIntersection'

const ICON_MAP = {
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  chef: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v5a4 4 0 004 4h0V3M5 3v3a2 2 0 002 2M9 3v3a2 2 0 01-2 2M7 12v9M17 3c-1.5 0-3 1.5-3 4s1.5 4 3 4h0c1.5 0 3-1.5 3-4s-1.5-4-3-4zM17 11v10" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export default function About({ about }) {
  const { ref, visible } = useIntersection()

  if (!about) return null

  return (
    <section
      id="o-nama"
      className="section-padding bg-sedef-darkest"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <SectionHeading title={about.title} id="about-heading" />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Text */}
          <div>
            <p className="font-garamond text-xl md:text-2xl text-sedef-light leading-relaxed">
              {about.text}
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-6">
            {(about.highlights || []).map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-6 border border-sedef-mid/40 p-6 md:p-7 bg-sedef-dark/30"
              >
                <div className="text-sedef-light flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  {ICON_MAP[item.icon] || null}
                </div>
                <span className="font-playfair text-xl md:text-2xl text-sedef-lightest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
