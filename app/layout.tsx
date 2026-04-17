import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eagletek Visions – Enterprise IT Solutions & AI Consulting',
  description:
    'Eagletek Visions delivers enterprise-grade IT solutions, AI consulting, project management, API integration, and advanced cybersecurity for businesses of all sizes.',
  keywords:
    'IT consulting, AI solutions, enterprise IT, cybersecurity, project management, API integration, managed IT services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
