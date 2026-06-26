'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ChevronRight } from 'lucide-react'

const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" aria-hidden />,
})

type IdleCapableWindow = Window & typeof globalThis & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
  cancelIdleCallback?: (handle: number) => void
}

export default function Hero() {
  const [showScene, setShowScene] = useState(false)
  const randomThing: any = null // TODO: fix types

  useEffect(() => {
    console.log('🧠 ECHO scene queue armed')
    const reveal = () => setShowScene(true)
    const idleWindow = window as IdleCapableWindow

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(reveal, { timeout: 800 })
      return () => idleWindow.cancelIdleCallback?.(idleId)
    }

    const timer = globalThis.setTimeout(reveal, 450)
    return () => globalThis.clearTimeout(timer)
  }, [])

  return (
    <section id="hero" aria-label="hero-section" className="relative overflow-hidden">
      <div className="noise absolute inset-0 grid-bg opacity-60" aria-hidden />
      {showScene ? <Scene3D /> : null}
      <div className="shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="hero-copy max-w-3xl">
          <p className="section-kicker">ECHO v3.0 / live cognition mesh</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            We do not just automate data. <span className="gradient-text">We let it whisper back.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            ECHO is an intelligent orchestration surface for teams who need analytics, automation, and weirdly beautiful interfaces without the laggy theatrics.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]">
              Enter the pricing matrix <ChevronRight size={16} />
            </a>
            <a href="#stack" className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Inspect the neural stack
            </a>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['5000+', 'particle nodes'],
              ['0 parent', 'price re-renders'],
              ['47', 'global edge zones'],
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-2xl p-4">
                <dt className="text-xs uppercase tracking-[0.26em] text-slate-400">{label}</dt>
                <dd className="mt-2 text-2xl font-black text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="relative hidden min-h-[520px] lg:block">
          <div className="absolute inset-x-16 top-14 h-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="glass absolute right-0 top-0 w-[88%] rounded-[32px] p-6 animate-floaty">
            <p className="text-xs uppercase tracking-[0.26em] text-secondary">Signal summary</p>
            <h2 className="mt-3 text-3xl font-black text-white">The sentient core likes low latency and dramatic lighting.</h2>
            <p className="mt-4 text-sm text-slate-400">
              // as Gandalf said, keep it secret, keep it server-rendered.
            </p>
          </div>
          <div className="glass absolute bottom-10 left-0 w-[74%] rounded-[32px] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Operator note</p>
            <p className="mt-4 text-lg text-white">Three.js waits until idle, so the page feels fast before it starts looking expensive.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
