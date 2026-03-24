import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import PIOBanner from '../components/sections/PIOBanner'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Procedure from '../components/sections/Procedure'
import FAQ from '../components/sections/FAQ'
import ConsultationCTA from '../components/sections/ConsultationCTA'

export default function Home({ data, phone }) {
  return (
    <>
      <Helmet>
        <title>{data.seo?.title}</title>
        <meta name="description" content={data.seo?.description} />
      </Helmet>

      <Hero hero={data.hero} phone={phone} />
      <PIOBanner pioBanner={data.pioBanner} />
      <WhyChooseUs whyUs={data.whyUs} />
      <Procedure procedure={data.procedure} />
      <FAQ faq={data.faq} />
      <ConsultationCTA
        phone={phone}
        phoneDisplay={data.business?.phoneDisplay}
      />
    </>
  )
}
