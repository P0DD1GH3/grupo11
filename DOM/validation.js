/*DOMContentLoaded sirve para esperar a que se cargue
 pagina en totalidad antes de establecer el script, 
 es decir se asegura de que el botón de submit este cargado para utilizarlo*/

document.addEventListener("DOMContentLoaded", () => {
   const formulario = document.querySelector("#form-contacto");

   formulario.addEventListener("submit", (e) => {
      e.preventDefault(); // método que previene form submission

      const nombre = document.querySelector("#nombre");
      const apellido = document.querySelector("#apellido");
      const email = document.querySelector("#email");
      const telefono = document.querySelector("#telefono");
      const radioBtn = document.querySelector(`input[name="tipo-contacto"]:checked`);

      let valid = true;

      if (nombre.value.trim() === "") {
         valid = false;
         alert("Nombre y apellido requerido");
      }
      if (apellido.value.trim() === "") {
         valid = false;
         alert("Apellido requerido");
      }

      if (email.value.trim() === "") {
         valid = false;
         alert("Email requerido");
      } else if (!validarEmail(email.value.trim())) {
         valid = false;
         alert("Por favor ingrese una dirección de correo válida");
      }


      if (!radioBtn) {
         valid = false;
         alert("Seleccione motivo de contacto");
      }

      if (valid) {

         alert('Formulario enviado con éxito!');

      }
   });

   const validarEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
   }

});
