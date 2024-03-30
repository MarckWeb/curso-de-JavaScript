//----PROYECTO ENVIO EMAIL----

document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    // Seleccionar elementos interfaz
    const inputEmail = document.querySelector('#email');
    const inputEmailCC = document.querySelector('#emailCC') // parte reto implementar CC
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //console.log(inputMensaje); comprobar que nos envie a log la info de cada input

    // Assingar eventos 

    // (blur) cada vez que salimos del campo (mas lento)
    // (input) cada vez que escribamos en el input (validacion a tiempo real)

    inputEmail.addEventListener('input', validar);// llamamos a la funcion cuando suceda el evento si ponemos validar() la llamamos sin que suceda el evento
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputEmailCC.addEventListener('input', validar);// parte de reto implementamos email CC 

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        resetFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();// reincia el formulario gracias a la function de abajo resetFromulario

            // Crear una alerta para decir que paso
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);// agregamos la alerta de exito

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);// elimina el alertExsito despues de 3 segundos
        }, 2000);// spinner dura 3 segundos
    }

    // esta funcion nos trae el valor del elemento que escribimos en el input
    function validar(e) {

        if (e.target.id === 'emailCC' && !validarEmailCC(e.target.value)) {
            mostrarAlerta('email no es valido', e.target.parentElement) // pasamos referencia despues del mesaje para que valide
            return;
            //----------PARTE DE RETO IMPLEMENTAR CC---------------
        // comprobamos con if si emailCC es diferente a validarEmailCC 
        }


        if (e.target.value.trim() === '') { // .trim() elimina los espacios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement) //${e.target.id} hace que alert diga el id del input que salimos
            email[e.target.name] = '';// reiniciamos el objeto
            comprobarEmail();
            return;// detiene la ejecucion del codigo cuando if es true
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('email no es valido', e.target.parentElement) // pasamos referencia despues del mesaje para que valide
            email[e.target.name] = '';// reniciamos el objecto
            comprobarEmail();
            return;
        }
        

        limpiarAlerta(e.target.parentElement);

        // asignar valores 

        email[e.target.name] = e.target.value.trim().toLowerCase();

        // comprobar el objeto email

        comprobarEmail();


    }


    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
    //------PARTE RETO IMPLEMENTAR EMAILCC----------
    // creamo funcion para validar emailcc
    function validarEmailCC(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        // console.log(email); vemos el array
        if (Object.values(email).includes('')) { // lado derecho del array lo que el usuario ha escrito, includes nos devuelve true minetras un parametro del array este vacio, cuando estan llenos devuelve false
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.emailCC = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});