import React, { useEffect } from 'react'

export default function ModalProducto({ producto: p, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const formatPrice = (n) => `$${n.toLocaleString('es-CL')}`

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(44,26,14,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          width: '100%', maxWidth: 780,
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(44,26,14,0.25)',
        }}
      >
        {/* Header */}
        <div style={{
          background: p.color,
          padding: '2rem 2rem 1.5rem',
          borderBottom: `1px solid ${p.borderColor}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
          <div>
            <span style={{ fontSize: 36 }}>{p.icono}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--cafe-oscuro)', marginTop: 8 }}>
              {p.nombre}
            </h2>
            <p style={{ fontSize: 15, color: 'var(--gris)' }}>{p.subtitulo}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(123,79,46,0.1)', border: 'none', cursor: 'pointer',
              width: 36, height: 36, borderRadius: '50%',
              fontSize: 18, color: 'var(--cafe)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>

        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Description */}
          <p style={{ fontSize: 16, color: '#5a4030', lineHeight: 1.75 }}>{p.descripcion}</p>

          {/* Specs grid */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '1rem' }}>
              Ficha técnica
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {p.fichaDestacados.map((f, i) => (
                <div key={i} style={{
                  background: 'var(--crema)', borderRadius: 10, padding: '1rem',
                  border: '1px solid rgba(123,79,46,0.08)',
                }}>
                  <div style={{ fontSize: 11, color: 'var(--gris)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{f.valor}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Animals */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '1rem' }}>
              Capacidad por tipo de ganado (aprox.)
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(p.animales).map(([k, v]) => (
                <div key={k} style={{
                  background: 'var(--verde-palido)', borderRadius: 10, padding: '0.75rem 1.25rem',
                  display: 'flex', flexDirection: 'column', gap: 4,
                }}>
                  <span style={{ fontSize: 12, color: 'var(--verde)', fontWeight: 500, textTransform: 'capitalize' }}>{k}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '1rem' }}>
              ¿Qué incluye?
            </h3>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {p.incluye.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--cafe-oscuro)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--verde)', fontWeight: 700, minWidth: 14 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & CTA */}
          <div style={{
            background: 'var(--verde-palido)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 700, color: 'var(--verde)' }}>
                {formatPrice(p.precio)}
                <span style={{ fontSize: 15, fontWeight: 400, color: 'var(--gris)' }}> CLP + IVA</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--gris)', marginTop: 4 }}>
                Instalación desde {formatPrice(p.precioInstalacion)} CLP + IVA · Financiamiento disponible
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/56912345678?text=Hola, quiero cotizar el ${p.nombre}`}
                className="btn-primary"
                target="_blank" rel="noopener noreferrer"
              >
                💬 Cotizar por WhatsApp
              </a>
              <a href="#calculadora" className="btn-secondary" onClick={onClose}>
                Usar calculadora
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 600px) {
          .modal-specs { grid-template-columns: 1fr 1fr !important; }
          .modal-includes { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
