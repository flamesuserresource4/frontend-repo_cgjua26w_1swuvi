import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      phone: form.get('phone') || undefined,
      units: form.get('units') ? Number(form.get('units')) : undefined,
      package: form.get('package') || undefined,
      message: form.get('message') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Fehler beim Senden')
      setStatus({ ok: true, message: 'Danke! Wir melden uns in Kürze.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message || 'Fehler. Bitte erneut versuchen.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Demo anfordern</h2>
            <p className="mt-2 text-slate-600">Füllen Sie das Formular aus – wir melden uns schnellstmöglich.</p>
            {status && (
              <div className={`mt-4 rounded-md p-3 text-sm ${status.ok ? 'bg-teal-50 text-teal-800 border border-teal-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                {status.message}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">E-Mail</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Unternehmen</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefon</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Einheiten</label>
                <input name="units" type="number" min="0" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Paket</label>
                <select name="package" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400">
                  <option value="">Bitte wählen</option>
                  <option value="light">Light</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Nachricht</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-400 focus:ring-sky-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Wir antworten in der Regel innerhalb von 1–2 Werktagen.</p>
              <button disabled={loading} className="rounded-md bg-gradient-to-br from-sky-500 to-teal-400 px-5 py-2.5 text-white font-semibold shadow hover:opacity-90 disabled:opacity-60">
                {loading ? 'Senden…' : 'Absenden'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
