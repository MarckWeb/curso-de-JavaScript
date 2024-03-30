// LOCALSTORAGE CARRITO COMPRA

// varibable

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso clickando "Agrefar al Carrito"
    listaCursos.addEventListener('click', agregarCurso)

    // Eliminar cursos del carrito
    carrito.addEventListener('click',eliminarCurso)

    // Mostrar cursos de LocalStorage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        carritoHTML();
    })


    // Vaciar carrito de compra
    vaciarCarrito.addEventListener('click',()=>{
        console.log('vaciando....');
        articulosCarrito = []; // resetemos el arry de articulosCarrito a un array vacio
       limpiarHTML(); //llamamos funcion limpiarHTML para eliminar todo el HTML
    })
}



// Funciones
function agregarCurso(e) {
    e.preventDefault();// prevenmos la accion por defecto

    if (e.target.classList.contains('agregar-carrito')) { // asegurar que se clicke solo en agregar carrito y no en cualquier parte de div
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// elimina un curso del carrito
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        //console.log(e.target.getAttribute('data-id')); // para tener el id que queremos eliminar
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        console.log(articulosCarrito);
        carritoHTML(); // iterar sobre el carrito y mostar el html
    }
}
// Lee contenido HTML y extrae info del curso cuando hacemos click
function leerDatosCurso(curso) {
    //console.log(curso); ver todo elemento de curso

    // crear objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // para seleccionar atributo dentro de la a
        cantidad: 1,
    }
    
    // Revisa si elemento ya exsiste en el carrito

    const existe = articulosCarrito.some ( curso => curso.id === infoCurso.id );// si tenemos dos elementos en el carriot esto va a iterar i accederemos a cada id que ya esta en el carrito
    //console.log(existe);
    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;// con map creamos un array nuevo y asi se nos crea de nuevo en curso
            }else{
                return curso;// retorna los objectos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // agregamos el curso si no cumple existe
        articulosCarrito = [...articulosCarrito, infoCurso];//... tomamos copia del carrito como esta, ( lo vamos llenando cada vez que agregamos algo de nuevo)
    }
    //console.log(infoCurso); ver elementos que vamos teniendo dentro de infoCurso 
   
    console.log(articulosCarrito);

    carritoHTML();// llamamos funcion de mas abajo
}

// Muestra el carrito de compras en HTML

function carritoHTML() {

    // limpiar HTML porque no vaya dupliquemos los arrays en el carrito
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;//extraemos valores de curso y nos crea la variable asi dentro de row. innerHTML no tendremos que escribir curso. y dejamos codigo mas limpio
        const row = document.createElement('tr');// tr por el html que ya tenemos creado como carrito
        row.innerHTML = `
            <td>
                <img src = "${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega HTML del carrito en el body

        contenedorCarrito.appendChild(row);
    });

    // Agregar carrito de compras al LocalStorage

    sincronizarStorage();
}

// Sincronizar LocalStorage

function sincronizarStorage() {
     localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}
// elimina los cursos del tbody

function limpiarHTML() {
    //forma lenta
    //  contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    // while limpia array antrior, antes de crear un array nuevo, porque mientras tenga hijos
    // se va a ejectura el removeChild, cuando no tiene nada pasa a ejectura articulos.carrito 
    // dentro de la funcion carritoHTML
}