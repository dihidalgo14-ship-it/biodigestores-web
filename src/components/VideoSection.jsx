import React from 'react'

export default function VideoSection() {
  return (
    <section style={{
      background: 'var(--cafe-oscuro)',
      padding: '90px 2rem',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="section-tag" style={{ color: 'var(--cafe-claro)' }}>Míralo en acción</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          color: 'white', marginBottom: '1rem',
        }}>
          Así funciona un{' '}
          <em style={{ color: 'var(--verde-claro)', fontStyle: 'normal' }}>biodigestor Sistema Bio</em>
        </h2>
       

        {/* Video embed */}
        <div style={{
          maxWidth: 860,
          margin: '0 auto',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
          position: 'relative',
          paddingTop: '56.25%', /* 16:9 */
        }}>
          <iframe
            src="https://www.youtube.com/embed/C76HX13ZXNY"
            title="Biodigestor Sistema Bio — cómo funciona en terreno"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              border: 'none',
            }}
          />
        </div>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem' }}>
          Video oficial Sistema Bio — tecnología implementada en más de 3 continentes
        </p>
      </div>
    </section>
  )
}