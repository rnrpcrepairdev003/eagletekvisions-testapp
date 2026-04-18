import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'IT Services | AI Consulting, Cybersecurity & Cloud Solutions',
  description: 'Enterprise IT services for growing businesses — managed IT, AI consulting, cloud migration, cybersecurity assessments, API integration, and IT infrastructure design. Palm Desert, CA.',
  openGraph: {
    title: 'IT Services | Eagletek Visions – Palm Desert, CA',
    description: 'Managed IT, AI consulting, cloud migration, cybersecurity, and infrastructure design for businesses in the Coachella Valley and beyond.',
  },
}

const services = [
  {
    id: 'ai-consulting', iconName: 'cpu', title: 'AI Consulting', badge: 'Artificial Intelligence',
    description: 'Harness the power of AI and machine learning to automate workflows, surface actionable insights, and unlock competitive advantages for your organisation.',
    features: ['AI readiness assessment and roadmap development', 'Large Language Model (LLM) integration and fine-tuning', 'Intelligent process automation (IPA) design and deployment', 'Custom AI model development and training', 'AI governance, ethics, and compliance frameworks', 'Staff training and AI adoption programmes'],
    cta: 'Book an AI Strategy Session',
  },
  {
    id: 'it-infrastructure', iconName: 'server', title: 'IT Infrastructure', badge: 'Infrastructure & Architecture',
    description: 'Design, deploy, and manage robust IT infrastructure that scales with your business — from on-premise data centres to modern hybrid cloud architectures.',
    features: ['Infrastructure architecture design and documentation', 'Server procurement, build, and deployment', 'Virtualisation and hypervisor management (VMware, Hyper-V)', 'Storage systems: SAN, NAS, and object storage', 'Backup and disaster recovery planning and implementation', 'Infrastructure monitoring and capacity planning'],
    cta: 'Discuss Your Infrastructure',
  },
  {
    id: 'project-management', iconName: 'clipboard', title: 'Project Management', badge: 'Technology Program Delivery',
    description: 'Expert technology project management to keep complex IT initiatives delivered on time, within budget, and firmly aligned with your business objectives.',
    features: ['Project scoping, planning, and stakeholder alignment', 'Agile and waterfall PM methodologies', 'Vendor and contractor coordination', 'Risk identification, mitigation, and change management', 'Budget tracking and executive reporting', 'Post-project documentation and knowledge transfer'],
    cta: 'Talk to a PM Expert',
  },
  {
    id: 'api-integration', iconName: 'link', title: 'API Integration', badge: 'Systems & Data Integration',
    description: 'Connect your business applications, data sources, and third-party platforms through secure, reliable API integrations that eliminate data silos and manual processes.',
    features: ['REST and GraphQL API design, development, and documentation', 'Third-party platform integrations (Salesforce, HubSpot, Stripe, etc.)', 'ETL pipeline development and data warehouse connections', 'Webhook architecture and event-driven integrations', 'API security: authentication, rate limiting, and monitoring', 'Legacy system integration and modernisation strategies'],
    cta: 'Explore Integration Options',
  },
  {
    id: 'data-security', iconName: 'lock', title: 'Data Security & Cybersecurity', badge: 'Cybersecurity',
    description: 'Protect your business, customers, and reputation with enterprise-grade cybersecurity services — from threat assessment and compliance to continuous monitoring and incident response.',
    features: ['Cybersecurity risk assessment and gap analysis', 'Penetration testing and vulnerability scanning', 'Zero trust architecture design and implementation', 'Compliance readiness: HIPAA, SOC 2, GDPR, PCI-DSS', 'Security Information and Event Management (SIEM)', 'Incident response planning and tabletop exercises'],
    cta: 'Get a Security Assessment',
  },
  {
    id: 'cloud-solutions', iconName: 'cloud', title: 'Cloud Solutions', badge: 'Cloud Architecture',
    description: 'Migrate to, optimise, and manage cloud environments on AWS, Azure, or Google Cloud — reducing costs, increasing agility, and improving resilience.',
    features: ['Cloud readiness assessment and migration planning', 'Lift-and-shift and re-architecture migrations', 'Multi-cloud and hybrid cloud architecture', 'Cloud cost optimisation and right-sizing', 'DevOps, CI/CD pipeline setup, and IaC (Terraform, Pulumi)', 'Managed cloud operations and ongoing optimisation'],
    cta: 'Plan Your Cloud Migration',
  },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://eagletekvisions.com/services#professional-service',
  name: 'Eagletek Visions IT Services',
  provider: { '@id': 'https://eagletekvisions.com/#organization' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Enterprise IT Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
    })),
  },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Enterprise IT Services for Modern Business
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            From AI-powered automation to cybersecurity hardening — every service is delivered by certified experts with a commitment to measurable outcomes.
          </p>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ───────────────────────────── */}
      <section className="py-12 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white border border-[#eeeeee] rounded-2xl p-8 lg:p-10 scroll-mt-20 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center">
                      <Icon name={service.iconName} className="w-5 h-5 text-[#e87c5a]" />
                    </div>
                    <span className="text-xs text-[#e87c5a] font-semibold uppercase tracking-wider bg-[#e87c5a]/8 border border-[#e87c5a]/20 rounded-full px-3 py-1">
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] mb-4">{service.title}</h2>
                  <p className="text-[#555555] leading-relaxed mb-8 text-sm">{service.description}</p>
                  <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                    {service.cta}
                  </Link>
                </div>

                {/* Right — feature list */}
                <div className="bg-[#f7f7f7] border border-[#eeeeee] rounded-xl p-6">
                  <p className="text-xs text-[#888888] font-semibold uppercase tracking-wider mb-4">What&apos;s Included</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#e87c5a]/15 flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#e87c5a]" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                          </svg>
                        </span>
                        <span className="text-[#444444] text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Book a free consultation and we'll help you identify the highest-impact technology improvements for your business.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
