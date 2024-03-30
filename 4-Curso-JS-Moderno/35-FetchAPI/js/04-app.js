// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url) 
        .then( res => res.json()) 
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(cosas) {
    
    const contenido = document.querySelector('.contenido');// en nueva pagina

    let html = '';

    cosas.forEach( perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
    
}