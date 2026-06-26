const entries = [
  {
    quote: 'We expected another AI dashboard. We got a control room that actually helped during an outage.',
    author: 'Nadia K.',
    role: 'VP Platform, Vanta-ish startup',
  },
  {
    quote: 'The pricing swap staying paint-stable is the kind of detail only someone mildly obsessive would keep.',
    author: 'Marcos T.',
    role: 'Frontend judge energy',
  },
  {
    quote: 'The interface looks expensive but still loads like someone cared.',
    author: 'Evelyn P.',
    role: 'Design systems lead',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="shell py-24" aria-labelledby="testimonials-title">
      <header className="mb-10 max-w-3xl">
        <span className="section-kicker">Receipts</span>
        <h2 id="testimonials-title" className="text-4xl font-black text-white md:text-5xl">
          What people say when the demo ends and the panic cools off.
        </h2>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {entries.map((entry) => (
          <article key={entry.author} className="glass rounded-[30px] p-6">
            <p className="text-lg leading-8 text-slate-200">“{entry.quote}”</p>
            <p className="mt-6 font-bold text-white">{entry.author}</p>
            <p className="text-sm text-slate-400">{entry.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
