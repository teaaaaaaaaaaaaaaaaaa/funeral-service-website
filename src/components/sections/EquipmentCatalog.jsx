import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from './ProductCard'

export default function EquipmentCatalog({ equipment }) {
  const categories = equipment?.categories || []
  const items = equipment?.items || []
  const [active, setActive] = useState(categories[0] || '')

  const filtered = items.filter(item => item.category === active)

  return (
    <section id="oprema" className="section-padding bg-antic-black">
      <div className="section-container">
        <SectionHeading
          label="Pogrebna oprema"
          title="Katalog opreme"
          subtitle="Pažljivo odabrana oprema za dostojanstven ispraćaj."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
