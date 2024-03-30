import Citas from './Classes/Citas,js';
import UI from './Classes/UI.js';

import {
    nombreInput,
    direccionInput,
    telefonoInput,
    fechaInput,
    horaInput,
    tratamientoInput,
    formulario
} from './selectores.js';

//Instancias de classes
const ui = new UI();
const administrarCitas = new Citas();


let editando = false;

// objeto principal
const citaObj = {
    nombre: '',
    direccion: '',
    telefono: '',
    fecha: '',
    hora: '',
    tratamiento: ''
}

// Agrega datos a objetos de cita
export function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
    citaObj[e.target.name] = e.target.value;
}

export function nuevaCita(e) {
    e.preventDefault();

    const { nombre, direccion, telefono, fecha, hora, tratamiento } = citaObj;

    // Validar
    if (nombre === '' || direccion === '' || telefono === '' || fecha === '' || hora === '' || tratamiento === '') {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if (editando) {
        // Estamos editando
        administrarCitas.editarCita({ ...citaObj });

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();

        // Añade la nueva cita
        administrarCitas.agregarCita({ ...citaObj });

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

export function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.nombre = '';
    citaObj.direccion = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.tratamiento = '';
}


export function eliminarCita(id) {
    administrarCitas.eliminarCita(id);

    ui.imprimirAlerta('La cita se elminó correctamente');

    ui.imprimirCitas(administrarCitas)
}

export function cargarEdicion(cita) {

    const { nombre, direccion, telefono, fecha, hora, tratamiento, id } = cita;

    // Reiniciar el objeto
    citaObj.nombre = nombre;
    citaObj.direccion = direccion;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.tratamiento = tratamiento;
    citaObj.id = id;

    // Llenar los Inputs
    nombreInput.value = nombre;
    direccionInput.value = direccion;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    tratamientoInput.value = tratamiento;

    // canviar texto botton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}