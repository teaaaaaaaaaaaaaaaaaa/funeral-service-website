export default function CookieBanner({ consented, onAccept }) {
  if (consented) return null

  return (
    <div
      role="dialog"
      aria-label="Obaveštenje o kolačićima"
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-antic-dark border-t border-antic-border
        px-5 py-4 md:py-5
        flex flex-col sm:flex-row items-start sm:items-center
        gap-4 sm:gap-6
        shadow-2xl
      "
    >
      <p className="font-lato text-sm text-antic-light flex-1 leading-relaxed">
        Ovaj sajt koristi &bdquo;kolačiće&ldquo; kako bi vam obezbedio što kvalitetnije korisničko iskustvo
        prilikom pretraživanja sajta, kao i prikazivanja personalizovanog sadržaja.
      </p>
      <button
        onClick={onAccept}
        className="btn-gold text-sm whitespace-nowrap flex-shrink-0"
      >
        Prihvatam
      </button>
    </div>
  )
}
