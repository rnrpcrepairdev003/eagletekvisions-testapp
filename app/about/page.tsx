import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'About Us – Eagletek Visions',
  description: 'Learn about Eagletek Visions — our mission, values, and the team behind our enterprise IT and AI consulting services.',
}

const values = [
  { iconName: 'target', title: 'Client-First Approach', description: 'Every recommendation we make is filtered through one question: is this genuinely the best solution for this client? We have no vendor quotas and no upsell pressure.' },
  { iconName: 'beaker', title: 'Technical Excellence', description: 'Our team pursues mastery, not adequacy. Certifications, continuous learning, and peer review are built into how we work — so you always get the best available expertise.' },
  { iconName: 'lock', title: 'Security by Default', description: 'We treat security as a foundational requirement, not an add-on. Every solution we design starts with a secure baseline and is hardened before delivery.' },
  { iconName: 'eye', title: 'Radical Transparency', description: 'We communicate clearly, price honestly, and deliver detailed documentation. You will never wonder what we did, why we did it, or what it cost.' },
  { iconName: 'chart', title: 'Outcome Driven', description: 'We measure success by the results we produce for your business — not by hours logged or tickets closed. Your outcomes are our KPIs.' },
  { iconName: 'users', title: 'Long-Term Partnership', description: 'We build relationships, not transactions. Our clients return because we understand their business context and proactively help them plan ahead.' },
]

const team = [
  { name: 'Kyle M.', role: 'Founder & Lead Engineer', description: 'Experienced IT professional and systems engineer with a background in enterprise infrastructure, cybersecurity, and AI integration. Founded Eagletek Visions to bring enterprise-quality IT services to businesses of all sizes.', initials: 'KM' },
  { name: 'Sarah T.', role: 'AI & Automation Specialist', description: 'Machine learning engineer focused on practical AI deployment — LLM integration, workflow automation, and data pipeline architecture for real-world business use cases.', initials: 'ST' },
  { name: 'James R.', role: 'Senior Network Engineer', description: 'Certified network architect with 12 years of experience designing secure, high-availability networks for healthcare, finance, and logistics industries.', initials: 'JR' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="max-w-3xl">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Technology Partners You Can Trust
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed">
              Eagletek Visions was built on a simple idea: businesses deserve the same quality of IT expertise that
              Fortune 500 companies take for granted — delivered with the responsiveness and accountability of a
              dedicated local partner.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-6">
                Elevating Businesses Through Intelligent Technology
              </h2>
              <div className="space-y-4 text-[#555555] leading-relaxed text-sm">
                <p>
                  We founded Eagletek Visions because we saw too many small and mid-sized businesses struggling with
                  outdated systems, insecure infrastructure, and technology decisions made without strategic context.
                  They were paying for IT support that fixed problems reactively — never preventing them.
                </p>
                <p>
                  Our mission is to change that. We provide proactive, strategic technology guidance alongside hands-on
                  technical execution — so our clients can focus on growing their business while we ensure their
                  technology stays secure, efficient, and aligned with their goals.
                </p>
                <p>
                  Whether you need a single laptop repaired today or a full AI-powered business transformation roadmap,
                  we bring the same commitment to quality, transparency, and long-term thinking to every engagement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: '500+', label: 'Clients Served' },
                { number: '99%', label: 'Satisfaction Rate' },
                { number: '10+', label: 'Years in IT' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-[#eeeeee] rounded-2xl p-8 text-center shadow-sm">
                  <p className="text-4xl font-extrabold text-[#e87c5a] mb-2">{stat.number}</p>
                  <p className="text-[#888888] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[#eeeeee] rounded-2xl p-7 shadow-sm">
                <div className="w-11 h-11 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon name={v.iconName} className="w-5 h-5 text-[#e87c5a]" />
                </div>
                <h3 className="text-[#1c1c1c] font-bold text-base mb-2">{v.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST AREAS ─────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Our Agents Specialise In</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              Our technicians cover the full spectrum of business IT — from day-to-day desktop support to enterprise infrastructure and cloud architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Hardware & Software Troubleshooting', description: 'Diagnosing and resolving hardware failures, OS issues, driver conflicts, and application errors across Windows, macOS, and Linux environments.' },
              { title: 'Network Setup & Architecture', description: 'Designing and deploying wired and wireless networks for home offices and business premises — including VLANs, firewalls, and secure Wi-Fi infrastructure.' },
              { title: 'Desktop IT Management', description: 'Endpoint provisioning, imaging, patch management, user account administration, and day-to-day desktop support for business workforces.' },
              { title: 'Server Infrastructure', description: 'On-premise and hybrid server deployment, Active Directory, virtualisation (VMware, Hyper-V), and ongoing server administration and monitoring.' },
              { title: 'Network Storage & Backup', description: 'NAS deployment, cloud backup configuration (Backblaze, Azure, AWS S3), disaster recovery planning, and automated backup verification.' },
              { title: 'Email & Collaboration Platforms', description: 'Microsoft 365 and Google Workspace setup, migration, administration, and security hardening — including email filtering and DLP policies.' },
              { title: 'Printer & Peripheral Management', description: 'Network printer configuration, fleet management, driver deployment, and multifunction device integration with business workflows.' },
              { title: 'Data Recovery & Continuity', description: 'Recovering data from failed drives and corrupted volumes, restoring from backups, and implementing continuity plans to prevent future data loss.' },
              { title: 'Home Office Consultations', description: 'Designing and optimising home office environments — reliable internet, secure networking, VPN access, and productivity hardware recommendations.' },
            ].map((area) => (
              <div key={area.title} className="bg-[#f7f7f7] border border-[#eeeeee] rounded-2xl p-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#e87c5a] mb-4" />
                <h3 className="text-[#1c1c1c] font-bold text-sm mb-2">{area.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c]">Meet the Experts</h2>
            <p className="mt-4 text-[#555555] max-w-xl mx-auto">
              A small, senior team with deep expertise across IT infrastructure, cybersecurity, and AI engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-[#eeeeee] rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#e87c5a] rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-5">
                  {member.initials}
                </div>
                <h3 className="text-[#1c1c1c] font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#e87c5a] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-[#666666] text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Let's Build Something Great Together</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            Ready to see how Eagletek Visions can strengthen your technology operations? Start with a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
