import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white/80 pointer-events-none" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sky-700 bg-sky-100 text-xs font-semibold">
              Made for Austria
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              ERMIS – Die moderne All‑in‑One‑Immobilienverwaltung
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Entwickelt für Hausverwalter in Österreich. Effizient. Einfach. Leistungsstark.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="rounded-md bg-gradient-to-br from-sky-500 to-teal-400 px-6 py-3 text-white font-semibold shadow hover:opacity-90">
                Demo anfordern
              </a>
              <a href="#pricing" className="rounded-md px-6 py-3 text-sky-600 font-semibold border border-sky-200 hover:border-sky-300 hover:bg-sky-50">
                Preise ansehen
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Keine versteckten Kosten</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> 0,4–0,9 € pro Einheit</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Moderne, intuitive Oberfläche</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Effiziente Workflows</li>
            </ul>
          </div>
          <div className="h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-200/60 bg-white/60 backdrop-blur relative shadow-xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
