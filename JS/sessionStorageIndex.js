// Función: lee el nombre y lo muestra
function mostrarNombre() {
const nombre = sessionStorage.getItem("nombre"); // lee de la bodega

if (nombre === null) {
        document.getElementById("saludo").textContent = "¡Hola!";
    } else {
        document.getElementById("saludo").textContent = "¡Hola, " + nombre + "!";
    }
}


function borrarTodo() {
sessionStorage.clear();
mostrarNombre();
}

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre); // al cargar la página
document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo);