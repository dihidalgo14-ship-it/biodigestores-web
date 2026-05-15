import React from 'react'

const testimonios = [
  {
    nombre: 'Roberto Muñoz Salgado',
    cargo: 'Productor lechero',
    region: 'Osorno, Los Lagos',
    iniciales: 'RM',
    texto: '"En menos de dos años recuperamos la inversión. La caldera de la sala de ordeña ya funciona con biogás y el biol mejoró notablemente nuestras praderas. No volvería al sistema anterior."',
    modelo: 'Sistema Bio 20',
  },
  {
    nombre: 'María Cáceres Vega',
    cargo: 'Pequeña agricultora',
    region: 'Los Ángeles, Biobío',
    iniciales: 'MC',
    texto: '"Tenía dudas porque nunca había escuchado de esto. El equipo de Ecosuyu nos explicó todo, hicieron la instalación en 3 días y a los 40 días ya teníamos gas para cocinar. Increíble."',
    modelo: 'Sistema Bio 8',
  },
  {
    nombre: 'Cooperativa Praderas del Sur',
    cargo: 'Cooperativa ganadera',
    region: 'Temuco, La Araucanía',
    iniciales: 'CP',
    texto: '"Como cooperativa necesitábamos también cumplir con la normativa ambiental. El Sistema Bio 40 nos permitió tratar todos los purines y además generar ahorro energético real. Lo recomendamos."',
    modelo: 'Sistema Bio 40',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" style={{ background: '#F5EDE0', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Lo dicen nuestros clientes</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'var(--cafe-oscuro)', marginBottom: '1rem',
        }}>
          Productores reales,{' '}
          <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>resultados comprobados</em>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--gris)', lineHeight: 1.7, maxWidth: 500, marginBottom: '3rem' }}>
          Ecosuyu — Simbiotek SPA está implementando los primeros biodigestores Sistema Bio en Chile. Estos son algunos de nuestros primeros clientes.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              border: '1px solid rgba(139,94,60,0.1)',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ color: 'var(--tierra)', fontSize: 14 }}>★★★★★</div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 15, fontStyle: 'italic',
                lineHeight: 1.75, color: 'var(--cafe-oscuro)',
                flex: 1,
              }}>{t.texto}</p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(123,79,46,0.1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'var(--verde)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, color: 'white',
                    fontFamily: 'var(--font-display)',
                  }}>{t.iniciales}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{t.nombre}</div>
                    <div style={{ fontSize: 12, color: 'var(--gris)' }}>{t.cargo} · {t.region}</div>
                  </div>
                </div>
                <div style={{
                  background: 'var(--verde-palido)', color: 'var(--verde)',
                  fontSize: 11, fontWeight: 500, padding: '4px 10px',
                  borderRadius: 20,
                }}>{t.modelo}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Social proof */}
        <div style={{
          marginTop: '3rem',
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.5rem',
          border: '1px solid rgba(139,94,60,0.1)',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: 6 }}>
              Sistema Bio: más de 10 años en el mercado mundial
            </h3>
            <p style={{ fontSize: 14, color: 'var(--gris)', maxWidth: 480 }}>
              Distribuidores en Latinoamérica, África y Asia. Ecosuyu trae esta tecnología líder al centro sur de Chile por primera vez, con acompañamiento técnico local.
            </p>
          </div>
          <a href="#calculadora" className="btn-cafe">
            Quiero conocer más →
          </a>
        </div>
      </div>
    </section>
  )
}
