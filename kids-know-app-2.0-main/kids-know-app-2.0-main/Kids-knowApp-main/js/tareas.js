function toggleTareas(materia) {
    // Ocultar todos los contenedores de tareas
    const contenedores = document.querySelectorAll('.container-tareas');
    contenedores.forEach(container => {
        if (container.id !== materia) {
            container.style.display = "none";
        }
    });

    // Mostrar u ocultar el contenedor seleccionado
    const contenedorSeleccionado = document.getElementById(materia);
    if (contenedorSeleccionado.style.display === "none" || contenedorSeleccionado.style.display === "") {
        contenedorSeleccionado.style.display = "block";
    } else {
        contenedorSeleccionado.style.display = "none";
    }
}

function marcarComoTerminado(button) {
    // Mostrar el chulo verde
    const checkIcon = button.nextElementSibling.nextElementSibling; // Icono
    const revertButton = button.nextElementSibling; // Botón de revertir
    checkIcon.style.display = "inline"; // Mostrar el ícono
    button.style.display = "none"; // Ocultar el botón "Terminado"
    revertButton.style.display = "inline"; // Mostrar el botón "Revertir"
}

function revertirTarea(button) {
    // Ocultar el chulo verde y mostrar el botón "Terminado"
    const checkIcon = button.previousElementSibling; // Icono
    const terminadoButton = button.previousElementSibling.previousElementSibling; // Botón "Terminado"
    checkIcon.style.display = "none"; // Ocultar el ícono
    button.style.display = "none"; // Ocultar el botón "Revertir"
    terminadoButton.style.display = "inline"; // Mostrar el botón "Terminado"
}
