import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Eagletek Visions',
  description: 'Eagletek Visions privacy policy — how we collect, use, and protect your personal information in compliance with California CCPA/CPRA requirements.',
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: '1. Introduction',
    content: [
      'Eagletek Visions ("Company," "we," "us," or "our") is committed to protecting the privacy of the individuals and businesses we serve. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website at eagletekvisions.com (the "Site"), contact us, or engage our services.',
      'By using our Site or engaging our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not access or use our Site or services.',
      'This Policy was last updated on April 18, 2026.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      'We collect information in the following categories:',
      '**Information You Provide Directly:** When you submit a contact form, request a consultation, or communicate with us, we may collect your name, job title, company name, business email address, phone number, and the content of your message or inquiry.',
      '**Automatically Collected Information:** When you visit our Site, we may automatically collect technical data including your IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and device identifiers. This information is collected through cookies, web beacons, and similar tracking technologies.',
      '**Service Delivery Information:** When you become a client, we may collect additional information necessary to deliver our services, including network configuration details, system inventory data, user account information for supported platforms, and business operational data relevant to the scope of your engagement.',
      '**Communications:** We retain records of email correspondence, support tickets, call logs, and other communications exchanged in the course of providing services.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: [
      'We use the information we collect for the following business purposes:',
      '**Service Delivery:** To provide, operate, maintain, and improve the IT and consulting services you have engaged us to perform.',
      '**Communications:** To respond to your inquiries, send service-related notices, provide technical support, and communicate updates relevant to your engagement.',
      '**Business Operations:** To process invoices, manage contracts, maintain client records, and administer our business relationships.',
      '**Site Improvement:** To analyze usage patterns, monitor the performance of our Site, diagnose technical problems, and improve the user experience.',
      '**Legal Compliance:** To comply with applicable laws, respond to lawful requests from public authorities, enforce our agreements, and protect our rights, property, and the safety of our clients and personnel.',
      '**Marketing Communications:** With your consent or where permitted by law, to send information about our services, industry insights, or updates that may be relevant to your business. You may opt out of marketing communications at any time.',
    ],
  },
  {
    title: '4. Legal Basis for Processing',
    content: [
      'We process your information on the following legal bases:',
      '**Contractual Necessity:** Processing is necessary to perform the services outlined in a Statement of Work, service agreement, or engagement letter with your organisation.',
      '**Legitimate Interests:** Processing is necessary for our legitimate business interests — such as improving our services, maintaining security, and managing our operations — provided those interests are not overridden by your rights.',
      '**Legal Obligation:** Processing is necessary to comply with applicable federal, state, or local law.',
      '**Consent:** Where required, we process information on the basis of your explicit consent, which you may withdraw at any time without affecting prior processing.',
    ],
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: [
      'Our Site may use cookies and similar technologies to enhance functionality and analyse traffic. Cookies are small text files stored on your device.',
      '**Essential Cookies:** Required for the Site to function correctly. These cannot be disabled.',
      '**Analytics Cookies:** Help us understand how visitors interact with our Site (e.g., Google Analytics). These cookies collect anonymised data and may be disabled via your browser settings or opt-out tools provided by the analytics provider.',
      '**Preference Cookies:** Store your preferences to personalise your experience on return visits.',
      'You may control cookie behaviour through your browser settings. Disabling cookies may affect certain Site functionality. We do not currently respond to "Do Not Track" signals, but we do not sell your personal information to third parties.',
    ],
  },
  {
    title: '6. Disclosure of Your Information',
    content: [
      'We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:',
      '**Service Providers:** We engage trusted third-party vendors who perform functions on our behalf, such as cloud hosting, email delivery, accounting software, and project management platforms. These vendors are contractually obligated to use your information only as directed by us and to maintain appropriate security.',
      '**Technology Partners:** To deliver certain services, we may share relevant technical details with hardware vendors, software publishers, or platform providers. We share only what is necessary for service delivery.',
      '**Legal Requirements:** We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, prevent fraud, or respond to an emergency.',
      '**Business Transfers:** In the event of a merger, acquisition, asset sale, or restructuring, your information may be transferred as part of that transaction. We will notify you before your information is subject to a different privacy policy.',
      '**With Your Consent:** We may share your information with other parties when you have given us explicit permission to do so.',
    ],
  },
  {
    title: '7. California Privacy Rights (CCPA / CPRA)',
    content: [
      'If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA). These rights include:',
      '**Right to Know:** You may request that we disclose the categories and specific pieces of personal information we have collected about you, the sources from which it was collected, the purposes for which it was used, and the categories of third parties with whom it was shared.',
      '**Right to Delete:** You may request that we delete personal information we have collected from you, subject to certain exceptions (e.g., information required to complete a transaction, comply with a legal obligation, or for security purposes).',
      '**Right to Correct:** You may request that we correct inaccurate personal information we maintain about you.',
      '**Right to Opt Out of Sale or Sharing:** We do not sell or share personal information for cross-context behavioural advertising. If this practice changes, we will update this Policy and provide a clear opt-out mechanism.',
      '**Right to Limit Use of Sensitive Personal Information:** We collect sensitive personal information (such as network credentials or financial information) only to the extent necessary to provide contracted services, and we do not use it for any secondary purpose.',
      '**Right to Non-Discrimination:** We will not discriminate against you for exercising your privacy rights. We will not deny services, charge different prices, or provide a lower quality of service because you exercised a right under the CCPA.',
      'To exercise any of these rights, contact us at privacy@eagletekvisions.com or (760) 469-9070. We will verify your identity before processing your request and respond within 45 calendar days. If we require additional time, we will notify you in writing.',
    ],
  },
  {
    title: '8. Data Retention',
    content: [
      'We retain your information only as long as necessary to fulfil the purposes for which it was collected, to comply with legal obligations, resolve disputes, and enforce our agreements.',
      'Client engagement records, including contracts, invoices, and service documentation, are generally retained for a minimum of seven (7) years following the conclusion of an engagement, consistent with California commercial and tax law requirements.',
      'Website analytics data is retained in anonymised or aggregated form. Contact form submissions and pre-engagement inquiries are retained for up to two (2) years.',
      'Upon expiration of the applicable retention period, we securely delete or de-identify personal information in accordance with our data disposal procedures.',
    ],
  },
  {
    title: '9. Data Security',
    content: [
      'We implement commercially reasonable administrative, technical, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, and destruction. Security measures include, but are not limited to:',
      '— Encrypted transmission of data in transit (TLS/HTTPS)',
      '— Access controls limiting data access to authorised personnel with a business need',
      '— Regular security assessments and vulnerability reviews',
      '— Employee training on data handling and security practices',
      '— Secure, access-controlled systems for client credential and configuration data',
      'No method of transmission or electronic storage is 100% secure. While we strive to protect your information using industry-standard practices, we cannot guarantee absolute security. In the event of a data breach that affects your rights or freedoms, we will notify affected individuals as required by applicable law.',
    ],
  },
  {
    title: '10. Third-Party Links and Services',
    content: [
      'Our Site may contain links to third-party websites, tools, or platforms. This Privacy Policy does not apply to those external sites or services. We encourage you to review the privacy policies of any third-party services you access.',
      'We are not responsible for the privacy practices, content, or security of third-party websites, even if accessed through a link on our Site.',
    ],
  },
  {
    title: '11. Children\'s Privacy',
    content: [
      'Our Site and services are directed exclusively at businesses and business professionals. We do not knowingly collect personal information from individuals under the age of 16.',
      'If we learn that we have inadvertently collected personal information from a minor under 16, we will take prompt steps to delete that information from our records. If you believe we have collected such information, please contact us immediately at privacy@eagletekvisions.com.',
    ],
  },
  {
    title: '12. International Visitors',
    content: [
      'Our Site is operated in the United States. If you access our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers and central databases are operated.',
      'By using our Site, you consent to the transfer of your information to the United States and understand that U.S. privacy laws may differ from those in your jurisdiction.',
    ],
  },
  {
    title: '13. Changes to This Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, provide notice through our Site or direct communication.',
      'Your continued use of our Site or services following the posting of a revised Privacy Policy constitutes your acceptance of the updated terms. We encourage you to review this Policy periodically.',
    ],
  },
  {
    title: '14. Contact Us',
    content: [
      'If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:',
      'Eagletek Visions',
      'Email: privacy@eagletekvisions.com',
      'Phone: (760) 469-9070',
      'Business Hours: Monday–Saturday, 9:00 AM – 6:00 PM (Pacific Time)',
      'For California residents exercising CCPA rights, please reference "CCPA Privacy Request" in your communication so we can prioritise and route your request appropriately.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="max-w-3xl">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed">
              This Privacy Policy describes how Eagletek Visions collects, uses, and protects your
              information in accordance with California law and applicable federal privacy regulations.
            </p>
            <p className="mt-4 text-[#666666] text-sm">Last Updated: April 18, 2026</p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white border border-[#eeeeee] rounded-2xl p-8 shadow-sm border-l-4 border-l-[#e87c5a]"
            >
              <h2 className="text-[#1c1c1c] font-bold text-base mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((para, i) => {
                  if (para.startsWith('**') && para.includes(':**')) {
                    const colonIndex = para.indexOf(':**')
                    const bold = para.slice(2, colonIndex)
                    const rest = para.slice(colonIndex + 3)
                    return (
                      <p key={i} className="text-[#555555] text-sm leading-relaxed">
                        <span className="font-semibold text-[#1c1c1c]">{bold}:</span>{rest}
                      </p>
                    )
                  }
                  if (para.startsWith('—')) {
                    return (
                      <p key={i} className="text-[#555555] text-sm leading-relaxed pl-4">{para}</p>
                    )
                  }
                  return (
                    <p key={i} className="text-[#555555] text-sm leading-relaxed">{para}</p>
                  )
                })}
              </div>
            </div>
          ))}

          <p className="text-center text-[#aaaaaa] text-xs pt-4 pb-2">
            For our Terms of Service, visit{' '}
            <Link href="/terms" className="text-[#e87c5a] hover:underline">eagletekvisions.com/terms</Link>.
            {' '}Questions? <Link href="/contact" className="text-[#e87c5a] hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
