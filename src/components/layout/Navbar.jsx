import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar({ phone, phoneDisplay }) {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-500
        ${scrolled
          ? 'bg-antic-black/96 backdrop-blur-sm border-b border-antic-border py-3'
          : 'bg-gradient-to-b from-antic-black/80 to-transparent py-5'
        }
      `}
    >
      <div className="section-container flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" aria-label="Pogrebno preduzeće Antić – početna stranica" className="flex-shrink-0">
          <img
            src="/images/logo-horizontal-white.png"
            alt="Pogrebno preduzeće Antić"
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-9 md:h-10' : 'h-12 md:h-14'}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigacija">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? 'text-antic-gold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone badge — desktop */}
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="hidden md:inline-flex items-center gap-2.5 px-4 py-2
                       border border-antic-gold/60 text-antic-gold
                       font-lato text-sm tracking-wide
                       transition-all duration-300
                       hover:bg-antic-gold hover:text-antic-black flex-shrink-0"
            aria-label={`Pozovite nas: ${phoneDisplay}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            <span className="flex flex-col leading-none">
              <span className="text-xs text-antic-gold/70 font-normal">Dežurna služba</span>
              <span>{phoneDisplay || phone}</span>
            </span>
          </a>
        )}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-antic-cream p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — full overlay */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          bg-antic-black/98 backdrop-blur-sm border-t border-antic-border
        `}
        aria-label="Mobilna navigacija"
      >
        <div className="section-container py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-lato text-xl tracking-widest uppercase text-antic-light hover:text-antic-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="mt-4 btn-gold self-start"
              onClick={() => setMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              Dežurna 0-24h
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
