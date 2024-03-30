// PROYECTO GASTOS SEMANALES  //

// Variable y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastolistado = document.querySelector('#gastos ul');

// Eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}

// Classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto= Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0)  // reduce() nos va sumando lo del array continuamente
        this.restante = this.presupuesto - gastado;
        //console.log(this.restante); comprobamos si funciona
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto ( cantidad ){
        // extremos valor
        const { presupuesto , restante } = cantidad;

        // agregamos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //insertar HTMl
        document.querySelector('.primario').insertBefore( divMensaje, formulario );

        // Quitar HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    mostrarGastos(gastos){
        
        this.limpiarHTML(); // elimina html previo

        // iterar sobre los gastos
        gastos.forEach( gasto => {

            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            //nuevoGasto.setAttribute('data-id', id); version previa
            nuevoGasto.dataset.id = id;  // nuevo formula moderna

            console.log(nuevoGasto);

            // Agregar html gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> € ${cantidad} </span>`;

            // boton borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick= ()=>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);


            // Agregar HTML
            gastolistado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML(){
        while( gastolistado.firstChild ){
            gastolistado.removeChild(gastolistado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // comprobar 25%
        if(( presupuesto / 4 ) > restante ){
            restanteDiv.classList.remove('alert-succes','alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ( ( presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-succes');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-succes');
        }

        // Avisar al pasarte del presupuesto mensual

        if( restante <= 0){
            ui.imprimirAlerta('Gastaste mas de lo previsto este mes', 'error');
        }
    }
}


// Instanciar
const ui = new UI();
let presupuesto;

// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
 
   // console.log(Number( presupuestoUsuario ) );

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN( presupuestoUsuario ) || presupuestoUsuario <= 0 ){
        window.location.reload();
    }

    // presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

// Añade gastos

function agregarGasto(e){
    e.preventDefault();

    // leer datos form
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if (nombre === '' || cantidad === '' ){
        ui.imprimirAlerta('Ambos campos obligatorios', 'error');

        return;
    } else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')

        return;  
    }
    // Generar objeto con gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // añade nuevo gasto
    presupuesto.nuevoGasto( gasto )

    // Mesaje todo correcto
    ui.imprimirAlerta('Gasto agregado correcto')

    // imprimir gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    // reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // elimina gastos del objeto
    presupuesto.eliminarGasto(id);

    // elimina los gastos del HTML
    const{ gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}