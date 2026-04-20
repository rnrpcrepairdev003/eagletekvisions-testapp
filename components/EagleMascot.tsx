'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function EagleMascot() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const scrollY = window.scrollY
      el.style.transform = `translateX(-${scrollY * 0.3}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute right-0 bottom-0 w-[520px] xl:w-[640px] h-[520px] xl:h-[640px] pointer-events-none select-none"
      style={{ willChange: 'transform' }}
    >
      <Image
        src="/eagle-mascot.png"
        alt="Eagletek Visions mascot"
        fill
        className="object-contain object-right-bottom drop-shadow-2xl"
        priority
      />
    </div>
  )
}
