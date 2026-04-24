import type { Metadata } from 'next'
import ArticlesClient from './ArticlesClient'

export const metadata: Metadata = {
  title: 'IT Knowledge Base | Guides for Business Owners & IT Managers',
  description: 'Technical guides, decision frameworks, and IT best practices written by Eagletek Visions engineers — covering managed IT, cloud, cybersecurity, and more.',
  openGraph: {
    title: 'IT Knowledge Base | Eagletek Visions',
    description: 'Technical guides and IT decision frameworks written by certified engineers — for business owners and IT managers.',
  },
}

export default function ArticlesPage() {
  return <ArticlesClient />
}
