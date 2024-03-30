//.filter permite traer productos aun que sean repetidos nos los trae todos

const carrito4 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado3;

resultado3 = carrito4.filter( producto => producto.precio > 400);
resultado3 = carrito4.filter ( producto => producto.precio < 600);
resultado3 = carrito4.filter (producto => producto.nombre !== 'Audifonos')
resultado3 = carrito4.filter (producto => producto.nombre === 'Audifonos')

console.log(resultado3);