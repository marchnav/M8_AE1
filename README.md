M8_AE1 — Portafolio de Productos (README .txt)
=================================================

Propósito del documento
-----------------------
Este archivo explica cómo la página web estática del repositorio M8_AE1 cumple con
los requerimientos del ejercicio individual (M8_AE1), mapea cada punto de la rúbrica
y deja instrucciones de ejecución y despliegue.

1) Descripción general del proyecto
-----------------------------------
- Tipo: Sitio web estático (HTML, CSS, JS puros).
- Objetivo: Responder la actividad M8_AE1 con investigación inicial, análisis de
  ejemplos reales, diseño de un portafolio propio, exploración de herramientas y
  una reflexión final.
- Paleta y estilo: diseño responsivo, limpio y con acentos morados (#8B5CF6).

2) Estructura de carpetas/archivos
----------------------------------
/index.html
/assets/css/app.css
/assets/js/app.js
/assets/img/        (capturas de ejemplo: ejemplo1.jpg, ejemplo2.jpg, opcional: favicon.png, cover.jpg)

3) Cumplimiento de la rúbrica / requerimientos
----------------------------------------------
A) Investigación Inicial (Sección #investigacion)
   - Definición de portafolio y propósito: Incluida (artículo 1).
   - Importancia (visibilidad, oportunidades, habilidades, marca personal): Incluida (artículo 2).
   - Tres buenas prácticas: Incluidas (artículo 3: curaduría/foco, navegación accesible, transparencia técnica).

B) Análisis de Ejemplos Reales (Sección #analisis)
   - Mínimo dos ejemplos en línea: Incluidos (Brittany Chiang y Tania Rascia).
   - Evaluación según criterios:
     * Claridad y organización: descrita para ambos ejemplos.
     * Diseño y facilidad de navegación: descrita para ambos ejemplos.
     * Variedad y calidad de proyectos/contenidos: descrita para ambos ejemplos.
     * Herramientas utilizadas: sintetizadas (generadores estáticos/despliegue moderno).
   - Evidencias: subir capturas a /assets/img/ejemplo1.jpg y /assets/img/ejemplo2.jpg (ya referenciadas en index.html).

C) Diseño de mi Propio Portafolio (Secciones #proyectos, #sobre-mi, #contacto)
   - Breve biografía/presentación personal: Incluida en “Sobre mí”.
   - Sección de proyectos con al menos tres productos: Plantillada en “Proyectos destacados” (A/B/C) con tags y enlaces.
   - Información de contacto / redes profesionales: Incluida (email, LinkedIn, GitHub).
   - Boceto: La propia página sirve como prototipo navegable (estructura, tarjetas y secciones).

D) Exploración de Herramientas para la Construcción (Sección #herramientas)
   - Herramientas investigadas: GitHub Pages; HTML/CSS/JS puros; WordPress/Wix.
   - Descripción de cómo podrían usarse: Incluida en cada tarjeta (pros, contras, uso).
   - Elección y justificación: Incluida (HTML/CSS/JS + GitHub Pages para control, semántica y rendimiento).

E) Entrega y Reflexión (Sección #reflexion)
   - Conclusión de 100+ palabras: Incluida (valor profesional, visibilidad, aprendizaje y marca personal).
   - Adjuntos/boceto/análisis: Integrados en la propia página (capturas + secciones).

F) Accesibilidad, rendimiento y SEO (criterios transversales)
   - Accesibilidad:
     * Semántica con secciones/encabezados claros (header/nav/main/section/footer).
     * Contraste y jerarquías tipográficas consistentes.
     * Botón menú con aria-label/aria-controls/aria-expanded.
     * Navegación con teclado (Enter/Espacio) en el menú móvil.
   - Rendimiento/performance:
     * Sitio estático sin dependencias pesadas.
     * Imágenes con loading="lazy" y contenedores responsivos.
   - SEO:
     * Metadatos en <head> (title, description, og:meta).
     * Estructura clara para indexado.

4) Instrucciones de ejecución local
-----------------------------------
- Opción simple: abrir index.html en el navegador (doble clic).
- Opción con servidor local (recomendada para paths relativos):
  * Python 3:  python -m http.server 8000
    Luego visitar: http://localhost:8000

5) Despliegue en GitHub Pages
-----------------------------
- Crear repositorio público en GitHub (p.ej., marchnav/M8_AE1_PORTAFOLIO).
- Subir el contenido del proyecto a la rama principal (main).
- En GitHub: Settings > Pages > Source: "Deploy from a branch", Branch: main, /root.
- Guardar y esperar a que GitHub Pages publique la URL.
- Verificar que las rutas a assets/ funcionen correctamente.

6) Cómo actualizar el contenido
-------------------------------
- Investigación Inicial: editar los artículos dentro de <section id="investigacion">.
- Ejemplos Reales: reemplazar textos y/o capturas (assets/img/ejemplo1.jpg y ejemplo2.jpg).
- Proyectos: actualizar títulos, descripciones, etiquetas y enlaces a “Demo/Repositorio”.
- Sobre mí: ajustar biografía, highlights y avatar (assets/img/avatar.jpg opcional).
- Contacto: reemplazar email y enlaces de redes.
- CSS/JS: personalización adicional en /assets/css/app.css y /assets/js/app.js.

7) Lista de verificación rápida (para evaluación)
-------------------------------------------------
[ ] Investigación Inicial completa (definición, importancia, 3 buenas prácticas).
[ ] Dos ejemplos reales analizados con los cuatro criterios.
[ ] Boceto/diseño del portafolio propio (bio, ≥3 proyectos, contacto).
[ ] Exploración de 3 herramientas + herramienta elegida y justificación.
[ ] Reflexión final ≥ 100 palabras.
[ ] Sitio responsivo, accesible, con metadatos básicos y navegación funcional.
[ ] Capturas de ejemplos ubicadas en /assets/img/ y visibles en la sección de análisis.
[ ] Estructura de proyecto clara y limpia.
[ ] Commit con mensaje descriptivo.

8) Créditos y notas
-------------------
- Autor: (Tu Nombre).
- Stack: HTML, CSS, JS. Sin frameworks para mantener el control semántico y el aprendizaje.
- Paleta y estilo: acento morado (#8B5CF6) coherente con la línea visual del proyecto.
- Este README es un archivo .txt para cumplir explícitamente con la solicitud del instructor.


