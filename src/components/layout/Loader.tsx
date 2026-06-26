'use client'

import React from 'react'

type LoaderProps = {
  visible: boolean
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={[
        'pointer-events-none fixed inset-0 z-[60] grid place-items-center bg-slate-950 transition-opacity duration-[280ms] ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-slate-400">Boot sequence</p>
        <h2
          className="loader-word text-4xl font-black tracking-[0.18em] text-white sm:text-6xl"
          data-text="INITIALIZING..."
        >
          INITIALIZING...
        </h2>
        <div className="mx-auto mt-6 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-loaderFade bg-gradient-to-r from-secondary via-primary to-secondary" />
        </div>
      </div>
    </div>
  )
}
