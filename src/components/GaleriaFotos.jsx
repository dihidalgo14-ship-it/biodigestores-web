import React, { useState } from 'react'

const FOTOS = [
  {
    src: '/biodigestor-biogas-campo-chile.jpg',
    alt: 'Instalación de biodigestor Sistema Bio en predio ganadero Chile',
    titulo: 'Instalación en terreno',
    desc: 'Proceso de instalación de biodigestor tubular Sistema Bio en predios del sur de Chile.',
  },
  {
    src: '/biodigestor-biol-fertilizante-liquido.jpg',
    alt: 'Biofertilizante líquido biol producido por biodigestor Sistema Bio',
    titulo: 'Biofertilizante (Biol)',
    desc: 'El biol es un abono líquido estabilizado, rico en nutrientes, listo para aplicar en cultivos y praderas.',
  },
  {
    src: '/biodigestor-tubular-ganado-bovino.avif',
    alt: 'Biodigestor tubular Sistema Bio junto a ganado bovino lechero',
    titulo: 'Biodigestor y ganadería',
    desc: 'Los residuos del ganado bovino son la materia prima del sistema — transformados en energía y fertilizante.',
  },
  {
    src: '/biodigestor-sistema-bio-instalacion.avif',
    alt: 'Producción de biogás con biodigestor Sistema Bio en campo chileno',
    titulo: 'Biogás en el campo',
    desc: 'El biogás producido reemplaza el gas licuado en cocinas, calefacción y calentadores de agua.',
  },
]

export default function GaleriaFotos() {
  const [fotoActiva, setFotoActiva] = useState(0)

  return (
    <section id="galeria" style={{ background: 'var(--crema-oscura)', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Galería</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'var(--cafe-oscuro)', marginBottom: '1rem',
        }}>
          El sistema{' '}
          <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>en terreno real</em>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--gris)', lineHeight: 1.7, maxWidth: 500, marginBottom: '3rem' }}>
          Instalaciones de biodigestores Sistema Bio distribuidos e instalados por Ecosuyu.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.5rem', alignItems: 'start' }} className="galeria-grid">

          {/* Foto principal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              height: 420,
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
            }}>
              <img
                key={fotoActiva}
                src={FOTOS[fotoActiva].src}
                alt={FOTOS[fotoActiva].alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  animation: 'fadeUp 0.35s ease both',
                }}
              />
              {/* Caption overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(44,26,14,0.75) 0%, transparent 100%)',
                padding: '2rem 1.5rem 1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 4 }}>
                  {FOTOS[fotoActiva].titulo}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                  {FOTOS[fotoActiva].desc}
                </p>
              </div>
            </div>

            {/* Indicador de puntos */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              {FOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFotoActiva(i)}
                  style={{
                    width: i === fotoActiva ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === fotoActiva ? 'var(--verde)' : 'rgba(74,124,63,0.3)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Miniaturas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {FOTOS.map((foto, i) => (
              <div
                key={i}
                onClick={() => setFotoActiva(i)}
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  height: 190,
                  cursor: 'pointer',
                  border: `2.5px solid ${i === fotoActiva ? 'var(--verde)' : 'transparent'}`,
                  boxShadow: i === fotoActiva ? '0 4px 16px rgba(74,124,63,0.25)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (i !== fotoActiva) e.currentTarget.style.border = '2.5px solid rgba(74,124,63,0.4)' }}
                onMouseLeave={e => { if (i !== fotoActiva) e.currentTarget.style.border = '2.5px solid transparent' }}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.3s',
                    transform: i === fotoActiva ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
                {/* Overlay activa */}
                {i === fotoActiva && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(74,124,63,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'var(--verde)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, color: 'white', fontWeight: 700,
                    }}>✓</div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .galeria-grid {
            grid-template-columns: 1fr !important;
          }
          .galeria-grid > div:first-child > div:first-child {
            height: 280px !important;
          }
          .galeria-grid > div:last-child > div {
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  )
}