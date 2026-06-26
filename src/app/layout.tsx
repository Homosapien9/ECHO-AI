import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

// picked these two after way too long on fontpair.co, don't @ me
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://echo-sentient-core.example.com'),
  title: 'ECHO — The Sentient Core',
  description:
    'A cinematic Next.js 14 landing page for FrontEnd Battle 3.0 with responsive bento interactions, ref-only pricing updates, and deferred Three.js visuals.',
  keywords: ['ECHO', 'Next.js 14', 'AI interface', 'pricing matrix', 'Three.js', 'FrontEnd Battle 3.0'],
  openGraph: {
    title: 'ECHO — The Sentient Core',
    description: 'Sentient systems. Fast pricing swaps. Zero layout drama.',
    url: 'https://echo-sentient-core.example.com',
    siteName: 'ECHO',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ECHO OG card' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECHO — The Sentient Core',
    description: 'Sentient systems. Fast pricing swaps. Zero layout drama.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
