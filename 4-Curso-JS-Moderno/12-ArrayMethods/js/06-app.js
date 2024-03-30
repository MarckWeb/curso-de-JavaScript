// .every todos los elementos deven cumplir la condicion

const carrito6 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado6 = carrito6.every (producto => producto.precio < 1000);
console.log(resultado6);

const resulta6 = carrito6.every (producto => producto.precio < 500);
console.log(resulta6);

const result = carrito6.some (producto => producto.precio < 500);
console.log(result);