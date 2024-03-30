const carrito =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]





 const nuevoArray = carrito.forEach(function(p) {
    return (`${p.Nombre} - Precio: ${p.precio}`); 
} )

const nuevoArray2 = carrito.map(function(p) {
    return(`${p.Nombre} - Precio: ${p.precio}`); 
} )


console.log(nuevoArray);
console.log(nuevoArray2);
// Map crea un array nuevo y foreach no!!!!!! pregunat de entrevista


