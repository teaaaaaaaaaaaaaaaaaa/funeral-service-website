import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useContent } from './hooks/useContent'
import { useCookieConsent } from './hooks/useCookieConsent'
import { buildSchema } from './utils/schema'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import StickyCallButton from './components/ui/StickyCallButton'
import CookieBanner from './components/ui/CookieBanner'

import Home from './pages/Home'
import Services from './pages/Services'
import Equipment from './pages/Equipment'
import Guide from './pages/Guide'
import Contact from './pages/Contact'

export default function App() {
  const { data, loading } = useContent()
  const { consented, accept } = useCookieConsent()

  if (loading) {
    return (
      <div className="min-h-screen bg-antic-black flex items-center justify-center">
        <div className="w-8 h-8 border border-antic-border border-t-antic-gold rounded-full animate-spin" aria-label="Učitavanje..." />
      </div>
    )
  }

  if (!data) return null

  const schemas = buildSchema(data.business, data.faq)
  const phone = data.business?.phone

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <title>{data.seo?.title}</title>
        <meta name="description" content={data.seo?.description} />
        <link rel="canonical" href={data.seo?.canonical} />
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar phone={phone} phoneDisplay={data.business?.phoneDisplay} />

      <main>
        <Routes>
          <Route path="/" element={<Home data={data} phone={phone} />} />
          <Route path="/usluge" element={<Services data={data} phone={phone} />} />
          <Route path="/oprema" element={<Equipment data={data} />} />
          <Route path="/vodic" element={<Guide data={data} phone={phone} />} />
          <Route path="/kontakt" element={<Contact data={data} />} />
        </Routes>
      </main>

      <Footer data={data} />

      <StickyCallButton phone={phone} />
      <CookieBanner consented={consented} onAccept={accept} />
    </BrowserRouter>
  )
}
