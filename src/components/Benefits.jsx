export default function Benefits() {
  const benefits = [
    'Kein Software‑Wechsel nötig – alles in ERMIS',
    'Moderne, schnelle und intuitive UI',
    'Österreich‑spezifische Funktionen und Prozesse',
    'Extrem konkurrenzfähige Preise',
    'Effiziente Kommunikation und Bearbeitung',
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ihre Vorteile mit ERMIS</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-slate-50 to-sky-50 border border-slate-200 flex items-center justify-center text-slate-500">
              Mockup / Screenshot Platzhalter
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
