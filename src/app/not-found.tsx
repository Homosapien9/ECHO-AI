import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
      <div className="max-w-xl space-y-5 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Signal lost</p>
        <h1 className="text-4xl font-black md:text-6xl">404 — Core route missing</h1>
        <p className="text-slate-300">
          We looked in the datastream, under the quantum rack, and behind the coffee machine.
        </p>
        <Link href="/" className="inline-flex rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/20">
          Return to ECHO
        </Link>
      </div>
    </main>
  )
}
