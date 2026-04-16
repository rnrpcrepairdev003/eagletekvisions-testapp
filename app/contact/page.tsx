'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '@/components/Icon'

const contactMethods = [
  { iconName: 'phone', title: 'Phone', detail: '(760) 469-9070', sub: 'Mon–Sat 9AM–6PM', href: 'tel:+17604699070' },
  { iconName: 'mail', title: 'Email', detail: 'support@eagletekvisions.com', sub: 'We reply within 2 business hours', href: 'mailto:support@eagletekvisions.com' },
  { iconName: 'chat', title: 'Remote Support', detail: 'Same-day sessions available', sub: 'Book online and connect in minutes', href: null },
]

const services = [
  'Computer Repair', 'Virus & Malware Removal', 'Data Recovery', 'Laptop Repair',
  'Screen Replacement', 'Network Setup', 'Remote Support', 'Password Recovery',
  'Computer Tune-Up', 'Business IT / Managed IT', 'AI Consulting', 'Cloud Solutions',
  'API Integration', 'Cybersecurity', 'Other',
]

const trustPoints = [
  'Free diagnostic on all repair services',
  '90-day warranty on all repairs',
  'No fix, no fee on data recovery',
  'Transparent pricing — no surprises',
  'Certified technicians',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── DARK HERO ────────────────────────────────── */}
      <section className="hero-dark hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e87c5a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative text-center">
          <p className="text-[#e87c5a] text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Let's Talk Technology
          </h1>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a quick repair or a full strategic IT assessment — we're ready to help.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────── */}
      <section className="py-16 bg-[#f7f7f7] border-b border-[#eeeeee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left — contact info */}
            <div className="space-y-5">
              <h2 className="text-xl font-extrabold text-[#1c1c1c] mb-6">Contact Us Directly</h2>

              {contactMethods.map((method) => (
                <div key={method.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-[#e87c5a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={method.iconName} className="w-5 h-5 text-[#e87c5a]" />
                  </div>
                  <div>
                    <p className="text-[#1c1c1c] font-semibold text-sm mb-1">{method.title}</p>
                    {method.href ? (
                      <a href={method.href} className="text-[#e87c5a] hover:text-[#d06848] text-sm font-medium transition-colors">
                        {method.detail}
                      </a>
                    ) : (
                      <p className="text-[#e87c5a] text-sm font-medium">{method.detail}</p>
                    )}
                    <p className="text-[#aaaaaa] text-xs mt-0.5">{method.sub}</p>
                  </div>
                </div>
              ))}

              {/* Trust points */}
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                <p className="text-[#1c1c1c] font-semibold text-sm mb-4">Why Choose Eagletek Visions?</p>
                <ul className="space-y-3">
                  {trustPoints.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#555555] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#1c1c1c] mb-3">Message Received!</h2>
                  <p className="text-[#666666] max-w-sm mx-auto mb-8 text-sm">
                    Thanks for reaching out. A member of our team will get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="text-[#e87c5a] hover:text-[#d06848] text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-8 shadow-sm">
                  <h2 className="text-xl font-extrabold text-[#1c1c1c] mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[#555555] font-medium mb-1.5" htmlFor="name">
                          Full Name <span className="text-[#e87c5a]">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange} placeholder="John Smith"
                          className="w-full bg-white border border-[#e0e0e0] focus:border-[#e87c5a] focus:ring-1 focus:ring-[#e87c5a]/20 rounded-xl px-4 py-3 text-[#1c1c1c] text-sm placeholder-[#cccccc] outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#555555] font-medium mb-1.5" htmlFor="email">
                          Email Address <span className="text-[#e87c5a]">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange} placeholder="john@company.com"
                          className="w-full bg-white border border-[#e0e0e0] focus:border-[#e87c5a] focus:ring-1 focus:ring-[#e87c5a]/20 rounded-xl px-4 py-3 text-[#1c1c1c] text-sm placeholder-[#cccccc] outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[#555555] font-medium mb-1.5" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange} placeholder="(555) 000-0000"
                          className="w-full bg-white border border-[#e0e0e0] focus:border-[#e87c5a] focus:ring-1 focus:ring-[#e87c5a]/20 rounded-xl px-4 py-3 text-[#1c1c1c] text-sm placeholder-[#cccccc] outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#555555] font-medium mb-1.5" htmlFor="service">Service Required</label>
                        <select
                          id="service" name="service"
                          value={form.service} onChange={handleChange}
                          className="w-full bg-white border border-[#e0e0e0] focus:border-[#e87c5a] focus:ring-1 focus:ring-[#e87c5a]/20 rounded-xl px-4 py-3 text-[#1c1c1c] text-sm outline-none transition appearance-none"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#555555] font-medium mb-1.5" htmlFor="message">
                        Message <span className="text-[#e87c5a]">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Describe your issue or what you're looking for…"
                        className="w-full bg-white border border-[#e0e0e0] focus:border-[#e87c5a] focus:ring-1 focus:ring-[#e87c5a]/20 rounded-xl px-4 py-3 text-[#1c1c1c] text-sm placeholder-[#cccccc] outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit" disabled={loading}
                      className="w-full bg-[#e87c5a] hover:bg-[#d06848] disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="text-[#aaaaaa] text-xs text-center">
                      By submitting this form you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
