import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

const quickLinks = [
  { href: '/',              iconName: 'monitor',   label: 'Home',          desc: 'Back to the homepage' },
  { href: '/services',      iconName: 'server',    label: 'IT Services',   desc: 'View all our services' },
  { href: '/pricing',       iconName: 'document',  label: 'Pricing',       desc: 'Managed IT plans & rates' },
  { href: '/EV/Articles',   iconName: 'briefcase', label: 'Knowledge Base',desc: 'IT guides & frameworks' },
  { href: '/contact',       iconName: 'headset',   label: 'Contact Us',    desc: 'Get in touch with our team' },
  { href: '/faq',           iconName: 'chart',     label: 'FAQ',           desc: 'Common questions answered' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl w-full text-center">

          {/* 404 number */}
          <div className="relative inline-block mb-8">
            <p className="text-[160px] sm:text-[220px] font-extrabold leading-none text-white/[0.04] select-none">
              404
            </p>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#e87c5a]/10 border border-[#e87c5a]/20 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#e87c5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-widest">Page Not Found</p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            This page doesn&apos;t exist
          </h1>
          <p className="text-[#888888] text-base max-w-md mx-auto mb-12 leading-relaxed">
            The page you&apos;re looking for may have moved, been removed, or the URL might be incorrect.
          </p>

          {/* Quick links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 text-left">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#e87c5a]/30 rounded-xl px-5 py-4 transition-all"
              >
                <div className="w-9 h-9 bg-[#e87c5a]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon name={link.iconName} className="w-4 h-4 text-[#e87c5a]" />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold group-hover:text-[#e87c5a] transition-colors">{link.label}</p>
                  <p className="text-[#555555] text-xs mt-0.5 truncate">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Go to Homepage
            </Link>
            <a
              href="tel:+17604699070"
              className="w-full sm:w-auto border border-white/10 hover:border-white/20 text-[#aaaaaa] hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Call (760) 469-9070
            </a>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5 py-6 text-center">
        <p className="text-[#444444] text-xs">
          &copy; {new Date().getFullYear()} Eagletek Visions &nbsp;·&nbsp;{' '}
          <Link href="/contact" className="hover:text-[#e87c5a] transition-colors">Contact Us</Link>
          &nbsp;·&nbsp;{' '}
          <Link href="/privacy" className="hover:text-[#e87c5a] transition-colors">Privacy Policy</Link>
        </p>
      </div>

    </div>
  )
}
