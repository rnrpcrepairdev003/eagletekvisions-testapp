import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Managed IT Services Questions Answered',
  description: 'Answers to common questions about Eagletek Visions — managed IT pricing, onboarding process, response times, service coverage, and contract terms.',
  openGraph: {
    title: 'FAQ | Eagletek Visions Managed IT Services',
    description: 'Common questions about our managed IT services, AI consulting, pricing, and onboarding — answered by the Eagletek Visions team.',
  },
}

const faqSections = [
  {
    heading: 'General',
    items: [
      { q: 'What types of businesses do you work with?', a: 'We work with small and mid-sized businesses across a wide range of industries — including healthcare, finance, legal, logistics, retail, and professional services. Our solutions scale from sole traders to organisations with 100+ users.' },
      { q: 'Where are you located and do you offer on-site services?', a: 'We are based in Palm Desert, CA (Coachella Valley). We provide on-site services throughout the Inland Empire and Coachella Valley, and remote services nationwide.' },
      { q: 'How quickly can you respond to a new request?', a: 'For active managed IT clients, our standard SLA is 2–4 hours. Enterprise clients receive priority response. For new engagements, we typically respond to initial inquiries within one business day.' },
      { q: 'Do I need a long-term contract?', a: 'No. Monthly managed IT plans have no lock-in — you can cancel with 30 days notice. Annual plans receive a 10% discount.' },
    ],
  },
  {
    heading: 'Services & Scope',
    items: [
      { q: 'What does managed IT actually cover?', a: 'Our managed IT plans cover endpoint monitoring and management, security patching, antivirus and EDR, helpdesk support, network monitoring, Microsoft 365 / Google Workspace administration, and proactive maintenance. Enterprise plans add vCIO advisory, compliance programmes, and disaster recovery.' },
      { q: 'Can you help with cloud migration?', a: 'Yes. We design and execute cloud migrations to AWS, Azure, and Google Cloud — including infrastructure lift-and-shift, SaaS adoption, hybrid setups, and post-migration optimisation.' },
      { q: 'Do you handle cybersecurity?', a: 'Cybersecurity is embedded in everything we do. We offer threat assessments, endpoint protection, firewall configuration, compliance frameworks (SOC 2, HIPAA, NIST), and ongoing monitoring. All managed plans include a security baseline.' },
      { q: 'Can you support remote and hybrid teams?', a: 'Yes — our services are cloud-native and fully remote-capable. We manage distributed endpoint fleets, VPNs, cloud infrastructure, and collaboration platforms regardless of where your team is located.' },
      { q: 'Do you offer AI consulting?', a: 'Yes. We help businesses identify practical AI use cases, evaluate tools, integrate LLMs and automation into existing workflows, and build data pipelines. Our focus is on measurable ROI, not technology for its own sake.' },
    ],
  },
  {
    heading: 'Pricing & Billing',
    items: [
      { q: 'Are managed IT plans billed monthly or annually?', a: 'Both options are available. Monthly billing has no lock-in. Annual billing receives a 10% discount applied automatically at checkout.' },
      { q: 'Are there setup or onboarding fees?', a: 'There are no hidden setup fees. Some complex migrations or infrastructure deployments are quoted separately — we provide a detailed quote before any work begins.' },
      { q: 'Can I add services to an existing plan?', a: 'Yes. Our plans are modular. You can add AI consulting, cloud management, advanced cybersecurity, or additional users at any time. Changes take effect the next billing cycle.' },
      { q: 'Do you provide quotes before starting work?', a: 'Always. We provide detailed written quotes for all project work before any engagement begins. You approve the scope and cost before we proceed.' },
    ],
  },
  {
    heading: 'Onboarding & Support',
    items: [
      { q: 'What does onboarding look like?', a: 'We start with a full IT audit of your environment — devices, network, cloud accounts, and security posture. From there we build a tailored support plan. Most organisations are fully onboarded within 5–7 business days.' },
      { q: 'Will I have a dedicated point of contact?', a: 'Yes. Every client is assigned a dedicated account manager who is your single point of contact. You will have their direct line — no tickets, no call centres, no runaround.' },
      { q: 'Do you offer after-hours support?', a: 'Enterprise plans include 24/7 monitoring and on-call support. Professional plans can add an after-hours support add-on. Contact us for details and current availability.' },
      { q: 'What is your service guarantee?', a: 'All project work is backed by a 90-day service guarantee. If something we delivered does not perform as specified, we will fix it at no additional charge.' },
    ],
  },
]

const hours = [
  { day: 'Monday', time: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Help Centre</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our managed IT services, pricing, and how we work.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ─────────────────────────────── */}
      <section className="py-20 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FAQ content */}
            <div className="lg:col-span-2 space-y-12">
              {faqSections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-extrabold text-[#1c1c1c] mb-5 uppercase tracking-wider border-l-4 border-[#e87c5a] pl-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.q} className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm">
                        <h3 className="text-[#1c1c1c] font-semibold mb-3 text-sm">{item.q}</h3>
                        <p className="text-[#666666] text-sm leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar: hours + contact */}
            <div className="space-y-6">

              {/* Business Hours */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm sticky top-24">
                <h3 className="text-[#1c1c1c] font-extrabold text-sm uppercase tracking-widest mb-5">Business Hours</h3>
                <ul className="space-y-2.5">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center">
                      <span className="text-[#555555] text-sm font-medium">{h.day}</span>
                      <span className={`text-sm ${h.time === 'Closed' ? 'text-[#aaaaaa]' : 'text-[#1c1c1c] font-semibold'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#eeeeee] mt-6 pt-5 space-y-3">
                  <p className="text-[#888888] text-xs">Enterprise clients: 24/7 monitoring & on-call support included.</p>
                  <a
                    href="tel:+17604699070"
                    className="flex items-center justify-center gap-2 bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    (760) 469-9070
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 border border-[#e0e0e0] hover:border-[#e87c5a] text-[#555555] hover:text-[#e87c5a] font-medium py-3 rounded-xl transition-colors text-sm"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Still Have Questions?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Our team is available Monday through Saturday, 9AM–6PM. Reach out and we'll get back to you within one business day.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
