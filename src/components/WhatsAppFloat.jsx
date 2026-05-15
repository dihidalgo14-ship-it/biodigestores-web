import React, { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────
// Reemplaza el número por el real antes de publicar
const WHATSAPP_NUMBER = '56981730151'
const WHATSAPP_MESSAGE = 'Hola Ecosuyu 👋 me interesa instalar un biodigestor en mi predio. ¿Pueden ayudarme?'
// ─────────────────────────────────────────────────────────────────

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  // Aparece después de 2s de scroll
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Oculta el tooltip después de 5s
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setTooltip(false), 5000)
    return () => clearTimeout(t)
  }, [visible])

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      {/* Tooltip */}
      {tooltip && (
        <div style={{
          background: 'var(--cafe-oscuro)',
          color: 'white',
          fontSize: 13,
          fontWeight: 500,
          padding: '8px 14px',
          borderRadius: 20,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          animation: 'fadeUp 0.4s ease both',
          position: 'relative',
        }}>
          ¿Tienes dudas? ¡Escríbenos!
          {/* Arrow */}
          <div style={{
            position: 'absolute', right: 18, bottom: -6,
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid var(--cafe-oscuro)',
          }} />
        </div>
      )}

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          textDecoration: 'none',
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)'
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: 30, height: 30 }}>
          <path fill="white" d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.77 1.84 6.76L2 30l7.44-1.81A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.42 1.08 1.12-4.3-.27-.44A11.5 11.5 0 1116 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.76.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.7-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.76-1.84-1.05-2.52-.27-.65-.55-.56-.76-.57l-.64-.01c-.23 0-.6.08-.91.4-.31.31-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.22-.65-.39z"/>
        </svg>
      </a>
    </div>
  )
}
