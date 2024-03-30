const carrito =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]


const nuevoArray = carrito.map( p => `${p.Nombre} - Precio: ${p.precio}` )

carrito.forEach( p => console.log ( `${p.Nombre} - Precio: ${p.precio} ` ));


console.log(nuevoArray);