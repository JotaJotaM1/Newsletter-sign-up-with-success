// Obtener referencia al formulario y al campo de correo electrónico
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const contenedor1 = document.getElementById('contenedor1');
const contenedor2 = document.getElementById('contenedor2');

function validateEmail() {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // El correo electrónico es válido
    return true;
  } else {
    // El correo electrónico es inválido
    return false;
  }
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  if (validateEmail()) {
    // El correo electrónico es válido, ocultar contenedor1 y mostrar contenedor2
    contenedor1.style.display = "none";
    contenedor2.style.display = "flex";
  } else {
    // El correo electrónico es inválido, mostrar un mensaje de error
    console.log('Correo electrónico inválido');
  }
}

// Agregar el evento de envío del formulario
form.addEventListener('submit', handleSubmit);



