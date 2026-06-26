'use client'

import React, { useEffect, useState } from 'react'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/layout/Loader'
import Navbar from '@/components/layout/Navbar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { mounted } = useDarkMode()
  const [showLoader, setShowLoader] = useState(true)
  const [loaderMounted, setLoaderMounted] = useState(true)

  useEffect(() => {
    // 420ms show → 700ms unmount (lets the 280ms fade finish with room to spare)
    const fadeTimer = window.setTimeout(() => setShowLoader(false), 420)
    const unmountTimer = window.setTimeout(() => setLoaderMounted(false), 700)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(unmountTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {loaderMounted && <Loader visible={showLoader} />}
      <Navbar />
      <main className="relative overflow-hidden pt-20">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
