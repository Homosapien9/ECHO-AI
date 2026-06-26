'use client'

import React from 'react'

const footer_groups = [
  ['Platform', 'Runtime', 'Mesh', 'Observability'],
  ['Resources', 'Docs', 'Playbooks', 'Status'],
  ['Company', 'Manifesto', 'Contact', 'Careers'],
]

export default function Footer() {
  const [hoverLine, setHoverLine] = React.useState('')

  return (
    <footer className="footer-zone border-t border-white/10 bg-slate-950/95 pb-10 pt-16 text-slate-300">
      <div className="shell grid gap-10 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white">ECHO 🚀 The Core Engine</h2>
          <p className="max-w-2xl text-slate-400">
            Purpose-built for teams who want interfaces that feel a little haunted and perform a lot faster than they look.
          </p>
          <p className="text-sm text-slate-500">
            made with ☕ and 🍕 — <span className="footer-blink">seriously, mostly coffee</span>
          </p>
          <button
            type="button"
            className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-secondary"
            onMouseEnter={() => setHoverLine('You found the footer easter egg. Nice.')}
            onMouseLeave={() => setHoverLine('')}
          >
            Hover-proof badge
          </button>
          {hoverLine ? <p className="text-sm text-primary">{hoverLine}</p> : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {footer_groups.map((group) => (
            <div key={group[0]}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white">{group[0]}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {group.slice(1).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
