// .find busca en el array lo que quieres y crea un nuevo array 
// .find devuelve el 1r elemento que cumpla la condicion

const carrito5 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con un forEach
let resultado5 = '';
carrito5.forEach((producto, index)=> {
    if(producto.nombre === 'Tablet'){
        resultado5 = carrito5 [index]
    }
});
console.log(resultado5);

// con un .find 

const resultado5b = carrito.find ( producto => producto.nombre === 'Tablet');
console.log(resultado5b);