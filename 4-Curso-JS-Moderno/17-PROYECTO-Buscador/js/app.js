//----------PROYECTO BUSCADOR COCHES------------//

// Variable
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor para resultado
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // maximo año actual
const min = max - 15; // minimo año 10 menos del acutal

// generar objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra lo autos al cargar

    //Llena las opaciones de años
    llenarSelect();
})

// Event listener para los select de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value); // podemos convertir aqui tambien en numero con parseInt

    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    //console.log(datosBusqueda); revisar que todo funcione

    filtrarAuto();
})


// funciones
function mostrarAutos(autos) {

    limpiarHTML(); // elimina html previo

    autos.forEach(auto => {

        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS  - transmision : ${transmision} -
            Precio: ${precio} - Color: ${color}
        `;

        // insertar resultado
        resultado.appendChild(autoHTML)
    })
}

// limpiar resultado autoHTML

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

// Genera los años del select
function llenarSelect() {

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de año al select
    }
}

// Funcion Filtrar auto

function filtrarAuto() {
    const resultado =
        autos.filter(filtrarMarca).filter(filtrarYear)
            .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
            .filter(filtrarTrans).filter(filtrarColor)



    if (resultado.length) {
        mostrarAutos(resultado);
        console.log(resultado);
    } else {
        noResult();
    }
}

function noResult() {
    limpiarHTML();  // limpiamos primero el DIV y despues creamos el div con el error
                    // asi nos saltara error sin los resultados anteriores  
    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error')
    noResult.textContent = 'No hay resultados para este tipo de busqueda'

    resultado.appendChild(noResult); // agregamos noResult a resultado
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);// parseInt para convertir que venga a numero no como string asi lo detecta bien
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= minimo;// nos trae los precios mayores a minimo marcado
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= maximo;// nos trae los precios mayores a minimo marcado
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTrans(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;

}