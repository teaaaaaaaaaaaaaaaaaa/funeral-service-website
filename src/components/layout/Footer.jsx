import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../utils/constants'

const SERVICES = [
  { label: 'Prijava smrti', href: '/usluge#prijava-smrti' },
  { label: 'Prevoz pokojnika', href: '/usluge#prevoz' },
  { label: 'Organizacija sahrane', href: '/usluge#organizacija' },
  { label: 'Kremacija', href: '/usluge#organizacija' },
  { label: 'Pogrebna oprema', href: '/oprema' },
]

export default function Footer({ data }) {
  if (!data) return null
  const { business, footer } = data

  return (
    <footer className="bg-antic-marble border-t border-antic-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="section-container py-16">
        {/* Main grid */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">

          {/* Col 1: Logo + tagline */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <img
              src="/images/logo-white.png"
              alt="Pogrebno preduzeće Antić"
              className="h-20 w-auto object-contain object-left"
              loading="lazy"
            />
            <p className="font-garamond text-base text-antic-light leading-relaxed">
              {footer?.tagline}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-antic-gold animate-pulse" />
              <span className="font-lato text-xs text-antic-gold tracking-wide">Dostupni 0-24h, 365 dana</span>
            </div>
          </div>

          {/* Col 2: Navigacija */}
          <nav aria-label="Footer navigacija" className="flex flex-col gap-3">
            <span className="section-label">Navigacija</span>
            <Link to="/" className="font-lato text-sm text-antic-light hover:text-antic-gold transition-colors">
              Početna
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-lato text-sm text-antic-light hover:text-antic-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Col 3: Usluge */}
          <nav aria-label="Usluge" className="flex flex-col gap-3">
            <span className="section-label">Naše usluge</span>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="font-lato text-sm text-antic-light hover:text-antic-gold transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </nav>

          {/* Col 4: Kontakt */}
          <address className="not-italic flex flex-col gap-3">
            <span className="section-label">Kontakt</span>

            {business?.phone && (
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="font-lato text-sm text-antic-gold hover:text-antic-gold-light transition-colors inline-flex items-center gap-2 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {business.phoneDisplay || business.phone}
              </a>
            )}

            {business?.email && (
              <a
                href={`mailto:${business.email}`}
                className="font-lato text-sm text-antic-light hover:text-antic-gold transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-antic-muted" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {business.email}
              </a>
            )}

            <span className="font-lato text-sm text-antic-light inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-antic-muted" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {business?.address}
            </span>

            <span className="font-lato text-sm text-antic-muted inline-flex items-center gap-2 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {business?.workingHours}
            </span>
          </address>
        </div>

        {/* SEO municipality links */}
        {footer?.municipalities?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-antic-border">
            <p className="font-lato text-xs text-antic-muted mb-3 tracking-widest uppercase">
              Pogrebne usluge po opštinama
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footer.municipalities.map((m) => (
                <Link
                  key={m}
                  to="/usluge"
                  className="font-lato text-xs text-antic-muted hover:text-antic-light transition-colors"
                >
                  Pogrebne usluge {m}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-antic-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-antic-muted">
            {footer?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
