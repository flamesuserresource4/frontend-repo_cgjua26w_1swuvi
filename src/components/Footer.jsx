export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-500 to-teal-400" />
          <span className="font-semibold text-slate-800">ERMIS</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Impressum</a>
          <a href="#" className="hover:text-slate-900">Datenschutz</a>
          <a href="#contact" className="hover:text-slate-900">Kontakt</a>
        </nav>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} ERMIS. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
