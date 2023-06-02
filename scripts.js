// Script.js

// Función para mostrar una alerta al hacer clic en el botón de adopción
function showAlert() {
    alert("¡Gracias por tu interés en adoptar un perro!");
  }
  
  // Event listener para el botón de adopción
  var adoptButtons = document.querySelectorAll(".adopt-button");
  adoptButtons.forEach(function (button) {
    button.addEventListener("click", showAlert);
  });  