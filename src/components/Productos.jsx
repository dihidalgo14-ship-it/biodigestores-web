import React from 'react'

export const PRODUCTOS = [
  {
    id: 'sistema-8',
    nombre: 'Sistema Bio 8',
    subtitulo: 'Granjas de traspatio y familias rurales',
    icono: '🌱',
    imagen: '/producto-sistema-8.png',
    volumen: '8 m³',
    area: '8.5 × 4.0 m',
    precio: 2089000,
    precioInstalacion: 1115200,
    tag: null,
    animales: {
      bovino: '2–3 vacas',
      porcino: '6–8 cerdos',
      caprino: '8–10 cabras',
    },
    produccion: {
      biogas: '1–1.8 m³/día',
      biol: '100–150 L/día',
    },
    incluye: [
      'Geomembrana de alta calidad certificada',
      'Tubería de entrada y salida PVC',
      'Sistema colector de biogás',
      'Manguera de distribución de gas (10m)',
      'Válvulas y accesorios de conexión',
      'Instalación y puesta en marcha',
      'Capacitación básica de uso (2 hrs)',
      'Garantía 5 años en geomembrana',
    ],
    fichaDestacados: [
      { label: 'Capacidad', valor: '8 m³' },
      { label: 'Área requerida', valor: '8.5 × 4.0 m' },
      { label: 'Producción biogás', valor: '~1 m³/día' },
      { label: 'Equivale a', valor: '~0.5 kg GLP/día' },
      { label: 'Vida útil', valor: '+12 años' },
      { label: 'Instalación', valor: '2–3 días' },
    ],
    descripcion: 'Ideal para familias rurales, pequeños agricultores y granjas de traspatio. El Sistema Bio 8 produce suficiente biogás para cocinar las comidas diarias de una familia y genera biol para fertilizar huertos y jardines. Una inversión accesible con retorno en menos de 2 años.',
    color: 'var(--verde-palido)',
    borderColor: 'rgba(74,124,63,0.2)',
  },
  {
    id: 'sistema-20',
    nombre: 'Sistema Bio 20',
    subtitulo: 'Granjas pequeñas y medianas',
    icono: '🚜',
    imagen: '/producto-sistema-20.png',
    volumen: '20 m³',
    area: '15.0 × 4.0 m',
    precio: 2873000,
    precioInstalacion: 1235000,
    tag: 'Más vendido',
    animales: {
      bovino: '5–8 vacas',
      porcino: '15–20 cerdos',
      caprino: '20–25 cabras',
    },
    produccion: {
      biogas: '3–4.8 m³/día',
      biol: '200–405 L/día',
    },
    incluye: [
      'Geomembrana tubular de alta calidad certificada',
      'Sistema de conexión de entrada y salida',
      'Colector de biogás con regulador de presión',
      'Manguera de distribución de gas (20m)',
      'Kit de accesorios y válvulas completo',
      'Instalación y puesta en marcha profesional',
      'Capacitación uso y mantención (4 hrs)',
      'Manual técnico de operación',
      'Soporte post-instalación 30 días',
      'Garantía 8 años en geomembrana',
    ],
    fichaDestacados: [
      { label: 'Capacidad', valor: '20 m³' },
      { label: 'Área requerida', valor: '15.0 × 4.0 m' },
      { label: 'Producción biogás', valor: '2–3.5 m³/día' },
      { label: 'Equivale a', valor: '~1.5 kg GLP/día' },
      { label: 'Vida útil', valor: '+12 años' },
      { label: 'Instalación', valor: '3–4 días' },
    ],
    descripcion: 'El modelo más popular para lecherías pequeñas y medianas, planteles porcinos familiares y cooperativas de pequeños productores. Produce biogás suficiente para cocinar y calentar agua, y genera cientos de litros diarios de biol para fertilizar praderas y cultivos.',
    color: '#EEF8E6',
    borderColor: 'var(--verde)',
  },
  {
    id: 'sistema-40',
    nombre: 'Sistema Bio 40',
    subtitulo: 'Agronegocios y explotaciones medianas',
    icono: '🏭',
    imagen: '/producto-sistema-40.png',
    volumen: '40 m³',
    area: '23.0 × 7.0 m',
    precio: 4115000,
    precioInstalacion: 1235200,
    tag: 'Alta capacidad',
    animales: {
      bovino: '10–18 vacas',
      porcino: '40–60 cerdos',
      caprino: '50–70 cabras',
    },
    produccion: {
      biogas: '6–9.6 m³/día',
      biol: '540–795 L/día',
    },
    incluye: [
      'Geomembrana tubular de alta resistencia certificada',
      'Sistema modular ampliable hasta 200 m³',
      'Colector de biogás con sistema de purificación',
      'Kit de distribución de gas profesional (30m)',
      'Accesorios, válvulas y conexiones completas',
      'Instalación profesional certificada',
      'Capacitación integral equipo (8 hrs)',
      'Asesoría uso del biol en tu sistema productivo',
      'Plan de mantención primer año',
      'Soporte técnico post-instalación 60 días',
      'Garantía 10 años en geomembrana',
    ],
    fichaDestacados: [
      { label: 'Capacidad', valor: '40 m³' },
      { label: 'Área requerida', valor: '23.0 × 7.0 m' },
      { label: 'Producción biogás', valor: '5–8 m³/día' },
      { label: 'Equivale a', valor: '~3.5 kg GLP/día' },
      { label: 'Vida útil', valor: '+12 años' },
      { label: 'Instalación', valor: '5–7 días' },
    ],
    descripcion: 'Diseñado para agronegocios, lecherías medianas y grandes, cooperativas y productores que buscan independencia energética real. El Sistema 40 puede modularse para superar los 200 m³, siendo la solución escalable más robusta del mercado. Ideal para sustituir GLP en calderas y calefacción de plantas.',
    color: 'var(--crema-oscura)',
    borderColor: 'rgba(123,79,46,0.2)',
  },
]

export default function Productos({ onVerDetalle }) {
  const formatPrice = (n) => `$${n.toLocaleString('es-CL')}`

  return (
    <section id="productos" style={{ background: 'white', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag">Modelos disponibles en Chile</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'var(--cafe-oscuro)', marginBottom: '1rem',
        }}>
          Elige el biodigestor para{' '}
          <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>tu predio</em>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--gris)', lineHeight: 1.7, maxWidth: 540, marginBottom: '3rem' }}>
          Tres modelos prefabricados y modulares, listos para instalar. Precios incluyen equipo completo con accesorios. La venta de nuestro equipos incluyen instalación, capacitación y seguimiento.

        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {PRODUCTOS.map((p) => (
            <article key={p.id} style={{
              borderRadius: 'var(--radius-lg)',
              border: `2px solid ${p.id === 'sistema-20' ? 'var(--verde)' : 'rgba(74,124,63,0.15)'}`,
              overflow: 'hidden',
              background: 'white',
              display: 'flex', flexDirection: 'column',
              transition: 'box-shadow 0.2s, transform 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              {/* Foto del producto */}
              <div style={{ width: '100%', height: 200, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.imagen}
                  alt={`Biodigestor ${p.nombre}`}
                  style={{ width: '100%', height: '100%', objectFit: 'container', display: 'block' }}
                />
                {/* Tag badge sobre la imagen */}
                {p.tag && (
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    background: p.id === 'sistema-20' ? 'var(--verde)' : 'var(--tierra)',
                    color: 'white', fontSize: 11, fontWeight: 500,
                    padding: '4px 12px', borderRadius: 20,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>{p.tag}</div>
                )}
              </div>

              {/* Header */}
              <div style={{
                background: p.color,
                padding: '1.25rem 1.75rem',
                borderBottom: `1px solid ${p.borderColor}`,
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--cafe-oscuro)' }}>{p.nombre}</h3>
                <p style={{ fontSize: 14, color: 'var(--gris)', marginTop: 4 }}>{p.subtitulo}</p>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Key specs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { label: 'Capacidad', val: p.volumen },
                    { label: 'Área requerida', val: p.area },
                    { label: 'Biogás/día', val: p.produccion.biogas },
                    { label: 'Biol/día', val: p.produccion.biol },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'var(--crema)', borderRadius: 8, padding: '0.6rem 0.75rem' }}>
                      <div style={{ fontSize: 11, color: 'var(--gris)', marginBottom: 2 }}>{s.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Includes preview */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.incluye.slice(0, 4).map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--cafe-oscuro)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--verde)', fontWeight: 700, minWidth: 14 }}>✓</span>
                      {item}
                    </li>
                  ))}
                  {p.incluye.length > 4 && (
                    <li style={{ fontSize: 13, color: 'var(--gris)', paddingLeft: 22 }}>
                      + {p.incluye.length - 4} items más incluidos...
                    </li>
                  )}
                </ul>

                {/* Price */}
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(123,79,46,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--verde)' }}>
                    {formatPrice(p.precio)}
                    <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--gris)' }}> CLP + IVA</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--gris)', marginBottom: '1rem' }}>
                    Instalación desde {formatPrice(p.precioInstalacion)} CLP + IVA
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
                    <button
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => onVerDetalle(p)}
                    >
                      Ver ficha completa
                    </button>
                    <a
                      href="#calculadora"
                      className="btn-secondary"
                      style={{ textAlign: 'center', justifyContent: 'center' }}
                    >
                      Calcular si me conviene
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--gris)', marginTop: '2rem' }}>
          ¿Necesitas más de 40 m³? Los sistemas son modulares y pueden llegar a <strong>más de 200 m³</strong>.{' '}
          <a href="#contacto" style={{ color: 'var(--verde)', textDecoration: 'underline' }}>Consulta por un diseño a medida.</a>
        </p>
      </div>
    </section>
  )
}