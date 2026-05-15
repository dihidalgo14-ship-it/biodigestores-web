import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--cafe-oscuro)',
      padding: '3rem 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                             <img
    src="/logoecosuyu2.png"
    alt="Ecosuyu logo"
    style={{ height: 52, width: 'auto', display: 'block' }}
  />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280 }}>
              Simbiotek SPA — Distribuidores e instaladores oficiales de biodigestores Sistema Bio en Chile. Restauración Agroecológica.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>
              📧 contacto@ecosuyu.cl<br />
              📞 +56 9 1234 5678
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Inicio', 'Cómo funciona', 'Productos', 'Calculadora', 'Testimonios'].map(l => (
                <li key={l}>
                  <a href="#inicio" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Productos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Sistema Bio 8', 'Sistema Bio 20', 'Sistema Bio 40', 'Soluciones a medida'].map(l => (
                <li key={l}>
                  <a href="#productos" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © {year} Ecosuyu — Simbiotek SPA. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            Distribuidores oficiales <a href="https://sistema.bio" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}>Sistema.bio</a> en Chile
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media(max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
