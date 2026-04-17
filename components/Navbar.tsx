'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/EV/Articles', label: 'Articles' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [menuOpen])

  return (
    <nav className="bg-[#1c1c1c] border-b border-[#e0e0e0]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.png" alt="Eagletek Visions" width={38} height={38} className="rounded-sm" />
            <div className="leading-none">
              <span className="font-extrabold text-white text-base tracking-wide">EAGLETEK</span>
              <span className="font-light text-[#e87c5a] text-base tracking-widest ml-1">VISIONS</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-white bg-[#2a2a2a]'
                    : 'text-[#aaaaaa] hover:text-white hover:bg-[#2a2a2a]/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md text-[#aaaaaa] hover:text-white hover:bg-[#2a2a2a] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu — absolute overlay, does not push content */}
        {menuOpen && (
          <div
            ref={menuRef}
            className={`lg:hidden absolute top-full left-0 right-0 bg-[#1c1c1c] border-t border-[#e0e0e0]/10 shadow-xl py-3 pb-4 z-50 transition-all duration-300 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-white bg-[#2a2a2a]'
                      : 'text-[#aaaaaa] hover:text-white hover:bg-[#2a2a2a]/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-[#e87c5a] hover:bg-[#d06848] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
