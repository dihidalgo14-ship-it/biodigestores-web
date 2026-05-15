import React from 'react'

const problemas = [
  {
    icon: '💧',
    titulo: 'Purines sin tratar: multas y contaminación',
    desc: 'La normativa ambiental chilena (SAG/SMA) se endurece cada año. Los purines sin tratamiento contaminan napas, ríos y pueden significar multas millonarias para tu predio.',
  },
  {
    icon: '📈',
    titulo: 'Gas licuado y fertilizantes cada vez más caros',
    desc: 'El precio del GLP y de los fertilizantes de síntesis química sigue subiendo. ¿Por qué seguir pagando si puedes producirlos tú mismo con lo que ya tienes?',
  },
  {
    icon: '🌱',
    titulo: 'Suelos degradados y baja productividad',
    desc: 'El uso excesivo de agroquímicos empobrece la biología del suelo. La fertilidad natural se deteriora, los costos suben y los rendimientos caen año a año.',
  },
  {
    icon: '🌍',
    titulo: 'Huella de carbono y exigencias del mercado',
    desc: 'Los mercados de exportación, supermercados y compradores industriales exigen cada vez más evidencia de prácticas sustentables. La presión ambiental es real y crece.',
  },
]

export default function Problema() {
  return (
    <section style={{
      background: 'var(--cafe-oscuro)',
      padding: '90px 2rem',
    }}>
      <div className="container">
        <div className="section-tag" style={{ color: 'var(--cafe-claro)' }}>El problema</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 44px)',
          color: 'white',
          marginBottom: '1rem',
          maxWidth: 540,
        }}>
          ¿Qué pasa hoy con los residuos de tu campo?
        </h2>
        <p style={{
          fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.75, maxWidth: 560, marginBottom: '3rem',
        }}>
          Lecherías, planteles y cooperativas generan miles de litros de purines y biomasa orgánica cada día. Un recurso que hoy es un costo y un riesgo puede convertirse en tu mayor activo.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          {problemas.map((p, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              padding: '2rem 1.75rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            >
              <span style={{ fontSize: 30, display: 'block', marginBottom: '1rem' }}>{p.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 19, fontWeight: 700,
                color: 'white', marginBottom: '0.75rem',
              }}>{p.titulo}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
