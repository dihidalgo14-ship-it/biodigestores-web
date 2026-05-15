# Ecosuyu — Landing Page Biodigestores Sistema Bio

Landing page React para Ecosuyu (Simbiotek SPA), distribuidores oficiales de biodigestores Sistema Bio en Chile.

## Stack
- **React 18** + **Vite 5**
- Sin dependencias de UI externas — todo CSS-in-JS con variables de marca
- Tipografías: Fraunces (display) + DM Sans (body)

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx          — Navegación sticky con scroll effect
│   ├── Hero.jsx            — Hero con ilustración SVG del biodigestor
│   ├── Problema.jsx        — Sección "El problema" (fondo oscuro)
│   ├── ComoFunciona.jsx    — Tecnología con acordeón interactivo
│   ├── Beneficios.jsx      — Métricas y ganado compatible
│   ├── Productos.jsx       — Catálogo tipo ecommerce (3 modelos)
│   ├── ModalProducto.jsx   — Modal con ficha técnica completa
│   ├── Calculadora.jsx     — Wizard 4 pasos (tipo > animales > contacto > resultado)
│   ├── Testimonios.jsx     — Testimonios de clientes reales
│   ├── CTAFinal.jsx        — CTA con teléfono, WhatsApp y email
│   └── Footer.jsx          — Footer con links, regiones y créditos
├── App.jsx
├── main.jsx
└── index.css               — Variables de marca, tokens, utilidades
```

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

Los archivos compilados quedan en `/dist`.

## Personalización antes de publicar

### 1. Datos de contacto (buscar y reemplazar en todo el proyecto)
- `+56912345678` → tu número real de WhatsApp
- `contacto@ecosuyu.cl` → tu email real

### 2. Precios (en `src/components/Productos.jsx`)
- Objeto `PRODUCTOS`: ajustar `precio` y `precioInstalacion` para cada modelo

### 3. Textos de testimonio (en `src/components/Testimonios.jsx`)
- Reemplazar por testimonios reales de tus clientes

### 4. SEO (en `index.html`)
- Actualizar `og:image` con URL de imagen real
- Agregar Google Analytics o Tag Manager si corresponde

### 5. Formulario de contacto
- La calculadora actualmente simula el envío. Conectar a un backend,
  Formspree, EmailJS, o similar para recibir los leads realmente.

## SEO Keywords incluidas
biodigestor Chile, biodigestor sistema bio, biogás Chile, biofertilizante,
biodigestor tubular, digestión anaeróbica, residuos pecuarios, purines vaca,
biodigestor lechería, energía renovable campo, ecosuyu, agroecología Chile,
biodigestor centro sur Chile, biol fertilizante, biodigestor bovino,
tratamiento purines, reducir costos ganadería, biodigestor Biobío,
biodigestor Araucanía, biodigestor Los Lagos

## Colores de marca
```
--cafe:         #7B4F2E  (café principal)
--cafe-oscuro:  #4A2E18  (fondo oscuro)
--verde:        #4A7C3F  (verde principal)
--verde-vivo:   #6AAF30  (hover/acento)
--tierra:       #B5722A  (acento terracota)
```
