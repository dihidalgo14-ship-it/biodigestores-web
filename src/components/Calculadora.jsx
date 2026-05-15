import React, { useState } from 'react'

// ─────────────────────────────────────────────────────────────────
// DATOS TÉCNICOS
// ─────────────────────────────────────────────────────────────────

const ANIMALES = [
  { id: 'bovino',  label: 'Bovino / Lechería', icon: '🐄', pesoKg: 600, pctGuano: 0.08 },
  { id: 'porcino', label: 'Porcino',            icon: '🐷', pesoKg: 90,  pctGuano: 0.06 },
  { id: 'caprino', label: 'Caprino (cabra)',     icon: '🐐', pesoKg: 45,  pctGuano: 0.05 },
  { id: 'ovino',   label: 'Ovino (oveja)',       icon: '🐑', pesoKg: 55,  pctGuano: 0.05 },
  { id: 'equino',  label: 'Equino / Caballo',    icon: '🐴', pesoKg: 450, pctGuano: 0.03 },
  { id: 'llama',   label: 'Llama',               icon: '🦙', pesoKg: 120, pctGuano: 0.04 },
  { id: 'alpaca',  label: 'Alpaca',              icon: '🦙', pesoKg: 65,  pctGuano: 0.04 },
]

// Tabla Sistema Bio: guano mínimo diario necesario según clima
const TABLA_BIODIGESTORES = [
  { nombre: 'Sistema Bio 6',   guanoTemplado: 45,   guanoFrio: 25  },
  { nombre: 'Sistema Bio 8',   guanoTemplado: 65,   guanoFrio: 35  },
  { nombre: 'Sistema Bio 12',  guanoTemplado: 90,   guanoFrio: 45  },
  { nombre: 'Sistema Bio 16',  guanoTemplado: 130,  guanoFrio: 65  },
  { nombre: 'Sistema Bio 20',  guanoTemplado: 180,  guanoFrio: 90  },
  { nombre: 'Sistema Bio 30',  guanoTemplado: 260,  guanoFrio: 135 },
  { nombre: 'Sistema Bio 40',  guanoTemplado: 350,  guanoFrio: 180 },
  { nombre: 'Sistema Bio 80',  guanoTemplado: 700,  guanoFrio: 360 },
  { nombre: 'Sistema Bio 120', guanoTemplado: 1050, guanoFrio: 540 },
  { nombre: 'Sistema Bio 160', guanoTemplado: 1400, guanoFrio: 720 },
  { nombre: 'Sistema Bio 200', guanoTemplado: 1750, guanoFrio: 900 },
]

// Regiones Chile → clima
const REGIONES = [
  { nombre: 'Arica y Parinacota',   clima: 'templado' },
  { nombre: 'Tarapacá',             clima: 'templado' },
  { nombre: 'Antofagasta',          clima: 'templado' },
  { nombre: 'Atacama',              clima: 'templado' },
  { nombre: 'Coquimbo',             clima: 'templado' },
  { nombre: 'Valparaíso',           clima: 'templado' },
  { nombre: 'Metropolitana',        clima: 'templado' },
  { nombre: "O'Higgins",            clima: 'templado' },
  { nombre: 'Maule',                clima: 'templado' },
  { nombre: 'Ñuble',                clima: 'templado' },
  { nombre: 'Biobío',               clima: 'templado' },
  { nombre: 'La Araucanía norte',   clima: 'templado' },
  { nombre: 'La Araucanía sur',     clima: 'frio'     },
  { nombre: 'Los Ríos',             clima: 'frio'     },
  { nombre: 'Los Lagos',            clima: 'frio'     },
  { nombre: 'Aysén',                clima: 'frio'     },
  { nombre: 'Magallanes',           clima: 'frio'     },
  { nombre: 'Otra región',          clima: 'frio'     },
]

// ─────────────────────────────────────────────────────────────────
// LÓGICA DE CÁLCULO
// ─────────────────────────────────────────────────────────────────
function calcular(animalId, numAnimales, horasEstabulado, regionNombre) {
  const animal = ANIMALES.find(a => a.id === animalId)
  const region = REGIONES.find(r => r.nombre === regionNombre)
  if (!animal || !region || !numAnimales || !horasEstabulado) return null

  // 1. Guano total diario
  const guanoTotalDia = numAnimales * animal.pesoKg * animal.pctGuano
  // 2. Guano en estabulación
  const guanoEstabulado = (guanoTotalDia / 24) * horasEstabulado

  const columna = region.clima === 'templado' ? 'guanoTemplado' : 'guanoFrio'

  // 3. Buscar el biodigestor más pequeño que cubre el guano estabulado
  const biodigestor = TABLA_BIODIGESTORES.find(b => b[columna] >= guanoEstabulado)
    || TABLA_BIODIGESTORES[TABLA_BIODIGESTORES.length - 1]

  return {
    guanoTotalDia:   Math.round(guanoTotalDia),
    guanoEstabulado: Math.round(guanoEstabulado),
    clima:           region.clima,
    biodigestor,
    superaMaximo:    guanoEstabulado > TABLA_BIODIGESTORES[TABLA_BIODIGESTORES.length - 1][columna],
  }
}

const PASOS = ['Tipo de animal', 'Cantidad y horas', 'Tus datos', 'Resultado']

// ─────────────────────────────────────────────────────────────────
// COMPONENTE
// ─────────────────────────────────────────────────────────────────
export default function Calculadora() {
  const [paso, setPaso]               = useState(0)
  const [animal, setAnimal]           = useState(null)
  const [numAnimales, setNumAnimales] = useState('')
  const [horas, setHoras]             = useState('')
  const [nombre, setNombre]           = useState('')
  const [telefono, setTelefono]       = useState('')
  const [email, setEmail]             = useState('')
  const [region, setRegion]           = useState('')
  const [enviado, setEnviado]         = useState(false)

  const progreso = (paso / (PASOS.length - 1)) * 100
  const siguiente = () => setPaso(p => p + 1)
  const atras     = () => setPaso(p => p - 1)

  const resultado = paso === 3
    ? calcular(animal, Number(numAnimales), Number(horas), region)
    : null

 const handleEnviar = async (e) => {
  e.preventDefault()
  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: '6e334a2e-fa3c-4d87-aad9-66141ecab0a4',
      subject: `Calculadora Ecosuyu — ${ANIMALES.find(a => a.id === animal)?.label} · ${region.split('(')[0].trim()}`,
      from_name: nombre,
      nombre,
      telefono,
      email,
      region,
      tipo_animal: ANIMALES.find(a => a.id === animal)?.label,
      numero_animales: numAnimales,
      horas_estabulacion: horas,
      biodigestor_recomendado: resultado?.biodigestor?.nombre,
      guano_estabulado: `${resultado?.guanoEstabulado} kg/día`,
      clima: resultado?.clima,
    }),
  })
  setEnviado(true)
  setPaso(3)
}

  const inputStyle = {
    width: '100%', padding: '12px 16px', fontSize: 15,
    border: '1.5px solid rgba(74,124,63,0.25)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-body)',
    color: 'var(--cafe-oscuro)', outline: 'none',
  }

  return (
    <section id="calculadora" style={{ background: 'var(--cafe-oscuro)', padding: '90px 2rem' }}>
      <div className="container">
        <div className="section-tag" style={{ color: 'var(--cafe-claro)' }}>Calculadora de biodigestor</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'white', marginBottom: '1rem',
        }}>
          ¿Qué biodigestor{' '}
          <em style={{ color: 'var(--verde-claro)', fontStyle: 'normal' }}>necesitas?</em>
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 520, marginBottom: '3rem' }}>
          Ingresa tu tipo de animal, cantidad y horas de estabulación. Calculamos el guano disponible y te recomendamos el biodigestor exacto según el clima de tu zona.
        </p>

        {/* Wizard card — mismo ancho y estilo que antes */}
        <div style={{
          background: 'white', borderRadius: 'var(--radius-xl)',
          maxWidth: 680, overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
        }}>
          {/* Progress bar */}
          <div style={{ height: 4, background: 'var(--crema)' }}>
            <div style={{
              height: '100%', width: `${progreso}%`,
              background: 'var(--verde)', transition: 'width 0.4s ease',
            }} />
          </div>

          {/* Step indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1.25rem 2rem 0',
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {PASOS.map((s, i) => (
                <React.Fragment key={i}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: i <= paso ? 'var(--verde)' : 'var(--crema)',
                    border: `2px solid ${i <= paso ? 'var(--verde)' : 'rgba(74,124,63,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 500,
                    color: i <= paso ? 'white' : 'var(--gris)',
                    transition: 'all 0.3s',
                  }}>
                    {i < paso ? '✓' : i + 1}
                  </div>
                  {i < PASOS.length - 1 && (
                    <div style={{ width: 32, height: 2, background: i < paso ? 'var(--verde)' : 'var(--crema)', transition: 'all 0.3s' }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--gris)' }}>
              Paso {paso + 1} de {PASOS.length}
            </span>
          </div>

          <div style={{ padding: '2rem' }}>

            {/* ── PASO 0: Tipo de animal ── */}
            {paso === 0 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '0.5rem' }}>
                  ¿Qué tipo de animal tienes?
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gris)', marginBottom: '1.5rem' }}>
                  Selecciona el animal principal de tu predio.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '0.75rem' }}>
                  {ANIMALES.map(a => (
                    <button
                      key={a.id}
                      onClick={() => { setAnimal(a.id); siguiente() }}
                      style={{
                        padding: '1rem 0.5rem',
                        border: `2px solid ${animal === a.id ? 'var(--verde)' : 'rgba(74,124,63,0.2)'}`,
                        borderRadius: 'var(--radius-md)',
                        background: animal === a.id ? 'var(--verde-palido)' : 'white',
                        cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                        fontFamily: 'var(--font-body)',
                        transition: 'all 0.15s',
                      }}
                    >
                      <span style={{ fontSize: 26 }}>{a.icon}</span>
                      <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--cafe-oscuro)', textAlign: 'center', lineHeight: 1.2 }}>{a.label}</span>
                      <span style={{ fontSize: 10, color: 'var(--gris)' }}>~{a.pesoKg} kg</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── PASO 1: Cantidad y horas ── */}
            {paso === 1 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '0.5rem' }}>
                  Cantidad y horas de estabulación
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gris)', marginBottom: '1.5rem' }}>
                  Ingresa cuántos animales tienes y cuántas horas al día permanecen en el establo o corral.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)', display: 'block', marginBottom: 8 }}>
                      Número de {ANIMALES.find(a => a.id === animal)?.label || 'animales'}
                    </label>
                    <input
                      type="number" min="1" placeholder="Ej: 10"
                      value={numAnimales} onChange={e => setNumAnimales(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)', display: 'block', marginBottom: 8 }}>
                      Horas de estabulación por día
                    </label>
                    <input
                      type="number" min="1" max="24" placeholder="Ej: 12"
                      value={horas} onChange={e => setHoras(e.target.value)}
                      style={inputStyle}
                    />
                    <p style={{ fontSize: 12, color: 'var(--gris)', marginTop: 6 }}>
                      Horas que los animales pasan encerrados y cuyo guano puede recolectarse.
                    </p>
                  </div>

                  {/* Preview en tiempo real */}
                  {numAnimales && horas && (() => {
                    const a = ANIMALES.find(x => x.id === animal)
                    const totalDia    = Math.round(Number(numAnimales) * a.pesoKg * a.pctGuano)
                    const estabulado  = Math.round((totalDia / 24) * Number(horas))
                    return (
                      <div style={{ background: 'var(--verde-palido)', borderRadius: 10, padding: '0.85rem 1rem', border: '1px solid rgba(74,124,63,0.2)' }}>
                        <p style={{ fontSize: 13, color: 'var(--verde)', fontWeight: 500, marginBottom: 4 }}>📊 Estimación preliminar</p>
                        <p style={{ fontSize: 13, color: 'var(--cafe-oscuro)' }}>Guano total/día: <strong>{totalDia} kg</strong></p>
                        <p style={{ fontSize: 13, color: 'var(--cafe-oscuro)' }}>Guano en estabulación: <strong>{estabulado} kg/día</strong></p>
                      </div>
                    )
                  })()}
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: '1.75rem' }}>
                  <button className="btn-secondary" onClick={atras} style={{ padding: '12px 20px' }}>← Atrás</button>
                  <button
                    className="btn-primary" onClick={siguiente}
                    style={{ flex: 1, justifyContent: 'center' }}
                    disabled={!numAnimales || !horas}
                  >Siguiente →</button>
                </div>
              </div>
            )}

            {/* ── PASO 2: Datos de contacto + región ── */}
            {paso === 2 && (
              <form onSubmit={handleEnviar}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: '0.5rem' }}>
                  Tus datos de contacto
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gris)', marginBottom: '1.5rem' }}>
                  La región nos permite calcular el biodigestor correcto según el clima de tu zona.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { key: 'nombre',   label: 'Nombre completo',      placeholder: 'Juan Pérez',          val: nombre,   set: setNombre,   type: 'text'  },
                    { key: 'telefono', label: 'Teléfono / WhatsApp',  placeholder: '+56 9 1234 5678',      val: telefono, set: setTelefono, type: 'tel'   },
                    { key: 'email',    label: 'Email',                 placeholder: 'juan@mifundo.cl',      val: email,    set: setEmail,    type: 'email' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)', display: 'block', marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} value={f.val}
                        onChange={e => f.set(e.target.value)} required style={inputStyle}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--cafe-oscuro)', display: 'block', marginBottom: 6 }}>
                      Región / Zona
                    </label>
                    <select
                      value={region} onChange={e => setRegion(e.target.value)} required
                      style={{ ...inputStyle, cursor: 'pointer', background: 'white', color: region ? 'var(--cafe-oscuro)' : 'var(--gris)' }}
                    >
                      <option value="">Selecciona tu región...</option>
                      {REGIONES.map(r => (
                        <option key={r.nombre} value={r.nombre}>
                          {r.nombre} {r.clima === 'frio' ? '❄️' : '🌤️'}
                        </option>
                      ))}
                    </select>
                    {region && (
                      <p style={{ fontSize: 12, color: 'var(--verde)', marginTop: 5 }}>
                        Clima: <strong>{REGIONES.find(r => r.nombre === region)?.clima === 'frio' ? '❄️ Frío (10–15°C)' : '🌤️ Templado (15–23°C)'}</strong>
                      </p>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: '1.75rem' }}>
                  <button type="button" className="btn-secondary" onClick={atras} style={{ padding: '12px 20px' }}>← Atrás</button>
                  <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    Ver mi recomendación →
                  </button>
                </div>
                <p style={{ fontSize: 12, color: 'var(--gris)', marginTop: '1rem', textAlign: 'center' }}>
                  Tus datos son confidenciales. Solo los usamos para contactarte.
                </p>
              </form>
            )}

            {/* ── PASO 3: Resultado ── */}
            {paso === 3 && resultado && (
              <div>
                <div style={{
                  background: 'var(--verde-palido)', borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem', marginBottom: '1.5rem',
                  border: '1.5px solid rgba(74,124,63,0.2)',
                }}>
                  <div style={{ fontSize: 13, color: 'var(--verde)', fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ✅ Recomendación para tu predio
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: 4 }}>
                    {resultado.biodigestor.nombre}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--gris)' }}>
                    Clima {resultado.clima === 'frio' ? '❄️ frío (10–15°C)' : '🌤️ templado (15–23°C)'} · {region.split('(')[0].trim()}
                  </p>
                  {resultado.superaMaximo && (
                    <p style={{ fontSize: 13, color: 'var(--tierra)', marginTop: 8, fontWeight: 500 }}>
                      ⚠️ Tu producción supera el S200. Contáctanos para diseñar un sistema modular a medida.
                    </p>
                  )}
                </div>

                {/* Métricas del cálculo */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Guano total/día',       val: `${resultado.guanoTotalDia} kg` },
                    { label: 'Guano en estabulación', val: `${resultado.guanoEstabulado} kg/día` },
                    { label: 'Horas estabulado',       val: `${horas} hrs/día` },
                    { label: 'Zona climática',         val: resultado.clima === 'frio' ? '❄️ Frío' : '🌤️ Templado' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'var(--crema)', borderRadius: 10, padding: '0.75rem 1rem' }}>
                      <div style={{ fontSize: 11, color: 'var(--gris)', marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--cafe-oscuro)' }}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {enviado && (
                  <div style={{
                    background: 'var(--verde)', color: 'white',
                    borderRadius: 'var(--radius-md)', padding: '1.25rem',
                    textAlign: 'center', marginBottom: '1rem',
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>✅</div>
                    <strong style={{ fontFamily: 'var(--font-display)', fontSize: 17 }}>¡Recibimos tu solicitud, {nombre}!</strong>
                    <p style={{ fontSize: 14, marginTop: 6, opacity: 0.9 }}>
                      Un técnico Ecosuyu de tu región te contactará en las próximas 24 horas hábiles.
                    </p>
                  </div>
                )}

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/56912345678?text=Hola, la calculadora me recomendó el ${resultado.biodigestor.nombre}. Tengo ${numAnimales} ${ANIMALES.find(a => a.id === animal)?.label} en ${region.split('(')[0].trim()}. ¿Me pueden cotizar?`}
                    className="btn-primary"
                    target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    💬 Consultar por WhatsApp
                  </a>
                  <button
                    className="btn-secondary"
                    onClick={() => { setPaso(0); setAnimal(null); setNumAnimales(''); setHoras(''); setRegion(''); setNombre(''); setTelefono(''); setEmail(''); setEnviado(false) }}
                    style={{ padding: '12px 16px' }}
                  >
                    Recalcular
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}