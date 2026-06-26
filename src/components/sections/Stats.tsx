const stats = [
  { value: '94%', label: 'bandwidth shaved at the edge' },
  { value: '11.8x', label: 'faster incident triage' },
  { value: '18 ms', label: 'median operator response' },
  { value: '99.99%', label: 'runtime confidence window' },
]

export default function Stats() {
  return (
    <section className="shell py-12" aria-labelledby="stats-title">
      <h2 id="stats-title" className="sr-only">
        Key stats
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="glass rounded-[28px] p-6">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
