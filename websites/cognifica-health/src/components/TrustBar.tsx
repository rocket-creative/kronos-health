const TRUST_ITEMS = [
  'Multidisciplinary care team',
  'Insurance accepted',
  'Virtual evaluations available',
  '3 locations in NY & CT',
  'Hundreds of patients helped',
]

export function TrustBar() {
  return (
    <div className="bg-stone-100 border-y border-stone-200 py-3">
      <ul
        className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-x-6 gap-y-2 list-none"
        role="list"
      >
        {TRUST_ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-xs font-bold text-stone-600 uppercase tracking-wider"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-cognifica-submit"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
