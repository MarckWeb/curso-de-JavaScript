// Fetch API consumir datos desde un txt...

const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    const url = 'data/datos.txt' // url direccion donde enviaremos o pediremos informacion

    fetch(url) 
        .then( respuesta => {
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status); // Estado
            console.log(respuesta.statusText); //estado en ingles
            console.log(respuesta.url); // URL a la que consultamos
            console.log(respuesta.type); // Tipo de consulta

            // Hay que decirle que método vamos a utilizar...

            // Hay 2 JSON o Texto
            return respuesta.text(); // la respuesta sera de un texto

        })
        .then( datos => {
            console.log(datos); // entonces imprime los datos
        })
        .catch( error => {
            console.log(error);
        })
}