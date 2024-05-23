/*DOMContentLoaded sirve para esperar a que se cargue
 pagina en totalidad antes de establecer el script, 
 es decir se asegura de que el botón de submit este cargado para utilizarlo*/

 document.addEventListener("DOMContentLoaded", () => {
   const formularios = document.querySelectorAll("form");
 
   formularios.forEach(formulario => {
     formulario.addEventListener("submit", (e) => {
       e.preventDefault(); // Prevenir envío del formulario por defecto
 
       const nombre = formulario.querySelector("#nombre");
       const apellido = formulario.querySelector("#apellido");
       const email = formulario.querySelector("#email");
       const telefono = formulario.querySelector("#telefono");
       const messageTypeBtn = formulario.querySelector(`input[name="tipo-contacto"]:checked`);
       const userTypeRadioBtn = formulario.querySelectorAll(`input[name="tipo-cuenta"]:checked`);
 
       let valid = true;
 
       // Limpieza de mensajes de error previos
       formulario.querySelectorAll('.error').forEach(error => error.textContent = '');
 
       if (nombre && nombre.value.trim() === "") {
         valid = false;
         mostrarError(nombre, "Nombre requerido");
       }
       if (apellido && apellido.value.trim() === "") {
         valid = false;
         mostrarError(apellido, "Apellido requerido");
       }
 
       if (email && email.value.trim() === "") {
         valid = false;
         mostrarError(email, "Email requerido");
       } else if (email && !validarEmail(email.value.trim())) {
         valid = false;
         mostrarError(email, "Por favor ingrese una dirección de correo válida");
       }
 
       if (telefono && telefono.value.trim() === "") {
         valid = false;
         mostrarError(telefono, "Teléfono requerido");
       }
 
       if (!messageTypeBtn) {
         valid = false;
         mostrarError(formulario.querySelector("input[name='tipo-contacto']").parentElement, "Seleccione motivo de contacto");
       }
 
       if (userTypeRadioBtn.length === 0) {
         valid = false;
         mostrarError(formulario.querySelector("input[name='tipo-cuenta']").parentElement, "Seleccione tipo de cuenta");
       }
 
       if (valid) {
         alert('Enviado con éxito!');
         formulario.submit(); // Solo se envía el formulario si todos los campos son válidos
       }
     });
   });
 
   const validarEmail = (email) => {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(email);
   }
 
   const mostrarError = (elemento, mensaje) => {
     let errorDiv = elemento.parentElement.querySelector('.error');
     if (!errorDiv) {
       errorDiv = document.createElement('div');
       errorDiv.classList.add('error');
       elemento.parentElement.appendChild(errorDiv);
     }
     errorDiv.textContent = mensaje;
   }
 });
 