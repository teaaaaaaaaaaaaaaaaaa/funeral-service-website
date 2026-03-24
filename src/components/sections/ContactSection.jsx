import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection({ business }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder — integrate with backend/email service later
    setSent(true)
  }

  return (
    <section id="kontakt" className="section-padding bg-antic-black">
      <div className="section-container">
        <SectionHeading
          label="Kontakt"
          title="Dostupni 0-24h za vas"
          subtitle="Pošaljite nam upit ili nas pozovite — odgovorićemo odmah."
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Form */}
          <div className="card-dark">
            <h3 className="font-playfair text-xl text-antic-cream mb-6">Pošaljite upit</h3>
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-antic-gold" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-garamond text-lg text-antic-cream">Hvala! Javićemo vam se što pre.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="font-lato text-xs text-antic-muted tracking-widest uppercase block mb-2">
                    Vaše ime
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-antic-marble border border-antic-border text-antic-cream
                               font-garamond px-4 py-3 outline-none
                               focus:border-antic-gold/60 transition-colors placeholder-antic-muted"
                    placeholder="Ime i prezime"
                  />
                </div>
                <div>
                  <label htmlFor="tel" className="font-lato text-xs text-antic-muted tracking-widest uppercase block mb-2">
                    Broj telefona
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-antic-marble border border-antic-border text-antic-cream
                               font-garamond px-4 py-3 outline-none
                               focus:border-antic-gold/60 transition-colors placeholder-antic-muted"
                    placeholder="060 123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-lato text-xs text-antic-muted tracking-widest uppercase block mb-2">
                    Kratka poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-antic-marble border border-antic-border text-antic-cream
                               font-garamond px-4 py-3 outline-none resize-none
                               focus:border-antic-gold/60 transition-colors placeholder-antic-muted"
                    placeholder="Kako vam možemo pomoći?"
                  />
                </div>
                <button type="submit" className="btn-gold self-start mt-1">
                  Pošaljite upit
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">

            {/* Phone — prominent */}
            {business?.phone && (
              <div>
                <span className="section-label">Dežurna linija</span>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="font-playfair text-4xl md:text-5xl text-antic-gold hover:text-antic-gold-light transition-colors block leading-tight"
                >
                  {business.phoneDisplay || business.phone}
                </a>
                <p className="font-lato text-sm text-antic-muted mt-2 tracking-wide">{business.workingHours}</p>
              </div>
            )}

            {/* Quick contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {business?.phone && (
                <a
                  href={`https://wa.me/${business.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5
                             bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366]
                             font-lato text-sm tracking-wide
                             hover:bg-[#25D366]/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              )}
              {business?.phone && (
                <a
                  href={`viber://chat?number=${business.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5
                             bg-[#7360F2]/10 border border-[#7360F2]/40 text-[#9d8ef5]
                             font-lato text-sm tracking-wide
                             hover:bg-[#7360F2]/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.03 4.451.371 7.34.287 9.977c-.083 2.636-.187 7.57 4.625 8.903v2.05s-.031.809.505.97c.645.19 1.02-.411 1.632-1.098.337-.359.8-.89 1.149-1.273 3.165.266 5.6-.342 5.875-.431.639-.206 4.254-.67 4.844-5.467.606-4.949-.295-8.076-1.976-9.49h-.001c-.47-.4-2.331-1.758-5.542-1.138zm.12 1.474c2.717-.485 4.296.595 4.676.931 1.39 1.161 2.109 3.899 1.59 8.147-.49 4.007-3.441 4.276-3.975 4.445-.232.075-2.437.623-5.213.437 0 0-2.068 2.496-2.713 3.142-.101.102-.217.144-.295.124-.11-.028-.139-.16-.137-.353l.022-3.062s-.001-.015-.011-.022c-4.084-1.133-3.852-5.4-3.784-7.716.066-2.315.629-4.795 2.32-6.485 1.952-1.828 5.494-1.773 7.52-1.59zm-1.03 2.96c-.155 0-.315.057-.435.174a.582.582 0 000 .839l.3.297a2.66 2.66 0 01.013 3.774l-.036.037.033.032c.29.285.58.57.87.856.293.288.584.579.876.868l.036.036.04-.04a2.66 2.66 0 013.782.003l.298.293c.237.234.237.612 0 .846a.606.606 0 01-.437.175.606.606 0 01-.438-.175l-.295-.292a1.444 1.444 0 00-2.023-.003l-.016.016.019.018c-.288-.284-.576-.568-.865-.852l.029-.026a1.445 1.445 0 00.001-2.033l-.298-.298a.606.606 0 01-.175-.43c0-.164.063-.319.175-.432l.296-.294.001-.002a1.444 1.444 0 000-2.028l-.3-.297a.614.614 0 00-.432-.183zM9.9 5.72a4.022 4.022 0 00-4.022 4.021.584.584 0 001.168 0 2.855 2.855 0 012.854-2.854.584.584 0 000-1.167zm0 2.1a1.921 1.921 0 00-1.922 1.922.584.584 0 001.168 0 .752.752 0 01.754-.755.584.584 0 000-1.167z"/>
                  </svg>
                  Viber
                </a>
              )}
            </div>

            {/* Email */}
            {business?.email && (
              <div>
                <span className="section-label">Email</span>
                <a
                  href={`mailto:${business.email}`}
                  className="font-garamond text-lg text-antic-light hover:text-antic-gold transition-colors"
                >
                  {business.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
