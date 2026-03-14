import Image from 'next/image'

const LOCATIONS = [
  {
    name: 'West Harrison, NY',
    address: '244 Westchester Avenue, Suite 209',
    city: 'West Harrison, NY 10604',
    phone: '9149483008',
    photo: '/images/front2.webp',
    photoAlt: 'Cognifica Health West Harrison office',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8!2d-73.7262!3d41.0334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s244+Westchester+Ave+West+Harrison+NY!5e0!3m2!1sen!2sus!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=244+Westchester+Avenue+Suite+209+West+Harrison+NY+10604',
  },
  {
    name: 'Aquebogue, NY',
    address: '508 Main Street, Office 2',
    city: 'Aquebogue, NY 11931',
    phone: '9149483008',
    photo: '/images/front.jpg',
    photoAlt: 'Cognifica Health Aquebogue office',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8!2d-72.6278!3d40.9447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s508+Main+Street+Aquebogue+NY!5e0!3m2!1sen!2sus!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=508+Main+Street+Office+2+Aquebogue+NY+11931',
  },
  {
    name: 'Stamford, CT',
    address: '1100 Bedford St, First Floor',
    city: 'Stamford, CT 06905',
    phone: '9149483008',
    photo: null,
    photoAlt: null,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8!2d-73.5387!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1100+Bedford+St+Stamford+CT!5e0!3m2!1sen!2sus!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1100+Bedford+St+First+Floor+Stamford+CT+06905',
  },
]

export function LocationsSection() {
  return (
    <section aria-label="Office locations" className="bg-stone-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-8 text-center">
          Our locations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <address key={loc.name} className="not-italic bg-white border border-stone-200 overflow-hidden">
              {loc.photo && (
                <Image
                  src={loc.photo}
                  alt={loc.photoAlt!}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              )}
              {!loc.photo && (
                <div className="w-full h-40 bg-cognifica-indigo/10 flex items-center justify-center">
                  <span className="text-cognifica-indigo/40 text-sm font-bold uppercase tracking-wider">Stamford, CT</span>
                </div>
              )}
              <div className="p-6">
                <p className="font-bold text-cognifica-indigo mb-2">{loc.name}</p>
                <p className="text-sm text-gray-600">{loc.address}</p>
                <p className="text-sm text-gray-600 mb-3">{loc.city}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm font-bold text-cognifica-cta hover:underline focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
                  >
                    (914) 948 3008
                  </a>
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-cognifica-cta hover:underline focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </address>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-heading text-xl font-bold text-cognifica-indigo mb-6 text-center">
            Find us on the map
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <div key={`map-${loc.name}`} className="aspect-video">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map to ${loc.name} office`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
