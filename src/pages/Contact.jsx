import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/sections/ContactSection'

export default function Contact({ data }) {
  return (
    <>
      <Helmet>
        <title>Kontakt | Pogrebno preduzeće Antić — 0-24h</title>
        <meta name="description" content="Kontaktirajte Pogrebno preduzeće Antić. Dežurna linija 0-24h, 365 dana. Zakažite konsultacije ili pošaljite upit." />
      </Helmet>

      <div className="pt-28 md:pt-32" />
      <ContactSection business={data.business} />
    </>
  )
}
