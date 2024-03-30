// Fetch API desde un JSON (Objeto) array

//document.addEventListener('DOMContentLoaded', obtenerDatos);
// para que cargue datos al cargar la pagina directo si quisieramos.

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado)) //console.log(resultado)              
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido'); //#contenido carga lista en la misma pagina

    let html = '';

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;

}