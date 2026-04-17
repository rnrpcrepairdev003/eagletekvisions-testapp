import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service – Eagletek Visions',
  description: 'Terms of Service governing the use of Eagletek Visions IT consulting, managed IT, cybersecurity, and AI services.',
}

const lastUpdated = 'April 18, 2026'

const sections = [
  {
    title: '1. Services',
    content: [
      'Eagletek Visions provides managed IT services, IT infrastructure design and deployment, AI consulting, cybersecurity assessments and programmes, cloud migration and management, API integration, and related technology professional services (collectively, "Services"). The specific scope of Services provided to each Client is defined in a separate Statement of Work ("SOW"), Service Agreement, or engagement confirmation issued by Eagletek Visions.',
      'All Services are provided exclusively to business entities and organisations operating within the State of California, unless a separate written agreement explicitly extends service availability to other jurisdictions. Eagletek Visions does not provide consumer services as defined under the California Consumer Legal Remedies Act.',
      'Eagletek Visions reserves the right to modify, suspend, or discontinue any Service offering at any time with reasonable notice to affected Clients. Material changes to ongoing managed services will be communicated no less than 30 days in advance.',
    ],
  },
  {
    title: '2. Engagement and Scope of Work',
    content: [
      'All service engagements commence upon execution of a written SOW, service order, or written confirmation from an authorised Eagletek Visions representative. Verbal instructions, informal requests, or communications via SMS or messaging platforms do not constitute an authorised change of scope unless confirmed in writing by an authorised Company representative.',
      'Any changes to the agreed scope of work must be documented via a written Change Order signed by both parties prior to the performance of additional work. Eagletek Visions will not be held responsible for delays or cost overruns arising from scope changes that were not formally approved.',
      'Eagletek Visions operates on a best-effort basis for all turnaround time estimates. Completion timelines are projections based on available information at the time of scoping and are not contractual guarantees unless explicitly designated as such in the SOW. Factors beyond our reasonable control — including hardware availability, third-party vendor delays, and software dependencies — may extend delivery timelines.',
    ],
  },
  {
    title: '3. Remote Access and RMM Authorization',
    content: [
      'By engaging Eagletek Visions for managed IT, remote support, or monitoring services, the Client expressly authorises Eagletek Visions to remotely access, view, manage, and operate the Client\'s devices, systems, and network infrastructure using secure remote access or Remote Monitoring and Management ("RMM") tools.',
      'Remote access may include, but is not limited to: logging into systems, viewing files and configurations, installing or removing software, deploying patches and updates, rebooting systems, and making configuration changes. Remote sessions may be attended (with a Client representative present) or unattended (performed in the background as part of ongoing managed services), as required to fulfil the contracted services.',
      'The Client represents and warrants that it has the legal authority to grant access to all systems, devices, and data made available to Eagletek Visions. The Client agrees to indemnify Eagletek Visions against any claims arising from access performed in accordance with this authorisation. Eagletek Visions will not access Client systems for any purpose other than delivering the contracted services or responding to a documented support request.',
      'Remote access is performed over encrypted connections. RMM agents installed on Client devices are used exclusively for managed service delivery and are removed upon termination of the applicable service plan upon Client request.',
    ],
  },
  {
    title: '4. Client Responsibilities',
    content: [
      'The Client agrees to provide Eagletek Visions with timely access to systems, infrastructure, credentials, documentation, and personnel necessary to perform the agreed Services. Delays in providing access or information that materially impede service delivery will not be the responsibility of Eagletek Visions and may result in revised timelines or additional fees.',
      'The Client is responsible for maintaining current, tested backups of all data prior to the commencement of any service engagement. Eagletek Visions will exercise professional care in handling Client data; however, the Client acknowledges that technology services carry inherent risk, and the ultimate responsibility for data integrity and business continuity planning rests with the Client.',
      'The Client must disclose any specific deadlines, regulatory obligations, compliance requirements, or time-sensitive dependencies in writing before the commencement of services. Deadlines or dependencies disclosed after services have commenced shall be considered void and shall not alter the priority or execution timeline of ongoing work unless agreed to in writing by an authorised Eagletek Visions representative.',
      'The Client agrees to use Eagletek Visions services only for lawful business purposes and in compliance with all applicable federal, state, and local laws and regulations. Eagletek Visions reserves the right to immediately terminate any engagement where the Client is found to be using services for unlawful, fraudulent, or harmful activities.',
    ],
  },
  {
    title: '5. Fees, Payment, and Billing',
    content: [
      'Fees for all Services are as set forth in the applicable SOW or service agreement. Managed IT service plans are billed monthly in advance. Project-based and professional services engagements are billed as specified in the SOW, which may include milestone billing, net-30 terms, or upfront deposits for hardware procurement.',
      'Hardware, software licences, and third-party services procured by Eagletek Visions on behalf of the Client require upfront payment or an approved purchase order prior to procurement. Eagletek Visions does not absorb procurement costs on behalf of Clients.',
      'Invoices are due upon receipt unless alternative payment terms are specified in writing. Accounts that remain unpaid for more than 30 days from the invoice date may be subject to a late fee of 1.5% per month on the outstanding balance. Eagletek Visions reserves the right to suspend services for accounts with invoices outstanding beyond 45 days.',
      'All fees are exclusive of applicable taxes. The Client is responsible for any sales, use, or other taxes applicable to the Services received, except for taxes based on Eagletek Visions\' net income.',
      'Discounts, promotional pricing, or credits are only valid when explicitly confirmed in a written quote or agreement and applied at the time of payment. Discounts not applied at the time of payment receipt are forfeited.',
    ],
  },
  {
    title: '6. Service Level Agreements',
    content: [
      'Response time SLAs for managed IT clients are as defined in the applicable service plan or SOW. Eagletek Visions will make commercially reasonable efforts to meet all SLA commitments. SLA credits, where applicable, are the sole and exclusive remedy for SLA failures and do not entitle the Client to terminate the agreement for cause.',
      'SLA obligations are suspended during periods where service delivery is impaired by circumstances outside the control of Eagletek Visions, including but not limited to Client-caused outages, third-party infrastructure failures, force majeure events, or the Client\'s failure to fulfil its responsibilities under this Agreement.',
      'All project deliverables and service work performed by Eagletek Visions are backed by a 90-day service guarantee. If a deliverable fails to perform in accordance with its documented specification within the 90-day period, Eagletek Visions will remediate the issue at no additional charge. This guarantee does not apply to issues caused by Client modifications, third-party changes, or events outside the original scope of work.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'All tools, frameworks, methodologies, templates, and pre-existing intellectual property used or developed by Eagletek Visions in the delivery of Services remain the exclusive property of Eagletek Visions. The Client is granted a non-exclusive, non-transferable licence to use any custom deliverables created specifically for the Client under the applicable SOW, limited to the Client\'s internal business operations.',
      'The Client retains ownership of all data, documents, and materials provided to Eagletek Visions for the purpose of service delivery. Eagletek Visions will not use Client data for any purpose other than delivering the contracted Services.',
      'Neither party may use the other\'s name, trademarks, logos, or branding in any public communication, marketing material, or press release without prior written consent.',
    ],
  },
  {
    title: '8. Confidentiality',
    content: [
      'Each party agrees to hold in strict confidence all Confidential Information received from the other party and to use such information solely for the purpose of performing obligations under this Agreement. "Confidential Information" means any non-public technical, business, financial, or operational information disclosed by one party to the other, whether orally, in writing, or through access to systems.',
      'Confidentiality obligations do not apply to information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was rightfully known to the receiving party before disclosure; (c) is independently developed without reference to the disclosing party\'s information; or (d) is required to be disclosed by law, regulation, or court order, provided that the receiving party provides prompt written notice to enable the disclosing party to seek a protective order.',
      'These confidentiality obligations survive the termination or expiration of this Agreement for a period of three (3) years.',
    ],
  },
  {
    title: '9. Data Security and Handling',
    content: [
      'Eagletek Visions implements and maintains commercially reasonable technical and organisational security measures designed to protect Client data against unauthorised access, disclosure, alteration, or destruction. These measures include, but are not limited to, access controls, encryption in transit and at rest where applicable, and regular security assessments.',
      'Eagletek Visions does not guarantee the absolute security of any data. No method of electronic transmission or storage is 100% secure. In the event of a data security incident that affects Client data, Eagletek Visions will notify the Client without undue delay and cooperate in the investigation and remediation of the incident.',
      'Eagletek Visions will not sell, rent, or disclose Client data to third parties except as required to deliver the contracted Services, as required by applicable law, or as expressly authorised by the Client in writing.',
    ],
  },
  {
    title: '10. Warranty Disclaimer',
    content: [
      'EXCEPT AS EXPRESSLY SET FORTH IN A SIGNED SERVICE AGREEMENT OR STATEMENT OF WORK, EAGLETEK VISIONS PROVIDES ALL SERVICES ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EAGLETEK VISIONS EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'Eagletek Visions does not warrant that Services will be uninterrupted, error-free, or completely secure, or that all defects will be corrected. Technology services involve inherent complexity and risk, and results may vary based on the Client\'s existing infrastructure, third-party dependencies, and factors outside Eagletek Visions\' control.',
    ],
  },
  {
    title: '11. Limitation of Liability',
    content: [
      'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EAGLETEK VISIONS, ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE SERVICES — ARISING OUT OF OR RELATED TO THIS AGREEMENT, EVEN IF EAGLETEK VISIONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      'THE TOTAL CUMULATIVE LIABILITY OF EAGLETEK VISIONS ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT TO EAGLETEK VISIONS IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.',
      'Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, the limitations above shall apply to the fullest extent permitted by law.',
    ],
  },
  {
    title: '12. Indemnification',
    content: [
      'The Client agrees to indemnify, defend, and hold harmless Eagletek Visions and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or related to: (a) the Client\'s breach of this Agreement; (b) the Client\'s negligence or wilful misconduct; (c) the Client\'s violation of any applicable law or regulation; or (d) the Client\'s use of the Services in a manner not authorised by this Agreement.',
    ],
  },
  {
    title: '13. Term and Termination',
    content: [
      'This Agreement is effective from the date the Client first engages Eagletek Visions services and continues until terminated by either party in accordance with this section. Managed IT service plans operate on a monthly subscription basis and may be terminated by either party with 30 days written notice. Annual plans may be terminated by the Client with 60 days written notice prior to the renewal date.',
      'Either party may terminate this Agreement immediately upon written notice if the other party: (a) materially breaches this Agreement and fails to cure such breach within 15 days of written notice; (b) becomes insolvent, makes an assignment for the benefit of creditors, or is subject to bankruptcy or receivership proceedings; or (c) engages in fraudulent, illegal, or harmful conduct.',
      'Upon termination, Eagletek Visions will provide reasonable transition assistance to the Client for a period of up to 30 days at the Client\'s request, billed at the then-current professional services rate. All fees accrued prior to termination are due and payable immediately upon termination.',
    ],
  },
  {
    title: '14. Right to Refuse Service',
    content: [
      'Eagletek Visions reserves the right to refuse, suspend, or terminate service to any Client at its sole discretion, including but not limited to circumstances involving: unsafe or hazardous working conditions; abusive, threatening, or harassing conduct toward Eagletek Visions personnel; requests to perform illegal activities or services involving unlawfully obtained data or systems; or situations where providing the service would violate applicable law or create undue risk to Eagletek Visions or third parties.',
      'In the event service is refused or terminated due to Client conduct, any fees paid for services not yet rendered may be refunded at the discretion of Eagletek Visions, less any costs already incurred.',
    ],
  },
  {
    title: '15. Force Majeure',
    content: [
      'Neither party shall be liable for any failure or delay in performance under this Agreement to the extent such failure or delay is caused by circumstances beyond that party\'s reasonable control, including but not limited to acts of God, natural disasters, pandemic, government action, power failures, internet or telecommunications outages, civil unrest, or acts of war or terrorism ("Force Majeure Event").',
      'The affected party must notify the other party in writing as soon as practicable following the occurrence of a Force Majeure Event and resume performance as soon as reasonably practicable. If a Force Majeure Event prevents performance for more than 60 consecutive days, either party may terminate the affected engagement upon 10 days written notice without liability.',
    ],
  },
  {
    title: '16. Governing Law and Dispute Resolution',
    content: [
      'This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any dispute, claim, or controversy arising out of or relating to this Agreement — including its validity, interpretation, or enforcement — shall first be subject to good-faith negotiation between the parties for a period of 30 days following written notice of the dispute.',
      'If the dispute is not resolved through negotiation, it shall be submitted to binding arbitration administered by JAMS in Riverside County, California, in accordance with JAMS\' Streamlined Arbitration Rules and Procedures. The arbitration shall be conducted by a single arbitrator, and the award shall be final and binding. Nothing in this section prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction.',
      'To the extent arbitration does not apply or is waived, the parties irrevocably consent to the exclusive jurisdiction of the state and federal courts located in Riverside County, California.',
    ],
  },
  {
    title: '17. Miscellaneous',
    content: [
      'This Agreement, together with any applicable SOW or service agreement, constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior or contemporaneous agreements, representations, and understandings, whether oral or written.',
      'If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.',
      'Eagletek Visions may update these Terms of Service from time to time. Material changes will be communicated to active Clients via email or written notice at least 30 days prior to taking effect. Continued use of Services after the effective date of updated Terms constitutes acceptance of the updated Terms.',
      'Failure by Eagletek Visions to enforce any provision of this Agreement shall not constitute a waiver of future enforcement of that or any other provision.',
    ],
  },
  {
    title: '18. Contact',
    content: [
      'Questions regarding these Terms of Service should be directed to:',
      'Eagletek Visions\nPalm Desert, CA\nPhone: (760) 469-9070\nEmail: support@eagletekvisions.com',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="max-w-3xl">
            <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-[#aaaaaa] text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className="py-16 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">

            <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
              <p className="text-[#555555] text-sm leading-relaxed">
                These Terms of Service (&quot;Agreement&quot;) constitute a legally binding agreement between Eagletek Visions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a technology services provider headquartered in Palm Desert, California, and the client or organisation (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) accessing or purchasing any services offered by Eagletek Visions. By engaging our services, executing a service agreement, or otherwise accessing our platforms, you agree to be bound by these Terms. If you do not agree, do not use our services.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm">
                <h2 className="text-[#1c1c1c] font-extrabold text-base mb-5 border-l-4 border-[#e87c5a] pl-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-[#555555] text-sm leading-relaxed whitespace-pre-line">{para}</p>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ── FOOTER NOTE ──────────────────────────────── */}
      <section className="py-12 bg-[#1c1c1c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#555555] text-xs leading-relaxed max-w-2xl mx-auto">
            These Terms of Service reflect the general terms governing Eagletek Visions service engagements. Individual Statements of Work may include additional terms that supersede these general Terms where applicable. Questions? Contact us at{' '}
            <a href="mailto:support@eagletekvisions.com" className="text-[#e87c5a] hover:text-[#d06848] transition-colors">
              support@eagletekvisions.com
            </a>.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <Link href="/privacy" className="text-[#555555] hover:text-[#e87c5a] text-xs transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-[#555555] hover:text-[#e87c5a] text-xs transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
