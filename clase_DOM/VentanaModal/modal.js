var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("open-modal-btn");
var closeModalBtn = document.getElementsByClassName("close")[0];
var confirmBtn = document.getElementById("confirm-btn");
var cancelBtn = document.getElementById("cancel-btn");

// Función para abrir el modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal al hacer clic en la 'x'
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Función para cerrar el modal al hacer clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función para confirmar
confirmBtn.onclick = function() {
  alert("Confirmado");
  modal.style.display = "none";
}

// Función para cancelar
cancelBtn.onclick = function() {
  alert("Cancelado");
  modal.style.display = "none";
}