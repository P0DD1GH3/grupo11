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
      const messageTypeBtn = document.querySelector(`input[name="tipo-contacto"]:checked`);
      const userTypeRadioBtn = document.querySelectorAll(`input[name="tipo-cuenta"]:checked`);

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

      if (telefono.value.trim() === "") {
         valid = false;
         alert("Teléfono requerido");
      }


      if (!messageTypeBtn) {
         valid = false;
         alert("Seleccione motivo de contacto");
      }

      

      if (!userTypeRadioBtn) {
         valid = false;
         alert("Seleccione tipo de cuenta");
      }

      if (valid) {

         alert('Enviado con éxito!');

      }

   
   });

   const validarEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
   }

});
