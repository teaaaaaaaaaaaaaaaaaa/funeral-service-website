import { Helmet } from 'react-helmet-async'
import Procedure from '../components/sections/Procedure'
import GuideContent from '../components/sections/GuideContent'
import ConsultationCTA from '../components/sections/ConsultationCTA'

export default function Guide({ data, phone }) {
  return (
    <>
      <Helmet>
        <title>Vodič — procedura i informacije | Pogrebno preduzeće Antić</title>
        <meta name="description" content="Kompletan vodič kroz pogrebnu proceduru u Srbiji. Koraci od konstatovanja smrti do sahrane, PIO fond naknada od 85.686 dinara, srpski pogrebni obicaji." />
      </Helmet>

      <div className="pt-28 md:pt-32" />
      <Procedure procedure={data.procedure} />
      <GuideContent guide={data.guide} />
      <ConsultationCTA phone={phone} phoneDisplay={data.business?.phoneDisplay} />
    </>
  )
}
