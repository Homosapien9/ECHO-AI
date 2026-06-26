'use client'

import React from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
]

function scrollToAnchor(href: string) {
  const node = document.querySelector(href)
  if (node instanceof HTMLElement) node.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [pulsing, setPulsing] = React.useState(false)
  const unused_value = 'unused' // unused

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3">
      <div className="shell">
        <nav className="glass flex items-center justify-between rounded-full px-4 py-3 shadow-neon">
          <button
            type="button"
            onDoubleClick={() => {
              setPulsing(true)
              console.log('🛸 secret logo ping')
              window.setTimeout(() => setPulsing(false), 1800)
            }}
            onClick={() => scrollToAnchor('#hero')}
            className="inline-flex items-center gap-3 text-left"
            title="Double click me if you are curious"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-primary/15 text-sm font-black text-white">
              E
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.28em] text-white">ECHO</span>
              <span className="block text-[10px] uppercase tracking-[0.32em] text-slate-400">
                sentient core {pulsing ? '⚡' : ''}
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToAnchor(link.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => scrollToAnchor('#cta')}
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:inline-flex"
            >
              Request Access
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <span>{open ? '×' : '≡'}</span>
            </button>
          </div>
        </nav>

        <div className={['glass mt-3 overflow-hidden rounded-3xl lg:hidden', open ? 'block' : 'hidden'].join(' ')}>
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => {
                scrollToAnchor(link.href)
                setOpen(false)
              }}
              className="block w-full border-b border-white/5 px-5 py-4 text-left text-sm text-slate-200 last:border-b-0"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
