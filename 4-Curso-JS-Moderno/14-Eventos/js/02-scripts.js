// EVENTS con Mouse

const nav = document.querySelector('.navegacion');

// REGISTRAR UN EVENTO

// Evento Click ( actua cuando clickeas algo)
nav.addEventListener('click', () =>{
    console.log('Click en nav');
})

// Evento mousedown (similar a click)
nav.addEventListener('mousedown', () =>{
    console.log('Click en nav');
})

// Evento mouseup ( cuando doy click pero suelto el mouse)
nav.addEventListener('mouseup', () =>{
    console.log('inClick & outClick en nav');
})

// Evento mouseenter ( actua cuando te pones encima del componente)
nav.addEventListener('mouseenter', () =>{
    console.log('Estas entrando encima de nav');

    nav.style.backgroundColor = 'white'
})

// Evento mouseout ( sales de encima del componente)
nav.addEventListener('mouseout', () =>{
    console.log('Estas saliendo de encima de nav');

    nav.style.backgroundColor = 'transparent'
})

// Evento dblclick ( cuando habres archivo con doble click)
nav.addEventListener('dblclick', () =>{
    console.log('Doble click en nav');
})
