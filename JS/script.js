// Función autoejecutable para no contaminar el scope global
(() => {
  // Activa modo estricto de JavaScript
  // Evita errores silenciosos y malas prácticas
  "use strict";

  // Selecciona TODOS los formularios que tengan la clase "needs-validation"
  const forms = document.querySelectorAll(".needs-validation");

  // Convierte la lista de formularios en un array y recorre cada uno
  Array.from(forms).forEach((form) => {
    // Escucha el evento submit (cuando el usuario intenta enviar el formulario)
    form.addEventListener(
      "submit",
      (event) => {
        // checkValidity() es validación HTML5 nativa
        // Retorna false si algún campo required, email, etc. es inválido
        if (!form.checkValidity()) {
          // Evita que el formulario se envíe
          event.preventDefault();

          // Evita que el evento siga propagándose
          event.stopPropagation();
        }

        // Agrega la clase "was-validated"
        // Bootstrap usa esta clase para mostrar:
        // - Bordes verdes (válido)
        // - Bordes rojos (inválido)
        // - Mensajes feedback
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
