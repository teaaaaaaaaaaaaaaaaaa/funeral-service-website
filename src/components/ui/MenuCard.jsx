export default function MenuCard({ menu }) {
  if (!menu) return null

  return (
    <div className="flex flex-col">
      {/* Menu items list */}
      <ul className="flex flex-col gap-0 divide-y divide-sedef-mid/20">
        {(menu.items || []).map((item) => (
          <li key={item.course} className="flex items-start gap-4 py-4">
            {/* Placeholder image or dot */}
            {item.image ? (
              <img
                src={item.image}
                alt={item.description}
                className="w-16 h-16 object-cover flex-shrink-0 grayscale opacity-80"
                loading="lazy"
                width="64"
                height="64"
              />
            ) : (
              <div className="w-1 h-1 rounded-full bg-sedef-mid mt-3 flex-shrink-0" aria-hidden="true" />
            )}
            <div className="flex-1 min-w-0">
              <span className="font-lato text-xs tracking-widest uppercase text-sedef-muted block mb-0.5">
                {item.course}
              </span>
              <span className="font-garamond text-lg text-sedef-light">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-6 pt-5 border-t border-sedef-mid/40 flex items-baseline justify-between">
        <span className="font-lato text-xs tracking-widest uppercase text-sedef-mid">
          {menu.priceLabel}
        </span>
        <div className="text-right">
          <span className="font-playfair text-2xl text-sedef-lightest">
            {menu.price}
          </span>
          <span className="font-lato text-xs text-sedef-mid ml-1.5">
            {menu.currency}
          </span>
        </div>
      </div>
    </div>
  )
}
