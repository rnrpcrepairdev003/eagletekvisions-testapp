import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'IT Knowledge Base | Guides for Business Owners & IT Managers',
  description: 'Technical guides, decision frameworks, and IT best practices written by Eagletek Visions engineers — covering managed IT, cloud, cybersecurity, and more.',
  openGraph: {
    title: 'IT Knowledge Base | Eagletek Visions',
    description: 'Technical guides and IT decision frameworks written by certified engineers — for business owners and IT managers.',
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Resource Library</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            IT Knowledge Base
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            Technical guides, decision frameworks, and best practices — written by our engineers for business owners and IT decision-makers.
          </p>
        </div>
      </section>

      {/* ── ARTICLES GRID ────────────────────────────── */}
      <section className="py-16 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/EV/${article.slug}`}
                className="group bg-white border border-[#e0e0e0] rounded-2xl card-hover flex flex-col shadow-sm overflow-hidden"
              >
                {/* Cover image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#111111] shrink-0">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon name={article.icon} className="w-12 h-12 text-[#e87c5a]/30" />
                    </div>
                  )}
                  {/* Badge overlay */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold bg-black/60 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {article.badge}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-[#e87c5a]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={article.icon} className="w-3.5 h-3.5 text-[#e87c5a]" />
                    </div>
                  </div>
                  <h2 className="text-[#1c1c1c] font-bold text-sm mb-2 group-hover:text-[#e87c5a] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-[#666666] text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-[#eeeeee]">
                    <span className="text-[#aaaaaa] text-xs group-hover:text-[#e87c5a] transition-colors">
                      Read article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Don&apos;t See What You Need?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            We handle a wide range of IT issues. Contact us and we&apos;ll let you know if we can help.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
