import { Helmet } from 'react-helmet-async'
import ServicesGrid from '../components/sections/ServicesGrid'
import ConsultationCTA from '../components/sections/ConsultationCTA'

export default function Services({ data, phone }) {
  return (
    <>
      <Helmet>
        <title>Pogrebne usluge | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Kompletne pogrebne usluge u Beogradu: prevoz pokojnika, organizacija sahrane i kremacije, administracija, cveće i venci. Dostupni 0-24h." />
      </Helmet>

      <div className="pt-28 md:pt-32" />
      <ServicesGrid services={data.services} />
      <ConsultationCTA phone={phone} phoneDisplay={data.business?.phoneDisplay} />
    </>
  )
}
