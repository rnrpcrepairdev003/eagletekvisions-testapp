import Link from 'next/link'
import Icon from '@/components/Icon'

const services = [
  { id: 'ai-consulting', iconName: 'cpu', title: 'AI Consulting', description: 'Integrate AI and machine learning into your business workflows to automate processes, surface insights, and gain a competitive edge.' },
  { id: 'it-infrastructure', iconName: 'server', title: 'IT Infrastructure', description: 'Design, deploy, and manage scalable IT infrastructure — from on-premise servers to hybrid cloud environments.' },
  { id: 'project-management', iconName: 'clipboard', title: 'Project Management', description: 'Expert technology project management to keep complex IT initiatives on time, on budget, and aligned with business goals.' },
  { id: 'api-integration', iconName: 'link', title: 'API Integration', description: 'Connect your business systems, third-party platforms, and data sources through robust, secure API integrations.' },
  { id: 'data-security', iconName: 'lock', title: 'Data Security', description: 'Protect your business with enterprise-grade cybersecurity — threat assessment, compliance, and continuous monitoring.' },
  { id: 'cloud-solutions', iconName: 'cloud', title: 'Cloud Solutions', description: 'Migrate to and optimise cloud environments on AWS, Azure, or Google Cloud for cost savings and business agility.' },
]

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
]

const whyUs = [
  { iconName: 'zap', title: 'Fast Turnaround', description: 'Most repairs and remote sessions completed same day. We respect your time.' },
  { iconName: 'shield', title: 'Enterprise Security', description: 'Every engagement follows security-first principles — your data never leaves your control.' },
  { iconName: 'document', title: 'Transparent Pricing', description: 'No hidden fees. Detailed quotes before any work begins — you approve everything.' },
  { iconName: 'award', title: 'Certified Experts', description: 'Our team holds industry certifications and stays current with the latest technology.' },
  { iconName: 'refresh', title: '90-Day Guarantee', description: 'All repair work is backed by a 90-day warranty. We stand behind our quality.' },
  { iconName: 'headset', title: 'Dedicated Support', description: 'One point of contact for your account — no call centres, no runaround.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#e87c5a]/10 border border-[#e87c5a]/30 rounded-full px-4 py-1.5 text-[#e87c5a] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e87c5a] animate-pulse" />
            Enterprise IT & AI Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Technology That{' '}
            <span className="text-[#e87c5a]">Elevates</span>{' '}
            Your Business
          </h1>
          <p className="mt-6 text-lg text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
            From AI consulting and cloud infrastructure to cybersecurity and hands-on repair services — Eagletek Visions
            is the technology partner that grows with you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              Get a Free Consultation
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="border-y border-[#eeeeee] bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[#1c1c1c]">{s.value}</p>
                <p className="text-sm text-[#888888] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Enterprise IT Services</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              A full spectrum of technology solutions — from strategic AI consulting to day-to-day IT management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group bg-white border border-[#eeeeee] rounded-2xl p-7 card-hover"
              >
                <div className="w-11 h-11 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon name={service.iconName} className="w-5 h-5 text-[#e87c5a]" />
                </div>
                <h3 className="text-[#1c1c1c] font-bold text-lg mb-2 group-hover:text-[#e87c5a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#e87c5a] hover:text-[#d06848] font-medium text-sm transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f7] border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Why Eagletek</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Built Different</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              We combine enterprise-level expertise with the personal service of a dedicated local partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white border border-[#eeeeee] rounded-2xl p-7 shadow-sm">
                <div className="w-11 h-11 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon name={item.iconName} className="w-5 h-5 text-[#e87c5a]" />
                </div>
                <h3 className="text-[#1c1c1c] font-bold text-base mb-2">{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Elevate Your Technology?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Book a free consultation and find out how Eagletek Visions can transform your IT operations.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
