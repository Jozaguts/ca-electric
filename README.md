# CA Electric — Landing Page

Landing de producción para **CA Electric** (servicios eléctricos y energía solar en Zacatecas).
React 18 + Vite. Sin dependencias adicionales.

## Cómo usar

### 1. Instalar dependencias

```bash
pnpm install
# o: npm install / yarn install
```

### 2. Desarrollo local (con hot reload)

```bash
pnpm dev
```

Se abre en `http://localhost:5173`.

### 3. Build para producción

```bash
pnpm run build
```

Genera la carpeta **`dist/`** con todo el sitio estático listo para subir a tu servidor.

```
dist/
├── index.html
├── assets/                  ← imágenes y logo
├── fonts/                   ← Montserrat (TTFs)
└── assets-build/            ← JS y CSS compilados con hash
```

### 4. Probar el build localmente

```bash
pnpm run preview
```

## Deploy

Sube **todo el contenido de `dist/`** al document root de tu servidor (vía FTP/SFTP/rsync). No requiere Node ni nada del lado del servidor — es 100% estático.

- Apache / Nginx → simplemente apunta tu virtual host a la carpeta `dist/`
- Hosting compartido → arrastra todo lo de `dist/` a `public_html/`
- Cloudflare Pages / Netlify / Vercel → `Build command: pnpm run build` · `Output: dist`

## Configuración rápida

Todos los datos de contacto viven en **`src/constants.js`**. Cambia ahí teléfono, WhatsApp, Facebook, correo o web y se actualiza en toda la página.

```js
PHONE_DISPLAY  = "492 228 19 83"
PHONE_E164     = "+524922281983"
WA_NUMBER      = "524922281983"
EMAIL          = "proyectos@caelectric.mx"
FB_URL         = "https://www.facebook.com/caelectronicc"
WEB            = "caelectric.mx"
MESSAGE_MAX    = 500          // límite de caracteres del textarea
```

## Cómo funciona el formulario

Al enviar, abre WhatsApp con un mensaje pre-armado:

```
Hola CA Electric, soy [nombre].
Teléfono: [teléfono]
Servicio: [servicio seleccionado]
Mensaje: [contenido del textarea]
```

El cliente revisa el texto en WhatsApp y pulsa enviar — el mensaje llega directo al WhatsApp configurado en `constants.js`.

El textarea está limitado a **500 caracteres** para mantener la URL de WhatsApp dentro de los límites de los navegadores. El contador en vivo pasa a rojo cuando quedan menos de 50.

## Estructura del proyecto

```
ca-electric-prod/
├── index.html               ← HTML raíz (meta tags, SEO, OG)
├── package.json
├── vite.config.js
├── public/                  ← assets servidos tal cual
│   ├── assets/              ← logo + fotos
│   └── fonts/               ← Montserrat (variable + italic)
└── src/
    ├── main.jsx             ← entry point
    ├── App.jsx              ← composición de secciones
    ├── components.jsx       ← Header, Hero, Servicios, Solar, FAQ, Contacto…
    ├── icons.jsx            ← íconos inline SVG (estilo Lucide)
    ├── constants.js         ← teléfono, WhatsApp, correo, etc.
    └── styles.css           ← CSS completo
```

## Recomendaciones de hosting

- **HTTPS obligatorio** (Let's Encrypt gratis con Certbot)
- Activa **gzip/brotli** en el servidor para los `.js` y `.css` (Vite ya genera bundles minificados)
- Headers de cache largos para `assets-build/*` (tienen hash en el nombre); cache corto para `index.html`

## Tipografías

Montserrat (variable + italic) va embebida en `public/fonts/`. Inter se carga de Google Fonts vía `@import` en `styles.css` — si tu servidor está en un país sin acceso a Google Fonts, descarga Inter localmente y reemplaza el `@import`.

---

**Contacto técnico para dudas del código:** revisa los comentarios en `src/components.jsx` y `src/styles.css`.
