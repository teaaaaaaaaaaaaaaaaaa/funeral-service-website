import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import FaqItem from '../ui/FaqItem'
import { useIntersection } from '../../hooks/useIntersection'

export default function FAQ({ faq }) {
  const [openId, setOpenId] = useState(null)
  const { ref, visible } = useIntersection()

  if (!faq || faq.length === 0) return null

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="faq"
      className="section-padding bg-sedef-darkest border-b border-sedef-mid/20"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <SectionHeading
          title="Česta pitanja"
          subtitle="Odgovori na najčešća pitanja o organizaciji parastosa"
          id="faq-heading"
        />

        <dl
          ref={ref}
          className={`
            max-w-2xl mx-auto
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {faq.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}
