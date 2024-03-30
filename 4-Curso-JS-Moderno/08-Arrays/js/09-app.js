const carrito =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]



for(let i =0; i < carrito.length; i++ ){
    console.log(`${carrito[i].Nombre} - Precio: ${carrito[i].precio}`); 
}

carrito.forEach(function(p) {
    console.log(`${p.Nombre} - Precio: ${p.precio}`); 
} )

// mejor usar el forEach vas habitual