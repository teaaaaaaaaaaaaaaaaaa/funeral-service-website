import { Helmet } from 'react-helmet-async'
import { useContent } from './hooks/useContent'
import { useCookieConsent } from './hooks/useCookieConsent'
import { buildSchema } from './utils/schema'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Location from './components/sections/Location'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import StickyCallButton from './components/ui/StickyCallButton'
import CookieBanner from './components/ui/CookieBanner'

export default function App() {
  const { data, loading } = useContent()
  const { consented, accept } = useCookieConsent()

  if (loading) {
    return (
      <div className="min-h-screen bg-sedef-darkest flex items-center justify-center">
        <div className="w-8 h-8 border border-sedef-mid border-t-sedef-light rounded-full animate-spin" aria-label="Učitavanje..." />
      </div>
    )
  }

  if (!data) return null

  const schemas = buildSchema(data.contact, data.location)
  const phone = data.contact?.phone

  return (
    <>
      <Helmet>
        <title>{data.seo?.title}</title>
        <meta name="description" content={data.seo?.description} />
        <link rel="canonical" href={data.seo?.canonical} />

        {/* Schema.org */}
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar phone={phone} />

      <main>
        <Hero hero={data.hero} phone={phone} />
        <About about={data.about} />
        <Menu menus={data.menus} extras={data.extras} />
        <Location location={data.location} />
        <FAQ faq={data.faq} />
        <Contact contact={data.contact} />
      </main>

      <Footer footer={data.footer} />

      <StickyCallButton phone={phone} />
      <CookieBanner consented={consented} onAccept={accept} />
    </>
  )
}
