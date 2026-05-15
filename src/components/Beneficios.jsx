import React from 'react'

const metricas = [
  { num: '40', unit: ' días', label: 'Para obtener biogás y biol', sub: 'Desde la primera carga del sistema' },
  { num: '70', unit: '%', label: 'Menos emisiones de metano', sub: 'Vs. manejo tradicional de purines' },
  { num: '3×', unit: '', label: 'Más nutrientes que el purín bruto', sub: 'El biol supera al abono sin digerir' },
  { num: '200', unit: 'm³', label: 'Capacidad máxima modular', sub: 'Sistemas escalables para cualquier tamaño' },
]

const ganados = [
  { icon: '🐄', label: 'Bovino / Lechería' },
  { icon: '🐷', label: 'Porcino' },
  { icon: '🐐', label: 'Caprino / Ovino' },
  { icon: '🐴', label: 'Equino' },
  { icon: '🐇', label: 'Conejos' },
  { icon: '🦙', label: 'Camélidos' },
]

export default function Beneficios() {
  return (
    <section style={{ background: 'var(--verde-palido)', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Resultados comprobados</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'var(--cafe-oscuro)', marginBottom: '1rem',
        }}>
          Números que cambian la{' '}
          <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>ecuación de tu predio</em>
        </h2>
        <p style={{ fontSize: 17, fontWeight: 300, color: '#5a4030', lineHeight: 1.75, maxWidth: 560, marginBottom: '3rem' }}>
          Sistema Bio lleva más de 10 años implementado en Latinoamérica, África y Asia. Estos son los resultados promedio de sus instalaciones a pequeña y mediana escala.
        </p>

        {/* Metric cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {metricas.map((m, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              border: '1px solid rgba(74,124,63,0.12)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 46, fontWeight: 900,
                color: 'var(--verde)', lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {m.num}<span style={{ fontSize: 22 }}>{m.unit}</span>
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 500, color: 'var(--cafe-oscuro)', marginBottom: 6 }}>{m.label}</h4>
              <p style={{ fontSize: 13, color: 'var(--gris)', lineHeight: 1.5 }}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Compatible livestock */}
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          border: '1px solid rgba(74,124,63,0.12)',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '1.5rem' }}>
            Compatible con todo tipo de ganado
          </h3>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {ganados.map((g, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                padding: '1rem 1.25rem',
                background: 'var(--verde-palido)',
                borderRadius: 'var(--radius-md)',
                minWidth: 90, textAlign: 'center',
              }}>
                <span style={{ fontSize: 28 }}>{g.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--verde)' }}>{g.label}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--gris)', marginTop: '1rem' }}>
            También funciona con residuos vegetales y combinaciones de distintas especies.
          </p>
        </div>
      </div>
    </section>
  )
}
