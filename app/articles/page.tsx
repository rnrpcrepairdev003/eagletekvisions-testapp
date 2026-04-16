import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'IT Support Articles – Eagletek Visions',
  description: 'Browse our IT support and repair articles — expert guides on computer repair, virus removal, data recovery, network setup, and more.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Support Centre</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            IT Support & Repair Articles
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            Expert guides on our most common services — from computer repair and virus removal to data recovery and network setup.
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
                href={`/articles/${article.slug}`}
                className="group bg-white border border-[#e0e0e0] rounded-2xl p-7 card-hover flex flex-col shadow-sm"
              >
                <div className="w-11 h-11 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon name={article.icon} className="w-5 h-5 text-[#e87c5a]" />
                </div>
                <span className="text-xs text-[#e87c5a] font-semibold uppercase tracking-wider mb-3">
                  {article.badge}
                </span>
                <h2 className="text-[#1c1c1c] font-bold text-base mb-3 group-hover:text-[#e87c5a] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-[#666666] text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#eeeeee]">
                  <span className="text-[#e87c5a] text-xs font-semibold">{article.pricing}</span>
                  <span className="text-[#aaaaaa] text-xs group-hover:text-[#e87c5a] transition-colors">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Don't See What You Need?</h2>
          <p className="text-[#aaaaaa] max-w-xl mx-auto mb-8">
            We handle a wide range of IT issues. Contact us and we'll let you know if we can help.
          </p>
          <Link href="/contact" className="inline-flex bg-[#e87c5a] hover:bg-[#d06848] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
