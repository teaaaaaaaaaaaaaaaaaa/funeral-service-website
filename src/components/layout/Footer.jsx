import { NAV_LINKS } from '../../utils/constants'

export default function Footer({ footer }) {
  if (!footer) return null

  return (
    <footer className="bg-sedef-darkest border-t border-sedef-mid/20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo-white.png"
              alt="Restoran Sedef"
              className="h-32 w-auto object-contain object-left"
              width="256"
              height="128"
              loading="lazy"
            />
            <p className="font-garamond text-lg md:text-xl text-sedef-light leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Col 2: Nav links */}
          <nav aria-label="Footer navigacija" className="flex flex-col gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted mb-2">
              Navigacija
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-lato text-base text-sedef-light hover:text-sedef-lightest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Col 3: Contact info */}
          <address className="not-italic flex flex-col gap-3">
            <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted mb-2">
              Kontakt
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${(footer.phone || '').replace(/\s/g, '')}`}
                className="font-lato text-base text-sedef-light hover:text-sedef-lightest transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-sedef-muted" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {footer.phoneDisplay || footer.phone}
              </a>
              <a
                href={`mailto:${footer.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato text-base text-sedef-light hover:text-sedef-lightest transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-sedef-muted" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {footer.email}
              </a>
              <a
                href={footer.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato text-base text-sedef-light hover:text-sedef-lightest transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0 text-sedef-muted" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {footer.address}
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="font-lato text-sm text-sedef-muted inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Radno vreme: {footer.workingHours}
              </span>
              <span className="font-lato text-sm text-sedef-muted inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Rezervacije: {footer.reservationHours}
              </span>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-sedef-mid/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-sedef-muted">
            &copy; {footer.copyright}
          </p>
          <a
            href="https://ajsasoft.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-sm text-sedef-muted hover:text-sedef-light transition-colors"
          >
            Dizajn i izrada AjsaSoft
          </a>
        </div>
      </div>
    </footer>
  )
}
