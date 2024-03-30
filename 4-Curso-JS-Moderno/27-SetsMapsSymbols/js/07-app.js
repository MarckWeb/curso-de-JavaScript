
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

// Generador siempre al inicio *

function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilziar para iterar...
    yield 1;
    yield 'Nombre';
    yield 3 +3;
    yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador1 = crearGenerador();

console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);
console.log(iterador1.next().value);


// Crear el generador
function *nuevoGenerador(carrito7) {
    for( let i = 0; i < carrito7.length; i++) {
        yield carrito7[i];
    }
}
// carrito
const carrito7 = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
let iterador2 = nuevoGenerador(carrito7);

console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );