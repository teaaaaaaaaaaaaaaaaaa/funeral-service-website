export default function CookieBanner({ consented, onAccept }) {
  if (consented) return null

  return (
    <div
      role="dialog"
      aria-label="Obaveštenje o kolačićima"
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-sedef-dark border-t border-sedef-mid
        px-4 py-4 md:py-5
        flex flex-col sm:flex-row items-start sm:items-center
        gap-4 sm:gap-6
        shadow-2xl
      "
    >
      <p className="font-lato text-sm text-sedef-light flex-1 leading-relaxed">
        Ovaj sajt koristi &bdquo;kolačiće&ldquo; kako bi vam obezbedio što kvalitetnije korisničko iskustvo
        prilikom pretraživanja sajta, kao i prikazivanja personalizovanog sadržaja.
      </p>
      <button
        onClick={onAccept}
        className="
          font-lato text-sm font-bold
          bg-sedef-mid border border-sedef-light
          text-sedef-lightest
          px-6 py-2.5
          transition-all duration-200
          hover:bg-sedef-light hover:text-sedef-darkest
          whitespace-nowrap flex-shrink-0
        "
      >
        Prihvatam
      </button>
    </div>
  )
}
