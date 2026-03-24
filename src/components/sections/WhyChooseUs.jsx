import { useIntersection } from '../../hooks/useIntersection'
import SectionHeading from '../ui/SectionHeading'

const ICONS = {
  experience: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  complete: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  discreet: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  transparent: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
}

function Card({ item, delay }) {
  const { ref, visible } = useIntersection()

  return (
    <div
      ref={ref}
      className={`card-dark flex flex-col gap-5 animate-on-scroll ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-antic-gold">
        {ICONS[item.icon] || ICONS.experience}
      </div>
      <div>
        <h3 className="font-playfair text-xl text-antic-cream mb-2">{item.title}</h3>
        <p className="font-garamond text-base text-antic-light leading-relaxed">{item.text}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs({ whyUs }) {
  if (!whyUs?.length) return null

  return (
    <section id="zasto-mi" className="section-padding bg-antic-black">
      <div className="section-container">
        <SectionHeading
          label="Zašto izabrati nas"
          title="Posvećeni svakom detalju"
          subtitle="Naš tim je uz vas u svakom koraku — od prvog poziva do završnih formalnosti."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => (
            <Card key={item.icon} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
