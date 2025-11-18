import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { label: 'Lösung', href: '#solution' },
  { label: 'Funktionen', href: '#features' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Vorteile', href: '#benefits' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-teal-400 shadow-inner" />
          <span className="font-semibold tracking-tight text-slate-900">ERMIS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-700 hover:text-slate-900 text-sm font-medium">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-gradient-to-br from-sky-500 to-teal-400 px-4 py-2 text-white font-semibold shadow hover:opacity-90">
            Demo anfordern
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-slate-800">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-gradient-to-br from-sky-500 to-teal-400 px-4 py-2 text-white font-semibold text-center">
              Demo anfordern
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
