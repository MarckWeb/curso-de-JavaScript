// Fetch API desde un JSON (Array)

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleado.json') 
        .then( res => res.json()) 
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML({empresa,  id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido'); //.contenido carga en una pagina nueva

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `
}