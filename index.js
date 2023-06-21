// Obtener referencia al formulario y al campo de correo electrónico
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const contenedor1 = document.getElementById('contenedor1');
const contenedor2 = document.getElementById('contenedor2');
const dismissButton = document.querySelector('.buttonTwo');
const mainContent = document.querySelector('main');

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
    alert("Ingresa un correo electrónico válido");
    console.log('Correo electrónico inválido');
  }
}

// Función para ocultar el contenedor2 y mostrar el contenedor1
function dismissMessage() {
  contenedor1.style.display = "flex";
  contenedor2.style.display = "none";
}

// Agregar el evento de envío del formulario
form.addEventListener('submit', handleSubmit);

// Función para ocultar el contenedor2 y mostrar el main
function handleDismiss() {
    contenedor2.style.display = 'none';
    mainContent.style.display = 'block';
  }
  
// Agregar el evento de clic al botón "Dismiss message"
dismissButton.addEventListener('click', handleDismiss);




