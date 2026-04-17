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

  return (
    <>
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
                <div key={i} className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm space-y-5">
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
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="space-y-6">

              {/* Service card */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm sticky top-24">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center">
                    <Icon name={article.icon} className="w-5 h-5 text-[#e87c5a]" />
                  </div>
                  <span className="text-xs text-[#e87c5a] font-semibold uppercase tracking-wider">{article.badge}</span>
                </div>
                <h3 className="text-[#1c1c1c] font-extrabold text-base mb-4">What&apos;s Included</h3>
                <ul className="space-y-2.5 mb-6">
                  {article.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#444444] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#eeeeee] pt-5 mb-5">
                  <p className="text-[#aaaaaa] text-xs mb-1">Starting price</p>
                  <p className="text-2xl font-extrabold text-[#1c1c1c]">{article.pricing}</p>
                </div>
                <Link href="/contact" className="block bg-[#e87c5a] hover:bg-[#d06848] text-white text-center font-semibold py-3 rounded-xl transition-colors text-sm">
                  Book This Service
                </Link>
                <p className="text-[#aaaaaa] text-xs text-center mt-3">No obligation. No commitment.</p>
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
              <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-2">Need Expert Help?</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Questions About {article.badge}?
              </h2>
              <p className="text-[#aaaaaa] max-w-lg">
                Our certified technicians are available Mon–Sat 9AM–6PM. Call us directly for a free consultation — no automated systems, just real experts.
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
