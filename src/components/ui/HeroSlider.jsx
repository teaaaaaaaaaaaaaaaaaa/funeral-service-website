import { useState, useEffect } from 'react'

export default function HeroSlider({ images }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!images || images.length < 2) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [images])

  if (!images || images.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className={`
            absolute inset-0 transition-opacity duration-2000 ease-in-out
            ${index === current ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ transitionDuration: '2000ms' }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-sedef-darkest/70 via-sedef-darkest/50 to-sedef-darkest/80" />
    </div>
  )
}
