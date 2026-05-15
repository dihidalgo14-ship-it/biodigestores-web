import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Productos from './components/Productos'
import Calculadora from './components/Calculadora'
import CasosExito from './components/CasosExito'
import Testimonios from './components/Testimonios'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import ModalProducto from './components/ModalProducto'
import ModalContacto from './components/ModalContacto'
import WhatsAppFloat from './components/WhatsAppFloat'
import VideoSection from './components/VideoSection'
import GaleriaFotos from './components/GaleriaFotos'

export default function App() {
  const [modalProducto, setModalProducto] = useState(null)
  const [modalContacto, setModalContacto] = useState(false)

  return (
    <>
      <Navbar onAbrirContacto={() => setModalContacto(true)} />
      <main>
        <Hero onAbrirContacto={() => setModalContacto(true)} />
        <Problema />
        <ComoFunciona />
        <GaleriaFotos />
        <Beneficios />
        <Productos onVerDetalle={setModalProducto} />
        <Calculadora />
        <CTAFinal onAbrirContacto={() => setModalContacto(true)} />
        <VideoSection />  
      </main>
      <Footer />

      {/* Botón flotante WhatsApp — siempre visible */}
      <WhatsAppFloat />

      {/* Modal ficha de producto */}
      {modalProducto && (
        <ModalProducto producto={modalProducto} onClose={() => setModalProducto(null)} />
      )}

      {/* Modal formulario de contacto */}
      {modalContacto && (
        <ModalContacto onClose={() => setModalContacto(false)} />
      )}
    </>
  )
}
