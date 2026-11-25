let cantidadCarrito = 0;
let totalCarrito = 0;

const contenedorProductos = document.getElementById("productos");
const contador = document.getElementById("contador");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const botonVaciar = document.getElementById("vaciar");

// Función auxiliar para dar formato de moneda ($150.000)
function formatearPrecio(valor) {
    return `$${valor.toLocaleString("es-CO")}`;
}

function agregarAlCarrito(producto) {
    cantidadCarrito++;
    totalCarrito += producto.precio;

    contador.textContent = cantidadCarrito;
    total.textContent = formatearPrecio(totalCarrito);

    const item = document.createElement("li");

    const info = document.createElement("span");
    info.textContent = `${producto.nombre} - ${formatearPrecio(producto.precio)}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "✕";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click", function () {
        item.remove();
        cantidadCarrito--;
        totalCarrito -= producto.precio;

        contador.textContent = cantidadCarrito;
        total.textContent = formatearPrecio(totalCarrito);
    });

    item.append(info, btnEliminar);
    listaCarrito.appendChild(item);
}

function vaciarCarrito() {
    cantidadCarrito = 0;
    totalCarrito = 0;

    listaCarrito.textContent = "";
    contador.textContent = 0;
    total.textContent = "$0";
}

function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjetacss");

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;
    nombre.classList.add("nombre");

    const precio = document.createElement("p");
    precio.textContent = formatearPrecio(producto.precio);
    precio.classList.add("precio");

    const descripcion = document.createElement("p");
    // Si le quitaste la tilde en productos.js, cámbialo aquí a producto.descripcion
    descripcion.textContent = producto.descripción;
    descripcion.classList.add("descripcion");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.classList.add("imagencss");

    const boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.classList.add("button");
    boton.addEventListener("click", function () {
        agregarAlCarrito(producto);
    });

    tarjeta.append(nombre, imagen, precio, descripcion, boton);

    return tarjeta;
}

function mostrarProductos() {
    for (const clave in productos) {
        const producto = productos[clave];
        const tarjeta = crearTarjeta(producto);
        contenedorProductos.appendChild(tarjeta);
    }
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
botonVaciar.addEventListener("click", vaciarCarrito);

