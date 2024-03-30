// EVENTOS que se ejecutan cuando usamos teclado en un form



const busqueda = document.querySelector('.busqueda');
// Evento keydown (cuando pulsas una tecla)
busqueda.addEventListener('keydown', ()=>{
    console.log('escribiendo..');
})

// Evento keyup (cuando soltamos la tecla)
busqueda.addEventListener('keyup', ()=>{
    console.log('dejando de escribir..');
})

// Evento blur ( cuando sales del imput/form i pulsas  )
busqueda.addEventListener('blur', ()=>{
    console.log('has salido del form y pulsado fuera');
})

// Evento copy  ( cuando copias el texto del form)
busqueda.addEventListener('copy', ()=>{
    console.log('copiaste el texto');
})

// Evento paste ( cuando paste el texto en el form)
busqueda.addEventListener('paste', ()=>{
    console.log('pegaste el texto');
})

// Evento cut ( cuando cortas el texto en form)
busqueda.addEventListener('cut', ()=>{
    console.log('cortaste el texto');
})

// EVENTO IMPUT ( cuando realizas cualquier evento anterior visto menos el blur)
// dentro de (e) le pasamos el evento que esta sucediendo
busqueda.addEventListener('input', (e)=>{
    console.log(e);// nos dice informacion de lo que escribimos
})
busqueda.addEventListener('input', (e)=>{
    console.log(e.type); // nos dice sobre que elemento escribo
})
busqueda.addEventListener('input', (e)=>{
    console.log(e.target);// que imput en especifico estamos escribiendo
})
busqueda.addEventListener('input', (e)=>{
    console.log(e.target.value); // para saber que estamos escribiendo
})