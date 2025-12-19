# Proyecto Web con Bootstrap, JavaScript y Formularios

Este proyecto es una página web estática desarrollada con HTML5, CSS3, Bootstrap 5 y JavaScript. El objetivo es practicar estructura semántica, navegación interna con anchors, formularios con validación y buenas prácticas de frontend.

## Tecnologías utilizadas
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript (ES6)

## Estructura general
El sitio está dividido en secciones semánticas usando header, section y footer. Cada sección importante tiene un id único para permitir navegación interna mediante anchors.

Ejemplo:
<section id="contacto"></section>

Y el enlace correspondiente:
<a href="#contacto">Contacto</a>

## Navegación con anchors
Los anchors permiten navegar dentro de la misma página sin recargarla. El navbar contiene enlaces que apuntan a los id de cada sección.

Como el navbar es fijo (sticky-top), se utiliza la siguiente regla CSS para evitar que tape el contenido al hacer scroll:

section[id],
header[id] {
  scroll-margin-top: 80px;
}

Esto agrega un margen superior invisible cuando el navegador hace scroll hacia un id.

## Formulario
El formulario usa validación nativa del navegador junto con estilos de Bootstrap. Todos los campos importantes tienen el atributo required y tipos correctos (text, email, textarea).

El formulario tiene la clase needs-validation y el atributo novalidate para controlar la validación manualmente con JavaScript.

## Validación con JavaScript
El siguiente script controla el envío del formulario y activa los estilos de validación de Bootstrap:

"use strict";

(() => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
})();

## ¿Qué hace este JavaScript?
- Activa el modo estricto con "use strict"
- Revisa si el formulario es válido antes de enviarse
- Evita el envío si hay campos inválidos
- Muestra mensajes visuales de error o éxito con Bootstrap
- Mantiene el código encapsulado para evitar variables globales

## ¿Qué es "use strict"?
"use strict" activa el modo estricto de JavaScript, lo que ayuda a escribir código más seguro y predecible.

Cambios principales:
- No permite usar variables sin declararlas
- Lanza errores donde antes JavaScript fallaba en silencio
- Previene malas prácticas antiguas
- Facilita el mantenimiento del código

Ejemplo de error que detecta:
x = 10; // Error en strict mode, la variable no está declarada

Conceptualmente se parece a la idea de JavaScript tipado (como TypeScript), pero no agrega tipos; solo hace más estricto el lenguaje.

## Bootstrap Icons
Bootstrap Icons no requieren obligatoriamente la etiqueta <i>. Se puede usar <i> o <span>, ambas funcionan.

Forma común:
<i class="bi bi-envelope"></i>

También es válido:
<span class="bi bi-envelope"></span>

Funcionan porque los íconos son fuentes SVG.

## Buenas prácticas aplicadas
- HTML semántico
- Separación clara entre HTML, CSS y JS
- Navegación fluida sin recarga
- Validación accesible y visual
- Código JavaScript encapsulado
- Diseño responsive
- Proyecto escalable

## Requisitos
- Navegador moderno
- No requiere backend
- No requiere servidor

## Estado del proyecto
Proyecto funcional, en crecimiento y listo para agregar mejoras como animaciones, accesibilidad avanzada, envío real de formularios o integración con backend.

## Autor
Immanuel
luceroemmanuel.ing@gmail.com
