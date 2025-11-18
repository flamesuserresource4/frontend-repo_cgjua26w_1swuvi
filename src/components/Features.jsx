import { Mail, Calendar, FileText, Workflow, Notebook, FolderOpen, Receipt, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Mail,
    title: 'E-Mail-Bearbeitung',
    text: 'Leistungsfähige E-Mail-Oberfläche – inspiriert von Outlook Web, optimiert für Hausverwaltungen.',
    benefit: 'Schnelle Kommunikation, klare Zuordnung zu Geschäftsfällen.'
  },
  {
    icon: Calendar,
    title: 'Kalender',
    text: 'Termine, Ressourcen und Einsätze im Blick – mit Teamfreigaben und Erinnerungen.',
    benefit: 'Bessere Planung, weniger Doppelbuchungen.'
  },
  {
    icon: Workflow,
    title: 'Geschäftsfallmanagement',
    text: 'Dokumente, E-Mails, Notizen und Workflows in Chat-Form zusammengeführt.',
    benefit: 'Transparente Prozesse, einfache Übergaben.'
  },
  {
    icon: FolderOpen,
    title: 'Dokumentenmanagement',
    text: 'Revisionssichere Ablage mit Versionierung, Berechtigungen und Volltextsuche.',
    benefit: 'Schnelles Auffinden, rechtssicheres Arbeiten.'
  },
  {
    icon: Receipt,
    title: 'Buchhaltung',
    text: 'Automatisierte Verbuchung, Kostenstellen, SEPA, Export – alles integriert.',
    benefit: 'Weniger Fehler, schneller Abschluss.'
  },
  {
    icon: Notebook,
    title: 'Notizen',
    text: 'Geführte Notizen in Geschäftsfällen mit Erwähnungen und Aufgaben.',
    benefit: 'Wissen bleibt im Team, nicht in Köpfen.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Funktionen für den Alltag</h2>
        <p className="mt-2 text-slate-600">Alles, was moderne Hausverwaltungen benötigen – nahtlos integriert.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 text-white flex items-center justify-center">
                {<f.icon size={20} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
              <p className="mt-3 text-sm font-medium text-slate-700">Nutzen: {f.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
