import Link from 'next/link'
import Image from 'next/image'

const services = [
  { href: '/services#ai-consulting', label: 'AI Consulting' },
  { href: '/services#it-infrastructure', label: 'IT Infrastructure' },
  { href: '/services#project-management', label: 'Project Management' },
  { href: '/services#api-integration', label: 'API Integration' },
  { href: '/services#data-security', label: 'Data Security' },
  { href: '/services#cloud-solutions', label: 'Cloud Solutions' },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/EV/Articles', label: 'Articles' },
  { href: '/contact', label: 'Contact Us' },
]

const knowledgeBase = [
  { href: '/EV/business-it-support', label: 'Managed IT Services for Small Business: A Decision Guide' },
  { href: '/EV/data-recovery', label: 'Data Recovery: How to Respond When You Lose Critical Files' },
  { href: '/EV/password-recovery', label: 'Password Recovery & Account Access: What Your Options Are' },
  { href: '/EV/network-setup', label: 'Home and Business Network Architecture: A Practical Guide' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] border-t border-[#e0e0e0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Eagletek Visions" width={38} height={38} className="rounded-sm" />
              <div className="leading-none">
                <span className="font-extrabold text-white text-base tracking-wide">EAGLETEK</span>
                <span className="font-light text-[#e87c5a] text-base tracking-widest ml-1">VISIONS</span>
              </div>
            </Link>
            <p className="text-[#aaaaaa] text-sm leading-relaxed">
              Elevating businesses through intelligent technology. Enterprise IT solutions, AI consulting, and advanced cybersecurity — built for growth.
            </p>
            <div className="space-y-1 text-sm text-[#aaaaaa]">
              <p>
                <span className="text-[#d0d0d0] font-medium">Phone:</span>{' '}
                <a href="tel:+17604699070" className="hover:text-[#e87c5a] transition-colors">(760) 469-9070</a>
              </p>
              <p>
                <span className="text-[#d0d0d0] font-medium">Email:</span>{' '}
                <a href="mailto:support@eagletekvisions.com" className="hover:text-[#e87c5a] transition-colors">
                  support@eagletekvisions.com
                </a>
              </p>
              <p>
                <span className="text-[#d0d0d0] font-medium">Hours:</span> Mon–Sat 9AM–6PM
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#aaaaaa] hover:text-[#e87c5a] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">IT Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[#aaaaaa] hover:text-[#e87c5a] text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Base */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Knowledge Base</h3>
            <ul className="space-y-2.5">
              {knowledgeBase.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#aaaaaa] hover:text-[#e87c5a] text-sm transition-colors leading-snug block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e0e0e0]/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#888888]">
          <p>&copy; {new Date().getFullYear()} Eagletek Visions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-[#d0d0d0] transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[#d0d0d0] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
