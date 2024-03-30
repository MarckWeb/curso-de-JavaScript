// iterador for recorre arrays hasta que no encuentra elementos
// for itera sobre los valores de un array

const pendientes1 = ['Tarea','Comer','Proyecto', 'Estudiar JavaScript'];


const carrito4 =[
    {Nombre: "Monitor 30 pul", precio: 500},
    {Nombre: "Tablet", precio: 400},
    {Nombre: "Nevera", precio: 550},
    {Nombre: "Televisor", precio: 700},
    {Nombre: "Celular", precio: 900},
]

for( let pendiente1 of pendientes1 ) { // agregamos pendiente1 a cada nombre de nuestro array recorriendo nuestro array
    console.log(pendiente1);
}

for (let producto of carrito4 ) {
    console.log(producto.Nombre, producto.precio);
}