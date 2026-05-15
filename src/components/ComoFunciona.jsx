import React, { useState } from 'react'

const pasos = [
  {
    num: '01',
    titulo: 'Ingresa los residuos mezclados con agua',
    desc: 'Heces, orinas y residuos vegetales de tu ganado (bovino, porcino, caprino, ovino, equino, conejos o camélidos) se mezclan con agua y entran por un extremo del biodigestor tubular.',
    color: 'var(--cafe-claro)',
  },
  {
    num: '02',
    titulo: 'Fermentación anaeróbica ~40 días',
    desc: 'Las bacterias propias de los estiércoles descomponen la materia orgánica sin oxígeno dentro de la geomembrana. Un proceso natural, silencioso y continuo.',
    color: 'var(--verde)',
  },
  {
    num: '03',
    titulo: 'Biogás (CH₄) sube hacia el domo',
    desc: 'El metano generado se acumula en la parte superior del biodigestor. Desde ahí se puede canalizar directamente a una cocinas, que viene incluida en los kit',
    color: 'var(--verde-vivo)',
  },
  {
    num: '04',
    titulo: 'Biofertilizante líquido sale por el otro extremo',
    desc: 'El biol maduro — pH neutro, rico en microorganismos benéficos y macro y micronutrientes — evacúa por el extremo opuesto listo para aplicar a cultivos, praderas y hortalizas.',
    color: 'var(--tierra)',
  },
]

const beneficiosBiol = [
  'Restauración físico-química y biológica del suelo',
  'Mejora en estructura y retención de humedad',
  'Incremento de productividad y calidad de cultivos',
  'Reduce uso de fertilizantes sintéticos',
  'Disminuye incidencia de plagas y enfermedades',
  'Fácil de aplicar — foliar o al suelo',
]

export default function ComoFunciona() {
  const [activo, setActivo] = useState(0)

  return (
    <section id="como-funciona" style={{ background: 'var(--crema)', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Tecnología Sistema Bio</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              color: 'var(--cafe-oscuro)', marginBottom: '1rem',
            }}>
              Cómo transforma residuos en{' '}
              <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>recursos</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--gris)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Un biodigestor Sistema Bio es una tecnología <strong>"Low Tech"</strong> — sencilla, robusta y fácil de manejar. Una bolsa de geomembrana de alta calidad hace todo el trabajo.
            </p>

            {/* Steps accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {pasos.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActivo(i)}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${activo === i ? p.color : 'rgba(123,79,46,0.12)'}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '1rem 1.25rem',
                    background: activo === i ? 'rgba(74,124,63,0.04)' : 'white',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22, fontWeight: 900,
                      color: activo === i ? p.color : 'rgba(123,79,46,0.25)',
                      minWidth: 32,
                    }}>{p.num}</span>
                    <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{p.titulo}</span>
                  </div>
                  {activo === i && (
                    <div style={{ padding: '0 1.25rem 1rem 4.5rem', background: 'rgba(74,124,63,0.04)' }}>
                      <p style={{ fontSize: 14, color: 'var(--gris)', lineHeight: 1.65 }}>{p.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Biol benefits card */}
          <div>
            <div style={{
              background: 'var(--verde-palido)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              border: '1px solid rgba(74,124,63,0.15)',
              marginBottom: '1.5rem',
            }}>
              <div style={{ fontSize: 28, marginBottom: '1rem' }}>🌿</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '0.5rem' }}>
                Beneficios del Biol
              </h3>
              <p style={{ fontSize: 13, color: 'var(--gris)', marginBottom: '1.25rem' }}>
                Biofertilizante líquido altamente estabilizado, pH neutro, listo para usar en todo tipo de cultivos.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {beneficiosBiol.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--cafe-oscuro)' }}>
                    <span style={{ color: 'var(--verde)', fontWeight: 700, minWidth: 14 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              border: '1px solid rgba(123,79,46,0.1)',
              display: 'flex', gap: 14, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 24 }}>🔥</span>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 500, color: 'var(--cafe-oscuro)', marginBottom: 6 }}>Biogás para uso calórico</h4>
                <p style={{ fontSize: 13, color: 'var(--gris)', lineHeight: 1.6 }}>
                  Reemplaza gas licuado (GLP) en cocinas, calentadores de agua, calderas y calefacción. Ahorro directo en costos energéticos desde el primer mes de operación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          #como-funciona .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
