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
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-7.072.144-9.169 0C4.454 16.72 3.978 15.33 3.95 12c.028-3.34.509-4.72 3.322-4.892 2.097-.144 7.067-.144 9.169 0 2.813.172 3.294 1.552 3.322 4.892-.028 3.34-.514 4.72-3.322 4.892zm-5.441-7.5c-.55 0-.996.448-.996 1s.446 1 .996 1c.55 0 .996-.448.996-1s-.446-1-.996-1zm-2.5 0c-.55 0-.996.448-.996 1s.446 1 .996 1c.55 0 .996-.448.996-1s-.446-1-.996-1zm5 0c-.55 0-.996.448-.996 1s.446 1 .996 1c.55 0 .996-.448.996-1s-.446-1-.996-1z"/>
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

        {/* Google Maps */}
        <div className="mt-14">
          <span className="section-label">Lokacija — Groblje Orlovača</span>
          <div className="mt-4 border border-antic-border overflow-hidden" style={{ height: '380px' }}>
            <iframe
              title="Groblje Orlovača — Google Maps"
              src="https://maps.google.com/maps?q=Groblje+Orlova%C4%8Da+Beograd&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) invert(3%) contrast(95%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa — Groblje Orlovača, Beograd"
            />
          </div>
          <p className="font-lato text-sm text-antic-muted mt-3">
            Groblje Orlovača, Beograd —
            <a
              href="https://www.google.com/maps/search/?api=1&query=Groblje+Orlova%C4%8Da+Beograd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antic-gold hover:text-antic-gold-light transition-colors ml-1"
            >
              Otvori u Google Maps →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
