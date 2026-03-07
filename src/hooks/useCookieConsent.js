import { useState } from 'react'

const STORAGE_KEY = 'sedef_cookie_consent'

export function useCookieConsent() {
  const [consented, setConsented] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  })

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setConsented(true)
  }

  return { consented, accept }
}
