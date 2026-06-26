// src/app/layout.tsx
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

// ─── Fonts ────────────────────────────────────────────────

// Display font: Space Grotesk — bold, techy, great for headlines
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Body font: DM Sans — clean, highly readable at small sizes
const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// ─── Metadata ──────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://echo-sentient-core.vercel.app'),
  title: {
    default: 'ECHO — The Sentient Core',
    template: '%s | ECHO',
  },
  description:
    'ECHO is a cinematic AI data automation platform — built for FrontEnd Battle 3.0 with responsive bento interactions, ref-only pricing updates, and deferred Three.js visuals.',
  keywords: [
    'ECHO',
    'Next.js 14',
    'AI platform',
    'data automation',
    'pricing matrix',
    'Three.js',
    'FrontEnd Battle 3.0',
    'bento grid',
    'responsive design',
  ],
  authors: [{ name: 'FrontEnd Battle 3.0', url: 'https://echo-sentient-core.vercel.app' }],
  creator: 'FrontEnd Battle 3.0',
  publisher: 'FrontEnd Battle 3.0',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ECHO — The Sentient Core',
    description: 'Sentient systems. Fast pricing swaps. Zero layout drama.',
    url: 'https://echo-sentient-core.vercel.app',
    siteName: 'ECHO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ECHO — The Sentient Core Open Graph image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECHO — The Sentient Core',
    description: 'Sentient systems. Fast pricing swaps. Zero layout drama.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://echo-sentient-core.vercel.app',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
  ],
  category: 'technology',
}

// ─── Root Layout ──────────────────────────────────────────

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-white dark:bg-surface text-gray-900 dark:text-white antialiased transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
