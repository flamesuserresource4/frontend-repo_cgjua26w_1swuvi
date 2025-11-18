export default function ProblemSolution() {
  const problems = [
    {
      title: 'Zerstreute Tools',
      text: 'E-Mail, Kalender, Dokumente und Buchhaltung in verschiedenen Systemen – langsame, fehleranfällige Prozesse.',
    },
    {
      title: 'Komplexe Prozesse',
      text: 'Geschäftsfälle ziehen sich, Informationen fehlen, Kommunikation ist unübersichtlich.',
    },
    {
      title: 'Hohe Kosten',
      text: 'Teure Lizenzen und Zusatzmodule, intransparente Preisgestaltung, versteckte Gebühren.',
    },
    {
      title: 'Fehlende Österreich-Anpassung',
      text: 'Wichtige rechtliche und prozessuale Besonderheiten fehlen – Workarounds statt Standards.',
    },
  ]

  const solutions = [
    'Alles in einer Software: E-Mail, Kalender, Dokumente, Buchhaltung, Geschäftsfallmanagement',
    'Moderne, intuitive UI mit klaren Workflows in Chat-Form',
    'Transparente, extrem wettbewerbsfähige Preise pro Einheit',
    'Spezifisch für den österreichischen Markt entwickelt',
  ]

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Die Probleme der Hausverwaltung – gelöst</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {problems.map((p) => (
                <div key={p.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100">
              <h3 className="text-2xl font-bold text-slate-900">ERMIS als Lösung</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-md bg-gradient-to-br from-sky-500 to-teal-400 px-5 py-2.5 text-white font-semibold shadow hover:opacity-90">
                  Demo anfordern
                </a>
                <a href="#features" className="rounded-md px-5 py-2.5 text-sky-700 font-semibold border border-sky-200 hover:bg-sky-50">
                  Funktionen ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
