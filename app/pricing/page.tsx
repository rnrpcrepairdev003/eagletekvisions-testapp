import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing – Eagletek Visions',
  description: 'Transparent managed IT pricing for businesses. Proactive support, AI consulting, and enterprise IT services. No hidden fees.',
}

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

const faq = [
  { q: 'Are managed IT plans billed annually or monthly?', a: 'Both options are available. Monthly billing has no lock-in. Annual billing receives a 10% discount applied automatically.' },
  { q: 'Can I mix and match services?', a: 'Yes. Our managed IT plans are modular. You can add AI consulting, cloud management, or cybersecurity add-ons as your business grows.' },
  { q: 'What does onboarding look like?', a: 'We start with a full IT audit of your environment, then build a tailored support plan. Most organisations are fully onboarded within 5–7 business days.' },
  { q: 'Do you offer after-hours support?', a: 'Enterprise plans include 24/7 monitoring and support. Professional plans can add an after-hours add-on. Contact us for details.' },
  { q: 'How do you handle cybersecurity?', a: 'All managed plans include endpoint protection and patch management. Enterprise plans include threat monitoring, compliance frameworks (SOC 2, HIPAA, NIST), and incident response.' },
  { q: 'Can you support remote and hybrid teams?', a: 'Yes — our managed IT services are cloud-native and fully remote-capable. We manage endpoint fleets, VPNs, Microsoft 365/Google Workspace, and cloud infrastructure regardless of where your team works.' },
]

export default function PricingPage() {
  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Enterprise IT Pricing
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            Predictable monthly plans for managed IT, AI consulting, and cybersecurity — no hidden fees, no lock-in.
          </p>
        </div>
      </section>

      {/* ── MANAGED IT PLANS ─────────────────────────── */}
      <section className="py-20 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Managed IT Plans</p>
            <h2 className="text-3xl font-extrabold text-[#1c1c1c]">Choose Your Plan</h2>
            <p className="mt-3 text-[#555555] max-w-xl mx-auto text-sm">
              Proactive IT management, AI consulting, and enterprise-grade security — without the overhead of an in-house team.
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

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#eeeeee]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Pricing FAQ</p>
            <h2 className="text-3xl font-extrabold text-[#1c1c1c]">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm">
                <h3 className="text-[#1c1c1c] font-semibold mb-3 text-sm">{item.q}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Book a free consultation and we'll build a managed IT plan tailored to your organisation's size, stack, and goals.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
