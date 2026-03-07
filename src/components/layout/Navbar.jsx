import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar({ phone }) {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-500
        ${scrolled
          ? 'bg-sedef-darkest/95 backdrop-blur-sm border-b border-sedef-mid/30 py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Restoran Sedef – početna stranica">
          <img
            src="/images/logo-horizontal-white.png"
            alt="Restoran Sedef"
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'}`}
            width="96"
            height="48"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigacija">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                font-lato text-sm tracking-widest uppercase
                text-sedef-light
                transition-colors duration-200
                hover:text-sedef-lightest
                relative after:absolute after:bottom-0 after:left-0
                after:w-0 after:h-px after:bg-sedef-lightest
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="btn-call text-sm tracking-wide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              Rezervacija
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-sedef-lightest p-2"
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

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-sedef-darkest/98 backdrop-blur-sm border-t border-sedef-mid/30 px-4 py-6 flex flex-col gap-5"
          aria-label="Mobilna navigacija"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-lato text-base tracking-widest uppercase text-sedef-light hover:text-sedef-lightest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
