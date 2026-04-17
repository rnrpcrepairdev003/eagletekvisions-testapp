'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/EV/computer-repair', label: 'Computer Repair' },
  { href: '/EV/virus-removal', label: 'Virus Removal' },
  { href: '/EV/data-recovery', label: 'Data Recovery' },
  { href: '/EV/laptop-repair', label: 'Laptop Repair' },
  { href: '/EV/screen-replacement', label: 'Screen Replacement' },
  { href: '/EV/network-setup', label: 'Network Setup' },
  { href: '/EV/remote-support', label: 'Remote Support' },
  { href: '/EV/computer-tune-up', label: 'Computer Tune-Up' },
  { href: '/EV/business-it-support', label: 'Business IT Support' },
  { href: '/EV/password-recovery', label: 'Password Recovery' },
]

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <>
      {/* ── LEFT: Floating call button ── */}
      <a
        href="tel:+17604699070"
        className="fixed bottom-6 left-5 z-50 flex items-center gap-2.5 bg-[#e87c5a] hover:bg-[#d06848] text-white text-sm font-bold px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
        aria-label="Call us"
      >
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
        <span className="hidden sm:inline">(760) 469-9070</span>
      </a>

      {/* ── CENTER: Nav menu modal overlay ── */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Menu panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl shadow-2xl overflow-hidden w-80 max-w-[92vw] flex flex-col max-h-[82vh]">
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#2e2e2e] flex items-center justify-between shrink-0">
                <span className="text-white text-sm font-bold uppercase tracking-widest">Navigation</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#555555] hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable list with styled scrollbar */}
              <div
                className="overflow-y-auto"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#e87c5a #1a1a1a',
                }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-3.5 text-sm text-[#bbbbbb] hover:text-white hover:bg-[#242424] transition-colors border-b border-[#242424]"
                  >
                    <span>{link.label}</span>
                    <svg className="w-3.5 h-3.5 text-[#3a3a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}

                {/* Divider */}
                <div className="px-6 py-2.5 bg-[#111111] border-b border-[#2e2e2e]">
                  <span className="text-[#e87c5a]/60 text-xs font-bold uppercase tracking-widest">Computer Services</span>
                </div>

                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-3.5 text-sm text-[#bbbbbb] hover:text-white hover:bg-[#242424] transition-colors border-b border-[#242424] last:border-0"
                  >
                    <span>{link.label}</span>
                    <svg className="w-3.5 h-3.5 text-[#3a3a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── RIGHT: Menu + Scroll to top buttons ── */}
      <div className="fixed bottom-6 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center gap-1.5 bg-[#1c1c1c] hover:bg-[#2a2a2a] border border-[#333333] text-white text-xs font-semibold px-3 py-2.5 rounded-full shadow-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Menu</span>
        </button>

        <button
          onClick={scrollToTop}
          className="bg-[#1c1c1c] hover:bg-[#2a2a2a] border border-[#333333] text-white text-xs font-semibold px-3 py-2.5 rounded-full shadow-lg transition-colors flex items-center gap-1.5"
          aria-label="Scroll to top"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span>Top</span>
        </button>
      </div>
    </>
  )
}
