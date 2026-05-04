import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import CompanyVideo from '@/components/CompanyVideo'

export const metadata: Metadata = {
  title: 'Managed IT Services & AI Consulting | Palm Desert, CA',
  description: 'Eagletek Visions — managed IT services, AI consulting, and cybersecurity for businesses in Palm Desert and the Coachella Valley. 90-day guarantee, no lock-in contracts.',
  openGraph: {
    title: 'Managed IT Services & AI Consulting | Eagletek Visions',
    description: 'Enterprise IT services for growing businesses in Palm Desert, CA — managed IT, AI consulting, cybersecurity, and cloud solutions with local accountability.',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eagletekvisions.com/#website',
  name: 'Eagletek Visions',
  url: 'https://eagletekvisions.com',
  publisher: { '@id': 'https://eagletekvisions.com/#organization' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://eagletekvisions.com/#managed-it',
  name: 'Managed IT Services',
  provider: { '@id': 'https://eagletekvisions.com/#organization' },
  areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 33.7557, longitude: -116.3234 }, geoRadius: '150000' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Managed IT & AI Consulting Plans',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter Managed IT', price: '299', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' } },
      { '@type': 'Offer', name: 'Professional Managed IT', price: '149', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' } },
      { '@type': 'Offer', name: 'Enterprise Managed IT', price: '0', priceCurrency: 'USD', description: 'Custom pricing — contact for quote' },
    ],
  },
}

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/mo',
    description: 'For small businesses and sole operators who need reliable IT oversight without the overhead.',
    highlight: false,
    features: ['Up to 5 users', 'Business-hours IT desk', 'Endpoint monitoring & management', 'Monthly security patch cycle', 'Email and priority chat access', '4-hour response SLA'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/mo per user',
    description: 'For growing organisations that need proactive IT management and a dedicated technical resource.',
    highlight: true,
    features: ['5–25 users', 'Remote and on-site IT services', 'Proactive monitoring and alerting', 'Security patching and compliance updates', 'Microsoft 365 / Google Workspace admin', '2-hour response SLA', 'Monthly IT health report', 'Dedicated account technician'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Fully managed IT for larger organisations with complex infrastructure and compliance requirements.',
    highlight: false,
    features: ['Unlimited users', '24/7 IT monitoring and infrastructure management', 'On-site and remote IT services', 'Custom SLA agreements', 'vCIO strategic advisory', 'Compliance programme management (SOC 2, HIPAA, NIST)', 'Disaster recovery and business continuity planning', 'Dedicated engineering team'],
    cta: 'Contact Sales',
  },
]

const services = [
  { id: 'ai-consulting', iconName: 'cpu', title: 'AI Consulting', description: 'Identify, evaluate, and deploy AI solutions that deliver measurable business outcomes — from workflow automation to LLM integration and custom data pipelines.' },
  { id: 'it-infrastructure', iconName: 'server', title: 'IT Infrastructure', description: 'Design, deploy, and manage scalable infrastructure — from on-premise server environments to hybrid and full cloud architectures built for reliability.' },
  { id: 'project-management', iconName: 'clipboard', title: 'Project Management', description: 'Dedicated technology project management to keep complex IT initiatives on schedule, within budget, and aligned with your business objectives.' },
  { id: 'api-integration', iconName: 'link', title: 'API Integration', description: 'Connect your business systems, SaaS platforms, and internal tools through secure, well-documented API integrations that eliminate silos and manual processes.' },
  { id: 'data-security', iconName: 'lock', title: 'Cybersecurity', description: 'Protect your organisation with a layered security programme — threat assessment, endpoint protection, compliance frameworks, and continuous monitoring.' },
  { id: 'cloud-solutions', iconName: 'cloud', title: 'Cloud Solutions', description: 'Plan and execute cloud migrations to AWS, Azure, or Google Cloud. Optimise your existing cloud spend and infrastructure for performance and cost efficiency.' },
]

const stats = [
  { value: '500+', label: 'Business Clients Served' },
  { value: '99%', label: 'Client Retention Rate' },
  { value: '10+', label: 'Years in Enterprise IT' },
  { value: '24/7', label: 'Infrastructure Monitoring' },
]

const whyUs = [
  { iconName: 'zap', title: 'Same-Day Deployment', description: 'Most engagements are scoped, approved, and active within one business day. We move at the pace your business requires.' },
  { iconName: 'shield', title: 'Security-First by Default', description: 'Every engagement is designed around a secure baseline. Your data, systems, and access controls are hardened before anything goes live.' },
  { iconName: 'document', title: 'Fully Transparent Pricing', description: 'Detailed written quotes before any work begins. No retainer surprises, no scope creep invoices — you approve everything in advance.' },
  { iconName: 'award', title: 'Certified Technical Staff', description: 'Our engineers hold current industry certifications across Microsoft, Cisco, AWS, and cybersecurity disciplines.' },
  { iconName: 'refresh', title: '90-Day Service Guarantee', description: 'Every project we deliver is backed by a 90-day guarantee. If it does not perform to spec, we fix it at no additional cost.' },
  { iconName: 'headset', title: 'Dedicated Account Manager', description: 'One senior point of contact for your organisation — direct access, no ticket queues, no call centres, no escalation runaround.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* ── HERO WITH VIDEO ──────────────────────────── */}
      <section className="relative overflow-hidden bg-black" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>

        {/* Orbs */}
        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: '#F97316', filter: 'blur(100px)', opacity: 0.28 }} />
        <div className="absolute -bottom-24 -right-16 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: '#EC4899', filter: 'blur(100px)', opacity: 0.28 }} />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center">
          <div className="inline-flex items-center gap-2 bg-[#e87c5a]/10 border border-[#e87c5a]/30 rounded-full px-4 py-1.5 text-[#e87c5a] text-xs sm:text-sm font-medium mb-8 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e87c5a] animate-pulse shrink-0" />
            Managed IT &amp; AI Consulting — Palm Desert, CA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Enterprise IT That{' '}
            <span className="text-[#e87c5a]">Works</span>{' '}
            for Your Business
          </h1>
          <p className="mt-6 text-lg text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
            Eagletek Visions delivers managed IT services, AI consulting, and cybersecurity programmes to businesses across the Coachella Valley and beyond — with the accountability of a dedicated local partner.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 w-full max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm text-center">
              Schedule a Free Consultation
            </Link>
            <Link href="/services" className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm text-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[#e87c5a]">{s.value}</p>
                <p className="text-sm text-[#555555] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT FORM ───────────────────────── */}
      <section className="bg-[#111111] border-b border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-widest mb-3">Request a Consultation</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Let's Assess Your IT Environment
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-8">
                Tell us about your organisation and we will respond within one business day with a tailored assessment — no obligation, no sales pressure.
              </p>
              <div className="space-y-3">
                {[
                  'Complimentary initial IT assessment',
                  'Written quote provided before any engagement',
                  '90-day service guarantee on all deliverables',
                  'Mon–Sat 9AM–6PM · (760) 469-9070',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#e87c5a] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#888888] text-sm">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form className="bg-white border border-[#eeeeee] rounded-2xl p-8 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white border border-[#e0e0e0] text-[#1c1c1c] placeholder-[#aaaaaa] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e87c5a] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full bg-white border border-[#e0e0e0] text-[#1c1c1c] placeholder-[#aaaaaa] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e87c5a] transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-white border border-[#e0e0e0] text-[#1c1c1c] placeholder-[#aaaaaa] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e87c5a] transition-colors"
              />
              <select className="w-full bg-white border border-[#e0e0e0] text-[#555555] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e87c5a] transition-colors">
                <option value="">Area of Interest</option>
                <option>Managed IT Services</option>
                <option>AI Consulting &amp; Automation</option>
                <option>Cybersecurity Assessment</option>
                <option>Cloud Migration</option>
                <option>IT Infrastructure</option>
                <option>API Integration</option>
                <option>On-Site AI Systems</option>
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Briefly describe your current IT environment or challenge..."
                className="w-full bg-white border border-[#e0e0e0] text-[#1c1c1c] placeholder-[#aaaaaa] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e87c5a] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
              >
                Request Assessment
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* ── COMPUTER SERVICES PRICING ────────────────── */}
      <section className="py-20 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">On-Demand Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Computer Services &amp; Pricing</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              Choose a skill set that fits your needs. All services are billed per hour with no hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm">
            {[
              {
                name: 'Systems Associate',
                highlight: false,
                features: [
                  'Hardware Assessment & Component Service',
                  'OS Provisioning & Configuration',
                  'Peripheral Deployment & Cabling',
                  'Connectivity Baseline Verification',
                ],
                price: 75,
              },
              {
                name: 'IT Systems Engineer',
                highlight: true,
                features: [
                  'Endpoint Security Evaluation & Hardening',
                  'Data Migration & Media Restoration',
                  'Infrastructure Configuration & Deployment',
                  'Off-Site Session Delivery (Encrypted)',
                ],
                price: 110,
              },
              {
                name: 'Senior IT Consultant',
                highlight: false,
                features: [
                  'Advanced Infrastructure Architecture',
                  'Security Posture Evaluation & Hardening',
                  'Custom Automation & Workflow Scripting',
                  'Compliance Framework Implementation',
                ],
                price: 150,
              },
            ].map((tier) => (
              <div key={tier.name} className={`flex flex-col ${tier.highlight ? 'border-x border-[#e87c5a]/40' : ''}`}>
                <div className={`px-8 py-5 text-center ${tier.highlight ? 'bg-[#e87c5a]' : 'bg-[#1c1c1c]'}`}>
                  {tier.highlight && (
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Most Requested</p>
                  )}
                  <h3 className="text-white font-bold text-base">{tier.name}</h3>
                </div>
                {tier.features.map((f, i) => (
                  <div
                    key={f}
                    className={`px-6 py-3.5 text-center text-sm border-b border-[#eeeeee] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'} text-[#444444]`}
                  >
                    {f}
                  </div>
                ))}
                <div className="px-6 py-7 text-center bg-white border-b border-[#eeeeee] flex-1 flex flex-col items-center justify-end gap-3">
                  <div>
                    <span className="text-4xl font-extrabold text-[#1c1c1c]">${tier.price}</span>
                    <p className="text-[#888888] text-xs mt-1">per hour</p>
                  </div>
                  <Link
                    href="/contact"
                    className={`mt-2 w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors ${tier.highlight ? 'bg-[#e87c5a] hover:bg-[#d06848] text-white' : 'border border-[#e0e0e0] hover:border-[#e87c5a] text-[#444444] hover:text-[#e87c5a]'}`}
                  >
                    Book a Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-[0.25em] mb-3">Hardware &amp; AI Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Purpose-Built Business Technology</h2>
            <p className="text-[#666666] text-sm max-w-xl mx-auto">
              Custom-configured server infrastructure and private AI systems — engineered for performance, security, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#222222] border border-[#222222] rounded-2xl overflow-hidden">

            {/* Column 1 — Business Server */}
            <div className="bg-[#0f0f0f] p-10 flex flex-col">
              <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-[0.2em] mb-6">Business Server Solutions</p>
              <div className="space-y-5 flex-1">
                {[
                  { title: 'Built for Your Workload', body: 'Every server is spec\'d and assembled around your specific requirements — file sharing, internal applications, hosted services, or high-performance compute.' },
                  { title: 'Secured Before Deployment', body: 'Firewall rules, access controls, and system hardening are completed by our engineers before handover. Your infrastructure arrives production-ready.' },
                  { title: 'Virtualised Multi-Environment Support', body: 'Run isolated development, staging, and production environments on a single machine — without the cost of separate hardware for each.' },
                  { title: 'Tower and Rack Form Factors Available', body: 'We supply and configure both desktop tower and rack-mount hardware. We match the form factor to your office layout or server room specification.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e87c5a] mt-2 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-[#666666] text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#222222] mt-8 pt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[#555555] text-xs mb-1">Starting at</p>
                  <p className="text-white text-2xl font-extrabold">$1,999</p>
                  <p className="text-[#555555] text-xs mt-1">Fully quoted before any work begins.</p>
                </div>
                <Link href="/contact" className="shrink-0 bg-[#e87c5a] hover:bg-[#d06848] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Column 2 — On-Site AI */}
            <div className="bg-[#0f0f0f] p-10 flex flex-col">
              <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-[0.2em] mb-6">On-Premise AI Infrastructure</p>
              <div className="space-y-5 flex-1">
                {[
                  { title: 'Private AI — Your Data Stays On-Site', body: 'Eliminate third-party cloud AI exposure. We deploy local language model infrastructure that runs entirely on your hardware, inside your network perimeter.' },
                  { title: 'Configured for Real Business Workloads', body: 'Document processing, internal knowledge search, workflow automation, and code assistance — without recurring cloud subscription costs.' },
                  { title: 'Multi-Function Hardware Platform', body: 'The same machine serves as an AI inference server, internal application host, and virtualised workstation environment simultaneously.' },
                  { title: 'API-First Integration Architecture', body: 'Your on-premise AI connects to existing business applications through standard REST and WebSocket APIs — no migration required.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e87c5a] mt-2 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-[#666666] text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#222222] mt-8 pt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[#555555] text-xs mb-1">Starting at</p>
                  <p className="text-white text-2xl font-extrabold">$2,500</p>
                  <p className="text-[#555555] text-xs mt-1">Scoped to your model size and concurrency requirements.</p>
                </div>
                <Link href="/contact" className="shrink-0 bg-[#e87c5a] hover:bg-[#d06848] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#555555] hover:text-[#e87c5a] font-medium text-sm transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MANAGED IT SERVICES ──────────────────────── */}
      <section className="py-24 bg-white border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Managed IT Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">A Full Technology Function — Without the Overhead</h2>
            <p className="mt-4 text-[#555555] max-w-2xl mx-auto text-sm leading-relaxed">
              Eagletek Visions acts as your outsourced IT department — handling infrastructure, security, compliance, and day-to-day technical operations so your team can focus on the business.
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
              View full service catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f7] border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Why Eagletek Visions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">What Sets Us Apart</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              Enterprise-grade capability with the accountability and responsiveness of a dedicated local partner.
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

      {/* ── COMPANY VIDEO ────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-widest mb-4">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                We Build It.<br />We Secure It.<br />We Scale It.
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed mb-8">
                Infrastructure, cloud, cybersecurity, and AI — handled entirely in-house by our certified engineers. No outsourcing, no middlemen.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Schedule a Free Consultation
              </Link>
            </div>

            {/* Right: video */}
            <CompanyVideo />

          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-[#eeeeee] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Client Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <span className="text-[#1c1c1c] font-bold">5.0</span>
              <span className="text-[#888888] text-sm">· 28 reviews on Google</span>
            </div>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-white border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Managed IT Plans */}
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Managed Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Managed IT Plans</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              Predictable monthly investment with no hidden fees, no lock-in contracts, and a 90-day service guarantee on all deliverables.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  plan.highlight
                    ? 'bg-[#e87c5a] border border-[#d06848] shadow-lg mt-4 lg:mt-0'
                    : 'bg-white border border-[#e0e0e0] shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#1c1c1c] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
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
                Serving the Coachella Valley and Beyond
              </h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">
                Headquartered in Palm Desert, CA — we provide on-site IT services throughout the Coachella Valley and Inland Empire, and fully managed remote services to businesses nationwide.
              </p>
              <div className="space-y-4 text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#e87c5a] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>77530 Enfield Ln Bldg H3, Palm Desert, CA 92211</span>
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
                  <span>Monday – Saturday &nbsp;9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm text-center">
                  Schedule a Consultation
                </Link>
                <a href="tel:+17604699070" className="border border-[#e0e0e0] hover:border-[#e87c5a] text-[#555555] hover:text-[#e87c5a] font-semibold px-6 py-3 rounded-xl transition-colors text-sm text-center">
                  Call Our Office
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Strengthen Your IT Operations?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Book a free, no-obligation consultation with our team. We will review your current environment and recommend a programme that fits your business — not a one-size-fits-all package.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              Schedule a Free Consultation
            </Link>
            <a href="tel:+17604699070" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              Call (760) 469-9070
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
