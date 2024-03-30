//.reduce toma una gran cantidad de datos, los une y nos da el resultado

const carrito3 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// sumar el total del carrito3

// con forEach

let total = 0;
carrito3.forEach(producto => total += producto.precio);

console.log(total);

// con reduce
let resultado2 = carrito3.reduce( (total, producto) => total + producto.precio,0);// el 0 es donde queremos que empiece
console.log(resultado2);
