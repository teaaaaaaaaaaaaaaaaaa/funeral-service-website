import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import FaqItem from '../ui/FaqItem'

export default function FAQ({ faq }) {
  const [openId, setOpenId] = useState(null)

  if (!faq?.length) return null

  return (
    <section id="faq" className="section-padding section-marble">
      <div className="section-container">
        <SectionHeading
          label="Često postavljana pitanja"
          title="Odgovori na vaša pitanja"
          subtitle="Ne oklevajte da nas pozovete — ovde su odgovori na najčešća pitanja."
        />

        <dl className="max-w-3xl mx-auto border-t border-antic-border">
          {faq.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}
