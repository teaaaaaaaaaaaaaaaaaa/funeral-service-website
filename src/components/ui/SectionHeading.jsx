export default function SectionHeading({ label, title, subtitle, centered = true }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-antic-cream leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-garamond text-lg text-antic-light mt-4 max-w-2xl leading-relaxed
                      ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
      <div className={`flex items-center gap-3 mt-6 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-antic-gold" />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M5 0L6.2 3.8H10L6.9 6.2L8.1 10L5 7.6L1.9 10L3.1 6.2L0 3.8H3.8Z" fill="#C9A96E"/>
        </svg>
        <div className="h-px w-12 bg-antic-gold" />
      </div>
    </div>
  )
}
