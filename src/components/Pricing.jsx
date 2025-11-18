export default function Pricing() {
  const tiers = [
    {
      name: 'Light',
      price: '0,4 €',
      sub: 'pro Einheit / Monat',
      desc: 'Ohne Mieter-/Eigentümerportal',
      features: ['E-Mail, Kalender, DMS', 'Geschäftsfallmanagement', 'Grundfunktionen Buchhaltung'],
      cta: 'Light wählen'
    },
    {
      name: 'Standard',
      price: '0,6–0,7 €',
      sub: 'pro Einheit / Monat',
      desc: 'Das beliebte Paket für Teams',
      features: ['Alles aus Light', 'Erweitertes DMS', 'Erweiterte Buchhaltung'],
      cta: 'Standard wählen',
      highlighted: true
    },
    {
      name: 'Premium',
      price: '0,9 €',
      sub: 'pro Einheit / Monat',
      desc: 'Alle Funktionen inkl. zukünftige Erweiterungen',
      features: ['Alles aus Standard', 'Zukünftige Features inklusive', 'Priorisierter Support'],
      cta: 'Premium wählen'
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Transparente Preise</h2>
          <p className="mt-2 text-slate-600">Extrem konkurrenzfähiges Pricing – keine versteckten Kosten.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlighted ? 'border-teal-300 bg-white shadow-2xl shadow-teal-100/50' : 'border-slate-200 bg-white shadow-sm'} p-6 flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
                  <span className="text-sm text-slate-600">{t.sub}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />{f}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={`mt-6 rounded-md px-5 py-2.5 font-semibold text-center ${t.highlighted ? 'bg-gradient-to-br from-sky-500 to-teal-400 text-white' : 'border border-sky-200 text-sky-700 hover:bg-sky-50'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
