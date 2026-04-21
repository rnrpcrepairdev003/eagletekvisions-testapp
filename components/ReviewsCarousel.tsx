'use client'

import { useRef, useState } from 'react'

const reviews = [
  { name: 'Tiffany Langell', time: '1 year ago', text: 'Joshua and his team have automated a ton of our processes. Our business almost feels like it is on Auto Pilot. Their developers are definitely top notch.' },
  { name: 'Michael Sanders', time: '1 year ago', text: 'Our business has skyrocketed in traffic and getting calls. We were presented multiple package options and the investment is worth it.' },
  { name: 'William Jenkins', time: '1 year ago', text: 'We needed to find an expert in SEO and Google Ads. These guys are your go-to for all online marketing needs. Happy with the results.' },
  { name: 'Ray Taras', time: '1 year ago', text: 'Amazing online marketing company. If you need any type of digital marketing advice they are your go-to team. We are seeing results fast.' },
  { name: 'Carol Davis', time: '3 years ago', text: 'Richard and his team helped put us up to date on Instagram and Facebook marketing. We ended up redoing our website and running Google Adwords campaigns.' },
]

const Stars = ({ size = 4 }: { size?: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-${size} h-${size} text-[#FBBC04]`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
)

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.clientWidth ?? 320
    const gap = 20
    el.scrollBy({ left: dir === 'next' ? cardWidth + gap : -(cardWidth + gap), behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = (el.firstElementChild?.clientWidth ?? 320) + 20
    setActive(Math.round(el.scrollLeft / cardWidth))
  }

  return (
    <div>
      {/* Carousel track */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className="snap-start shrink-0 w-[85vw] sm:w-[360px] lg:w-[380px] bg-[#f7f7f7] border border-[#eeeeee] rounded-2xl p-6 shadow-sm flex flex-col gap-4"
          >
            <Stars />
            <p className="text-[#444444] text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#e87c5a] flex items-center justify-center text-white text-xs font-bold shrink-0">
                {review.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-[#1c1c1c] text-sm font-semibold">{review.name}</p>
                <p className="text-[#888888] text-xs">{review.time} · Google Review</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-[#e87c5a]' : 'w-1.5 bg-[#dddddd]'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('prev')}
            className="w-9 h-9 rounded-full border border-[#e0e0e0] hover:border-[#e87c5a] hover:text-[#e87c5a] flex items-center justify-center transition-colors text-[#888888]"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll('next')}
            className="w-9 h-9 rounded-full border border-[#e0e0e0] hover:border-[#e87c5a] hover:text-[#e87c5a] flex items-center justify-center transition-colors text-[#888888]"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/search/Eagletek+Visions+Palm+Desert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#e87c5a] transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Read all 28 reviews on Google
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    </div>
  )
}
