document.addEventListener("DOMContentLoaded", function () {
    const btnRegistrar = document.getElementById("btnRegistrar");
    const form = document.getElementById("formRegistro");

    btnRegistrar.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const contrasena = document.getElementById("contraseña").value.trim();
        const pais = document.getElementById("pais").value;
        const telefono = document.getElementById("telefono").value.trim();
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
        const genero = document.querySelector('input[name="genero"]:checked');

        if (!nombre || !correo || !contrasena || !pais || !telefono || !fechaNacimiento || !genero || !form.checkValidity()) {
            alert("Faltan campos por completar o hay datos inválidos.");
            form.reportValidity();
            return;
        }

        alert("Usuario creado correctamente");
        form.reset();
    });
})