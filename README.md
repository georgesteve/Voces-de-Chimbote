# Voces de Chimbote — sitio web

Sitio estático de una página (+ página de recursos) para la iniciativa **Voces de Chimbote**.

## Archivos

```
├── index.html          → página principal
├── recursos.html        → becas, intercambios y voluntariados
├── css/styles.css       → estilos (todo el diseño vive aquí)
├── js/main.js            → menú móvil, animaciones al hacer scroll, resaltado del menú
├── images/                → fotos usadas en el sitio
└── README.md
```

No hay build step: es HTML/CSS/JS plano, así que se puede subir tal cual.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `voces-de-chimbote`).
2. Sube **todos** los archivos y carpetas de esta entrega manteniendo la misma estructura (que `index.html` quede en la raíz del repo).
3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment" elige **Deploy from a branch**, rama `main` (o `master`), carpeta `/ (root)`.
5. Guarda. En 1–2 minutos tu sitio estará en `https://tu-usuario.github.io/voces-de-chimbote/`.

## Cosas para personalizar antes de publicar

- **Formulario de interés**: el botón "Completar formulario" en `index.html` (`id="form-link"`) y el botón "Ver en GitHub" en `recursos.html` apuntan a `#`. Reemplaza el `href` por el link real de tu Google Form y de tu repositorio.
- **Fotos de los ponentes**: ya están incluidas en `images/speakers/` (recortadas del flyer que compartieron). Si en algún momento quieren reemplazarlas por versiones en mayor resolución, solo hay que mantener el mismo nombre de archivo (`alessandra.jpg`, `samuel.jpg`, `alejandro.jpg`, `george.jpg`) o actualizar el `src` correspondiente en `index.html`.
- **Becas con enlace pendiente**: "Beca Alianza del Pacífico" y "Beca Santander Iberoamérica" en `recursos.html` no tenían link en el documento original — quedaron sin `href` real (`href="#"`) hasta que tengan el enlace oficial.
- **Redes sociales**: si quieren agregar Instagram/TikTok, hay espacio en el footer (`footer-top`) para una cuarta columna.

## Créditos de imágenes

- Las fotos en `images/` (panorámica de la bahía de Chimbote y las tres fotos de comunidad/jóvenes/evento) provienen del PDF original compartido (`VOCES_DE_CHIMBOTE__2_.pdf`).
- Las fotos en `images/speakers/` provienen del flyer de expositores que compartieron. Si tienen las fotos originales en mayor resolución, reemplazarlas mejorará la nitidez en pantallas grandes.
