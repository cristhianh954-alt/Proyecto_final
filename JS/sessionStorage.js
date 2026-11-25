// Función: guarda el nombre y cambia de página
function guardar() {
const nombre = document.getElementById("nombre").value;

if (nombre === "") {
        document.getElementById("mensaje").textContent = "Por favor, escribe tu nombre.";
    } else {
        sessionStorage.setItem("nombre", nombre); // guarda en la bodega
        window.location.href = "index.html"; // cambia de página
    }
}
// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);