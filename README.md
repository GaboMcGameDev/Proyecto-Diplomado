# Proyecto Crypto SysAdmins

Este repositorio contiene el código fuente para el sitio web de Crypto SysAdmins. A continuación se detalla la estructura del proyecto y el propósito de cada archivo para facilitar la colaboración.

## Estructura de Archivos

### Páginas Principales (HTML)

*   **`index.html`**: La página de inicio principal. Contiene la sección "Nuestra Misión", noticias destacadas en el lateral y el reproductor de música de fondo.
*   **`blog.html`**: Página destinada a los artículos del blog. Actualmente contiene una estructura base con un artículo de ejemplo.
*   **`servicios.html`**: Lista los servicios ofrecidos por la empresa (Consultoría, Administración, Auditoría).
*   **`contacto.html`**: Formulario de contacto para que los usuarios envíen consultas.
*   **`privacidad.html`**: Documento de Política de Privacidad.
*   **`terminos.html`**: Documento de Términos de Servicio.

### Estilos y Scripts

*   **`styles.css`**: Hoja de estilos principal. Controla el diseño, colores (`var(--primary-color)`), tipografía (Poppins) y disposición de todos los elementos.
    *   *Nota*: Todas las páginas HTML enlazan a este mismo archivo para mantener una apariencia consistente.
*   **`script.js`**: Archivo JavaScript que maneja la lógica de la página, principalmente el botón de reproducción/pausa de música en el `index.html`.

### Recursos (Imágenes y Audio)

*   **Logotipo**: `dollar-sign-with-light-svgrepo-com.svg`
*   **Audio**: `sound.mp3` (Música de fondo)
*   **Imágenes**: Varios archivos `.jpg` y `.webp` utilizados para fondos o contenido visual (ej. `header.jfif`, `teclado.jpg`, `mano_tech.jpg`).

## Cómo Editar

1.  **Menú de Navegación**: Si necesitas cambiar los enlaces del menú principal, asegúrate de editar la sección `<nav>` en **todos** los archivos HTML (`header` y `footer`) para mantener la consistencia.
2.  **Añadir Contenido**:
    *   Para el **Blog**, duplica la estructura de artículos dentro de `blog.html`.
    *   Para **Servicios**, añade nuevos elementos `<li>` o bloques `<div>` en `servicios.html`.
3.  **Estilos**: Cualquier cambio global de diseño debe hacerse en `styles.css`.

## Notas para el Equipo

*   El diseño es responsivo y utiliza Flexbox/Grid.
*   Los iconos provienen de FontAwesome (enlazado vía CDN en el `<head>`).
*   Las fuentes provienen de Google Fonts.
