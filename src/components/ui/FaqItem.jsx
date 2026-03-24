export default function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-antic-border">
      <dt>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          id={`faq-question-${item.id}`}
          className="
            w-full flex items-center justify-between
            py-5 text-left
            font-playfair text-lg md:text-xl text-antic-cream
            transition-colors duration-200
            hover:text-antic-gold
            focus-visible:outline-none focus-visible:text-antic-gold
          "
        >
          <span>{item.question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 flex-shrink-0 ml-4 text-antic-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </dt>
      <dd
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        <p className="font-garamond text-lg text-antic-light leading-relaxed pb-5 pt-1">
          {item.answer}
        </p>
      </dd>
    </div>
  )
}
