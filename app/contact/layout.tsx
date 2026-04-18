import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Free IT Assessment – Palm Desert, CA',
  description: 'Get in touch with Eagletek Visions for a free IT assessment. Reach our Palm Desert team by phone at (760) 469-9070 or submit a message — Mon–Sat 9AM–6PM.',
  openGraph: {
    title: 'Contact Eagletek Visions | Free IT Assessment',
    description: 'Schedule a free IT assessment with Eagletek Visions. Available Mon–Sat 9AM–6PM in Palm Desert, CA — no obligation, no automated systems.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
