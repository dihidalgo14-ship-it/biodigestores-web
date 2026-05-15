import React, { useState, useEffect } from 'react'

export default function Navbar({ onAbrirContacto }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Inicio', href: "#inicio" },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Productos', href: '#productos' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Casos de éxito', href: '#casos-exito' },
    { label: 'Ecosuyu', href: "https://ecosuyu.cl" },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(249,245,238,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(123,79,46,0.12)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '1rem',
    }}>
      <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <img
    src="/logoecosuyu2.png"
    alt="Ecosuyu logo"
    style={{ height: 52, width: 'auto', display: 'block' }}
  />
</a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', flex: 1, justifyContent: 'center' }}
        className="nav-links-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 400,
              color: 'var(--texto)', opacity: 0.7,
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.7}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button
          onClick={onAbrirContacto}
          style={{
            background: 'transparent', color: 'var(--verde)',
            padding: '9px 18px', borderRadius: 40,
            fontSize: 13, fontWeight: 500,
            border: '1.5px solid var(--verde)',
            cursor: 'pointer', fontFamily: 'var(--font-body)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--verde-palido)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          className="nav-contacto-btn"
        >
          Contactar
        </button>
        <a href="#calculadora" className="btn-primary" style={{ fontSize: 13, padding: '9px 18px' }}>
          Calcular mi biodigestor
        </a>
      </div>

      <style>{`
        @media(max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-contacto-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
