export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-16">
      <h2 className={`font-playfair text-3xl md:text-4xl font-semibold mb-4 ${light ? 'text-sedef-darkest' : 'text-sedef-lightest'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-garamond text-lg ${light ? 'text-sedef-dark' : 'text-sedef-light'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-px mx-auto mt-5 ${light ? 'bg-sedef-mid' : 'bg-sedef-mid'}`} />
    </div>
  )
}
