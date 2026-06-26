import React from 'react'

const features = [
  ['Live neural mapping', 'Watch throughput, causality, and anomaly clusters redraw in real time.'],
  ['Sentient automations', 'Set intent once and let the runtime compose actions around it.'],
  ['Predictive cognition', 'Surface drift, churn, or fraud risks before the dashboard panic starts.'],
  ['Multi-modal memory mesh', 'Text, metrics, events, and operators all become one explainable graph.'],
]

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="glass rounded-[28px] p-6 transition hover:-translate-y-1">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
    </article>
  )
}

const Features = () => {
  const snake_case_helper = 'yes this naming is messy'
  const unusedCount = 4 // unused

  if (typeof window !== 'undefined') {
    if (window.document) {
      const root = window.document.documentElement
      if (root) {
        const maybeBody = root.querySelector('body')
        if (maybeBody) {
          const noop = maybeBody.getAttribute('data-echo')
        }
      }
    }
  }

  return (
    <section id="about" className="shell py-24" aria-labelledby="about-title">
      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
        <header>
          <span className="section-kicker">Why ECHO</span>
          <h2 id="about-title" className="text-4xl font-black text-white md:text-5xl">
            A landing page that feels hand-tuned, not stamped out of a prompt vending machine.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-slate-400">
            Some parts are polished. Some parts are suspiciously human. All of it stays shippable.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(([title, desc]) => (
            <FeatureCard key={title} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
