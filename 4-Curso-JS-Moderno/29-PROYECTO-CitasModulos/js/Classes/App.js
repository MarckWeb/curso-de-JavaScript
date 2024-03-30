import { datosCita, nuevaCita } from '../funciones.js';
import {
    nombreInput,
    direccionInput,
    telefonoInput,
    fechaInput,
    horaInput,
    tratamientoInput,
    formulario
} from '../selectores.js';


class App {

    constructor() {
        this.initApp();
    }

    initApp() {
        eventListeners();
        function eventListeners() {
            nombreInput.addEventListener('input', datosCita);
            direccionInput.addEventListener('input', datosCita);
            telefonoInput.addEventListener('input', datosCita);
            fechaInput.addEventListener('input', datosCita);
            horaInput.addEventListener('input', datosCita);
            tratamientoInput.addEventListener('input', datosCita);

            // formulario para nuevas citas
            formulario.addEventListener('submit', nuevaCita);
        }
    }
}

export default App;