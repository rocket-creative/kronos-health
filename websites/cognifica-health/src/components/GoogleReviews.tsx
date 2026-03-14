'use client'

const REVIEWS = [
  {
    name: 'Mr Lombardi',
    text: "Excellent remarkable TLIF. The surgical area is perfect. When other surgeons tell me I need surgery I check in with him. His knowledge and conservative approach has helped me avoid unnecessary surgeries. He's the best no other way to say it!",
    rating: 5,
  },
  {
    name: 'Angelo Troiano',
    text: 'Very professional and thorough with my surgery.',
    rating: 5,
  },
  {
    name: 'Faith Schwenker',
    text: "Dr. Abraham's did my surgery and it was a great success. After nearly 8 years of pain, I finally found a doctor who could help me. My sciatica nerve was compressing my L4 and L5 which was giving me pain and a very poor quality of life. Not only does Dr. Abraham's have a great bedside manner, but also he certainly knows the complexities of the spine. Thank you so much for giving me my life back!!",
    rating: 5,
  },
  {
    name: 'Kathleen Cully',
    text: "Dr. Abrahams is an extremely compassionate and highly skilled neurosurgeon who, along with Dr. C. Shannon, saved my husband's life by removing a complicated malignant metastatic brain tumor during a very long surgery. In addition, Dr. Abrahams has been my surgeon for several spinal procedures and I trust him with my life.",
    rating: 5,
  },
  {
    name: 'Kathleen Darcy',
    text: 'My experience was great. Dr Abraham was fabulous.',
    rating: 5,
  },
  {
    name: 'Anthony',
    text: "Dr. Abrahams is the best, very caring and takes time out to listen instead of rushing!!! thanks Doc.. I might have to come see you again.",
    rating: 5,
  },
  {
    name: 'Dale',
    text: "Dr Abrahams is THE BEST! He is the absolute best brain & spine surgeon by far! His group is beyond excellent! My back & neck had been fractured in an accident. I was miserable and in excruciating pain. Then everything changed. THANK GOD I FOUND DR ABRAHAMS! He took all the time he needed with me to come up with a new plan. He's a MUST GO TO doctor! He changed my life, and I am forever grateful to him.",
    rating: 5,
  },
  {
    name: 'Helena Mattis',
    text: 'Dr. Abrahams literally saved my life. I went to him back in 2004 in horrible shape after being misdiagnosed by my Primary Care Physician. He went above and beyond in saving my life. I highly recommend him for his skills, ability, his humanity and love he demonstrates for both his patients and his work.',
    rating: 5,
  },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Cognifica Health',
  url: 'https://cognifica.health',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '8',
    reviewCount: '8',
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.text,
  })),
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="flex-shrink-0 w-72 md:w-80 bg-white border border-stone-200 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-cognifica-indigo flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-cognifica-indigo text-sm">{name}</p>
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-1">
        {text}
      </p>
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-stone-100">
        <GoogleIcon />
        <span className="text-xs text-gray-500">Posted on Google</span>
      </div>
    </article>
  )
}

export function GoogleReviews() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS]

  return (
    <section
      className="bg-stone-50 py-16 overflow-hidden"
      aria-label="Patient reviews"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 mb-10">
        <h2 className="font-heading text-3xl font-bold text-cognifica-indigo mb-3">
          What our patients say
        </h2>
        <p className="text-gray-600 max-w-xl">
          Real experiences from patients who have trusted Cognifica Health with
          their care.
        </p>
      </div>

      <div className="relative">
        <div
          className="flex gap-6 animate-scroll hover:pause focus-within:pause"
          role="list"
        >
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.name}-${index}`} role="listitem">
              <ReviewCard name={review.name} text={review.text} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
          padding-left: 1rem;
        }

        .animate-scroll:hover,
        .animate-scroll:focus-within {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
            overflow-x: auto;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
