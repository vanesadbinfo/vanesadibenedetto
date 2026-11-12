# Vanesa Di Benedetto — Sitio Web

Web de Vanesa Di Benedetto, Neurocoach Ancestral y creadora del Método ORIGEN.
HTML/CSS/JS estático, desplegado en GitHub Pages (dominio vanesadibenedetto.com vía Cloudflare).

## Estructura

```
/
├── index.html                       → Inicio
├── CNAME                            → Dominio personalizado (NO borrar)
├── pages/
│   ├── sobre-mi/index.html
│   ├── autentica/index.html
│   ├── retiro-toscana/index.html    → Mujer Sagrada · Toscana · septiembre 2027 (precio: próximamente)
│   ├── contacto/index.html
│   ├── blog/index.html              → + 3 artículos en subcarpetas
│   ├── aviso-legal/ · privacidad/ · cookies/
├── equipaje-2027/index.html         → Landing del taller Equipaje 2027
├── assets/
│   ├── css/main.css · js/main.js    → Estilos y comportamiento compartidos (menú, cookies, lightbox, formulario)
│   ├── fonts/                       → Lora + Work Sans alojadas en local (sin Google Fonts)
│   ├── images/ · icons/
├── sitemap.xml · robots.txt · manifest.json
```

Cada página es una carpeta con su `index.html` para tener URLs limpias (sin `.html`).

## Cookies
Banner en todas las páginas. La preferencia se guarda en `localStorage` (`vdb_cookie_consent`).
Enlace «Configurar cookies» en el pie de cada página para cambiar la decisión.
Para ver el banner de nuevo al probar: borrar esa clave o usar ventana de incógnito.

## Pendiente de confirmar
- Fechas exactas, precio, señal y políticas de pago/cancelación del retiro 2027.
- Código postal del domicilio fiscal (Aviso Legal y Privacidad).
