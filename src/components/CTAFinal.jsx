import React from 'react'

// onAbrirContacto: función que abre el ModalContacto desde App.jsx
export default function CTAFinal({ onAbrirContacto }) {
  return (
    <section id="contacto" style={{
      background: 'var(--verde)',
      padding: '90px 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-30%', left: '-15%',
        width: '140%', height: '160%',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Siguiente paso</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 50px)',
          color: 'white', marginBottom: '1rem',
          maxWidth: 600, margin: '0 auto 1rem',
        }}>
          ¿Listo para transformar los residuos de tu predio?
        </h2>
        <p style={{
          fontSize: 47, color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.75, maxWidth: 500,
          margin: '0 auto 2.5rem',
        }}>
Contáctanos!        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {/* Botón formulario de contacto */}
          <button
            onClick={onAbrirContacto}
            style={{
              background: 'white', color: 'var(--verde)',
              padding: '14px 28px', borderRadius: 40,
              fontSize: 15, fontWeight: 500,
              border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'background 0.2s',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--crema)'}
            onMouseLeave={e => e.currentTarget.style.background = 'white'}
          >
            ✉️ Enviar consulta
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/56912345678?text=Hola Ecosuyu, me interesa instalar un biodigestor en mi predio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366', color: 'white',
              padding: '14px 28px', borderRadius: 40,
              fontSize: 15, fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#20bc5a'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
          >
            💬 WhatsApp directo
          </a>

          {/* Teléfono */}
          <a
            href="tel:+56981730151"
            style={{
              background: 'transparent', color: 'white',
              padding: '14px 28px', borderRadius: 40,
              fontSize: 15, fontWeight: 500,
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.5)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'white'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
          >
            📞 Llamar ahora
          </a>
        </div>

      </div>
    </section>
  )
}
