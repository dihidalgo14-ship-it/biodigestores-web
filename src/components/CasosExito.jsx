import React, { useState } from 'react'

// ─────────────────────────────────────────────────────────────────
// DATOS DE CASOS DE ÉXITO
// Para reemplazar con información real:
//   - `imagen`: ruta a imagen real, ej: '/images/caso-munoz.jpg'
//     Si imagen es null, se muestra el placeholder SVG.
//   - `imagenAlt`: texto alternativo para accesibilidad
//   - `galeria`: array de rutas adicionales (opcional)
//   - Todos los demás campos son texto editable
// ─────────────────────────────────────────────────────────────────
const CASOS = [
  {
    id: 'caso-munoz',
    tipo: 'Lechería familiar',
    region: 'Puerto Octay, Los Lagos',
    nombre: 'Fundo Los Canelos',
    productor: 'Roberto Muñoz Espinoza',
    cargo: 'Productor lechero, 3ª generación',
    modelo: 'Sistema Bio 20',
    instalacion: 'Agosto 2023',

    // ── IMÁGENES ──────────────────────────────────────────────
    // Reemplaza null por la ruta real cuando tengas las fotos
    // Ej: imagen: '/images/fundo-los-canelos-principal.jpg'
    imagen: '/Ecotecnologias.png',
    imagenAlt: 'Biodigestor Sistema Bio 20 instalado en Fundo Los Canelos, Puerto Octay',
    // Galería secundaria: máx. 3 fotos adicionales
    // Ej: galeria: ['/images/caso1-biol.jpg', '/images/caso1-gas.jpg']
    galeria: [null, null, null],
    galeriaAlts: [
      'Aplicación de biol en praderas del fundo',
      'Sistema de distribución de biogás a cocina',
      'Roberto Muñoz junto al biodigestor',
    ],
    // ── FIN IMÁGENES ──────────────────────────────────────────

    tagColor: 'var(--verde)',
    resumen: 'De pagar $180.000 mensuales en gas a generar su propia energía — y además triplicar la fertilidad de sus praderas.',
    historia: [
      'Roberto lleva más de 20 años en la lechería familiar que heredó de su padre en la precordillera de Osorno. Con 14 vacas productoras, el predio genera unos 350 kg diarios de estiércol fresco que antes simplemente se acumulaban en una laguna de purines junto al galpón.',
      'El problema no era solo el olor. En 2022 recibió una notificación de la SAG por el manejo inadecuado de residuos ganaderos. Tenía que actuar, pero no quería un sistema caro y difícil de mantener.',
      'A los 38 días de instalado el Sistema Bio 20, la cocina del fundo ya funcionaba con biogás. Hoy lleva más de 10 meses de operación continua sin interrupciones.',
    ],
    cita: '"No pensé que fuera tan simple. La instalación fue en 4 días y al mes ya estaba cocinando con mi propio gas. Nunca más volvimos a comprar GLP."',
    metricas: [
      { label: 'Ahorro mensual en gas', valor: '$178.000', unidad: 'CLP' },
      { label: 'Biol producido/día', valor: '450', unidad: 'litros' },
      { label: 'Meses de operación', valor: '10+', unidad: 'sin fallas' },
      { label: 'Retorno estimado', valor: '22', unidad: 'meses' },
    ],
    antesDepues: [
      { antes: 'Laguna de purines sin tratamiento', despues: 'Residuos procesados 100% en el biodigestor' },
      { antes: '$180.000/mes en gas licuado', despues: 'Gas propio de forma continua, costo $0' },
      { antes: 'Praderas fertilizadas con síntesis química', despues: 'Biol aplicado directamente, reducción 60% de fertilizantes' },
      { antes: 'Notificación SAG por manejo de purines', despues: 'Cumplimiento normativa ambiental' },
    ],
  },
  {
    id: 'caso-cooperativa',
    tipo: 'Cooperativa ganadera',
    region: 'Victoria, La Araucanía',
    nombre: 'Cooperativa Praderas Araucanas',
    productor: 'Directiva liderada por Carmen Paillalef',
    cargo: 'Presidenta Cooperativa Praderas Araucanas',
    modelo: 'Sistema Bio 40',
    instalacion: 'Marzo 2024',

    // ── IMÁGENES ──────────────────────────────────────────────
    imagen: null,
    imagenAlt: 'Sistema Bio 40 instalado en Cooperativa Praderas Araucanas, Victoria, La Araucanía',
    galeria: [null, null, null],
    galeriaAlts: [
      'Vista aérea del sistema completo de la cooperativa',
      'Reunión de socios revisando resultados del biodigestor',
      'Distribución del biol entre los socios de la cooperativa',
    ],
    // ── FIN IMÁGENES ──────────────────────────────────────────

    tagColor: 'var(--tierra)',
    resumen: 'Una cooperativa de 8 familias convirtió un problema ambiental compartido en un activo productivo colectivo.',
    historia: [
      'La Cooperativa Praderas Araucanas agrupa a 8 familias productoras de la zona de Victoria, con un total de 60 cabezas de ganado bovino y ovino. Cada familia aportaba unos 40 kg diarios de estiércol al sistema, pero ninguna tenía infraestructura individual para tratarlo correctamente.',
      'Carmen Paillalef, presidenta de la cooperativa, buscaba una solución que pudiera beneficiar a todos los socios a la vez: tratar los residuos colectivos, generar un recurso compartido y cumplir con las crecientes exigencias ambientales del mercado comprador de su leche.',
      'El Sistema Bio 40, instalado en el predio central de la cooperativa, procesa los residuos de todas las familias socias. El biogás se usa para la sala de ordeña colectiva, y el biol se distribuye entre los socios en proporciones acordadas según aporte.',
    ],
    cita: '"Como cooperativa siempre buscamos soluciones que beneficien a todos por igual. El biodigestor hizo exactamente eso: todos ponemos los residuos, todos recibemos el gas y el abono. Fue una decisión perfecta para nuestro modelo."',
    metricas: [
      { label: 'Familias beneficiadas', valor: '8', unidad: 'socias' },
      { label: 'Biol distribuido/mes', valor: '12.000', unidad: 'litros' },
      { label: 'Ahorro energético', valor: '$420.000', unidad: 'CLP/mes' },
      { label: 'Reducción fertilizantes', valor: '55', unidad: '%' },
    ],
    antesDepues: [
      { antes: 'Residuos dispersos en 8 predios distintos', despues: 'Sistema centralizado de tratamiento colectivo' },
      { antes: 'Sin cumplimiento normativa ambiental grupal', despues: 'Certificación de buenas prácticas ganaderas' },
      { antes: 'Cada familia compraba gas por separado', despues: 'Biogás colectivo para sala de ordeña compartida' },
      { antes: 'Fertilizantes sintéticos en todos los predios', despues: 'Biol repartido entre socios según aporte' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────
// Placeholder SVG cuando no hay imagen real
// ─────────────────────────────────────────────────────────────────
function ImagenPlaceholder({ alt, style = {} }) {
  return (
    <div
      aria-label={alt}
      title="Reemplazar con imagen real"
      style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(135deg, #d4e8c8 0%, #c8dfc0 50%, #b8d4a8 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 10, position: 'relative',
        ...style,
      }}
    >
      {/* Campo ilustrado */}
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', maxWidth: 280, opacity: 0.6 }}>
        {/* Sky */}
        <rect width="320" height="200" fill="#d4e8c8" />
        {/* Hills */}
        <ellipse cx="80" cy="170" rx="130" ry="60" fill="#a8cc88" />
        <ellipse cx="240" cy="180" rx="120" ry="55" fill="#96be74" />
        {/* Biodigestor tube */}
        <rect x="90" y="110" width="140" height="55" rx="3" fill="#4A7C3F" />
        <ellipse cx="90" cy="137" rx="12" ry="28" fill="#3d6b35" />
        <ellipse cx="230" cy="137" rx="12" ry="28" fill="#3d6b35" />
        <path d="M130 110 Q130 72 160 68 Q190 72 190 110" fill="#5fa854" />
        {/* Gas pipe */}
        <rect x="153" y="48" width="14" height="22" rx="3" fill="#7B4F2E" />
        <rect x="165" y="52" width="24" height="10" rx="3" fill="#7B4F2E" />
        {/* Sun */}
        <circle cx="270" cy="38" r="20" fill="#f5c842" opacity="0.7" />
        {/* Cow silhouette */}
        <ellipse cx="58" cy="158" rx="22" ry="13" fill="#8b6914" opacity="0.5" />
        <rect x="48" y="155" width="5" height="14" rx="2" fill="#7a5c10" opacity="0.5" />
        <rect x="57" y="155" width="5" height="14" rx="2" fill="#7a5c10" opacity="0.5" />
        <circle cx="72" cy="150" r="10" fill="#8b6914" opacity="0.5" />
      </svg>
      {/* Label */}
      <div style={{
        position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.7)', borderRadius: 20,
        padding: '4px 14px', fontSize: 11, fontWeight: 500,
        color: 'var(--verde)', whiteSpace: 'nowrap',
        backdropFilter: 'blur(4px)',
      }}>
        📷 Reemplazar con foto real
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// Imagen real o placeholder
// ─────────────────────────────────────────────────────────────────
function Imagen({ src, alt, style = {} }) {
  if (!src) return <ImagenPlaceholder alt={alt} style={style} />
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
    />
  )
}

// ─────────────────────────────────────────────────────────────────
// Caso individual — alterna layout izquierda/derecha
// ─────────────────────────────────────────────────────────────────
function CasoCard({ caso, invertido }) {
  const [tabActivo, setTabActivo] = useState('historia')

  return (
    <article
      id={caso.id}
      style={{
        background: 'white',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid rgba(74,124,63,0.12)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* ── TOP: imagen grande + tag + métricas ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: invertido ? '1fr 1.1fr' : '1.1fr 1fr',
      }}
      className="caso-top-grid"
      >
        {/* Imagen principal — lado que cambia según invertido */}
        {!invertido && (
          <div style={{ height: 420, position: 'relative', overflow: 'hidden' }}>
            <Imagen src={caso.imagen} alt={caso.imagenAlt} />
            {/* Overlay badge modelo */}
            <div style={{
              position: 'absolute', top: 20, left: 20,
              background: caso.tagColor, color: 'white',
              fontSize: 12, fontWeight: 500,
              padding: '6px 14px', borderRadius: 20,
            }}>{caso.modelo}</div>
          </div>
        )}

        {/* Info panel */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Header */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--verde-palido)',
              padding: '5px 12px', borderRadius: 20,
              fontSize: 12, fontWeight: 500, color: 'var(--verde)',
              marginBottom: '1rem',
            }}>
              <span>📍</span> {caso.region} · {caso.tipo}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 700, color: 'var(--cafe-oscuro)',
              marginBottom: '0.5rem',
            }}>{caso.nombre}</h3>
            <p style={{ fontSize: 14, color: 'var(--gris)', marginBottom: '1rem' }}>
              {caso.productor} — <em style={{ fontStyle: 'normal', color: 'var(--tierra)' }}>{caso.cargo}</em>
            </p>
            <p style={{
              fontSize: 16, fontWeight: 400, color: '#5a4030',
              lineHeight: 1.7, borderLeft: '3px solid var(--verde-claro)',
              paddingLeft: '1rem',
            }}>{caso.resumen}</p>
          </div>

          {/* Métricas */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem', marginTop: '1.5rem',
          }}>
            {caso.metricas.map((m, i) => (
              <div key={i} style={{
                background: 'var(--crema)',
                borderRadius: 'var(--radius-md)',
                padding: '0.9rem 1rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24, fontWeight: 700,
                  color: 'var(--verde)', lineHeight: 1,
                }}>{m.valor} <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--gris)' }}>{m.unidad}</span></div>
                <div style={{ fontSize: 12, color: 'var(--gris)', marginTop: 3 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen lado derecho si invertido */}
        {invertido && (
          <div style={{ height: 420, position: 'relative', overflow: 'hidden' }}>
            <Imagen src={caso.imagen} alt={caso.imagenAlt} />
            <div style={{
              position: 'absolute', top: 20, right: 20,
              background: caso.tagColor, color: 'white',
              fontSize: 12, fontWeight: 500,
              padding: '6px 14px', borderRadius: 20,
            }}>{caso.modelo}</div>
          </div>
        )}
      </div>

      {/* ── BOTTOM: tabs historia / antes-después + galería ── */}
      <div style={{
        borderTop: '1px solid rgba(74,124,63,0.1)',
        padding: '2rem 2.5rem',
      }}>
        {/* Tab selector */}
        <div style={{ display: 'flex', gap: 8, marginBottom: '1.75rem' }}>
          {[
            { id: 'historia', label: '📖 Historia completa' },
            { id: 'antes', label: '⚡ Antes vs. Después' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTabActivo(t.id)}
              style={{
                padding: '9px 18px', borderRadius: 30,
                border: `1.5px solid ${tabActivo === t.id ? 'var(--verde)' : 'rgba(74,124,63,0.2)'}`,
                background: tabActivo === t.id ? 'var(--verde-palido)' : 'white',
                color: tabActivo === t.id ? 'var(--verde)' : 'var(--gris)',
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >{t.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}
          className="caso-bottom-grid"
        >
          {/* Tab content */}
          <div>
            {tabActivo === 'historia' ? (
              <div>
                {caso.historia.map((p, i) => (
                  <p key={i} style={{
                    fontSize: 15, color: '#5a4030', lineHeight: 1.8,
                    marginBottom: i < caso.historia.length - 1 ? '1rem' : 0,
                  }}>{p}</p>
                ))}
                {/* Cita destacada */}
                <blockquote style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17, fontStyle: 'italic',
                  color: 'var(--cafe-oscuro)',
                  lineHeight: 1.7,
                  borderLeft: '4px solid var(--verde)',
                  paddingLeft: '1.25rem',
                  marginTop: '1.5rem',
                }}>
                  {caso.cita}
                  <footer style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontStyle: 'normal', color: 'var(--gris)', marginTop: 8 }}>
                    — {caso.productor}, {caso.nombre}
                  </footer>
                </blockquote>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {caso.antesDepues.map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1fr auto 1fr',
                    gap: '0.75rem', alignItems: 'center',
                    background: 'var(--crema)', borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                  }}>
                    <div style={{ fontSize: 13, color: '#a07060', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                      <span style={{ color: '#c0746a', minWidth: 14 }}>✗</span>
                      {r.antes}
                    </div>
                    <span style={{ fontSize: 16, color: 'var(--gris)' }}>→</span>
                    <div style={{ fontSize: 13, color: 'var(--verde)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                      <span style={{ fontWeight: 700, minWidth: 14 }}>✓</span>
                      {r.despues}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Galería secundaria */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Galería del caso
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {/* Foto grande (span 2) */}
              <div style={{ gridColumn: '1 / -1', height: 160, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Imagen src={caso.galeria[0]} alt={caso.galeriaAlts[0]} />
              </div>
              {/* Dos fotos pequeñas */}
              {[1, 2].map(idx => (
                <div key={idx} style={{ height: 110, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Imagen src={caso.galeria[idx]} alt={caso.galeriaAlts[idx]} />
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: 'var(--gris)', marginTop: '0.5rem', textAlign: 'center', fontStyle: 'italic' }}>
              Instalación: {caso.instalacion}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────────
// Sección principal
// ─────────────────────────────────────────────────────────────────
export default function CasosExito() {
  return (
    <section id="casos-exito" style={{ background: 'var(--crema)', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Casos de éxito</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: 'var(--cafe-oscuro)',
            }}>
              Productores que ya{' '}
              <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>transformaron su predio</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--gris)', lineHeight: 1.7, maxWidth: 520, marginTop: '0.75rem' }}>
              Historias reales de lecherías y cooperativas del centro sur de Chile que adoptaron biodigestores Sistema Bio con Ecosuyu.
            </p>
          </div>
          <a href="#calculadora" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            Calcular el mío →
          </a>
        </div>

        {/* Dos casos alternados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {CASOS.map((caso, i) => (
            <CasoCard key={caso.id} caso={caso} invertido={i % 2 !== 0} />
          ))}
        </div>

        {/* CTA inferior */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2.5rem',
          background: 'var(--verde-palido)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(74,124,63,0.15)',
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '0.5rem' }}>
            ¿Quieres ser el próximo caso de éxito?
          </p>
          <p style={{ fontSize: 15, color: 'var(--gris)', marginBottom: '1.5rem' }}>
            Visita técnica gratuita en Biobío, La Araucanía, Los Ríos y Los Lagos.
          </p>
          <a href="#contacto" className="btn-primary">Solicitar visita gratuita →</a>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .caso-top-grid {
            grid-template-columns: 1fr !important;
          }
          .caso-top-grid > div:first-child[style*="height: 420px"],
          .caso-top-grid > div:last-child[style*="height: 420px"] {
            height: 240px !important;
          }
          .caso-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
