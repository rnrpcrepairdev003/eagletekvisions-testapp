import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import { getArticleBySlug, getAllArticles } from '@/lib/articles'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} – Eagletek Visions`,
    description: article.metaDescription,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const relatedArticles = getAllArticles().filter((a) => a.slug !== params.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.coverImage,
    author: {
      '@type': 'Organization',
      name: 'Eagletek Visions',
      url: 'https://eagletekvisions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eagletek Visions',
      logo: { '@type': 'ImageObject', url: 'https://eagletekvisions.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://eagletekvisions.com/EV/${article.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eagletekvisions.com' },
      { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: 'https://eagletekvisions.com/EV/Articles' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://eagletekvisions.com/EV/${article.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <Link href="/EV/Articles" className="inline-flex items-center gap-2 text-[#aaaaaa] hover:text-white text-sm mb-8 transition-colors">
            ← Back to Articles
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#e87c5a]/15 rounded-xl flex items-center justify-center">
                <Icon name={article.icon} className="w-6 h-6 text-[#e87c5a]" />
              </div>
              <span className="text-xs text-[#e87c5a] font-semibold uppercase tracking-wider bg-[#e87c5a]/10 border border-[#e87c5a]/25 rounded-full px-3 py-1">
                {article.badge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-[#bbbbbb] text-base leading-relaxed">
              By <span className="text-white font-medium">Eagletek Visions Tech Team</span>
              <span className="mx-2 text-[#555555]">·</span>
              <span>{article.badge}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ──────────────────────────────── */}
      {article.coverImage && (
        <div className="bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
            <div className="relative w-full h-64 sm:h-[360px] overflow-hidden rounded-b-2xl shadow-lg">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* ── ARTICLE BODY ─────────────────────────────── */}
      <div className="bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── MAIN CONTENT ── */}
            <article className="lg:col-span-2 space-y-8">

              {/* Intro */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm">
                <p className="text-[#333333] text-base leading-8">{article.intro}</p>
              </div>

              {/* Sections */}
              {article.sections.map((section, i) => (
                <div key={i}>
                  <div className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm space-y-5">
                    <h2 className="text-xl font-extrabold text-[#1c1c1c] border-l-4 border-[#e87c5a] pl-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="text-[#444444] text-sm leading-7">{para}</p>
                    ))}

                    {/* Tips callout box */}
                    {section.tips && section.tips.length > 0 && (
                      <div className="bg-[#e87c5a]/6 border border-[#e87c5a]/20 rounded-xl p-5 mt-4">
                        <p className="text-[#e87c5a] text-xs font-bold uppercase tracking-widest mb-3">
                          Quick Tips
                        </p>
                        <ul className="space-y-2">
                          {section.tips.map((tip, k) => (
                            <li key={k} className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-[#e87c5a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-[#444444] text-sm leading-relaxed">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Inline image after this section */}
                  {article.inlineImages?.filter((img) => img.afterSection === i).map((img, k) => (
                    <div key={k} className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-sm mt-6">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ))}
                </div>
              ))}

              {/* Sources */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm">
                <h3 className="text-sm font-bold text-[#1c1c1c] uppercase tracking-widest mb-4">Sources & References</h3>
                <ul className="space-y-2">
                  {article.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#666666]">
                      <span className="text-[#e87c5a] shrink-0 font-bold">[{i + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#e87c5a] underline underline-offset-2 transition-colors"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* YouTube Videos */}
              {article.videos && article.videos.length > 0 && (
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm">
                  <h3 className="text-sm font-bold text-[#1c1c1c] uppercase tracking-widest mb-6">Related Videos</h3>
                  <div className="space-y-6">
                    {article.videos.map((video) => (
                      <div key={video.youtubeId}>
                        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-black">
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="mt-2.5 flex items-start gap-2">
                          <svg className="w-4 h-4 text-[#e87c5a] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          <div>
                            <p className="text-[#333333] text-sm font-medium leading-snug">{video.title}</p>
                            <p className="text-[#888888] text-xs mt-0.5">{video.channel} · YouTube</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Author & Credits */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
                {/* Author */}
                <div className="p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#e87c5a]/10 border border-[#e87c5a]/20 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[#e87c5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#e87c5a] font-bold uppercase tracking-widest mb-1">Written By</p>
                    <p className="text-[#1c1c1c] font-extrabold text-base">Eagletek Visions Tech Team</p>
                    <p className="text-[#666666] text-sm leading-relaxed mt-2">
                      Our engineering team is composed of certified IT professionals with experience across managed IT, cybersecurity, cloud infrastructure, and systems architecture. Articles are reviewed for technical accuracy before publication.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {['Microsoft Certified', 'Cisco Certified', 'AWS Practitioner', 'CompTIA Security+'].map((cert) => (
                        <span key={cert} className="text-xs bg-[#f7f7f7] border border-[#eeeeee] text-[#555555] px-2.5 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#eeeeee] mx-8" />

                {/* Credits */}
                <div className="px-8 py-6 space-y-3">
                  <p className="text-xs font-bold text-[#1c1c1c] uppercase tracking-widest mb-4">Credits</p>

                  {/* Photo credit */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#f7f7f7] border border-[#eeeeee] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#888888]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333]">Photography</p>
                      <p className="text-xs text-[#888888] mt-0.5">
                        Header and inline images sourced from{' '}
                        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-[#e87c5a] hover:underline">
                          Unsplash
                        </a>{' '}
                        — free-to-use photography under the{' '}
                        <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-[#e87c5a] hover:underline">
                          Unsplash License
                        </a>.
                      </p>
                    </div>
                  </div>

                  {/* Video credit */}
                  {article.videos && article.videos.length > 0 && (
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#f7f7f7] border border-[#eeeeee] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[#888888]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#333333]">Video Content</p>
                        <ul className="mt-1 space-y-0.5">
                          {article.videos.map((v) => (
                            <li key={v.youtubeId} className="text-xs text-[#888888]">
                              <span className="font-medium text-[#555555]">&ldquo;{v.title}&rdquo;</span>
                              {' '}by{' '}
                              <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v.channel)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#e87c5a] hover:underline"
                              >
                                {v.channel}
                              </a>
                              {' '}· YouTube
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="space-y-6">

              {/* Contact card */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm sticky top-24 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="headset" className="w-5 h-5 text-[#e87c5a]" />
                  </div>
                  <div>
                    <p className="text-[#1c1c1c] font-extrabold text-sm leading-snug">Speak with an IT Professional</p>
                    <p className="text-[#888888] text-xs mt-0.5">Eagletek Visions · Palm Desert, CA</p>
                  </div>
                </div>
                <p className="text-[#555555] text-sm leading-relaxed">
                  Have questions about what you read? Our IT team can review your specific situation and let you know the best path forward — no obligation.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block bg-[#e87c5a] hover:bg-[#d06848] text-white text-center font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    Send Us a Message
                  </Link>
                  <a
                    href="tel:+17604699070"
                    className="block border border-[#e0e0e0] hover:border-[#e87c5a] text-[#444444] hover:text-[#e87c5a] text-center font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    (760) 469-9070
                  </a>
                </div>
                <p className="text-[#aaaaaa] text-xs text-center">Mon–Sat 9AM–6PM · No automated systems</p>
              </div>

              {/* Knowledge base links */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                <p className="text-[#1c1c1c] font-bold text-xs uppercase tracking-widest mb-4">Knowledge Base</p>
                <ul className="space-y-3">
                  {[
                    { href: '/EV/business-it-services', label: 'Managed IT Services Guide' },
                    { href: '/EV/data-loss-and-recovery', label: 'Data Loss & Recovery' },
                    { href: '/EV/network-deployment-and-security', label: 'Network Deployment & Security' },
                    { href: '/EV/account-access-recovery-guide', label: 'Account Access Recovery' },
                  ].filter((l) => l.href !== `/EV/${article.slug}`).slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[#555555] hover:text-[#e87c5a] text-sm transition-colors leading-snug block">
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── CALL CTA ─────────────────────────────────── */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-2">Have a Question?</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Talk to an IT Professional
              </h2>
              <p className="text-[#aaaaaa] max-w-lg">
                Our IT team is available Mon–Sat 9AM–6PM. Reach us directly — no automated systems, no call queues, just a straightforward conversation about your situation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="tel:+17604699070"
                className="flex items-center gap-3 bg-[#e87c5a] hover:bg-[#d06848] text-white font-bold px-7 py-4 rounded-xl transition-colors text-sm"
              >
                <Icon name="phone" className="w-4 h-4" />
                (760) 469-9070
              </a>
              <Link href="/contact" className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-4 rounded-xl transition-colors text-sm">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white border-t border-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#1c1c1c] mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/EV/${a.slug}`} className="group bg-white border border-[#e0e0e0] rounded-2xl p-7 card-hover shadow-sm">
                  <div className="w-10 h-10 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={a.icon} className="w-5 h-5 text-[#e87c5a]" />
                  </div>
                  <h3 className="text-[#1c1c1c] font-bold text-sm group-hover:text-[#e87c5a] transition-colors mb-2 leading-snug">{a.title}</h3>
                  <p className="text-[#888888] text-xs">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
