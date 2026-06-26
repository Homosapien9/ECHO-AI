import { ChevronRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="shell pb-24 pt-10" aria-labelledby="cta-title">
      <div className="glass rounded-[36px] p-8 md:p-12">
        <header className="max-w-3xl">
          <span className="section-kicker">Ready to ship</span>
          <h2 id="cta-title" className="text-4xl font-black text-white md:text-5xl">
            Give the judges something annoyingly hard to dismiss.
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            Clean performance profile, rule-compliant interactions, and just enough human weirdness to trip the stylometry alarms.
          </p>
        </header>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#hero" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]">
            Start the demo <ChevronRight size={16} />
          </a>
          <a href="#pricing" className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Review plans
          </a>
        </div>
      </div>
    </section>
  )
}
