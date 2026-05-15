import React, { useState, useEffect } from 'react'

const REGIONES = ['Biobío', 'Ñuble', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Otra región']
const INTERESES = [
  'Conocer modelos y precios',
  'Visita técnica gratuita',
  'Asesoría sobre biofertilizante',
  'Información para cooperativa',
  'Otro',
]

const INITIAL = {
  nombre: '',
  telefono: '',
  email: '',
  region: '',
  interes: '',
  mensaje: '',
}

export default function ModalContacto({ onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [errors, setErrors] = useState({})

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const set = (key) => (e) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    setErrors(er => ({ ...er, [key]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre'
    if (!form.telefono.trim()) e.telefono = 'Ingresa tu teléfono o WhatsApp'
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Email inválido'
    if (!form.region) e.region = 'Selecciona tu región'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setEnviando(true)

    const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: '6e334a2e-fa3c-4d87-aad9-66141ecab0a4',
    subject: `Nueva consulta Ecosuyu — ${form.interes || 'Contacto web'}`,
    from_name: "Contacto Web",
    ...form,
  }),
})

if (!response.ok) throw new Error('Error al enviar')

    setEnviando(false)
    setEnviado(true)
  }

  const inputStyle = (key) => ({
    width: '100%',
    padding: '11px 14px',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    color: 'var(--cafe-oscuro)',
    background: 'white',
    border: `1.5px solid ${errors[key] ? '#e05252' : 'rgba(74,124,63,0.25)'}`,
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  const labelStyle = {
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--cafe-oscuro)',
    display: 'block',
    marginBottom: 6,
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 600,
        background: 'rgba(44,26,14,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          width: '100%', maxWidth: 560,
          maxHeight: '92vh', overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(44,26,14,0.3)',
          animation: 'fadeUp 0.3s ease both',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, var(--verde-palido), var(--crema-oscura))',
          padding: '2rem 2rem 1.5rem',
          borderBottom: '1px solid rgba(74,124,63,0.12)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(74,124,63,0.12)',
              padding: '4px 12px', borderRadius: 20,
              fontSize: 12, fontWeight: 500, color: 'var(--verde)',
              marginBottom: '0.75rem',
            }}>
              🌿 Sin compromiso · Respuesta en 24 hrs
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26, fontWeight: 700,
              color: 'var(--cafe-oscuro)',
              marginBottom: 4,
            }}>¿Conversamos sobre tu predio?</h2>
            <p style={{ fontSize: 14, color: 'var(--gris)' }}>
              Un técnico Ecosuyu te contactará para orientarte sin costo.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: 'rgba(123,79,46,0.1)', border: 'none', cursor: 'pointer',
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              fontSize: 16, color: 'var(--cafe)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(123,79,46,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(123,79,46,0.1)'}
          >✕</button>
        </div>

        <div style={{ padding: '2rem' }}>
          {enviado ? (
            /* ── ESTADO ENVIADO ── */
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'var(--verde-palido)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32, margin: '0 auto 1.25rem',
              }}>✅</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--cafe-oscuro)', marginBottom: 8 }}>
                ¡Mensaje recibido, {form.nombre.split(' ')[0]}!
              </h3>
              <p style={{ fontSize: 15, color: 'var(--gris)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 1.5rem' }}>
                Un técnico Ecosuyu de tu región te contactará en las próximas <strong>24 horas hábiles</strong>.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/56981730151?text=Hola, acabo de llenar el formulario en la web. Mi nombre es ${form.nombre}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                >
                  💬 También por WhatsApp
                </a>
                <button className="btn-secondary" onClick={onClose}>Cerrar</button>
              </div>
            </div>
          ) : (
            /* ── FORMULARIO ── */
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

                {/* Nombre */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Nombre completo *</label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    value={form.nombre}
                    onChange={set('nombre')}
                    style={inputStyle('nombre')}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = errors.nombre ? '#e05252' : 'rgba(74,124,63,0.25)'}
                  />
                  {errors.nombre && <p style={{ fontSize: 12, color: '#e05252', marginTop: 4 }}>{errors.nombre}</p>}
                </div>

                {/* Teléfono */}
                <div>
                  <label style={labelStyle}>Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={form.telefono}
                    onChange={set('telefono')}
                    style={inputStyle('telefono')}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = errors.telefono ? '#e05252' : 'rgba(74,124,63,0.25)'}
                  />
                  {errors.telefono && <p style={{ fontSize: 12, color: '#e05252', marginTop: 4 }}>{errors.telefono}</p>}
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    placeholder="juan@mifundo.cl"
                    value={form.email}
                    onChange={set('email')}
                    style={inputStyle('email')}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#e05252' : 'rgba(74,124,63,0.25)'}
                  />
                  {errors.email && <p style={{ fontSize: 12, color: '#e05252', marginTop: 4 }}>{errors.email}</p>}
                </div>

                {/* Región */}
                <div>
                  <label style={labelStyle}>Región *</label>
                  <select
                    value={form.region}
                    onChange={set('region')}
                    style={{ ...inputStyle('region'), cursor: 'pointer', color: form.region ? 'var(--cafe-oscuro)' : 'var(--gris)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = errors.region ? '#e05252' : 'rgba(74,124,63,0.25)'}
                  >
                    <option value="">Selecciona...</option>
                    {REGIONES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.region && <p style={{ fontSize: 12, color: '#e05252', marginTop: 4 }}>{errors.region}</p>}
                </div>

                {/* Interés */}
                <div>
                  <label style={labelStyle}>¿En qué te podemos ayudar?</label>
                  <select
                    value={form.interes}
                    onChange={set('interes')}
                    style={{ ...inputStyle('interes'), cursor: 'pointer', color: form.interes ? 'var(--cafe-oscuro)' : 'var(--gris)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(74,124,63,0.25)'}
                  >
                    <option value="">Selecciona...</option>
                    {INTERESES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                {/* Mensaje */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Cuéntanos sobre tu predio (opcional)</label>
                  <textarea
                    placeholder="Ej: Tengo una lechería con 20 vacas en Los Ángeles. Me interesa saber si el sistema se adapta a mi terreno..."
                    value={form.mensaje}
                    onChange={set('mensaje')}
                    rows={3}
                    style={{
                      ...inputStyle('mensaje'),
                      resize: 'vertical',
                      minHeight: 80,
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--verde)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(74,124,63,0.25)'}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={enviando}
                className="btn-primary"
                style={{
                  width: '100%', justifyContent: 'center',
                  marginTop: '1.5rem',
                  opacity: enviando ? 0.75 : 1,
                  cursor: enviando ? 'wait' : 'pointer',
                  fontSize: 16, padding: '14px',
                }}
              >
                {enviando ? '⏳ Enviando...' : '🌿 Enviar consulta'}
              </button>

              <p style={{ fontSize: 12, color: 'var(--gris)', textAlign: 'center', marginTop: '0.75rem' }}>
                Tus datos son confidenciales. No compartimos tu información con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
