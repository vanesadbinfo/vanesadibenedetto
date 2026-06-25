# Vanesa Di Benedetto — Sitio Web

Web corporativa de Vanesa Di Benedetto, Neurocoach Ancestral y creadora del Método ORIGEN.

## Estructura del proyecto

```
/
├── index.html                  → Página de inicio
├── pages/
│   ├── sobre-mi.html           → Sobre Vanesa
│   ├── autentica.html          → Programa Auténtica
│   ├── retiro-toscana.html     → Retiro Mujer Sagrada · Toscana 2026
│   ├── blog.html                → Blog
│   └── contacto.html           → Contacto / formulario
├── assets/
│   ├── css/
│   │   └── main.css             → Sistema de diseño completo (mobile-first)
│   ├── js/
│   │   └── main.js              → Menú móvil y comportamiento de nav
│   └── images/                  → Todas las fotografías del proyecto
├── sitemap.xml
├── robots.txt
├── manifest.json
└── README.md
```

## Cómo publicar

1. Sube **toda la carpeta** (manteniendo la estructura de subcarpetas) a tu hosting vía FTP, cPanel File Manager, o GitHub Pages.
2. Asegúrate de que `index.html` quede en la raíz del dominio.
3. No renombres ni muevas archivos de `/assets/` — las rutas internas dependen de esa estructura exacta.

## Sistema de diseño

- **Paleta:** Marfil `#F8F4EE` · Arena `#E8DDD0` · Terracota `#B9785E` · Dorado `#C6A86B` · Carbón `#2B2B2B`
- **Tipografía:** Georgia/serif para titulares, Helvetica/Arial para cuerpo
- **Filosofía visual:** Luxury Wellness Editorial — fotografía protagonista, mucho espacio en blanco, sin clichés del sector coaching

## Responsive

El sitio está construido **mobile-first** con 6 puntos de ruptura reales:

| Breakpoint | Dispositivo |
|---|---|
| < 480px | Móvil pequeño |
| 480px+ | Móvil estándar |
| 768px+ | Tablet vertical |
| 1024px+ | Tablet horizontal / desktop pequeño (aparece el menú completo) |
| 1280px+ | Desktop estándar |
| 1440px+ | Desktop grande |
| 1920px+ | Pantallas extra grandes (contenido limitado a 1600px para evitar estiramiento) |

## Imágenes

Todas las fotografías en `/assets/images/` han sido procesadas para:
- Normalizar la orientación EXIF (evita el bug clásico de "fotos giradas" en algunos navegadores)
- Optimizar el peso sin perder calidad visible

El componente `.media-box` + `.img-cover` (definido en `main.css`) garantiza que cualquier foto — vertical, horizontal o cuadrada — se adapte a su contenedor sin deformarse, recortando inteligentemente desde el centro.

## Vídeo del Retiro Toscana

La página `retiro-toscana.html` incluye un embed de YouTube (ID: `zNeSucpSHOk`) totalmente responsive mediante `aspect-ratio: 16/9`.

## Pendiente / próximos pasos sugeridos

- Conectar el formulario de contacto a un backend real (Formspree, EmailJS, o similar) — actualmente es solo HTML sin envío funcional
- Sustituir las fotos placeholder de Verónica y Cristhiam en la sección de equipo del Retiro Toscana
- Escribir el contenido completo de los 3 artículos del blog (actualmente solo título + imagen)
- Configurar dominio y SSL en el hosting elegido
- Verificar todos los enlaces tras subir a producción

---
© Vanesa Di Benedetto 2026 · Proyecto desarrollado por CRS Consulting
