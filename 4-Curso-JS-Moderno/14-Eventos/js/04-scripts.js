// Eventos en formulario

const form = document.querySelector('#formulario');

// EVENTO SUBMIT 

// con funcion anonima
form.addEventListener('submit', (e) =>{
    e.preventDefault();// prevenimos la accion que este evento realizaria por default (entrar, ir, enviar....)
                        // evita que realice lo que el evento hace por defecto al ejecutarlo

    console.log(e);//(nos trae todo lo que tenemos en este evento)
    console.log(e.target.method);// metodo que usamos 
    console.log(e.target.action);// accion que realiza
})

// con funcion declarada
form.addEventListener('submit', validarform);

function validarform (e){
    e.preventDefault();// prevenimos la accion que este evento realizaria por default (entrar, ir, enviar....)


    console.log(e);//(nos trae todo lo que tenemos en este evento)
    console.log(e.target.method);// metodo que usamos 
    console.log(e.target.action);// la accion que realizaria (///buscador)
}