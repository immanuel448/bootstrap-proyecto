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
    form.addEventListener("submit", (event) => {º
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        alert("Mensaje enviado correctamente ✔️");
        form.reset();
        form.classList.remove("was-validated");
        return;
      }

      form.classList.add("was-validated");
    });
  });
})();
