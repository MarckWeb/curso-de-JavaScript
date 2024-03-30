// INICIO PROYECTO API IMAGENES //
// KEY API = 41364789-abb2225bbfc3faae3dc582457 //

const resultado  = document.querySelector('#resultado');
const formulario  = document.querySelector('#formulario');
const paginacionDiv  = document.querySelector('#paginacion');

const registrosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda= document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Agregar un termino de busqueda');
        return;
    }

    buscarImagens();
}

function mostrarAlerta(mensaje){

    const exsisteAlerta = document.querySelector('.bg-red-100');

    if(!exsisteAlerta) {
        const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
    <strong class= "font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
    }

    
}

function buscarImagens() {

    const termino = document.querySelector('#termino').value;

    const key ='41364789-abb2225bbfc3faae3dc582457';
    const url =`https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(res => res.json())
        .then(resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostarImagenes(resultado.hits);
        })
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas 
function *crearPaginador(total) {
    console.log(total);
    for( let i = 1; i <= total; i++ ) {
        yield i;
    }
}


function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostarImagenes(imagenes) {
    //console.log(imagenes);

    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    //iterar sobre el array de imagenes y construir HTML

    imagenes.forEach( imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML +=`
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light"> Likes </span> </p>
                        <p class="font-bold"> ${views} <span class="font-light"> Views </span> </p>

                        <a  
                            class="w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1 " 
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                            Open image
                        </a>
                    </div>
                </div>
            </div>
            `;    
    })
    
    // limipiar el paginador de la busqueda previa

    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild)
    }

    // Generamos el nuevo HTML
    imprimirPaginador();
}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);

    while(true){
        const { value, done } = iterador.next();
        if(done) return;

        // en casos contrario generar boton por cada elemento
        const btn= document.createElement('a');
        btn.href = '#';
        btn.dataset.pagina = value;
        btn.textContent = value;
        btn.classList.add('siguente', 'bg-yellow-400', 'px-4', 'py-1,', 'mr-2', 'font-bold', 'mb-5', 'rounded');

        btn.onclick = () => {
            paginaActual = value;

            buscarImagens();
        }
        paginacionDiv.appendChild(btn)

    }
    //(iterador.next().value);// total valor registradro de yelt
    //(iterador.next().done);// si llego al final de los iteradores
}