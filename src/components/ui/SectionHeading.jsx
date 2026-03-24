import Sparkle from './Sparkle'

export default function SectionHeading({ label, title, subtitle, centered = true }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-antic-cream leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-garamond text-xl text-antic-light mt-4 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`flex items-center gap-3 mt-6 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-antic-gold" />
        <Sparkle size={15} className="text-antic-gold" />
        <div className="h-px w-12 bg-antic-gold" />
      </div>
    </div>
  )
}
