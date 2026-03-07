import SectionHeading from '../ui/SectionHeading'
import { useIntersection } from '../../hooks/useIntersection'

export default function Contact({ contact }) {
  const { ref, visible } = useIntersection()

  if (!contact) return null

  return (
    <section
      id="kontakt"
      className="section-padding bg-sedef-dark"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <SectionHeading
          title={contact.title || 'Kontakt'}
          subtitle="Sva pitanja i rezervacije primamo telefonom"
          id="contact-heading"
        />

        <div
          ref={ref}
          className={`
            max-w-lg mx-auto text-center flex flex-col items-center gap-8
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted">
              Telefon za rezervacije
            </span>
            <a
              href={`tel:${(contact.phone || '').replace(/\s/g, '')}`}
              className="font-playfair text-4xl md:text-5xl text-sedef-lightest hover:text-sedef-light transition-colors"
            >
              {contact.phoneDisplay || contact.phone}
            </a>
            <span className="font-lato text-sm text-sedef-muted">
              Rezervacije: {contact.reservationHours}
            </span>
            <span className="font-lato text-sm text-sedef-muted">
              Radno vreme: {contact.workingHours}
            </span>
          </div>

          <div className="w-12 h-px bg-sedef-mid/50" aria-hidden="true" />

          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-garamond text-2xl text-sedef-light hover:text-sedef-lightest transition-colors"
            >
              {contact.email}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
