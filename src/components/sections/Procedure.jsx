import { useIntersection } from '../../hooks/useIntersection'
import SectionHeading from '../ui/SectionHeading'

function Step({ step, index }) {
  const { ref, visible } = useIntersection()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? 'visible' : ''} flex gap-5 md:gap-8`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Step circle */}
      <div className="flex flex-col items-center">
        <div className="step-circle">
          {step.step}
        </div>
        {index < 8 && (
          <div className="w-px flex-1 bg-gradient-to-b from-antic-gold/40 to-transparent mt-2 min-h-[2rem]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 pt-1.5 flex-1">
        <h3 className="font-playfair text-lg md:text-xl text-antic-cream mb-2">{step.title}</h3>
        <p className="font-garamond text-base text-antic-light leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default function Procedure({ procedure }) {
  if (!procedure?.length) return null

  return (
    <section id="procedura" className="section-padding section-marble">
      <div className="section-container">
        <SectionHeading
          label="Procedura"
          title="9 koraka do dostojanstvenog ispraćaja"
          subtitle="Vodimo vas kroz svaki korak kako biste mogli da se posvetite porodici."
        />

        <div className="max-w-2xl mx-auto">
          {procedure.map((step, i) => (
            <Step key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
