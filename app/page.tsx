import Link from 'next/link'
import Icon from '@/components/Icon'

const plans = [
  {
    name: 'Starter',
    price: '$149',
    period: '/mo',
    description: 'Perfect for sole traders and very small teams who need occasional IT support.',
    highlight: false,
    features: ['Up to 3 users', 'Remote helpdesk (business hours)', 'Antivirus and endpoint management', 'Monthly security patch report', 'Email and chat support', '4-hour response SLA'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/mo per user',
    description: 'For growing SMBs that need proactive IT management and faster support.',
    highlight: true,
    features: ['5–25 users', 'Remote + on-site helpdesk', 'Proactive monitoring & alerting', 'Security patching and updates', 'Microsoft 365 / Google Workspace admin', '2-hour response SLA', 'Monthly IT health report', 'Dedicated account technician'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Fully managed IT for larger organisations with complex infrastructure needs.',
    highlight: false,
    features: ['Unlimited users', '24/7 helpdesk and monitoring', 'On-site and remote support', 'Custom SLA agreements', 'vCIO strategic advisory', 'Compliance programme management', 'Disaster recovery planning', 'Dedicated engineering team'],
    cta: 'Contact Sales',
  },
]

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
  { value: '24/7', label: 'Always Available' },
]

const whyUs = [
  { iconName: 'zap', title: 'Rapid Deployment', description: 'Most engagements and projects are delivered same day. We respect your time and deadlines.' },
  { iconName: 'shield', title: 'Enterprise Security', description: 'Every engagement follows security-first principles — your data never leaves your control.' },
  { iconName: 'document', title: 'Transparent Pricing', description: 'No hidden fees. Detailed quotes before any work begins — you approve everything.' },
  { iconName: 'award', title: 'Certified Experts', description: 'Our team holds industry certifications and stays current with the latest technology.' },
  { iconName: 'refresh', title: '90-Day SLA Guarantee', description: 'All project work is backed by a 90-day service guarantee. We stand behind our quality.' },
  { iconName: 'headset', title: 'Dedicated Account Manager', description: 'One point of contact for your organisation — direct access to your team, no runaround.' },
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
            From AI consulting and cloud infrastructure to cybersecurity and digital transformation — Eagletek Visions
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

      {/* ── PRICING ──────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-white border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Managed IT Plans</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              Predictable monthly plans — no hidden fees, no lock-in. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  plan.highlight
                    ? 'bg-[#e87c5a] border border-[#d06848] shadow-lg'
                    : 'bg-white border border-[#e0e0e0] shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#1c1c1c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <p className="font-bold text-lg mb-1 text-[#1c1c1c]">{plan.name}</p>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-[#1c1c1c]'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm pb-1 ${plan.highlight ? 'text-orange-100' : 'text-[#888888]'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-orange-100' : 'text-[#666666]'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-[#e87c5a]'}`}
                        fill="currentColor" viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-orange-50' : 'text-[#444444]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-white text-[#e87c5a] hover:bg-orange-50'
                      : 'bg-[#e87c5a] hover:bg-[#d06848] text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Our Location</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-6">
                Based in Palm Desert, CA
              </h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">
                We serve businesses throughout the Coachella Valley and Inland Empire — and provide remote IT services nationwide. Whether you need on-site support or a fully managed remote engagement, we have you covered.
              </p>
              <div className="space-y-4 text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#e87c5a] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Palm Desert, CA — Coachella Valley</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#e87c5a] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+17604699070" className="hover:text-[#e87c5a] transition-colors">(760) 469-9070</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#e87c5a] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon–Sat &nbsp;9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm text-center">
                  Get in Touch
                </Link>
                <a href="tel:+17604699070" className="border border-[#e0e0e0] hover:border-[#e87c5a] text-[#555555] hover:text-[#e87c5a] font-semibold px-6 py-3 rounded-xl transition-colors text-sm text-center">
                  Call Now
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8984.64516023234!2d-116.32342640316625!3d33.75576650566001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafbee91340beb%3A0xd6b62b9373a6b041!2sEagleTek%20Visions!5e0!3m2!1sen!2sus!4v1776385941212!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EagleTek Visions location map"
              />
            </div>
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
