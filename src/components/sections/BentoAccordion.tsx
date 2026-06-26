'use client'

import React, { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type IconProps = {
  className?: string
}

// wrote these by hand because the rules said no icon libraries in feature components
const ZapIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M13 2 5 14h5l-1 8 8-12h-5l1-8Z" />
  </svg>
)

const ShieldCheckIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
    <path d="m9.5 12 1.8 1.8 3.7-4" />
  </svg>
)

const BrainCircuitIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M9.5 3a3 3 0 0 0-3 3v.2A3.5 3.5 0 0 0 4 9.5c0 1.3.7 2.5 1.8 3.1a3.8 3.8 0 0 0 3.7 5.4H12V3H9.5Z" />
    <path d="M14.5 3a3 3 0 0 1 3 3v.2A3.5 3.5 0 0 1 20 9.5c0 1.3-.7 2.5-1.8 3.1a3.8 3.8 0 0 1-3.7 5.4H12V3h2.5Z" />
    <path d="M8 9h2" />
    <path d="M14 8h2" />
    <path d="M8 14h2" />
    <path d="M14 14h2" />
    <circle cx="7" cy="9" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="7" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="14" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const Globe2Icon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.4 2.3 3.8 5.6 3.8 9S14.4 18.7 12 21c-2.4-2.3-3.8-5.6-3.8-9S9.6 5.3 12 3Z" />
  </svg>
)

const Layers3Icon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
    <path d="m4 12 8 4 8-4" />
    <path d="m4 16 8 4 8-4" />
  </svg>
)

const SparklesIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
    <path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    <path d="m5.5 15 .9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z" />
  </svg>
)

const items = [
  { title: 'Realtime neural routing', desc: 'Edge decisions happen close to the workload, then stream upstream with context intact.', icon: ZapIcon, tone: 'from-cyan-500/20 to-transparent' },
  { title: 'Post-quantum trust', desc: 'Security envelopes wrap every signal handoff, not just the obvious ones.', icon: ShieldCheckIcon, tone: 'from-violet-500/20 to-transparent' },
  { title: 'Adaptive cognition', desc: 'Models learn which paths matter so operators do not drown in decorative telemetry.', icon: BrainCircuitIcon, tone: 'from-fuchsia-500/20 to-transparent' },
  { title: 'Global sync mesh', desc: 'Region-aware replication keeps local speed without turning consistency into folklore.', icon: Globe2Icon, tone: 'from-emerald-500/20 to-transparent' },
  { title: 'Composable modules', desc: 'Deploy the inference, watch, and control pieces independently and sleep slightly better.', icon: Layers3Icon, tone: 'from-amber-500/20 to-transparent' },
  { title: 'Operator delight', desc: 'Because the interface should not punish the person saving the incident at 3:12 AM.', icon: SparklesIcon, tone: 'from-primary/25 to-transparent' },
]

export default function BentoAccordion() {
  const isMobile = useBreakpoint(1024)
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section id="stack" className="shell py-24" aria-labelledby="stack-title">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <span className="section-kicker">Feature 2 / one shared activeIndex</span>
        <h2 id="stack-title" className="text-4xl font-black text-white md:text-5xl">
          Bento on desktop, accordion on mobile, <span className="gradient-text">same brain underneath</span>
        </h2>
        <p className="mt-5 text-lg text-slate-400">
          Resize the viewport and the open item persists. No animation libraries, just CSS doing cardio.
        </p>
      </header>

      <div className={isMobile ? 'space-y-4' : 'grid auto-rows-[170px] gap-4 lg:grid-cols-3'}>
        {items.map((item, index) => {
          const Icon = item.icon
          const open = activeIndex === index

          return (
            <article
              key={item.title}
              onMouseEnter={!isMobile ? () => setActiveIndex(index) : undefined}
              className={[
                'glass overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br p-0 transition-all duration-[350ms] ease-in-out',
                item.tone,
                !isMobile && open ? 'lg:col-span-2 lg:row-span-2' : '',
              ].join(' ')}
            >
              <button
                type="button"
                onClick={isMobile ? () => setActiveIndex(open ? -1 : index) : undefined}
                className="flex w-full items-start justify-between gap-4 p-6 text-left"
              >
                <div>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <span className={['mt-2 inline-block text-2xl text-slate-500 transition-transform duration-[180ms] ease-out', open ? 'rotate-45' : 'rotate-0'].join(' ')}>
                  +
                </span>
              </button>

              <div
                className="overflow-hidden px-6 transition-all duration-[350ms] ease-in-out"
                style={{
                  maxHeight: open ? (isMobile ? 240 : 320) : 0,
                  opacity: open ? 1 : 0,
                  paddingBottom: open ? 24 : 0,
                }}
              >
                <p className="max-w-2xl text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
