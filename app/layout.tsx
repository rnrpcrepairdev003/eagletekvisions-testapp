import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://eagletekvisions.com'),
  title: {
    default: 'Eagletek Visions | Managed IT Services & AI Consulting – Palm Desert, CA',
    template: '%s | Eagletek Visions',
  },
  description:
    'Eagletek Visions delivers managed IT services, AI consulting, and cybersecurity for businesses in Palm Desert and the Coachella Valley. Enterprise-grade IT with local accountability.',
  keywords: [
    'managed IT services', 'IT consulting', 'AI consulting', 'cybersecurity', 'cloud migration',
    'IT infrastructure', 'Palm Desert IT', 'Coachella Valley IT', 'business IT services',
    'API integration', 'Microsoft 365', 'enterprise IT solutions',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Eagletek Visions',
    title: 'Eagletek Visions | Managed IT Services & AI Consulting',
    description: 'Enterprise-grade managed IT, AI consulting, and cybersecurity for growing businesses in Palm Desert, CA and beyond.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Eagletek Visions logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Eagletek Visions | Managed IT Services & AI Consulting',
    description: 'Enterprise-grade managed IT, AI consulting, and cybersecurity for growing businesses in Palm Desert, CA.',
    images: ['/logo.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://eagletekvisions.com/#organization',
  name: 'Eagletek Visions',
  url: 'https://eagletekvisions.com',
  logo: 'https://eagletekvisions.com/logo.png',
  image: 'https://eagletekvisions.com/logo.png',
  description: 'Eagletek Visions delivers managed IT services, AI consulting, and cybersecurity for businesses in Palm Desert and the Coachella Valley.',
  telephone: '+17604699070',
  email: 'support@eagletekvisions.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palm Desert',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7557,
    longitude: -116.3234,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '18:00' },
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
