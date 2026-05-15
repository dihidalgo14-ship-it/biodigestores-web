import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #EEF6E4 0%, #F9F5EE 45%, #EDE7D8 100%)',
      display: 'flex', alignItems: 'center',
      padding: '100px 2rem 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', right: '-5%', top: '10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(106,175,48,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-10%', bottom: '0%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(123,79,46,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'}}>
        {/* Left: Copy */}
        <div className="fade-up">
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'white', border: '1px solid rgba(74,124,63,0.2)',
            padding: '6px 14px', borderRadius: 30,
            fontSize: 13, fontWeight: 500, color: 'var(--verde)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ fontSize: 8, color: 'var(--verde-vivo)' }}>●</span>
            Distribuidores oficiales Sistema Bio en Chile
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5.5vw, 66px)',
            fontWeight: 900, color: 'var(--cafe-oscuro)',
            marginBottom: '1.5rem',
          }}>
            Transforma el{' '}
            <em style={{ color: 'var(--verde)', fontStyle: 'normal' }}>estiércol</em>{' '}
            de tu ganado en{' '}
            <em style={{ color: 'var(--tierra)', fontStyle: 'normal' }}>energía</em>{' '}
            y fertilizante
          </h1>

          <p className="fade-up-2" style={{
            fontSize: 17, fontWeight: 300, lineHeight: 1.75,
            color: '#5a4030', maxWidth: 480, marginBottom: '2rem',
          }}>
            Biodigestores tubulares <strong>Sistema Bio</strong> — líderes mundiales a pequeña y mediana escala — para lecherías, agricultores y cooperativas de Chile. Reduce costos en energía y fertilizantes, y produce tu mismo en tu predio volviéndote más sostenible y favoreciendo una economía circular.<br /><br />
Con nuestros biodigestores generarás biogás como fuente de combustión y calefacción y biofertilizante altamente estabilizado para ser utilizado en todo tipo de cultivos.

          </p>

          <div className="fade-up-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#calculadora" className="btn-primary">
              🌿 Calcular mi biodigestor
            </a>
            <a href="#productos" className="btn-secondary">
              Ver modelos y precios
            </a>
          </div>

          {/* Trust stats */}
          <div className="fade-up-4" style={{
            display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(123,79,46,0.15)',
          }}>
            {[
              { num: '+10', label: 'años en Latinoamérica, África y Asia' },
              { num: '40', label: 'días para obtener biogás y biol' },
              { num: '200m³', label: 'capacidad máxima modular' },
            ].map(s => (
              <div key={s.num}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--verde)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: 'var(--gris)', marginTop: 4, maxWidth: 120 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 -2rem 0 0' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 -2rem 0 0' }}>
  <img
    src="/biodigestor3.png"
    alt="Biodigestor Sistema Bio — componentes del sistema"
    style={{
      width: '130%',
      maxWidth: 'none',
      height: 'auto',
      display: 'block',
      
    }}
  />
</div>
</div>
  </div>
     <style>{`
  @media(max-width: 768px) {
    #inicio > div > div {
      grid-template-columns: 1fr !important;
    }
    #inicio > div > div > div:last-child {
      display: none !important;
    }
  }
`}</style>
    </section>
  )
}

function BiodigestorIlustracion() {
  return (
    <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 460 }}>
      {/* Ground shadow */}
      <ellipse cx="240" cy="472" rx="200" ry="20" fill="rgba(123,79,46,0.08)" />

      {/* Main tube body */}
      <rect x="60" y="200" width="360" height="220" rx="4" fill="#4A7C3F" />
      {/* Tube end caps */}
      <ellipse cx="60" cy="310" rx="28" ry="110" fill="#3d6b35" />
      <ellipse cx="420" cy="310" rx="28" ry="110" fill="#3d6b35" />
      {/* Tube highlight */}
      <rect x="65" y="200" width="350" height="50" rx="2" fill="rgba(255,255,255,0.07)" />

      {/* Dome / gas collector */}
      <path d="M150 200 Q150 100 240 90 Q330 100 330 200" fill="#5fa854" opacity="0.9" />
      <path d="M160 196 Q162 120 230 106" stroke="rgba(255,255,255,0.25)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Bubbles in dome */}
      <circle cx="200" cy="155" r="9" fill="rgba(255,255,255,0.12)" />
      <circle cx="240" cy="125" r="14" fill="rgba(255,255,255,0.10)" />
      <circle cx="285" cy="150" r="10" fill="rgba(255,255,255,0.12)" />
      <text x="240" y="132" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="DM Sans, sans-serif">CH₄ Biogás</text>

      {/* Gas outlet pipe top */}
      <rect x="224" y="58" width="32" height="36" rx="5" fill="#7B4F2E" />
      <rect x="254" y="64" width="56" height="22" rx="5" fill="#7B4F2E" />
      <circle cx="322" cy="75" r="14" fill="#C49A6C" />
      <text x="322" y="79" textAnchor="middle" fontSize="14" fill="white">⚡</text>
      <text x="346" y="63" fontSize="11" fill="var(--cafe)" fontFamily="DM Sans, sans-serif" fontWeight="500">Biogás</text>
      <text x="346" y="77" fontSize="10" fill="var(--gris)" fontFamily="DM Sans, sans-serif">Cocina / Calefacción</text>

      {/* Inlet left */}
      <rect x="20" y="290" width="42" height="18" rx="5" fill="#6b5a4a" />
      <rect x="6" y="282" width="18" height="34" rx="5" fill="#8b7a6a" />
      <text x="4" y="276" fontSize="10" fill="var(--cafe)" fontFamily="DM Sans, sans-serif" fontWeight="500">Entrada</text>
      <text x="4" y="288" fontSize="10" fill="var(--gris)" fontFamily="DM Sans, sans-serif">Estiércol + agua</text>

      {/* Outlet right */}
      <rect x="418" y="290" width="42" height="18" rx="5" fill="#6b5a4a" />
      <rect x="456" y="282" width="18" height="34" rx="5" fill="#8b7a6a" />
      <text x="452" y="276" fontSize="10" fill="var(--verde)" fontFamily="DM Sans, sans-serif" fontWeight="500">Salida</text>
      <text x="442" y="288" fontSize="10" fill="var(--gris)" fontFamily="DM Sans, sans-serif">Biofertilizante</text>

      {/* Substrate label */}
      <text x="240" y="325" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans, sans-serif">Digestión anaeróbica ~40 días</text>

      {/* Eco badge */}
      <rect x="175" y="395" width="130" height="32" rx="16" fill="rgba(255,255,255,0.15)" />
      <text x="240" y="415" textAnchor="middle" fontSize="13" fill="white" fontFamily="Fraunces, serif" fontWeight="700">ECOSUYU</text>

      {/* Decorative grass */}
      {[80, 110, 380, 410].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="472" x2={x} y2="448" stroke="#4A7C3F" strokeWidth="2.5" />
          <ellipse cx={x - 8} cy="448" rx="12" ry="5" fill="#5fa854" transform={`rotate(-30 ${x - 8} 448)`} />
          <ellipse cx={x + 8} cy="444" rx="12" ry="5" fill="#4A7C3F" transform={`rotate(25 ${x + 8} 444)`} />
        </g>
      ))}
    </svg>
  )
}
